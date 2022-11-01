import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  cities: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, cities, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      // validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="id" label="ID" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          {/* <RatingComponent name="rating" max={5} /> */}
          {/* <SelectComponent name="city" label="City" items={cities} /> */}
          <TextFieldComponent
            name="bestSentences"
            label="Best Sentences"
            multiline={true}
            rows={3}
            rowsMax={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
