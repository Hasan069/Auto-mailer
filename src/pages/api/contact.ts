import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
  }

  console.log(req.body);
  res.status(400).json({ message: "Bad Request" });
};
export default handler;
