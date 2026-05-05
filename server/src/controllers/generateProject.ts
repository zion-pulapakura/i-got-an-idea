import { Request, Response } from "express";

const generateProjectController = async (req: Request, res: Response) => {
  try {
    const { bag } = req.body;

    // const project = await generateProject(bag);

    // res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate project" });
  }
}

export default generateProjectController;