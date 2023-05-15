import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // 执行登录逻辑
  };

  return (
    <View style={styles.father}>
      <View style={styles.loginWrapper}>
        <Text style={styles.loginTitle}>Welcome liunoah</Text>
        <View style={styles.loginInputWrapper}>
          <TextInput
            style={styles.loginInput}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.loginInputWrapper}>
          <TextInput
            style={styles.loginInput}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.loginLinksWrapper}>
          <TouchableOpacity style={styles.loginLink}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginLink}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  father: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  loginWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 400,
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  loginInputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  loginInput: {
    width: '100%',
    height: 40,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  loginButton: {
    width: '100%',
    height: 40,
    marginTop: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLinksWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    color: '#333',
  },
  loginLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#007bff',
  },
});

export default Login;