import { NextFunction, Request, Response } from "express";
import { FindOneService } from "../services/FindOneService";

export class FindOneTodoController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    try {
      const findOneService = new FindOneService();

      const result = await findOneService.handler(id);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}
