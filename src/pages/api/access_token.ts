import type { NextApiRequest, NextApiResponse } from 'next';

import { getAccessToken } from '@/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Run the middleware
    const access = await getAccessToken();
    res.json(access.error ? { access_token: '' } : { access_token: access.access_token });
}
