import { Router } from "express";
import { TodoController } from "../controllers/TodoController";
import { Middlewares } from "../middlewares";

const router = Router();

const todoController = new TodoController(); // Instância da classe Controller
const middlewares = new Middlewares();

router.post('/todos', todoController.post);
router.get('/todos', todoController.getAll);
router.get('/todos/:id', middlewares.verifyTodoAlReadyExistsById, todoController.getById);
router.put('/todos/:id', middlewares.verifyTodoAlReadyExistsById, todoController.put);
router.delete('/todos/:id', middlewares.verifyTodoAlReadyExistsById, todoController.delete);

export { router };
