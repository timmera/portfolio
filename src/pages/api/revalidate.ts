import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
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
