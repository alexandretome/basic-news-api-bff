export interface IDatabaseConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  name: string;
}

export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
    name: process.env.DATABASE_NAME,
  },
});
