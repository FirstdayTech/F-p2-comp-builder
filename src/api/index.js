import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import db from './localDb';
import COMPS from '../db/comps';

const comps = db.collection('compositions');
if (comps.getAll().length === 0) {
  comps.save(COMPS);
}

const mock = new MockAdapter(axios);

mock.onGet('/comps').reply(() => {
  const comps = db.collection('compositions');
  const data = Object.values(comps.getAll());
  return [200, data];
});

mock.onPut(/\/comp\/\w+/).reply(({ url, data }) => {
  const id = url.match(/\/comp\/(\w+)/)[1];
  if (!id) {
    return [400, {message: 'Missing id'}];
  }

  const comp = comps.get(id);
  if (!comp) {
    return [404, {message: 'Composition not found'}];
  }

  const parsedData = JSON.parse(data);
  comps.update(parsedData, { id });
  return [200, parsedData];
});

mock.onDelete(/\/comp\/\w+/).reply(({ url }) => {
  const id = url.match(/\/comp\/(\w+)/)[1];
  if (!id) {
    return [400, {message: 'Missing id'}];
  }

  comps.delete(id);
  return [200, {message: 'Composition deleted'}];
});

mock.onPost('comp').reply(({ data }) => {
  const parsedData = JSON.parse(data);
  comps.save(parsedData);
  return [200, parsedData];
});