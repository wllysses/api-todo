import { Request, Response, NextFunction } from "express";
import { client } from "../database/db";

class Middlewares {

    async verifyTodoAlReadyExistsById(req: Request, res: Response, next: NextFunction) {

        const id = parseInt(req.params.id);

        const { rows } = await client.query('SELECT * FROM todos WHERE id = $1;', [id]);

        if(!rows.length) {
            return res.status(400).json({
                message: 'Nenhuma tarefa cadastrada com esse ID.'
            });
        };

        next();
    }
}

export { Middlewares };
