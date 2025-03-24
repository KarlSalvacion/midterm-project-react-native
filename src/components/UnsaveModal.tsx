import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import stylesUnsaveModal from '../styles-components/StyleUnsaveModal';
import { BlurView } from 'expo-blur';

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
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView 
        intensity={20}
        tint={isDarkMode ? "dark" : "light"}
        style={[stylesUnsaveModal.centeredView, isDarkMode && stylesUnsaveModal.darkCenteredView]}
      >
        <View style={[
          stylesUnsaveModal.modalView,
          isDarkMode && stylesUnsaveModal.darkModalView
        ]}>
          <View style={stylesUnsaveModal.messageContent}>
            <Text style={[
              stylesUnsaveModal.messageTextTitle,
              isDarkMode && stylesUnsaveModal.darkMessageTextTitle
            ]}>
              {jobTitle}<Text style={stylesUnsaveModal.messageText}> has been unsaved</Text>
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
        </View>
      </BlurView>
    </Modal>
  );
};

export default UnsaveModal; 