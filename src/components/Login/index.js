import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from '../../services/firebaseConnection';

export default function Login({changeStatus}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [type, setType] = useState('login');

  function handleLogin() {
    if (type === 'login') {
      //Login
      const user = firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => changeStatus(user.user.uid))
        .catch(error => {
          console.log(error);
          alert('Ops deu algum erro');
          return;
        });
    } else {
      //Cadastro

      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => changeStatus(user.user.uid))
        .catch(error => {
          console.log(error);
          alert('Ops deu algum erro');
          return;
        });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Seu email"
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
      />
      <TextInput
        placeholder="* * * * * * * * *"
        value={password}
        onChangeText={value => setPassword(value)}
        style={styles.input}
      />

      <TouchableOpacity
        style={[
          styles.btnLogin,
          {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'},
        ]}
        onPress={handleLogin}>
        <Text style={styles.btnLoginText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setType(type => (type === 'login' ? 'cadastrar' : 'login'))
        }>
        <Text style={{textAlign: 'center', fontSize: 17}}>
          {type === 'login' ? 'Criar uma conta' : 'Ja possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'f2f6fc',
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414',
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10,
    borderRadius: 4,
  },
  btnLoginText: {
    color: '#fff',
    fontSize: 17,
  },
});
