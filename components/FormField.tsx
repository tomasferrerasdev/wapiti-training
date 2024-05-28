import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import images from '../constants/images';

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  customStyle: string;
  keyboardType?: string;
  onChange: (e: any) => void;
}

const FormField = ({
  title,
  value,
  customStyle,
  placeholder,
  keyboardType,
  onChange,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`w-full ${customStyle}`}>
      <Text className={`text-base text-black font-uberMedium`}>{title}</Text>
      <View className="w-full h-12 px-4 bg-gray-200 rounded-xl mt-2 focus:border-accent items-center flex-row">
        <TextInput
          className="text-black flex-1 font-uberMedium text-base w-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#ADADAD"
          onChange={onChange}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? images.visible : images.noVisible}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
