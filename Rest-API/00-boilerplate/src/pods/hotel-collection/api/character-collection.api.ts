import { Character } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<Character[]> => {
  return characterCollection;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
