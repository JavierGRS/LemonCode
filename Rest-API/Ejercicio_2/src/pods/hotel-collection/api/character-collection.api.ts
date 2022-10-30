import Axios from 'axios';
import { Character, CharactersResult } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
let characterCollection = [...mockCharacterCollection];

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const { data } = await Axios.get<CharactersResult[]>(url);
  const result = data.results as Character[];
  return result;
  // return characterCollection;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
