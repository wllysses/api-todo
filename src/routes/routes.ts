import { Router } from "express";
import { CreateTodoController } from "../controllers/CreateTodoController";
import { Middlewares } from "../middlewares";
import { FindAllTodosController } from "../controllers/FindAllTodosController";
import { FindOneTodoController } from "../controllers/FindOneTodoController";
import { UpdateTodoController } from "../controllers/UpdateTodoController";
import { DeleteTodoController } from "../controllers/DeleteTodoController";

const router = Router();

const createTodoController = new CreateTodoController();
const findAllTodosController = new FindAllTodosController();
const findOneTodoController = new FindOneTodoController();
const updateTodoController = new UpdateTodoController();
const deleteTodoController = new DeleteTodoController();
const middlewares = new Middlewares();

router.post("/todos", createTodoController.execute);
router.get("/todos", findAllTodosController.execute);
router.get(
  "/todos/:id",
  middlewares.verifyTodoAlReadyExistsById,
  findOneTodoController.execute
);
router.put(
  "/todos/:id",
  middlewares.verifyTodoAlReadyExistsById,
  updateTodoController.execute
);

router.delete(
  "/todos/:id",
  middlewares.verifyTodoAlReadyExistsById,
  deleteTodoController.execute
);

export { router };
