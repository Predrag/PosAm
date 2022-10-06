import { Request } from "express";
import employersDB from "./employersDB";

export default async function insertEmployerToDB(req: Request) {
  Promise.resolve(req).then((result: Request) => {
    employersDB().employees.push(result.body);
  });
}
