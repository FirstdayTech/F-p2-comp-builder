import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../contexts/global';
import CompositionForm from '../components/CompositionForm';

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
      onSave={({ name, champions }, reset) => {
        const next = [
          ...original.slice(0, targetIndex),
          { name, champions },
          ...original.slice(targetIndex + 1)
        ];
        comps.set(next);
        reset();
        navigate(-1);
      }}
    />
  );
};

export default EditComposition;