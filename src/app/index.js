import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { isLoggedIn: null }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAClI5ZpBraxiaaJJYdIyjBxLhy355KMeQ',
            authDomain: 'auth-168d0.firebaseapp.com',
            databaseURL: 'https://auth-168d0.firebaseio.com',
            projectId: 'auth-168d0',
            storageBucket: 'auth-168d0.appspot.com',
            messagingSenderId: '400289494279'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true });
            } else {
                this.setState({ isLoggedIn: false });
            }
        });
    }

    protectedRender() {
        switch (this.state.isLoggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'} />
                <View>{this.protectedRender()}</View>
            </View>
        );
    }
}

export default App;
