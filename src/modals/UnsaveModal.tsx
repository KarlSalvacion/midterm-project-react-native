import React, { useRef, useEffect } from 'react';
import { View, Text, Modal, Pressable, Animated, PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import stylesUnsaveModal from '../styles/styles-modals/StylesUnsaveModal';

interface UnsaveModalProps {
  visible: boolean;
  jobTitle: string;
  onUndo: () => void;
  onClose: () => void;
  isDarkMode: boolean;
}

const UnsaveModal: React.FC<UnsaveModalProps> = ({
  visible,
  jobTitle,
  onUndo,
  onClose,
  isDarkMode,
}) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      translateY.setValue(0);
    }
  }, [visible]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) { // Only allow downward swipe
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) { // Threshold to trigger close
          Animated.timing(translateY, {
            toValue: 400,
            duration: 200,
            useNativeDriver: true
          }).start(() => {
            onClose();
          });
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
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }).start();

      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  const truncatedTitle = jobTitle.length > 30 
    ? jobTitle.substring(0, 30) + '...' 
    : jobTitle;

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
    >
      <Pressable 
        style={stylesUnsaveModal.centeredView}
        onPress={onClose}
      >
        <Animated.View 
          {...panResponder.panHandlers}
          style={[
            stylesUnsaveModal.modalView,
            isDarkMode && stylesUnsaveModal.darkModalView,
            { transform: [{ translateY }] }
          ]}
        >
          <View style={stylesUnsaveModal.messageContent}>
            <Text style={[
              stylesUnsaveModal.messageTextTitle,
              isDarkMode && stylesUnsaveModal.darkMessageTextTitle
            ]}>
              {truncatedTitle}<Text style={stylesUnsaveModal.messageText}> has been unsaved</Text>
            </Text>
            <Pressable
              onPress={onUndo}
              style={stylesUnsaveModal.undoButton}
            >
              <Text style={[
                stylesUnsaveModal.undoText,
                isDarkMode && stylesUnsaveModal.darkUndoText
              ]}>
                Undo
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={onClose}
            style={stylesUnsaveModal.closeButton}
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

export default UnsaveModal; 