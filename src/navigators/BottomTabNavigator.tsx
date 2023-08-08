import FeedScreen from '@/screens/FeedScreen';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {THEME_COLORS} from '@/consts/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: THEME_COLORS.Primary,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: props => (
            <Ionicons name="layers-outline" color={props.color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: props => (
            <Ionicons
              name="chatbubbles-outline"
              color={props.color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: props => (
            <Ionicons name="newspaper-outline" color={props.color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: props => (
            <Ionicons name="person-outline" color={props.color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
