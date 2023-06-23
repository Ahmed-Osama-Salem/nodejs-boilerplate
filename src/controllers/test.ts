import { Request, Response } from "express";

export const handleTest = (req: Request, res: Response) => {
  res.send("Hello, world!");
};
