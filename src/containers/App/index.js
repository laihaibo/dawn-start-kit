import React, { Component } from 'react';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';

import Ming from '../../components/Ming';
import styles from './index.less';

@inject('uiStore')
@observer
class App extends Component {
  @computed
  get uiStore() {
    return this.props.uiStore;
  }

  componentDidMount() {
    this.uiStore.show.index ? console.log('show') : console.log('not show');
  }

  render() {
    return (
      <div className={styles.app}>
        <Ming />
      </div>
    );
  }
}

export default App;
