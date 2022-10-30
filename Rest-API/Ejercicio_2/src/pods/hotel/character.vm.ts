export interface Character {
  id: number;
  name: string;
  bestSentences: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
}

//Aqui voy a querer solo el character sin todo lo demas
export const createEmptyCharacter = (): Character => ({
  id: null,
  name: '',
  status: 'unknown',
  species: '',
  type: '',
  bestSentences: '',
});
