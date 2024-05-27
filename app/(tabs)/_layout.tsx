import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';

interface ITabIcon {
  title: string;
  color: string;
  focused: boolean;
}

const TabIcon = ({ title, focused }: ITabIcon) => {
  return (
    <View className="items-center justify-between gap-2 ">
      <Text
        className={`font-uberMedium text-xs uppercase ${focused ? 'text-accent' : 'text-white'}`}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#000',
            borderRadius: 10,
            bottom: 22,
            marginHorizontal: 16,
            paddingHorizontal: 16,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon title="home" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon title="profile" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon title="create" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'saved',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon title="bookmark" color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
