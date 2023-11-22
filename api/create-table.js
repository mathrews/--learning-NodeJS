import { sql } from "./db.js";

sql`
    CREATE TABLE videos (
        title TEXT,
        description TEXT,
        duration INT
    );
`.then(() => {
  return console.log("Created");
});
