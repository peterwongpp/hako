import { promises as fs } from 'fs';
import Head from 'next/head';
import Link from 'next/head';
import path from 'path';

function Home({ scores }) {
  return (
    <div className='grid-y medium-grid-frame'>
      <div className='cell medium-auto medium-cell-block-container'>
        <div className='grid-x height100'>

          <div className='grid-y'>
            <div className='cell auto cell-block'>
              <a href='/cms'>CMS</a>
              <ul id='main-menu' className='vertical menu icons icon-left'>
              {Object.keys(scores).sort().map((singerName) => (
                <li className='menu-text' key={singerName}>
                  {singerName}
                  <ul id='singer-menu' className='nested vertical menu icons icon-left'>
                    {Object.keys(scores[singerName]).sort().map((name) => (
                      <li key={`${scores[singerName][name].songName}-${scores[singerName][name].capo}-${scores[singerName][name].extra}`}>
                        <a target='display' href={scores[singerName][name].link}>
                          <i className={scores[singerName][name].iconClassName}></i>
                          <span>
                            [Capo {scores[singerName][name].capo}]
                            [Key {scores[singerName][name].key}]
                            <br/>
                            {scores[singerName][name].songName}
                            {scores[singerName][name].extra &&
                              <>
                                <br/>
                                {scores[singerName][name].extra}
                              </>
                            }
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              </ul>
            </div>
            <div className='cell medium-3'>
              <div className='responsive-embed'>
                <iframe name='youtube-frame' allowFullScreen frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
              </div>
            </div>
          </div>
          <div className='cell medium-9 medium-cell-block-y'>
            <iframe name='display' width='100%' height='100%' frameBorder='0'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

function parseFileName (fileName) {
  const matchResult = fileName.match(/^([^\-]+)-([^\-]+)-Capo(-?[0-9]+)-Key([^\-]+)-?([^\-]+)?$/);
  if (!matchResult) { return { success: false }; }

  return {
    success: true,
    songName: matchResult[1],
    singerName: matchResult[2],
    capo: matchResult[3],
    key: matchResult[4].replace(/To/g, ' => ').replace(/S/g, '#'),
    extra: typeof matchResult[5] !== `undefined` ? matchResult[5] : null,
  };
}

async function getSelfCreatedScores(dir) {
  const fileNames = await fs.readdir(dir);

  const scores = {}; // key is singer, value is array of objects
  for (let i = 0, total = fileNames.length; i < total; i++) {
    const fileName = fileNames[i];

    const match = fileName.match(/^(.+)\.([^.]+)$/);
    if (match === null) { continue; }
    const name = match[1];
    const ext = match[2];
    if (ext !== 'pdf' && ext !== 'pages' && ext !== 'doc' && ext !== 'docx') { continue; }

    const {success, singerName, songName, capo, key, extra} = parseFileName(match[1]);
    if (!success) { continue; }

    let singerScores = scores[singerName];
    if (typeof singerScores === 'undefined') {
      singerScores = {};
      scores[singerName] = singerScores;
    }

    let score = singerScores[name];
    if (typeof score === 'undefined') {
      const iconClassName = ext === 'pdf'
        ? 'fi-page-pdf'
        : ext === 'pages' || ext === 'doc' || ext === 'docx'
        ? 'fi-page'
        : 'fi-link';
      score = {
        singerName, songName, capo, key, extra,
        link: encodeURI(`/scores/${fileName}`).split('#').join('%23'),
        iconClassName: iconClassName,
      };
      singerScores[name] = score;
    }
    if (ext === 'pdf') {
      score.link = encodeURI(`/scores/${fileName}`).split('#').join('%23');
      score.iconClassName = 'fi-page-pdf';
    }
  }
  return scores;
}

export async function getStaticProps() {
  const scoresDir = path.join(process.cwd(), 'public', 'scores');
  // const scores = await getSelfCreatedScores(scoresDir);
  const scores = {
    singer1: {
      song1Capo1: {
        singerName: 'Singer 1',
        songName: 'Song 1',
        capo: 1,
        key: 'C => C#',
        extra: null,
        link: '/somewhere',
        iconClassName: 'fi-page-pdf',
      },
    },
  };

  return {
    props: {
      scores,
    }
  };
}

export default Home;
