import { NextFunction, Request, Response } from "express";
import { DeleteTodoService } from "../services/DeleteTodoService";

export class DeleteTodoController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    try {
      const deleteTodoService = new DeleteTodoService();

      await deleteTodoService.handler(id);
      return res.status(200).json({
        success: true,
        message: "Tarefa deletada com sucesso",
      });
    } catch (err) {
      next(err);
    }
  }
}
