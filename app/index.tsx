import { Button, Image, ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import images from '../constants/images';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/onboarding-background.jpg')}
        className="flex-1 bg-cover justify-center"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.4)']}
          className="flex-1"
        >
          <SafeAreaView className="flex-1 justify-between px-4">
            <View className="w-full items-center p-4">
              <Image
                source={images.logo}
                width={155}
                height={123}
                className="w-[155px] h-[123px]"
              />
            </View>
            <View className="flex-col gap-14">
              <View className="flex-col gap-2">
                <Text className="font-uberBold text-white text-[32px]">
                  Discover what a Shooting Companion can do for You
                </Text>
                <Text className="font-uberMedium text-white text-[16px]">
                  Unlock your full potential with Wapiti Training. Personalized
                  guidance and real-time feedback.
                </Text>
              </View>
              <View className="pb-10 px-2 flex flex-row items-center justify-between">
                <View className="items-center gap-2 flex-row">
                  <View className="w-[45px] h-[3px] bg-white rounded-full" />
                  <View className="w-[45px] h-[3px] bg-gray rounded-full" />
                  <View className="w-[45px] h-[3px] bg-gray rounded-full" />
                </View>
                <CustomButton
                  text="Get started"
                  handlePress={() => router.push('/sign-in')}
                />
              </View>
            </View>
            {/* <StatusBar backgroundColor="#000" style="light" /> */}
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </>
  );
}
