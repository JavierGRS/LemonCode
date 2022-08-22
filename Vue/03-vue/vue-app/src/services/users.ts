import type { User } from '@/types'

export const productService = {
  async get(): Promise<User[]> {
    const members: User[] = await fetch(
      `https://api.github.com/orgs/lemeoncode/members`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    ).then((response) => response.json())
    return members
  },
  async getMember(id: User['id']): Promise<User | undefined> {
    if (!id) throw new Error('id is required')
    return this.get().then((list) => {
      return list.find((member: User) => String(member.id) === String(id))
    })
  },
}
