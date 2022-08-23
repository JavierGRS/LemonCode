import type { User } from '@/types'

export const userService = {
  async get(): Promise<User[]> {
    const members: User[] = await fetch(
      `https://api.github.com/orgs/lemoncode/members`
      // {
      //   headers: {
      //     Accept: 'application/json',
      //   },
      // }
    ).then((response) => response.json())
    return members
  },
  async getUser(id: User['id']): Promise<User | undefined> {
    if (!id) throw new Error('id is required')
    return this.get().then((list) => {
      return list.find((user: User) => String(user.id) === String(id))
    })
  },
}
