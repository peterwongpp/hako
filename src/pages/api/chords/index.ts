import type { NextApiRequest, NextApiResponse } from 'next';

type ErrorType = {
  message: string,
  extra?: any,
};

type ApiResponse<BodyType> = {
  code: string,
  error?: ErrorType,
  body?: BodyType,
};

type Chord = {
  singers: string[],
  songName: string,
  path: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Chord[]>>
) {
  // TODO: query chords from firestore.
  const chords = [{
    singers: ["abc"],
    songName: "ooo",
    path: "abc"
  }];

  res.status(200).json({
    code: 'success',
    body: chords,
  })
}
