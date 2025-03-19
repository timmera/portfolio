import { NextApiRequest, NextApiResponse } from 'next';

const SECRET = process.env.SANITY_WEBHOOK_SECRET; // Get the secret from environment variables

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const receivedSecret = req.headers['X-Sanity-Secret'];

    if (receivedSecret !== SECRET) {
      return res.status(403).json({ error: 'Forbidden: Invalid secret' });
    }

    try {
      // Trigger revalidation for specific pages
      await res.revalidate('/'); // Revalidate homepage
      await res.revalidate('/projects'); // Or another dynamic path
      return res.json({ revalidated: true });
    } catch (error) {
      console.error('Error during revalidation:', error);
      return res.status(500).json({ error: 'Failed to revalidate' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
