import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import images from '../constants/images';
import { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';

interface VideoCardProps {
  drill: any;
}

const VideoCard = ({ drill }: VideoCardProps) => {
  const { title, thumbnail, video, author } = drill;
  const [play, setPlay] = useState(false);

  return (
    <View className="px-4 flex-col mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] border border-gray-600 justify-center items-center rounded-lg">
            <Image
              source={{ uri: author.avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3">
            <Text className="font-uberBold text-base" numberOfLines={1}>
              {title}
            </Text>
            <Text className="font-uberMedium text-base text-gray-600">
              {author.username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image
            source={images.dots}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </View>
      </View>
      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
        />
      ) : (
        <TouchableOpacity
          onPress={() => setPlay(true)}
          activeOpacity={0.7}
          className="w-full h-60 rounded-lg mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-lg mt-3"
            resizeMode="cover"
          />
          <Image
            source={images.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
