"use client";

type Props = {
  size?: number;
  className?: string;
};

export function Loader({ size = 18, className = "" }: Props) {
  return (
    <span
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-2 border-current border-r-transparent ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
