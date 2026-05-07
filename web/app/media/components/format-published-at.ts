export function formatPublishedAt(iso: string) {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) {
    return "Unknown date";
  }
  return parsed.toLocaleString();
}
