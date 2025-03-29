import React, { useEffect, useRef } from 'react';
import { View, Text, Modal, Pressable, Animated, PanResponder } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import stylesNotifyCancelModal from '../styles/styles-modals/StylesNotifyCancelModal';

interface NotifyCancelModalProps {
  visible: boolean;
  isDarkMode: boolean;
  onClose: () => void;
  jobTitle: string;
}

const NotifyCancelModal: React.FC<NotifyCancelModalProps> = ({
  visible,
  isDarkMode,
  onClose,
  jobTitle
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
        style={stylesNotifyCancelModal.blurContainer}
        onPress={onClose}
      >
        <Animated.View 
          {...panResponder.panHandlers}
          style={[
            stylesNotifyCancelModal.modalContent,
            isDarkMode && stylesNotifyCancelModal.darkModalContent,
            { transform: [{ translateY }] }
          ]}
        >
          <View style={stylesNotifyCancelModal.messageContainer}>
            
            <Text style={[
              stylesNotifyCancelModal.messageTextTitle,
              isDarkMode && stylesNotifyCancelModal.darkMessage
            ]}><Text style={stylesNotifyCancelModal.messageText}>Application for </Text>{truncatedTitle}<Text style={stylesNotifyCancelModal.messageText}> has been successfeully cancelled</Text>
            </Text>
          </View>
          <Pressable
            style={stylesNotifyCancelModal.closeButton}
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

export default NotifyCancelModal; 