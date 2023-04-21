import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../contexts/global';
import CompositionForm from '../components/CompositionForm';
import axios from 'axios';
import { inlinePromise } from '../utils';

const EditComposition = () => {
  const { comps } = useGlobalContext();
  const params = useParams();
  const navigate = useNavigate();
  if (!('name' in params)) {
    return <Navigate to='/' replace />;
  }
  
  const original = comps.get();

  const targetIndex = original.findIndex(c => c.name === params.name);
  if (targetIndex < 0) {
    return <Navigate to='/' replace />;
  }

  return (
    <CompositionForm
      initialState={original[targetIndex]}
      onSave={async ({ id, name, champions }, reset) => {
        const next = [
          ...original.slice(0, targetIndex),
          { name, champions },
          ...original.slice(targetIndex + 1)
        ];
        comps.set(next);
        const [error] = await inlinePromise(axios.put('/comp/' + id, {
          name,
          champions
        }));
        if (error) {
          alert('Erro ao editar a composição');
          console.log({error});
          return;
        }
        reset();
        navigate(-1);
      }}
    />
  );
};

export default EditComposition;