import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import images from '../constants/images';

interface TrendingItemProps {
  activeItem: any;
  drill: any;
}

const zoomIn = {
  0: {
    opacity: 1,
    scale: 0.9,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};
const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  1: {
    opacity: 1,
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, drill }: TrendingItemProps) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      className="mr-5"
      duration={500}
      animation={activeItem === drill.$id ? zoomIn : zoomOut}
    >
      {play ? (
        <Text>playing</Text>
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: drill.thumbnail }}
            className="w-52 h-72 rounded-lg my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={images.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

interface TrendingProps {
  drills: any;
}

const Trending = ({ drills }: TrendingProps) => {
  const [activeItem, setActiveItem] = useState(drills[1]);
  const viewableItemsChange = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  return (
    <FlatList
      data={drills}
      keyExtractor={(item) => item.$id}
      onViewableItemsChanged={viewableItemsChange}
      viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      contentOffset={{ x: 150, y: 0 }}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} drill={item} />
      )}
      horizontal
    />
  );
};

export default Trending;
