import type { User } from "@/types";

export const userService = {
  async get(organisation: String): Promise<User[]> {
    const members: User[] = await fetch(
      `https://api.github.com/orgs/${organisation}/members`
    )
      .then((response) => response.json())
      .catch((err) => {
        throw new Error(err.message);
      });
    return members;
  },
  async getUser(
    id: User["id"],
    organisation: String
  ): Promise<User | undefined> {
    if (!id) throw new Error("id is required");
    return this.get(organisation).then((list) => {
      return list.find((user: User) => String(user.id) === String(id));
    });
  },
};
