import type { MediaItem } from "../api/fetchLatestNews";
import { formatPublishedDate } from "./format-published-date";

type Props = {
  item: MediaItem;
};

export function StoryCard({ item }: Props) {
  return (
    <li className="rounded-lg border border-brand-black/20 bg-white p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-dark/70">{item.source}</p>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-1 block text-base font-semibold hover:underline"
      >
        {item.title}
      </a>
      <p className="mt-1 text-xs text-brand-dark/70">
        {formatPublishedDate(item.publishedAt)}
        {item.author ? ` - ${item.author}` : ""}
      </p>
    </li>
  );
}
