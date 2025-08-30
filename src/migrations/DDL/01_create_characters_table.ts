import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

if (!DB_USER || !DB_PASS || !DB_HOST) {
  throw new Error("Missing required environment variables: DB_USER, DB_PASS, or DB_HOST");
}

const sequelize = new Sequelize("", DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
});

async function migrate() {
  console.log(`crea la base de datos ==> ${DB_NAME}`);
  await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);

  console.log(`crea la tabla ==>`);
  await sequelize.query(`USE \`${DB_NAME}\`;`);
  await sequelize.query(`
    CREATE TABLE IF NOT EXISTS characters (
      id INT AUTO_INCREMENT PRIMARY KEY,
      rmId INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      status VARCHAR(50),
      species VARCHAR(100),
      type VARCHAR(100),
      gender VARCHAR(50),
      origin VARCHAR(100),
      image VARCHAR(255),
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `);

  console.log("===> Tabla characters creada o ya existe <===");
  await sequelize.close();
}

migrate().catch((err) => {
  console.error("Error en la migración:", err);
  process.exit(1);
});
