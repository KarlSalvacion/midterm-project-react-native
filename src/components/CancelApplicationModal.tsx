import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  Pressable, 
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import stylesCancelApplication from '../styles-components/StylesCancelApplication';

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
        style={stylesCancelApplication.blurContainer}
      >
        <Pressable style={stylesCancelApplication.blurContainer} onPress={onClose}>
          <View style={[
            stylesCancelApplication.modalView,
            isDarkMode && stylesCancelApplication.darkModalView
          ]}>
            <View style={stylesCancelApplication.iconContainer}>
              <Ionicons 
                name="alert-circle" 
                size={48} 
                color="rgb(220, 38, 38)" 
              />
            </View>
            
            <Text style={[
              stylesCancelApplication.title,
              isDarkMode && stylesCancelApplication.darkTitle
            ]}>
              Cancel Application
            </Text>
            
            <Text style={[
              stylesCancelApplication.message,
              isDarkMode && stylesCancelApplication.darkMessage
            ]}>
              Are you sure you want to cancel your application for {jobTitle}?
            </Text>

            <View style={stylesCancelApplication.buttonContainer}>
              <Pressable
                style={[stylesCancelApplication.button, stylesCancelApplication.cancelButton]}
                onPress={onClose}
              >
                <Text style={stylesCancelApplication.buttonText}>No, Keep It</Text>
              </Pressable>
              
              <Pressable
                style={[stylesCancelApplication.button, stylesCancelApplication.confirmButton]}
                onPress={() => {
                  onConfirm();
                  onClose();
                }}
              >
                <Text style={[stylesCancelApplication.buttonText, stylesCancelApplication.confirmButtonText]}>
                  Yes, Cancel
                </Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </BlurView>
    </Modal>
  );
};

export default CancelApplicationModal; 