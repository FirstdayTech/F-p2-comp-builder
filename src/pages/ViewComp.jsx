import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../contexts/global';
import CompositionForm from '../components/CompositionForm';
import { Navigate } from 'react-router-dom';

const ViewComp = () => {
  const { comps } = useGlobalContext();
  const params = useParams();
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
      readonly
    />
  );
};

export default ViewComp;