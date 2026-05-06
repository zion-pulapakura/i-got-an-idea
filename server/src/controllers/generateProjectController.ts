import { Request, Response } from "express";
import { generateProjectsFromBag } from "../utils/generateProjectsFromBag";

const generateProjectController = async (req: Request, res: Response) => {
  try {
    const { bag, tips } = req.body as {
      bag: { incl: string[]; normal: string[] };
      tips: string;
    };

    const projects = await generateProjectsFromBag(tips, bag.incl, bag.normal);

    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default generateProjectController;
