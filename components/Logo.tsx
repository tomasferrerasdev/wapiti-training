import { Image, View } from 'react-native';
import images from '../constants/images';

interface LogoProps {
  color: 'black' | 'accent';
}

const Logo = ({ color }: LogoProps) => {
  return (
    <View className="w-full items-center p-6">
      <Image
        source={color === 'black' ? images.logoBlack : images.logo}
        width={155}
        height={123}
        className="w-[155px] h-[123px]"
      />
    </View>
  );
};

export default Logo;
