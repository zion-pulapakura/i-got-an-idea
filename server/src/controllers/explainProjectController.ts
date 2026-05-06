import { Request, Response } from "express";
import client from "../config/openai";

const explainProjectController = async (req: Request, res: Response) => {
  try {
    const { projectTitle, openAiId } = req.body as {
      projectTitle: string;
      openAiId: string;
    };

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      previous_response_id: openAiId,
      instructions:
        "Given the selected generated project, provide a detailed explanation of what the project does and how exactly each technology is used in it. Make the entire explanation flow very well, so as you are explaining each feature or function of the project, you mention the tech and how it's used in that feature.. Return plain text. Keep it 3 to 5 sentences long.",
      input: JSON.stringify({ projectTitle }),
    });

    res.status(200).json({
      explanation: response.output_text ?? "",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default explainProjectController;
