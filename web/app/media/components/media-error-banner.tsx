type MediaErrorBannerProps = {
  message: string | null;
};

export function MediaErrorBanner({ message }: MediaErrorBannerProps) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-5 rounded-lg border border-red-300 bg-red-100 px-3 py-2 text-sm text-red-800">
      {message}
    </p>
  );
}
