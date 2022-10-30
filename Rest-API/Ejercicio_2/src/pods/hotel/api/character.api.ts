import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';
import { getCharacterCollection } from 'pods/hotel-collection/api';

export const getCharacter = async (id: number): Promise<Character> => {
  const characterCollection = await getCharacterCollection();
  const result = characterCollection.find((h) => h.id == id);
  return result;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
