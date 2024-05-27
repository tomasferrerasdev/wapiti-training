import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

interface Props {
  name: string;
}

export default function App({ name }: Props) {
  return (
    <View>
      <Text>HELLO WAPITI</Text>
      <StatusBar style="auto" />
    </View>
  );
}
