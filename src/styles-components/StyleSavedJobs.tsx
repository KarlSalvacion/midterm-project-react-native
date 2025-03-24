import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
  },

  darkContainer: {
    backgroundColor: 'rgb(18, 18, 18)',
  },

  headerContainer: {
    height: 70,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgb(20, 71, 142)',
    elevation: 3,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  headerPressable: {
    width: '100%',
  },
  
  darkHeaderContainer: {
    backgroundColor: 'rgb(26, 26, 26)',
    borderBottomColor: 'rgb(40, 40, 40)',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
  },

  darkTitle: {
    color: 'rgb(255, 255, 255)',
  },

  jobItem: {
    padding: 16,
    backgroundColor: 'rgb(255, 255, 255)',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  darkJobItem: {
    backgroundColor: 'rgb(40, 40, 40)',
  },

  jobTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(51, 51, 51)',
    marginBottom: 4,
  },

  darkJobTitle: {
    color: 'rgb(255, 255, 255)',
  },

  companyName: {
    fontSize: 16,
    color: 'rgb(102, 102, 102)',
    marginBottom: 4,
  },

  darkCompanyName: {
    color: 'rgb(153, 153, 153)',
  },

  location: {
    fontSize: 14,
    color: 'rgb(102, 102, 102)',
  },

  darkLocation: {
    color: 'rgb(153, 153, 153)',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  emptyText: {
    fontSize: 16,
    color: 'rgb(102, 102, 102)',
    textAlign: 'center',
  },

  darkEmptyText: {
    color: 'rgb(153, 153, 153)',
  },

  listContainer: {
    padding: 20,
  },

  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(242, 242, 242)',
    padding: 12,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  darkMessageContainer: {
    backgroundColor: 'rgb(45, 45, 45)',
  },

  messageContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  messageText: {
    flex: 1,
    fontSize: 14,
    color: 'rgb(51, 51, 51)',
    marginRight: 12,
  },

  darkMessageText: {
    color: 'rgb(203, 203, 203)',
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

  unsaveMessageContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  darkUnsaveMessageContainer: {
    backgroundColor: 'rgb(30, 30, 30)',
  },
  unsaveMessageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  unsaveMessageText: {
    fontSize: 14,
    color: 'rgb(51, 51, 51)',
    flex: 1,
  },
  darkUnsaveMessageText: {
    color: 'rgb(203, 203, 203)',
  },
  unsaveUndoButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgb(243, 244, 246)',
    borderRadius: 6,
  },
  undoButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgb(20, 71, 142)',
  },
}); 