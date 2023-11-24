import { NextFunction, Request, Response } from "express";
import { UpdateTodoService } from "../services/UpdateTodoService";

export class UpdateTodoController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    try {
      const updateTodoService = new UpdateTodoService();

      await updateTodoService.handler(id, title, description);
      return res.status(200).json({
        success: true,
        message: "Tarefa atualizada com sucesso",
      });
    } catch (err) {
      next(err);
    }
  }
}
