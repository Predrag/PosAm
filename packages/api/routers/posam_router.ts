import express, { Request, Response } from "express";
import employersDB from "../data/employersDB";
import insertEmployerToDB from "../data/post-employer";

const employersRouter = express.Router();
employersRouter.get("/", function (req: Request, res: Response) {
  res.json(employersDB());
});

employersRouter.get("/employer/:id", function (req, res, next) {
  for (let employer in employersDB().employees) {
    if (employersDB().employees[employer].id === parseInt(req.params.id)) {
      return res.json(employersDB().employees[employer]);
    }
  }
  return res.json({
    error: `Employee with ${req.params.id} id does not exists`,
  });
});
employersRouter.post("/employer", async function (req, res) {
  await insertEmployerToDB(req);
  res.json(req.body);
});
employersRouter.delete("/employer/:id", async function (req, res) {
  let count = 0;
  for (let employer in employersDB().employees) {
    if (employersDB().employees[employer].id === parseInt(req.params.id)) {
      employersDB().employees.splice(count, 1);
      return res.json({
        error: `Employee with ${req.params.id} id was deleted`,
      });
    }
    count += 1;
  }
  return res.json({
    error: `Employee with ${req.params.id} id does not exists`,
  });
});

export default employersRouter;
