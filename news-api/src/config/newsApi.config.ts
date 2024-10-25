export interface INewsAPIConfig {
  url: string;
  apiKeyHeader: string;
  key: string;
}
export default () => ({
  newsApi: {
    url: process.env.NEWS_API_URL,
    apiKeyHeader: process.env.NEWS_API_KEY_HEADER,
    key: process.env.NEWS_API_KEY,
  },
});
