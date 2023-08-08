import {Author} from '@/types/Author';
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PADDING_HORIZONTAL, PROFILE_INFO} from '../../consts/sizes';
import {BORDER_COLORS, TEXT_COLORS} from '@/consts/colors';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';

const User: FC<Author & {publishedAt: string; location?: string}> = ({
  name,
  photo,
  publishedAt,
  location,
}) => {
  return (
    <View style={styles.user}>
      <Image
        source={{uri: 'https://source.unsplash.com/random/100x100/?person'}}
        width={48}
        height={48}
        style={styles.photo}
      />
      <View style={styles.userDetail}>
        <Text style={styles.userName}>{name}</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>
            {moment(publishedAt).format('MMM DD, YYYY')}
          </Text>
          <Feather name="globe" />
          <Feather name="clock" />
          {location && <Text style={styles.infoText}>{location}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING_HORIZONTAL,
    height: PROFILE_INFO,
    columnGap: 8,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLORS.Default,
  },
  userDetail: {
    rowGap: 6,
  },
  userName: {
    fontWeight: 'bold',
  },
  photo: {
    borderRadius: 30,
  },
  info: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
  infoText: {
    color: TEXT_COLORS.Info,
  },
});

export default User;
