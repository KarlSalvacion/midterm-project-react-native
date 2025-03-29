import React, { useEffect, useRef } from 'react';
import { View, Text, Modal, Pressable, Animated, PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import stylesBookmarkModal from '../styles/styles-modals/StylesBookmarkModal';

interface BookmarkModalProps {
  visible: boolean;
  isDarkMode: boolean;
  isBookmarked: boolean;
  onClose: () => void;
}

const BookmarkModal: React.FC<BookmarkModalProps> = ({
  visible,
  isDarkMode,
  onClose
}) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          Animated.timing(translateY, {
            toValue: 400,
            duration: 200,
            useNativeDriver: true
          }).start(onClose);
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      }
    })
  ).current;

  useEffect(() => {
    if (visible) {
      translateY.setValue(0);
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
    >
      <Pressable 
        style={stylesBookmarkModal.container}
        onPress={onClose}
      >
        <Animated.View 
          {...panResponder.panHandlers}
          style={[
            stylesBookmarkModal.modalContent,
            isDarkMode && stylesBookmarkModal.darkModalContent,
            { transform: [{ translateY }] }
          ]}
        >
          <View style={stylesBookmarkModal.messageContainer}>
            <Ionicons 
              name="bookmark" 
              size={24} 
              color={"rgb(226, 187, 31)"} 
            />
            <Text style={[
              stylesBookmarkModal.message,
              isDarkMode && stylesBookmarkModal.darkMessage
            ]}>
              Job saved!
            </Text>
          </View>
          <Pressable
            style={stylesBookmarkModal.undoButton}
            onPress={onClose}
          >
            <Ionicons 
              name="close" 
              size={20} 
              color={isDarkMode ? "rgb(203, 203, 203)" : "rgb(102, 102, 102)"} 
            />
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export default BookmarkModal; 