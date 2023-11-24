import { client } from "../database/db";

export class FindOneService {
  async handler(id: number) {
    const { rows } = await client.query("SELECT * FROM todos WHERE id = $1;", [
      id,
    ]);

    return rows[0];
  }
}
