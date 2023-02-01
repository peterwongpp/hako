import {
  Container, Row, Col, Stack,
  Form,
  ListGroup,
} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

type ChordType = {
  id: string,
  singerNames: string[],
  songName: string,
  path: string,
};

export default function Home() {
  const [allChords, setAllChords]: [{[key: string]: [value: ChordType]}, Function] = useState({});
  const [chords, setChords]: [{[key: string]: [value: ChordType]}, Function] = useState({});

  useEffect(() => {
    fetch('/api/chords')
    .then(res => res.json())
    .then((data) => {
      const chords = data.body;
      const groupedBySingerNames: { [key: string]: [value: ChordType] } = {};
      chords.forEach((chord: ChordType) => {
        const singerNames = chord.singerNames.join(', ');
        if (typeof groupedBySingerNames[singerNames] === 'undefined') {
          groupedBySingerNames[singerNames] = [chord];
        } else {
          groupedBySingerNames[singerNames].push(chord);
        }
      });
      return groupedBySingerNames;
    })
    .then(chords => {
      setAllChords(chords);
      setChords(chords);
    })
    .catch((e) => console.log(e));
  }, []);

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      setChords(allChords);
    } else {
      const re = new RegExp(searchValue, 'ig');
      const newChords: {[key: string]: [value?: ChordType]} = {};
      Object.keys(allChords).forEach((singerNames) => {
        allChords[singerNames].forEach((chord) => {
          if (
            chord.songName.match(re)
            || chord.singerNames.some((singerName) => singerName.match(re))
          ) {
            if (typeof newChords[singerNames] === 'undefined') { newChords[singerNames] = []; }
            newChords[singerNames].push(chord);
          }
        });
      });
      setChords(newChords);
    }
  };

  const onChordClicked = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const theFrame: HTMLIFrameElement = document.getElementById('theFrame') as HTMLIFrameElement;
    theFrame.src = (e.target as HTMLAnchorElement).getAttribute('href') as string;
  };

  return (
    <Container fluid>
      <Row className='justify-content-md-center'>
        <Col xs={3} md={4}>
          <Stack gap={3}>
            <Row>
              <Col xs={12} md={2} className='d-flex justify-content-center align-self-center'>Hako</Col>
              <Col xs={12} md={10}>
                <Form>
                  <Form.Control id='searchInput' placeholder='Filter by song name / singers...' onChange={onSearchInputChange}/>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <ListGroup variant='flush'>
                  {Object.keys(chords).sort().map((singerNames) => {
                    return (
                      <ListGroup.Item key={singerNames}>
                        <h6>{singerNames}</h6>
                        <ul className='list-unstyled'>
                          {chords[singerNames].map((chord) => {
                            return (
                              <li id={chord.id} key={chord.id}>
                                <a href={chord.path} target='_blank' rel='noreferrer' onClick={onChordClicked}>{chord.songName}</a>
                              </li>
                            )
                          })}
                        </ul>
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              </Col>
            </Row>
          </Stack>
        </Col>
        <Col xs={9} md={8}>
          <iframe id='theFrame' width='100%' height='100%'></iframe>
        </Col>
      </Row>
    </Container>
  )
};
