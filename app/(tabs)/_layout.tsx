import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (<Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="contador" options={{ title: 'Contador',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="sort-numeric-asc" color={color} />}}/>
        <Tabs.Screen name="perfil" options={{ title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />}}/>
        <Tabs.Screen name="tarjetas" options={{ title: 'Tarjetas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="hand-pointer-o" color={color} />}}/>
  </Tabs>);
}
