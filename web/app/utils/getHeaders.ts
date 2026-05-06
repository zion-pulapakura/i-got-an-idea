const getHeaders = () => {
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", process.env.NEXT_PUBLIC_API_BASE_URL || "");
  headers.append("Access-Control-Allow-Credentials", "true");
  headers.append("Content-Type", "application/json");

  return headers;
};

export default getHeaders;
