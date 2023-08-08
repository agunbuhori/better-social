import React, {FC, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  TextLayoutEventData,
  View,
} from 'react-native';
import {
  BUTTONS,
  DESCRIPTION_TEXT,
  FEED,
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
  PROFILE_INFO,
} from '../../consts/sizes';
import {TEXT_COLORS} from '@/consts/colors';

interface Props {
  picture: string;
  description: string;
}

const Content: FC<Props> = ({description, picture}) => {
  const descriptionRef = useRef<Text>(null);
  const [readMore, setReadMore] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const contentHeight = FEED - PROFILE_INFO - BUTTONS;

  const onDescriptionLayout = (e: LayoutChangeEvent) => {
    setDescriptionHeight(e.nativeEvent.layout.height);
  };

  const onDescriptionTextLayout = (
    e: NativeSyntheticEvent<TextLayoutEventData>,
  ) => {
    let cuttedText = '';

    for (let i = 1; i <= e.nativeEvent.lines.length; i++) {
      if (i === 5) {
        cuttedText += e.nativeEvent.lines[i - 1].text
          .split(' ')
          .slice(0, 5)
          .join(' ');
        setReadMore(true);
      } else if (i < 5) {
        cuttedText += e.nativeEvent.lines[i - 1].text;
      }
    }
    setEditedText(cuttedText);
  };

  return (
    <View style={styles.content}>
      <View style={styles.descriptionWrapper}>
        <Text
          ref={descriptionRef}
          style={styles.description}
          onLayout={onDescriptionLayout}
          onTextLayout={onDescriptionTextLayout}>
          {editedText ? editedText : description}
          {readMore ? (
            <Pressable style={styles.readMoreButton}>
              <Text style={styles.readMore}>more</Text>
            </Pressable>
          ) : (
            <></>
          )}
        </Text>
      </View>
      <Image
        source={{uri: picture}}
        height={contentHeight - descriptionHeight - 48}
        style={styles.picture}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  descriptionWrapper: {
    padding: PADDING_HORIZONTAL,
  },
  description: {
    fontSize: DESCRIPTION_TEXT,
  },
  picture: {
    marginHorizontal: -PADDING_HORIZONTAL,
  },
  readMoreButton: {
    marginBottom: -4,
    paddingLeft: 4,
  },
  readMore: {
    fontSize: DESCRIPTION_TEXT,
    color: TEXT_COLORS.Blue,
    // marginBottom: -10,
  },
});

export default Content;
