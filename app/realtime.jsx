import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database';
import { database } from '../firebase.config';

const ContactForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmitForm = async () => {
        if(!title || !description){
            Alert.alert('Error', 'Please fill all details');
            return;
        }
        try {
            const newContactRef = ref(database, 'contacts/' + Date.now());
            await set(newContactRef, {
                title,
                description
            })
            Alert.alert('Success!', 'Message sent successfully');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error storing data: ', error);
            Alert.alert('Error!', 'Error storing data');
        }
    }

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 px-6">
      <Text className="text-3xl font-bold text-gray-800 mb-4">Contact Us</Text>
      <View className="w-full mb-4">
        <TextInput 
            placeholder='Enter Title'
            value={title}
            onChangeText={setTitle}
            className="bg-white px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500"
        />
      </View>
      <View className="w-full mb-4">
        <TextInput 
            placeholder='Enter Description'
            value={description}
            onChangeText={setDescription}
            className="bg-white px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500"
            multiline
            numberOfLines={4}
        />
      </View>
      <TouchableOpacity className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-full" onPress={handleSubmitForm}>
        <Text className="text-center text-white text-lg font-semibold">Sent</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ContactForm