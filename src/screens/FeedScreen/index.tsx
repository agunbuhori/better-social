import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import FeedItem from './components/FeedItem';
import {FEEDS} from '@/assets/data/feeds';
import Feather from 'react-native-vector-icons/Feather';
import {THEME, THEME_COLORS} from '@/consts/colors';

const FeedScreen = () => {
  const [data, setData] = useState(FEEDS);

  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => <FeedItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Pressable style={styles.edit}>
        <Feather name="plus" style={styles.editIcon} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  edit: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 62,
    right: 20,
    backgroundColor: THEME_COLORS.Primary,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  editIcon: {
    color: 'white',
    fontSize: 24,
  },
});

export default FeedScreen;
