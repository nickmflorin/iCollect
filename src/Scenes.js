import React from 'react';
import { connect, Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Router, Actions, ActionConst, Scene, Stack } from 'react-native-router-flux';

import store from './store';
import { checkAuthentication } from './actions'

import Login from './containers/auth/Login'
import Register from './containers/auth/Register'
import ForgotPassword from './containers/auth/ForgotPassword'

import NewCollection from './containers/collections/NewCollection'
import ViewCollection from './containers/collections/ViewCollection'
import ViewCollections from './containers/collections/ViewCollections'

const ConnectedRouter = connect()(Router);

export default class Scenes extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }
	async componentDidMount() {
        let self = this;
        store.dispatch(checkAuthentication((isLoggedIn) => {
            if(isLoggedIn){
                console.log('Already Logged In')
            }
            self.setState({
            	isReady: true, 
            	isLoggedIn: isLoggedIn,
            });
        }));
    }
  	render() {
        return (
            (this.state.isReady &&
                <Provider store={store}>
                    <ConnectedRouter>
                        <Scene key="Base" 
                            hideNavBar
                            navigationBarStyle={{backgroundColor: "#fff"}}
                            titleStyle={{backgroundColor: "#fff"}}
                            backButtonTintColor="black">
                            <Stack key="Auth" initial={!this.state.isLoggedIn}>
                                <Scene key="Login" component={Login} title="Login" initial={true} hideNavBar/>
                                <Scene key="Register" component={Register} title="Register" back/>
                                <Scene key="ForgotPassword" component={ForgotPassword} title="Forgot Password" back/>
                            </Stack>
                            <Stack key="Main" initial={this.state.isLoggedIn} hideNavBar>
                                <Stack key="Home" initial={true}>
                                    <Scene key="ViewCollections" component={ViewCollections} title="Your Collections" initial={true}/>
                                    <Scene key="NewCollection" component={NewCollection} title="New Collection" back/>
                                    <Scene key="ViewCollection" component={ViewCollection} title="View Collection" back/>
                                </Stack>
                            </Stack>
                       </Scene>
                     </ConnectedRouter>
                </Provider>
            )            
        );   
  	}
}
