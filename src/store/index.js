import DataStore from './dataStore';
import UIStore from './uiStore';

import api from '../api';

const dataStore = new DataStore();
const uiStore = new UIStore();

dataStore.init(api.data);
uiStore.initShow('index');

const store = {
  dataStore,
  uiStore,
};

export default store;
