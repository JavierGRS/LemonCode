import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';
import { getCharacterCollection } from 'pods/hotel-collection/api';
import Axios from 'axios';

const url = 'http://localhost:3000/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  const characterCollection = await getCharacterCollection();
  const result = characterCollection.find((h) => h.id == id);
  return result;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  // console.log(character);
  // return true;
  const urlWithId = url + '/' + character.id;
  console.log(character);
  return Axios.put(urlWithId, character);
};
