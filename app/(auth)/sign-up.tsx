import { View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../components/Logo';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (form.username === '' || form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
    }

    setIsSubmitting(true);
    try {
      const { username, email, password } = form;
      const res = await createUser({ username, email, password });
      //save on global state
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
            title={'Username'}
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e })}
            customStyle="mt-7"
            placeholder={'Username'}
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
            text={'Sign Up'}
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
