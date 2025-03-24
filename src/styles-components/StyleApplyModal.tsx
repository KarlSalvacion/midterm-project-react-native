import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const stylesApplyModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  blurContainer: {
    flex: 1,
    backgroundColor: 'rgba(46, 49, 58, 0.26)',
    width: '100%',
  },

  modalView: {
    width: '100%',
    height: '90%',
    backgroundColor: 'rgb(255, 255, 255)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  dragIndicatorContainer: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
  },

  dragIndicator: {
    width: 60,
    height: 4,
    backgroundColor: 'rgb(158, 158, 158)',
    borderRadius: 2,
  },

  darkDragIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  header: {
    padding: 20,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },

  darkHeader: {
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgb(51, 51, 51)',
    marginBottom: 4,
  },
  darkTitle: {
    color: 'rgb(255, 255, 255)',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgb(102, 102, 102)',
  },
  darkSubtitle: {
    color: 'rgb(170, 170, 170)',
  },
  closeButton: {
    position: 'absolute',
    right: -10,
    top: 0,
    padding: 8,
  },
  formContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgb(51, 51, 51)',
    marginBottom: 8,
  },
  darkLabel: {
    color: 'rgb(203, 203, 203)',
  },
  input: {
    backgroundColor: 'rgb(245, 245, 245)',
    borderWidth: 1,
    borderColor: 'rgb(222, 222, 222)',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'rgb(51, 51, 51)',
  },
  darkInput: {
    backgroundColor: 'rgb(45, 45, 45)',
    color: 'rgb(255, 255, 255)',
    borderColor: 'rgb(60, 60, 60)',
  },
  textArea: {
    backgroundColor: 'rgb(245, 245, 245)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgb(222, 222, 222)',
    padding: 12,
    fontSize: 16,
    color: 'rgb(51, 51, 51)',
    minHeight: 120,
  },
  darkTextArea: {
    backgroundColor: 'rgb(45, 45, 45)',
    color: 'rgb(255, 255, 255)',
    borderColor: 'rgb(60, 60, 60)',
  },

  inputError: {
    borderWidth: 1,
    borderColor: 'rgb(220, 38, 38)',
  },
  errorText: {
    color: 'rgb(220, 38, 38)',
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: 'rgb(20, 71, 142)',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  darkSubmitButton: {
    backgroundColor: 'rgb(0, 75, 154)',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  submitButtonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 16,
    fontWeight: '600',
  },
  darkModalView: {
    backgroundColor: 'rgb(30, 30, 30)',
  },
});

export default stylesApplyModal; 