import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BUTTONS, PADDING_HORIZONTAL} from '../../consts/sizes';
import Feather from 'react-native-vector-icons/Feather';
import {TEXT_COLORS} from '@/consts/colors';

interface Props {
  totalComments: number;
  totalLikes: number;
}
const Buttons: FC<Props> = () => {
  return (
    <View style={styles.buttons}>
      <View style={styles.right}>
        <Pressable style={styles.button}>
          <Feather name="share-2" style={styles.icon} />
        </Pressable>

        <Pressable style={styles.button}>
          <Feather name="message-circle" style={styles.icon} />
          <Text style={styles.buttonText}>37</Text>
        </Pressable>
      </View>
      <View style={styles.right}>
        <Pressable style={styles.button}>
          <Feather name="alert-circle" style={styles.icon} />
        </Pressable>

        <Pressable style={styles.button}>
          <Feather name="arrow-down-circle" style={styles.icon} />
          <Text style={styles.buttonText}>37</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Feather name="arrow-up-circle" style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    height: BUTTONS,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: PADDING_HORIZONTAL,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    color: TEXT_COLORS.Info,
  },
  right: {
    flexDirection: 'row',
    columnGap: 12,
  },
  button: {
    columnGap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_COLORS.Info,
  },
});

export default Buttons;
