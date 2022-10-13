import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).send({ error: "Bad request" });
  }
  if (
    req.body.email == "super-admin@test.com" &&
    req.body.password === "superadmin"
  ) {
    res.status(200).json({
      id: 1,
      email: "super-admin@test.com",
      name: "John Wick",
      role: "superadmin",
    });
  }
  if (req.body.email == "admin@test.com" && req.body.password === "admin") {
    res.status(200).json({
      id: 1,
      email: "admin@test.com",
      name: "John Wick",
      role: "admin",
    });
  }

  res.status(401).send({ error: "Bad credentials" });
}
