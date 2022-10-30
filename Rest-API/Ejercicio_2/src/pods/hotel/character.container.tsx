import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';

import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import { Character, createEmptyCharacter } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams<any>();
  const history = useHistory();

  const handleLoadCityCollection = async () => {
    const apiCities = await api.getCities();
    setCities(apiCities);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    console.log(character);
    handleLoadCityCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return (
    <CharacterComponent
      character={character}
      cities={cities}
      onSave={handleSave}
    />
  );
};
