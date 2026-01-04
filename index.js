const express = require("express");
const cors = require("cors");
const sql = require("mssql");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: { encrypt: true, trustServerCertificate: false },
};

async function queryDB(query) {
  const pool = await sql.connect(dbConfig);
  const result = await pool.request().query(query);
  return result.recordset;
}

// Ruta de prueba (para saber que el servidor está vivo)
app.get("/api/status", (req, res) => {
  res.json({ ok: true, msg: "Servidor funcionando" });
});

// Perfil (cuando ya tengas la tabla Perfil en Azure SQL)
app.get("/api/perfil", async (req, res) => {
  try {
    const data = await queryDB("SELECT TOP 1 * FROM Perfil ORDER BY Id DESC");
    res.json(data[0] || null);
  } catch (err) {
    res.status(500).json({ error: "Error consultando Perfil", details: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servidor listo en puerto", port));
