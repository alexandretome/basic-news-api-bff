export interface IServiceInfoConfig {
  port: number;
  apiDoc: string;
  title: string;
  description: string;
  tag: string;
  version: string;
}
export default () => ({
  service: {
    port: parseInt(process.env.SERVICE_PORT, 10) || 3000,
    apiDoc: process.env.API_DOC_ENDPOINT,
    title: process.env.SERVICE_TITLE,
    description: process.env.SERVICE_DESC,
    tag: process.env.SERVICE_TAG,
    version: process.env.SERVICE_VERSION,
  },
});
