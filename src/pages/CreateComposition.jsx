import React from 'react';
import { useGlobalContext } from '../contexts/global';
import CompositionForm from '../components/CompositionForm';
import axios from 'axios';
import { inlinePromise } from '../utils';

const CreateComposition = () => {
  const { comps } = useGlobalContext();

  const saveComposition = async ({name, champions, id}, reset) => {
    if (comps.get().find(c => c.name === name)) {
      alert('Composição com este nome já existe!');
      return;
    }
    const [error] = await inlinePromise(axios.post('/comp', { name, champions, id }));
    if (error) {
      alert('Erro ao salvar a composição');
      console.log({error});
      return;
    }
    reset();
    comps.set(curr => [...curr, { name, champions }]);
  };

  return (
    <CompositionForm
      initialState={{
        name: '',
        champions: [],
      }}
      onSave={saveComposition}
    />
  );
};

export default CreateComposition;