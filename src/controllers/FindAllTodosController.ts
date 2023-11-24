import { Request, Response, NextFunction } from "express";
import { FindAllTodosService } from "../services/FindAllTodosService";

class FindAllTodosController {
  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const findAllTodosService = new FindAllTodosService();

      const result = await findAllTodosService.handler();
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
}

export { FindAllTodosController };
