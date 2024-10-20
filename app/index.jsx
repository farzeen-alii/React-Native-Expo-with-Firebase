import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'
const Home = () => {
    const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-gray-50 px-6">
      <Text className="text-4xl font-bold text-gray-800 mb-4">Welcome</Text>
      <Text className="text-lg text-gray-600 mb-8 text-center">Welcome to our app! Sign up and explore amazing features</Text>
      <TouchableOpacity
        onPress={() => router.push('/sign-up')}
        className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-full">
        <Text className="text-white text-center text-lg font-semibold">Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;