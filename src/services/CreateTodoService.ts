import { TodoProps } from "../@types/TodoProps";
import { client } from "../database/db";

class CreateTodoservice {
  // Create Task
  async handler({ title, description }: TodoProps) {
    if (!title || !description) {
      throw new Error("Preencha todas as informações");
    }

    await client.query(
      "INSERT INTO todos (title, description) VALUES ($1, $2);",
      [title, description]
    );
  }
}

export { CreateTodoservice };
