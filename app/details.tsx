import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const colors = [
  '#87CEEB', // SkyBlue
  '#90EE90', // LightGreen
  '#FFB6C1', // LightPink
  '#FF69B4', // HotPink
  '#FFA07A', // LightSalmon
  '#9370DB', // MediumPurple
  '#40E0D0', // Turquoise
  '#FFD700', // Gold
  '#CD5C5C', // IndianRed
];
export default function Details() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const router = useRouter();

  const onSetColor = (color: string) => {
    setSelectedColor(color);
    router.setParams({ color });
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <View style={styles.container}>
        {colors.map((color, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            style={[
              styles.colorBox,
              { backgroundColor: color },
              selectedColor === color && styles.selected,
            ]}
            onPress={() => onSetColor(color)}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  colorBox: {
    width: '30%',
    height: 100,
    margin: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selected: {
    borderColor: 'black',
  },
});
