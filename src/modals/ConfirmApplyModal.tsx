import React from 'react';
import { 
  View, 
  Text, 
  Modal, 
  Pressable 
} from 'react-native';
import { BlurView } from 'expo-blur';
import stylesConfirmApplyModal from '../styles/styles-modals/StylesConfirmApplyModal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';
interface ConfirmApplyModalProps {
  visible: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const ConfirmApplyModal: React.FC<ConfirmApplyModalProps> = ({
  visible,
  onClose,
  isDarkMode,
  navigation,
}) => {

  const handleOkayPress = () => {
    navigation.navigate('Home');
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={stylesConfirmApplyModal.centeredView}>
        <BlurView
          intensity={20}
          tint={isDarkMode ? "dark" : "light"}
          style={stylesConfirmApplyModal.blurContainer}
        >
          <View style={[
            stylesConfirmApplyModal.confirmModalView,
            isDarkMode && stylesConfirmApplyModal.darkConfirmModalView
          ]}>
            <Text style={[
              stylesConfirmApplyModal.confirmTitle,
              isDarkMode && stylesConfirmApplyModal.darkTitle
            ]}>
              Application Submitted
            </Text>
            
            <Text style={[
              stylesConfirmApplyModal.confirmMessage,
              isDarkMode && stylesConfirmApplyModal.darkSubtitle
            ]}>
              Your job application has been successfully submitted. 
              Our team will review your application and get back to you soon.
            </Text>
            
            <Pressable
              onPress={handleOkayPress}
              style={({ pressed }) => [
                stylesConfirmApplyModal.confirmButton,
                isDarkMode && stylesConfirmApplyModal.darkConfirmButton,
                pressed && stylesConfirmApplyModal.buttonPressed
              ]}
            >
              <Text style={stylesConfirmApplyModal.submitButtonText}>Okay</Text>
            </Pressable>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default ConfirmApplyModal;