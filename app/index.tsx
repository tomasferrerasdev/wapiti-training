import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-uberBold">HELLO WAPITI</Text>
      <Link href="/home" className="text-blue-500">
        Go to home
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
