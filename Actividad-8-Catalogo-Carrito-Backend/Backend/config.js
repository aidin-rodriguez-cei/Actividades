import dotenv from 'dotenv';

// creación de variable __dirname para usar carpeta public con vercel
import path from 'path';
export const __dirname = path.resolve();

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const DOMAIN = process.env.DOMAIN || "http://localhost";

export const FULL_DOMAIN = `${DOMAIN}:${PORT}`;

export const JWT_SECRET = process.env.JWT_SECRET || 'd2fbc8bb65399029bc96cb8ec46191b3';