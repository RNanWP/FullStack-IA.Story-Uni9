import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: './config/schema.tsx',
  dbCredentials: {
    url: 'postgresql://StoryTales%20RN_owner:FAau5lJDVmv1@ep-crimson-bar-a5regrho.us-east-2.aws.neon.tech/StoryTales%20RN?sslmode=require'
  },
  verbose: true,
  strict: true,
})
