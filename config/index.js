import dotenv from "dotenv";
dotenv.config();

export const { PORT, DEBUG_MOD, DB_URL } = process.env;
