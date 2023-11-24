import { Request, Response, NextFunction } from "express";
import { CreateTodoservice } from "../services/CreateTodoService";

export class CreateTodoController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { title, description } = req.body;
    try {
      const todoService = new CreateTodoservice();

      await todoService.handler({ title, description });
      return res.status(201).json({
        success: true,
        message: "Tarefa criada com sucesso!",
      });
    } catch (err) {
      next(err);
    }
  }
}
