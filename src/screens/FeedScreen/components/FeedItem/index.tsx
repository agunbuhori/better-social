import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import User from './User';
import {FC} from 'react';
import {Feed} from '@/types/Feed';
import Content from './Content';
import Buttons from './Buttons';

const FeedItem: FC<Feed> = ({
  author,
  publishedAt,
  picture,
  description,
  location,
  totalComments,
  totalLikes,
}) => {
  return (
    <View style={styles.feed}>
      <User {...author} publishedAt={publishedAt} location={location} />
      <Content picture={picture} description={description} />
      <Buttons totalComments={totalComments} totalLikes={totalLikes} />
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    backgroundColor: 'white',
    marginBottom: 16,
    height: 483,
  },
});

export default FeedItem;
