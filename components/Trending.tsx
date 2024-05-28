import { View, Text, FlatList } from 'react-native';

interface TrendingProps {
  posts: any;
}

const Trending = ({ posts }: TrendingProps) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text className="text-black">texto</Text>}
      horizontal
    />
  );
};

export default Trending;
