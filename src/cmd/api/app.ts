import "express-async-errors";
import express from "express";

import { handlingErrors } from "../../middlewares/handlingErrors";
import { routes } from "../../routes";

const app = express();

app.use(express.json());
app.use(routes);
app.use(handlingErrors);

export { app };
