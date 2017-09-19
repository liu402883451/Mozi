import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import configureStore from 'store/configure-store';
import rootSaga from 'sagas';
import App from 'containers/app';

const store = configureStore();
// run root saga
store.runSaga(rootSaga);

export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide(); // 隐藏启动屏
  }

  render() {
    return (
      <Provider store={store}>
        <App
          ref={ref => {
            this.rootNav = ref;
          }}
        />
      </Provider>
    );
  }
}
