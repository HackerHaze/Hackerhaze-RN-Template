import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@features/Splash/screens';
import OnBoarding from '@features/OnBoarding/screens';
import AuthScreen from '@features/Auth/screens';
import MainScreen from '@features/Main/screens';
import {Provider} from 'react-redux';
import {store} from '@redux/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnboardingStack"
              component={OnBoarding}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AuthStack"
              component={AuthScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MainStack"
              component={MainScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
