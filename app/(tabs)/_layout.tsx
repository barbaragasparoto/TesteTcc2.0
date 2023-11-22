import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from '../componentes/TabBarIcon/index';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarActiveTintColor: "#462783",
          tabBarInactiveTintColor: "#ccc",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          tabBarActiveTintColor: "#462783",
          tabBarInactiveTintColor: "#ccc",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="list-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
