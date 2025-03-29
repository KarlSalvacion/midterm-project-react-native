import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  Pressable, 
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import stylesCancelApplicationModal from '../styles/styles-modals/StylesCancelApplicationModal';

interface CancelApplicationModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  jobTitle: string;
  isDarkMode: boolean;
}

const CancelApplicationModal: React.FC<CancelApplicationModalProps> = ({
  visible,
  onClose,
  onConfirm,
  jobTitle,
  isDarkMode
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
        style={stylesCancelApplicationModal.blurContainer}
      >
        <View style={stylesCancelApplicationModal.blurContainer}>
          <View style={[
            stylesCancelApplicationModal.modalView,
            isDarkMode && stylesCancelApplicationModal.darkModalView
          ]}>
            <View style={stylesCancelApplicationModal.iconContainer}>
              <Ionicons 
                name="alert-circle" 
                size={48} 
                color="rgb(220, 38, 38)" 
              />
            </View>
            
            <Text style={[
              stylesCancelApplicationModal.title,
              isDarkMode && stylesCancelApplicationModal.darkTitle 
            ]}>
              Cancel Application
            </Text>
            
            <Text style={[
              stylesCancelApplicationModal.message,
              isDarkMode && stylesCancelApplicationModal.darkMessage
            ]}>
              Are you sure you want to cancel your application for <Text style={stylesCancelApplicationModal.jobTitleText}>{jobTitle}?</Text>  
              
            </Text>

            <View style={stylesCancelApplicationModal.buttonContainer}>
              <Pressable
                style={({ pressed }) => [
                  stylesCancelApplicationModal.button, 
                  stylesCancelApplicationModal.noButton,
                  isDarkMode && stylesCancelApplicationModal.darkNoButton,
                  pressed && stylesCancelApplicationModal.pressedButton]}
                onPress={onClose}
              >
                <Text style={
                  [stylesCancelApplicationModal.noButtonText,
                  isDarkMode && stylesCancelApplicationModal.darkNoButtonText,]
                }>
                  No, Keep It
                </Text>
              </Pressable>
              
              <Pressable
                style={({ pressed }) => [stylesCancelApplicationModal.button,
                  stylesCancelApplicationModal.confirmButton,
                  isDarkMode && stylesCancelApplicationModal.darkConfirmButton,
                  pressed && stylesCancelApplicationModal.pressedButton
                  ]}
                onPress={() => {
                  onConfirm();
                  onClose();
                }}
              >
                <Text style={[stylesCancelApplicationModal.buttonText, 
                  stylesCancelApplicationModal.confirmButtonText]}>
                  Yes, Cancel
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default CancelApplicationModal; 