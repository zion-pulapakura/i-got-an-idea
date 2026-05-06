import client from "../config/openai";

export type GeneratedProject = {
  title: string;
  summary: string;
  includedTech: string[];
  normalTechUsed: string[];
};

export async function generateProjectsFromBag(
  tips: string,
  includedTech: string[],
  normalTech: string[],
): Promise<GeneratedProject[]> {
  const prompt = `
You are a senior software architect helping brainstorm project ideas.

Create exactly 3 project ideas.

Rules:
1) Every project MUST include all of these required technologies:
${JSON.stringify(includedTech)}
2) You may choose additional technologies only from this allowed pool:
${JSON.stringify(normalTech)}
3) Try to make the chosen additional technologies as unique as possible across the 3 projects.
4) Keep each project practical and coherent.
5) Respect these user tips:
${tips || "No extra tips provided."}

Return strict JSON only (no markdown) with this shape:
{
  "projects": [
    {
      "title": "string",
      "description": "string",
      "includedTech": ["string"],
      "normalTechUsed": ["string"]
    }
  ]
}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.8,
    messages: [
      {
        role: "system",
        content:
          "You are a senior software architect helping brainstorm project ideas. You are given a list of technologies that the user is interested in and a list of technologies that the user is not interested in. You are to generate 3 project ideas that include all of the included technologies and select supporting technologies from the normal technologies. You are to return a JSON object with the project ideas.",
      },
      { role: "user", content: prompt },
    ],
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  const parsed = JSON.parse(content) as { projects?: GeneratedProject[] };
  if (!Array.isArray(parsed.projects) || parsed.projects.length !== 3) {
    throw new Error("OpenAI response did not contain exactly 3 projects.");
  }

  return parsed.projects;
}
