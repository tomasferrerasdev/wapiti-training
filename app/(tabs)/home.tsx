import { FlatList, Image, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import { useState } from 'react';
import { getAllDrills } from '../../lib/appwrite';
import { useAppwrite } from '../../lib/useAppwrite';
import VideoCard from '../../components/VideoCard';

const Home = () => {
  const { data: drills, refetch } = useAppwrite(getAllDrills);
  const [refresing, setRefresing] = useState(false);

  const onRefresh = async () => {
    setRefresing(true);
    refetch();
    setRefresing(false);
  };

  return (
    <SafeAreaView className="h-full">
      <FlatList
        data={drills.documents}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard drill={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-uberMedium text-xl text-gray-600">
                  Welcome back
                </Text>
                <Text className="font-uberBold text-xl">Tomas!</Text>
              </View>
              <View>
                <Image
                  source={images.logoMinified}
                  width={124}
                  height={80}
                  className="w-[73px] h-[47px]"
                />
              </View>
            </View>
            <SearchInput />
            <View className="flex-1 w-full pt-5 pb-8">
              <Text className="font-uberMedium text-gray-600 text-xl mb-3">
                Trending drills
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No drills found"
            subtitle="Be the first drills creator"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refresing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
