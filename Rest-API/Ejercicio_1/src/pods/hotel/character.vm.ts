export interface Character {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  city: string;
}

//Aqui voy a querer solo el character sin todo lo demas
export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  description: '',
  rating: 3,
  address: '',
  city: '',
});
