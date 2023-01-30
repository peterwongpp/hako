import type { NextApiRequest, NextApiResponse } from 'next';

import ApiResponseType from '@/types/ApiResponseType';
import ChordType from '@/types/ChordType';

import Chord from '@/models/Chord';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseType<ChordType[]>>
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
