import React from 'react';
import { Font, AppLoading } from "expo";
import { Root } from "native-base";
import Scenes from './src/Scenes'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        }
    }
    async componentDidMount() {
        let self = this;
        await Font.loadAsync({
          'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
          'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
          'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
          'RobotoLight': require('./assets/fonts/Roboto-Light.ttf'),
        });
        this.setState({ loading: false });
    }
  	render() {
          if (this.state.loading) {
            return (
              <Root>
                <AppLoading /> 
              </Root>
            )
        }
        else{
          return (
            <Root>
              <Scenes />
           </Root>
          )
        }
  	}
}
