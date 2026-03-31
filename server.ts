import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "P4P Advertising API is running" });
  });

  // Mock registration endpoint
  app.post("/api/register", express.json(), (req, res) => {
    const { phone, password, inviteCode } = req.body;
    console.log("Registration attempt:", { phone, inviteCode });
    
    // Simulate a successful registration
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: "Pendaftaran berhasil! Akun kerja Anda sedang disiapkan.",
        data: {
          userId: "AK-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
          status: "pending_verification"
        }
      });
    }, 1500);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
