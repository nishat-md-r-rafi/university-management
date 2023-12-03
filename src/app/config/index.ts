import dotenv from 'dotenv';
import path from 'path';

// config the dotenv
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  pass_key: process.env.PASS_SECRET,
};
