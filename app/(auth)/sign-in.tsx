import { View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../components/Logo';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      //set log in state
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full flex-col justify-center items-center px-4">
          <View className="justify-between px-4">
            <Logo color="black" />
          </View>
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
              Dont have an account?
            </Text>
            <Link href="/sign-up" className="text-sm text-black">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
