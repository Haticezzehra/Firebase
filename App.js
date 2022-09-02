import database from '@react-native-firebase/database';
import React from 'react';
import {Button, View, Text} from 'react-native';

export default () => {
  const checkDB = () => {
    const reference = database().ref('Book');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  const listenDB = () => {
    const reference = database().ref('Book');
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    });
  };
  const setDB = () => {
    const reference = database().ref('Car/rentable');
    reference.set({
      brand: 'Audii',
      model: 'A3',
      price: 128,
    });
  };
  const updateDB = () => {
    const reference = database().ref('Car/rentable');
    reference.update({
      model: 'A6',
    });
  };
  const pushDB = () => {
    const reference = database().ref('Car/rentable');
    reference.push({
      brand: 'AudiS',
      model: 'A3',
      price: 128,
    });
  };
  return (
    <View>
      <Text style={{fontSize: 25}}>Hello Firebase</Text>
      <Button title="checkDB" onPress={checkDB} />
      <Button title="listenDB" onPress={listenDB} />
      <Button title="setDB" onPress={setDB} />
      <Button title="updateDB" onPress={updateDB} />
      <Button title="pushDB" onPress={pushDB} />
    </View>
  );
};

/*import auth from '@react-native-firebase/auth';
import React from 'react';
import {Button, View, Text} from 'react-native';

export default () => {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log('Sign Up'))
      .catch(err => console.log(err));
  };
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log('Sign in'))
      .catch(err => console.log(err));
  };
  const signOut = () => {
    auth()
      .signOut()
      .then(res => console.log('Sign out'))
      .catch(err => console.log(err));
  };
  const checkOut = () => {
    const user = auth().currentUser;
    console.log(user);
  };

  return (
    <View>
      <Text style={{fontSize: 25}}>Hello Firebase</Text>
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check Out" onPress={checkOut} />
    </View>
  );
};
*/
