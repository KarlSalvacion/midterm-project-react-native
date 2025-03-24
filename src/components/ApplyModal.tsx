import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  Modal, 
  TextInput, 
  Pressable, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  PanResponder,
  Animated,
  Keyboard,
  KeyboardEvent
} from 'react-native';
import { Formik } from 'formik';
import { ApplyFormSchema } from '../validation/ApplyFormSchema';
import stylesApplyModal from '../styles-components/StyleApplyModal';
import { BlurView } from 'expo-blur';

interface ApplyModalProps {
  visible: boolean;
  onClose: () => void;
  jobTitle: string;
  companyName: string;
  isDarkMode: boolean;
  onSubmit: (values: ApplyFormValues) => void;
}

export interface ApplyFormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  coverLetter: string;
}

const ApplyModal: React.FC<ApplyModalProps> = ({
  visible,
  onClose,
  jobTitle,
  companyName,
  isDarkMode,
  onSubmit
}) => {
  const initialValues: ApplyFormValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    coverLetter: ''
  };

  const scrollViewRef = useRef<ScrollView>(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const scrollToInput = (inputName: string) => {
    // Fixed positions for each input field
    const positions = {
      fullName: 0,
      email: 60,
      phoneNumber: 360,
      coverLetter: 540
    };
    
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({
        y: positions[inputName as keyof typeof positions] || 0,
        animated: true
      });
    }, Platform.OS === 'ios' ? 50 : 150);
  };

  // Add keyboard listeners
  useEffect(() => {
    const keyboardWillShow = (e: KeyboardEvent) => {
      setKeyboardHeight(e.endCoordinates.height);
    };

    const keyboardWillHide = () => {
      setKeyboardHeight(0);
      setFocusedInput(null);
      scrollViewRef.current?.scrollTo({
        y: 0,
        animated: true
      });
    };

    const showSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      keyboardWillShow
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      keyboardWillHide
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // Add animation values
  const pan = useRef(new Animated.ValueXY()).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(1000)).current; // Start from below screen

  // Reset position and animate when modal opens
  useEffect(() => {
    if (visible) {
      pan.setValue({ x: 0, y: 0 });
      fadeAnim.setValue(0);
      slideAnim.setValue(1000); // Reset to starting position
      
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          damping: 50,
          stiffness: 120,
        })
      ]).start();
    }
  }, [visible]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
    },
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        pan.y.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 50) {
        Animated.parallel([
          Animated.timing(pan.y, {
            toValue: 1000,
            duration: 200,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
          })
        ]).start(onClose);
      } else {
        Animated.spring(pan.y, {
          toValue: 0,
          useNativeDriver: true
        }).start();
      }
    }
  });

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Animated.View style={[
        stylesApplyModal.blurContainer,
        {
          opacity: fadeAnim,
        }
      ]}>
        <BlurView
          intensity={20}
          tint={isDarkMode ? "dark" : "light"}
          style={stylesApplyModal.blurContainer}
        >
          <Pressable 
            style={stylesApplyModal.blurContainer} 
            onPress={onClose}
          >
            <Animated.View 
              style={[
                stylesApplyModal.modalView,
                isDarkMode && stylesApplyModal.darkModalView,
                { 
                  transform: [
                    { translateY: Animated.add(slideAnim, pan.y) } // Combine slide animation with pan gesture
                  ] 
                }
              ]}
              {...panResponder.panHandlers}
            >
              <Pressable 
                onPress={onClose}
                style={stylesApplyModal.dragIndicatorContainer}
              >
                <View 
                  style={[
                    stylesApplyModal.dragIndicator,
                    isDarkMode && stylesApplyModal.darkDragIndicator
                  ]} 
                />
              </Pressable>
              
              <View style={[stylesApplyModal.header,
                isDarkMode && stylesApplyModal.darkHeader]}>
                <Text style={[
                  stylesApplyModal.title,
                  isDarkMode && stylesApplyModal.darkTitle
                ]}>
                  Apply for {jobTitle}
                </Text>
                <Text style={[
                  stylesApplyModal.subtitle,
                  isDarkMode && stylesApplyModal.darkSubtitle
                ]}>
                  {companyName}
                </Text>
              </View>

              <Formik
                initialValues={initialValues}
                validationSchema={ApplyFormSchema}
                onSubmit={(values, { resetForm }) => {
                  onSubmit(values);
                  resetForm();
                  onClose();
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                  <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={[
                      stylesApplyModal.formContainer,
                      { paddingBottom: keyboardHeight > 0 ? keyboardHeight - 20 : 0 }
                    ]}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
                  >
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      keyboardShouldPersistTaps="handled"
                      contentContainerStyle={[
                        stylesApplyModal.scrollContent,
                        { paddingBottom: keyboardHeight > 0 ? keyboardHeight / 3 : 40 }
                      ]}
                      keyboardDismissMode="interactive"
                      ref={scrollViewRef}
                    >
                      <View style={stylesApplyModal.inputContainer}>
                        <Text style={[
                          stylesApplyModal.label,
                          isDarkMode && stylesApplyModal.darkLabel
                        ]}>
                          Full Name
                        </Text>
                        <TextInput
                          style={[
                            stylesApplyModal.input,
                            isDarkMode && stylesApplyModal.darkInput,
                            touched.fullName && errors.fullName && stylesApplyModal.inputError
                          ]}
                          onChangeText={handleChange('fullName')}
                          onBlur={(e) => {
                            handleBlur('fullName')(e);
                            setFocusedInput(null);
                          }}
                          onFocus={() => {
                            setFocusedInput('fullName');
                            scrollToInput('fullName');
                          }}
                          value={values.fullName}
                          placeholder="Enter your full name"
                          placeholderTextColor={isDarkMode ? "rgb(170, 170, 170)" : "rgb(102, 102, 102)"}
                        />
                        {touched.fullName && errors.fullName && (
                          <Text style={stylesApplyModal.errorText}>{errors.fullName}</Text>
                        )}
                      </View>

                      <View style={stylesApplyModal.inputContainer}>
                        <Text style={[
                          stylesApplyModal.label,
                          isDarkMode && stylesApplyModal.darkLabel
                        ]}>
                          Email Address
                        </Text>
                        <TextInput
                          style={[
                            stylesApplyModal.input,
                            isDarkMode && stylesApplyModal.darkInput,
                            touched.email && errors.email && stylesApplyModal.inputError
                          ]}
                          onChangeText={handleChange('email')}
                          onBlur={(e) => {
                            handleBlur('email')(e);
                            setFocusedInput(null);
                          }}
                          onFocus={() => {
                            setFocusedInput('email');
                            scrollToInput('email');
                          }}
                          value={values.email}
                          placeholder="Enter your email address"
                          placeholderTextColor={isDarkMode ? "rgb(170, 170, 170)" : "rgb(102, 102, 102)"}
                          keyboardType="email-address"
                          autoCapitalize="none"
                        />
                        {touched.email && errors.email && (
                          <Text style={stylesApplyModal.errorText}>{errors.email}</Text>
                        )}
                      </View>

                      <View style={stylesApplyModal.inputContainer}>
                        <Text style={[
                          stylesApplyModal.label,
                          isDarkMode && stylesApplyModal.darkLabel
                        ]}>
                          Phone Number
                        </Text>
                        <TextInput
                          style={[
                            stylesApplyModal.input,
                            isDarkMode && stylesApplyModal.darkInput,
                            touched.phoneNumber && errors.phoneNumber && stylesApplyModal.inputError
                          ]}
                          onChangeText={(text) => {
                            // Remove any non-digit characters except '+'
                            const cleaned = text.replace(/[^\d+]/g, '');
                            
                            // Format the number with sections
                            let formatted = '';
                            if (cleaned.startsWith('+639')) {
                              // International format: +639 XX XXX XXXX
                              const base = cleaned.slice(0, 4); // +639
                              const firstSection = cleaned.slice(4, 6);
                              const secondSection = cleaned.slice(6, 9);
                              const thirdSection = cleaned.slice(9, 13);
                              
                              formatted = [
                                base,
                                firstSection,
                                secondSection,
                                thirdSection
                              ].filter(Boolean).join(' ');
                            } else {
                              // Local format: 09XX XXX XXXX
                              const base = cleaned.slice(0, 4);
                              const secondSection = cleaned.slice(4, 7);
                              const thirdSection = cleaned.slice(7, 11);
                              
                              formatted = [
                                base,
                                secondSection,
                                thirdSection
                              ].filter(Boolean).join(' ');
                            }
                            
                            const digitCount = formatted.replace(/[^\d]/g, '').length;
                            if (digitCount <= 11 || (formatted.startsWith('+') && digitCount <= 13)) {
                              handleChange('phoneNumber')(formatted);
                            }
                          }}
                          onBlur={(e) => {
                            handleBlur('phoneNumber')(e);
                            setFocusedInput(null);
                          }}
                          onFocus={() => {
                            setFocusedInput('phoneNumber');
                            scrollToInput('phoneNumber');
                          }}
                          value={values.phoneNumber}
                          placeholder="09XX XXX XXXX"
                          placeholderTextColor={isDarkMode ? "rgba(170, 170, 170, 0.5)" : "rgba(102, 102, 102, 0.5)"}
                          keyboardType="phone-pad"
                          maxLength={values.phoneNumber?.startsWith('+') ? 16 : 13}
                        />
                        {touched.phoneNumber && errors.phoneNumber && (
                          <Text style={stylesApplyModal.errorText}>{errors.phoneNumber}</Text>
                        )}
                      </View>

                      <View style={stylesApplyModal.inputContainer}>
                        <Text style={[
                          stylesApplyModal.label,
                          isDarkMode && stylesApplyModal.darkLabel
                        ]}>
                          Why should we hire you?
                        </Text>
                        <TextInput
                          style={[
                            stylesApplyModal.textArea,
                            isDarkMode && stylesApplyModal.darkTextArea,
                            touched.coverLetter && errors.coverLetter && stylesApplyModal.inputError
                          ]}
                          onChangeText={handleChange('coverLetter')}
                          onBlur={(e) => {
                            handleBlur('coverLetter')(e);
                            setFocusedInput(null);
                          }}
                          onFocus={() => {
                            setFocusedInput('coverLetter');
                            scrollToInput('coverLetter');
                          }}
                          value={values.coverLetter}
                          placeholder="Tell us why you're the best candidate for this position..."
                          placeholderTextColor={isDarkMode ? "rgb(170, 170, 170)" : "rgb(102, 102, 102)"}
                          multiline
                          numberOfLines={6}
                          textAlignVertical="top"
                        />
                        {touched.coverLetter && errors.coverLetter && (
                          <Text style={stylesApplyModal.errorText}>{errors.coverLetter}</Text>
                        )}
                      </View>

                      <Pressable
                        onPress={() => handleSubmit()}
                        style={({ pressed }) => [
                          stylesApplyModal.submitButton,
                          isDarkMode && stylesApplyModal.darkSubmitButton,
                          pressed && stylesApplyModal.buttonPressed
                        ]}
                      >
                        <Text style={stylesApplyModal.submitButtonText}>Submit Application</Text>
                      </Pressable>
                    </ScrollView>
                  </KeyboardAvoidingView>
                )}
              </Formik>
            </Animated.View>
          </Pressable>
        </BlurView>
      </Animated.View>
    </Modal>
  );
};

export default ApplyModal; 