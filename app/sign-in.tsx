import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {
 
  const handleLogin = () => {
alert('Login')
  }

  return (
    <SafeAreaView className='bg-white  h-full'>
      <ScrollView contentContainerClassName='bg-white  h-full'>
         <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
         <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200 '>Welcome to ReState</Text>
          <Text className='text-3xl text-center font-rubik-bold text-black mt-2'>Lets Get You Closer to {'\n'}
            
            <Text className='text-primary-300'>Your Dream Home</Text>
            </Text> 
            <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to ReState with Google</Text>
            <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-800 rounded-full w-full py-4 mt-5'>

        <View className='flex-row items-center justify-center gap-2'>
            <Image source={icons.google} className='w-5 h-5' resizeMode='contain'/>
            <Text className='text-lg font-rubik-medium text-black-300 text-center'>Continue with Google</Text>
        </View>
              </TouchableOpacity>
         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn