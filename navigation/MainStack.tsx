import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLists from '../screens/Main/MainLists';
import MainReminders from '../screens/Main/MainReminders';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  // const colorScheme = useColorScheme();

  return (
    <Stack.Navigator initialRouteName='MainLists'>
      <Stack.Screen
        name='MainLists'
        component={MainLists}
        options={{
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name='MainReminders'
        component={MainReminders}
        options={() => ({
          headerBackTitle: 'Lists',
        })}
      />
    </Stack.Navigator>
  );
}
