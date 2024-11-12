import { Stack, Link, useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Home() {
  const [bgColor, setBgColor] = useState<string>('white');
  const { color } = useGlobalSearchParams<{ color?: string }>();

  useEffect(() => {
    if (color) {
      setBgColor(color);
    }
  }, [color]);

  return (
    <View style={[styles.wrapper, { backgroundColor: bgColor }]}>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Text style={styles.text}>Welcome to Expo Router!</Text>
        <Link href={{ pathname: '/details' }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flex: 1,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
});
