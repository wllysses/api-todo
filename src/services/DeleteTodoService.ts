import { client } from "../database/db";

export class DeleteTodoService {
  async handler(id: number) {
    await client.query("DELETE FROM todos WHERE id = $1;", [id]);
  }
}
