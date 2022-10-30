import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

// export const mapFromApiToVm = (
//   character: apiModel.Character
// ): viewModel.CharacterEntityVm => ({
//   id: character.id,
//   picture: `${process.env.BASE_PICTURES_URL}/${character.thumbNailUrl}`,
//   name: character.name,
//   description: character.shortDescription,
//   rating: character.characterRating,
//   address: character.address1,
// });

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  url: character.url,
  created: character.created,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
});
