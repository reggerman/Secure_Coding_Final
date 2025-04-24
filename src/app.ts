// Import Express
import express, {Request, Response} from "express";

import morgan from "morgan";

//import swagger 
import setupSwagger from "../config/swagger"; 

import errorHandler from "./api/v1/middleware/errorHandler";
import loanRoutes from "./api/v1/routes/loanRoutes";
import adminRoutes from  "./api/v1/routes/adminRoutes";
import userRoutes from  "./api/v1/routes/userRoutes";

// Create Express Application
const app = express();

// Use Morgan for HTTP request logging
app.use(morgan("combined"));

app.use(express.json());

//setup swagger
setupSwagger(app);

//import router to access it's routes

// "health endpoint"
/** 
  * @openapi
  * /api/health:
  *  get:
  *      summary: Get the status of the application
  *      tags: [Health]
  *      responses:
  *          200:
  *              description: JSON response with API information
*/
app.get("/health", (req: Request, res: Response) => {
    res.json({
      status: "OK",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    });
  });

  
// "Default endpoint"
/** 
  * @openapi
  * /:
  *  get:
  *      summary: Gives basic information 
  *      tags: [Home]
  *      responses:
  *          200:
  *              description: JSON response with Name, Assignment
*/
app.get("/", (req: Request, res: Response) => {
    res.json({
      Name: "Rylan Eggerman",
      Assignment: "Assignment 4",
      TimeSpent: "Too Long",
      version: "1.0.0"
    });
  });

//API routes for loans
app.use("/api/v1/", loanRoutes);

app.use("/api/v1/", adminRoutes);

app.use("/api/v1/", userRoutes);

app.use(function(req: Request, res: Response) {
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }
});

app.use(errorHandler);

// export app and server for testing
export default app;