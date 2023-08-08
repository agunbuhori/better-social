import FeedScreen from '@/screens/FeedScreen';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
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
          tabBarIcon: props => (
            <Ionicons name="home" color={props.color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
