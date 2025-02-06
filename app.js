import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import route from "./routes/userRoutes.js";

const app = express();

// Middleware to parse request bodies as JSON
app.use(express.json());

// Middleware to parse form data submitted via POST
app.use(express.urlencoded({ extended: true }));

// Middleware to support PUT and DELETE methods via `_method`
app.use(methodOverride('_method'));

// Use routes
app.use(route);

// Set the views directory and view engine
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

export default app;
