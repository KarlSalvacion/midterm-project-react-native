import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 120,
  },
  modalContent: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftColor: 'rgb(20, 71, 142)',
    borderTopColor: 'rgb(225, 225, 225)',
    borderRightColor: 'rgb(225, 225, 225)',
    borderBottomColor: 'rgb(225, 225, 225)',
    borderRadius: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkModalContent: {
    backgroundColor: 'rgb(45, 45, 45)',
    borderTopColor: 'rgb(64, 64, 64)',
    borderRightColor: 'rgb(64, 64, 64)',
    borderBottomColor: 'rgb(64, 64, 64)',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  message: {
    fontSize: 16,
    color: 'rgb(0, 0, 0)',
  },
  darkMessage: {
    color: 'rgb(255, 255, 255)',
  },
  undoButton: {
    padding: 8,
  },
  undoText: {
    fontSize: 16,
    color: 'rgb(0, 123, 255)',
    fontWeight: '600',
  },
  darkUndoText: {
    color: 'rgb(64, 156, 255)',
  },

  closeIcon: {
    color: 'rgb(23, 30, 53)',
    fontSize: 24,
  },
  swipeIndicator: {
    width: 40,
    height: 4,
    backgroundColor: 'rgb(224, 224, 224)',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 8,
  },
}); 