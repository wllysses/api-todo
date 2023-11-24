import { client } from "../database/db";

export class UpdateTodoService {
  async handler(id: number, title: string, description: string) {
    if (!title || !description) {
      throw new Error("Preencha todos os campos");
    }

    await client.query(
      "UPDATE todos SET title = $1, description = $2 WHERE id = $3;",
      [title, description, id]
    );
  }
}
