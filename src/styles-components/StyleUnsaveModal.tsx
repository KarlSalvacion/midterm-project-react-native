import { StyleSheet } from "react-native";

const stylesUnsaveModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1, 5, 18, 0.5)',
    width: '100%',  
  },

  darkCenteredView: {
    backgroundColor: 'rgba(29, 29, 31, 0.5)',
  },

  modalView: {
    width: '90%',
    backgroundColor: 'rgb(242, 242, 242)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  darkModalView: {
    backgroundColor: 'rgb(45, 45, 45)',
  },
  messageContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTextTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: 'rgb(51, 51, 51)',
    marginRight: 12,
  },
  
  darkMessageTextTitle: {
    color: 'rgb(203, 203, 203)',
  },

  messageText:{
    fontWeight: '400',
  },
  
  undoButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  undoText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgb(20, 71, 142)',
  },
  darkUndoText: {
    color: 'rgb(82, 130, 255)',
  },
  closeButton: {
    padding: 4,
    marginLeft: 8,
  },
});

export default stylesUnsaveModal; 