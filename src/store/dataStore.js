import { observable, action, computed } from 'mobx';

import Models from '../model/index';

const { MeModel } = Models;

class DataStore {
  @observable me = {};

  @computed
  get id() {
    // 计算属性，输入是否和默认的相等
    return this.me.uuid;
  }

  @action
  init({ me }) {
    this.me = new MeModel(me);
  }
}

export default DataStore;
