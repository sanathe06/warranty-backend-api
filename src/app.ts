import express from "express";
import { json } from "body-parser";
import 'express-async-errors';
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({ origin: '*' }));
app.use(json());
app.use(cookieParser());

app.all('*', async () => {
  throw new Error('Route not found');
});


export { app };