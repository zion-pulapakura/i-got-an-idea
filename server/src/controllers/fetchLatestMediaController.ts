import { Request, Response } from "express";
import { fetchLatestMedia } from "../utils/media/fetchLatestMedia";
import { MEDIA_SOURCES, MediaSource } from "../utils/media/types";

type FetchLatestMediaBody = {
  sources?: string[];
};

const isMediaSource = (value: string): value is MediaSource =>
  MEDIA_SOURCES.includes(value as MediaSource);

const fetchLatestMediaController = async (req: Request, res: Response) => {
  try {
    const { sources } = req.body as FetchLatestMediaBody;

    if (!Array.isArray(sources) || sources.length === 0) {
      res.status(400).json({
        error: "Invalid payload. sources must be a non-empty array.",
      });
      return;
    }
    if (sources.length > MEDIA_SOURCES.length) {
      res.status(400).json({
        error: `Too many sources requested. Max is ${MEDIA_SOURCES.length}.`,
      });
      return;
    }

    const unknownSources = sources.filter((source) => !isMediaSource(source));
    if (unknownSources.length > 0) {
      res.status(400).json({
        error: `Unsupported sources: ${unknownSources.join(", ")}`,
      });
      return;
    }

    const validSources = sources.filter(isMediaSource);
    const response = await fetchLatestMedia(validSources);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default fetchLatestMediaController;
