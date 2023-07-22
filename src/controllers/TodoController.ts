import { Request, Response, NextFunction } from "express";
import { client } from "../database/db";

export class TodoController {

  async post(req: Request, res: Response, next: NextFunction) {

    const { title, description } = req.body;

    try {
        if(!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Ambos os campos são obrigatórios.'
            })
        };

        await client.query('INSERT INTO todos (title, description) VALUES ($1, $2);', [title, description]);

        return res.status(201).json({
            success: true,
            message: 'Tarefa criada com sucesso!'
        })
    
    } catch(err) {
        next(err);
    };
  };

  async getAll(req: Request, res: Response, next: NextFunction) {
  
    try {
        const { rows } = await client.query('SELECT * FROM todos;');

        if(!rows.length) {
            return res.status(200).json({
                message: 'Nenhuma tarefa cadastrada.'
            });
        };

        return res.status(200).json(rows);
      
    } catch(err) {
        next(err);
    };
  };

  async getById(req: Request, res: Response, next: NextFunction) {

    const id = parseInt(req.params.id);
  
    try {
        const { rows } = await client.query('SELECT * FROM todos WHERE id = $1;', [id]);

        return res.status(200).json(rows[0]);
    } catch(err) {
        next(err);
    };
  };

  async put(req: Request, res: Response, next: NextFunction) {

    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    
    try {
        // Query para fazer o update
        await client.query('UPDATE todos SET title = $1, description = $2 WHERE id = $3;', [title, description, id]);

        return res.status(200).json({
            success: true,
            message: 'Tarefa atualizada com sucesso.'
        });
    } catch(err) {
        next(err);
    };
  };

  async delete(req: Request, res: Response, next: NextFunction) {

    const id = parseInt(req.params.id);
  
    try {
        // Query para deletar a tarefa baseada no Id
        await client.query('DELETE FROM todos WHERE id = $1;', [id])

        return res.status(200).json({
            success: true,
            message: 'Tarefa deletada com sucesso!'
        })
    } catch(err) {
        next(err);
    };
  };

};
