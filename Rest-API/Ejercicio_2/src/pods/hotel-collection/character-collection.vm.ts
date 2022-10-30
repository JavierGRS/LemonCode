export interface CharacterEntityVm {
  id: number;
  name: string;
  url: string;
  created: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  image: string;
}
