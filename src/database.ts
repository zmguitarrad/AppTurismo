import { Pool } from 'pg';

export const pool = new Pool({
    user:'admin',
    host: '3.145.194.87',
    password: 'root',
    database: 'turismo',
    port: 5432
});