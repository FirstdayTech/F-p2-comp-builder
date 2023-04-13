import React from 'react';
import { useGlobalContext } from '../contexts/global';
import CompositionForm from '../components/CompositionForm';

const CreateComposition = () => {
  const { comps } = useGlobalContext();

  const saveComposition = ({name, champions}, reset) => {
    if (comps.get().find(c => c.name === name)) {
      alert('Composição com este nome já existe!');
      return;
    }
    comps.set(curr => [...curr, { name, champions }]);
    reset();
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