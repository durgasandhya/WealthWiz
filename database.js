import pg from "pg";


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "database_name",
  password: "admin", 
  port: 5432,
});

db.connect();

export default db;