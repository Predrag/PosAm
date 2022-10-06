import express, { Express, Request, Response } from "express";
import employersRouter from "./routers/posam_router";

const app: Express = express();
const port = 2222;

app.use(express.json());
app.use("/", employersRouter);
app.get("*", function (req: Request, res: Response) {
  res.json({ error: "Non Existing endpoint" });
});
app.post("*", function (req: Request, res: Response) {
  res.json({ error: "Non Existing endpoint" });
});
app.delete("*", function (req: Request, res: Response) {
  res.json({ error: "Non Existing endpoint" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
