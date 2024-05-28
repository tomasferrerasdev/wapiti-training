import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  text: string;
  handlePress: () => void;
  isLoading?: boolean;
  containerStyles?: string;
  textStyles?: string;
}

const CustomButton = ({
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  text,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-accent py-2 px-4 w-fit rounded-full ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`text-black font-uberMedium ${textStyles}`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
