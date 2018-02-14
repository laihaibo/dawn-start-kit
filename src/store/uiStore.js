import { observable, action } from 'mobx';

class UIStore {
  @observable
  show = {
    index: false,
  };
  @observable isLogin = false;

  @action
  initShow(page) {
    // 页面显示，如何和要显示的页相同则，则显示，否则不显示
    for (let key in this.show) {
      key === page ? (this.show[key] = true) : (this.show[key] = false);
    }
  }

  @action
  updateLogin(status) {
    this.isLogin = status;
  }
}

export default UIStore;
