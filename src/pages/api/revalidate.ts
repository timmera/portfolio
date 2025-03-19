import { NextApiRequest, NextApiResponse } from 'next';

const SECRET = process.env.SANITY_WEBHOOK_SECRET; // Get the secret from environment variables

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Retrieve the X-Sanity-Secret header (case insensitive)
    const receivedSecret =
      req.headers['x-sanity-secret'] || req.headers['X-Sanity-Secret'];

    // Check if the secret header is missing
    if (!receivedSecret) {
      return res.status(400).json({ error: 'Missing secret header' });
    }

    if (receivedSecret !== SECRET) {
      return res.status(403).json({ error: 'Forbidden: Invalid secret' });
    }

    try {
      const { _id, _type, action } = req.body;

      if (
        (_type === 'experience' || _type === 'project') &&
        (action === 'create' || action === 'update')
      ) {
        // Trigger revalidation for specific pages
        await res.revalidate('/'); // Revalidate homepage
        await res.revalidate('/projects'); // Or another dynamic path
        await res.revalidate('/experience'); // Or another dynamic
        return res.json({ revalidated: true });
      }
    } catch (error) {
      console.error('Error during revalidation:', error);
      return res.status(500).json({ error: 'Failed to revalidate' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
