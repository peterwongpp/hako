import type {NextApiRequest} from 'next';

type NextApiRequestWithParsedBody = NextApiRequest & {
  parsedBody: {},
};

export default NextApiRequestWithParsedBody;
