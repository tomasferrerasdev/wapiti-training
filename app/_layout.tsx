import { Slot } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

const RootLayout = () => {
  return (
    <>
      <Text>header</Text>
      <Slot />
      <Text>footer</Text>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
