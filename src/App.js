import React, { Component } from 'react';

import Bars from './components/Main/Bars/Bars';
import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Bars>
          <Main />
        </Bars>
      </div>
    );
  }
}

export default App;