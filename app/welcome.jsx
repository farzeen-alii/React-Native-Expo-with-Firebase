import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl text-teal-900">Welcome</Text>
      <TouchableOpacity className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-11/12" onPress={() => router.push('/realtime')}>
        <Text className="text-center text-white text-lg font-semibold">Explore Realtime Database</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 py-3 px-10 rounded-lg shadow-md w-11/12" onPress={() => router.push('/firestore')}>
        <Text className="text-center text-white text-lg font-semibold">Explore Firestore Database</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome