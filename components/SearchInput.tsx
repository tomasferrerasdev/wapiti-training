import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import images from '../constants/images';

const SearchInput = () => {
  return (
    <View className="w-full h-12 px-4 bg-black rounded-xl mt-2 focus:border-accent items-center flex-row space-x-4">
      <TextInput
        className="text-white flex-1 font-uberMedium text-base w-full"
        value={null}
        placeholder={'Search for drills'}
        placeholderTextColor="#ADADAD"
      />

      <TouchableOpacity>
        <Image
          source={images.search}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
