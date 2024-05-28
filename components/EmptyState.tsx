import { View, Text } from 'react-native';
import CustomButton from './CustomButton';
import { router } from 'expo-router';

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  return (
    <View className="px-4">
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <CustomButton
        text={'Create a drill'}
        handlePress={() => router.push('/create')}
      />
    </View>
  );
};

export default EmptyState;
