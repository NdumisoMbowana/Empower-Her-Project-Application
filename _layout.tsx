import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ title: 'login',headerShown:false }} />
        <Stack.Screen name="signup" options={{ title: 'signup',headerShown:false }} />
        
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="mobile" options={{ title: 'mobile',headerShown:false }} />
        <Stack.Screen name="webDevelopment" options={{ title: 'webDevelopment',headerShown:false }} />
        <Stack.Screen name="dataScience" options={{ title: 'dataScience',headerShown:false }} />
        <Stack.Screen name="upcomingSessions" options={{ title: 'upcomingSessions',headerShown:false }} />
        <Stack.Screen name="upcomingEvents" options={{ title: 'upcomingEvents',headerShown:false }} />
        <Stack.Screen name="onlineResources" options={{ title: 'onlineResources',headerShown:false }} />
        <Stack.Screen name="mentor/[id]" options={{ title: 'Mentor Details', headerShown: false }} />

      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
