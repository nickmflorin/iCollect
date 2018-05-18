import React from 'react';
import { Font } from 'expo';
import Scenes from './src/Scenes'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false,
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
        this.setState({ fontLoaded: true });
    }
  	render() {
        return (
            (this.state.fontLoaded && 
                <Scenes /> 
            )
        )   
  	}
}
