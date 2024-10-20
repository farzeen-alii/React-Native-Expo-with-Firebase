import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('User registered Successfully!')
            setEmail('');
            setPassword('');
        })
        .catch((error) => {
            const errorMsg = error.message;
            setErrorMessage(errorMsg);
        })
    }

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 px-6">
      <Text className="text-3xl font-bold text-gray-800 mb-4">Sign up</Text>
      <View className="w-full mb-4">
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            className="bg-white px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />
      </View>
      <View className="w-full mb-4">
        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-white px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />
      </View>
      {
        errorMessage && (
            <Text className="text-red-500 mb-4 text-center">{errorMessage}</Text>
        )
      }
      <TouchableOpacity
        onPress={handleSignup}
        className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-full"
      >
        <Text className="text-center text-white text-lg font-semibold">Sign up</Text>
      </TouchableOpacity>
      <View className="mt-4">
        <Text className="text-gray-600">Already have an account?{' '}</Text>
        <Text className="text-blue-500 font-semibold">Login</Text>
      </View>
    </View>
  )
}

export default Signup