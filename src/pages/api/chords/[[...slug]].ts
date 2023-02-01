import type { NextApiRequest, NextApiResponse } from 'next';

import Chord from '@/models/Chord';

import ApiResponseType from '@/types/ApiResponseType';
import ChordType from '@/types/ChordType';
import NextApiRequestWithParsedBody from '@/types/NextApiRequestWithParsedBody';

export default async function handler(
  req: NextApiRequestWithParsedBody,
  res: NextApiResponse<ApiResponseType<any>>,
) {
  const {slug} = req.query;
  const method = req.method;
  req.parsedBody = typeof req.body !== 'undefined' && req.body !== '' ? JSON.parse(req.body) : {};

  console.log(JSON.stringify({
    method: method,
    path: req.url,
    body: req.parsedBody,
  }));

  const handleNotFound = () => {
    res.status(404).json({code: 'Not found'});
  };

  switch (method) {
    case 'GET':
      if (typeof slug === 'undefined') {
        await handleList(req, res);
      } else {
        await handleNotFound();
      }
      break;
    case 'PUT':
      if (typeof slug === 'undefined') {
        await handleNotFound();
      } else {
        await handleUpdate(slug as string[], req, res);
      }
      break;
    default:
      await handleNotFound();
  }
}

async function handleList(
  req: NextApiRequestWithParsedBody,
  res: NextApiResponse<ApiResponseType<ChordType[]>>,
) {
  let chords;

  try {
    chords = await Chord.findAll();
  } catch (error) {
    return res.status(500).json({
      code: '00000000',
      error: {
        message: 'Failed to retrieve chords.',
        extra: error,
      }
    });
  }

  res.status(200).json({
    code: 'success',
    body: chords,
  })
}

async function handleUpdate(
  slug: string[],
  req: NextApiRequestWithParsedBody,
  res: NextApiResponse<ApiResponseType<ChordType>>,
) {
  const chordId = slug[0];
  const data = JSON.parse(req.body);

  const chord = await Chord.update(chordId, data) as ChordType;

  res.status(200).json({
    code: 'success',
    body: chord,
  });
}
