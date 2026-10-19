
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic backend test
app.get("/", (req, res) => {
  res.json({
    message: "FreshMart backend is running!",
  });
});

// API health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "FreshMart API is working",
  });
});

// Database connection test
app.get("/api/db-test", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT DATABASE() AS databaseName"
    );

    res.json({
      success: true,
      message: "MySQL connection successful!",
      database: rows[0].databaseName,
    });
  } catch (error) {
    console.error("Database test failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Database connection failed. Check server logs.",
    });
  }
});

// Start the server only after verifying the database
async function startServer() {
  try {
    await pool.query("SELECT 1");

    console.log("MySQL connected successfully!");
    console.log(`Database: ${process.env.DB_NAME}`);

    app.listen(PORT, () => {
      console.log(
        `FreshMart server running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Could not connect to MySQL.");
    console.error("Check that MySQL is running and .env is correct.");
    console.error("Details:", error.message);
    process.exit(1);
  }
}

startServer();
