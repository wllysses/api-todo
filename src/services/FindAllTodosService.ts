import { client } from "../database/db";

export class FindAllTodosService {
  async handler() {
    const { rows } = await client.query("SELECT * FROM todos;");
    return rows;
  }
}
