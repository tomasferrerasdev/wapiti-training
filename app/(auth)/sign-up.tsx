import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../components/Logo';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full flex-col justify-center items-center px-4">
          <View className="justify-between px-4">
            <Logo color="black" />
          </View>
          <FormField
            title={'Username'}
            value={form.userName}
            onChange={(e) => setForm({ ...form, userName: e })}
            customStyle="mt-7"
            placeholder={'Email'}
          />
          <FormField
            title={'Email'}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e })}
            customStyle="mt-7"
            keyboardType="email-address"
            placeholder={'Email'}
          />
          <FormField
            title={'Password'}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e })}
            customStyle="mt-7"
            placeholder="Password"
          />
          <CustomButton
            text={'Log In'}
            containerStyles="w-full mt-7 h-12"
            handlePress={onSubmit}
            isLoading={isSubmitting}
          />
          <View className="w-full justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-wapitiGray">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-sm text-black">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
