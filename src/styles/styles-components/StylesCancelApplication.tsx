import { StyleSheet } from "react-native";

const stylesCancelApplication = StyleSheet.create({
    blurContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(1, 5, 18, 0.5)',
      width: '100%',
    },
    
    modalView: {
      margin: 20,
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: 16,
      padding: 24,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '85%',
    },
    darkModalView: {
      backgroundColor: 'rgb(30, 30, 30)',
    },
    iconContainer: {
      marginBottom: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 8,
      color: 'rgb(51, 51, 51)',
      textAlign: 'center',
    },
    darkTitle: {
      color: 'rgb(255, 255, 255)',
    },
    message: {
      fontSize: 16,
      color: 'rgb(102, 102, 102)',
      marginBottom: 24,
      textAlign: 'center',
    },
    darkMessage: {
      color: 'rgb(170, 170, 170)',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      gap: 12,
    },
    button: {
      flex: 1,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    cancelButton: {
      backgroundColor: 'rgb(243, 244, 246)',
    },
    confirmButton: {
      backgroundColor: 'rgb(220, 38, 38)',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'rgb(51, 51, 51)',
    },
    confirmButtonText: {
      color: 'white',
    },
  });

export default stylesCancelApplication;