import client from "../config/openai";

type GeneratedProject = {
  title: string;
  description: string;
  techUsed: string[];
};

export async function generateProjectsFromBag(
  tips: string,
  includedTech: string[],
  normalTech: string[],
) {
  const instruction = `You are a senior software architect helping brainstorm project ideas.

Create exactly 3 project ideas.

Rules:
1) Every project MUST include all of the required technologies provided in the input.
2) You may choose additional technologies only from the allowed pool provided in the input.
3) Try to make the chosen additional technologies as unique as possible across the 3 projects.
4) Keep each project practical.
5) The description should consist of 1 sentence on what exactly the project does and 1 sentence on roughly how it's done, without explicitly mentioning the technologies used. (Doesn't have to explicitly be 2 sentences, but should have both requirements.)
6) Respect the user tips provided in the input.
7) Make sure you include all required technologies in each returned project's techUsed array. Supporting technologies must be chosen from the allowed pool.

Return strict JSON only (no markdown) with this shape:
{
  "projects": [
    {
      "title": "string",
      "description": "string",
      "techUsed": ["string"]
    }
  ]
}`;

  const response = await client.responses.create({
    model: "gpt-4o-mini",
    instructions: instruction,
    input: JSON.stringify({
      tips: tips || "",
      requiredTech: includedTech,
      allowedSupportingTech: normalTech,
    }),
  });

  const content = response.output_text;
  if (!content) throw new Error("OpenAI returned an empty response.");

  const parsed = JSON.parse(content);
  if (!Array.isArray(parsed.projects) || parsed.projects.length !== 3) {
    throw new Error("OpenAI response did not contain exactly 3 projects.");
  }

  return { projects: parsed.projects as GeneratedProject[], id: response.id };
}
