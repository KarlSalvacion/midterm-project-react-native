import { StyleSheet } from 'react-native';

const stylesNavBar = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgb(255, 252, 252)',
    backgroundColor: 'rgb(255, 255, 255)',
    paddingTop: 10,
    paddingBottom: 8,
    height: 65,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  darkMainContainer: {
    backgroundColor: 'rgb(26, 26, 26)',
    borderTopColor: 'rgb(40, 40, 40)',
  },

  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
  icon: {
    fontSize: 24,
    color: 'rgb(102, 105, 109)',
  },

  activeIcon: {
    color: 'rgb(20, 71, 142)',
  },

  darkActiveIcon: {
    color: 'rgb(82, 130, 255)',
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginBottom: 4,
  },
 
  label: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: -4,
    color: 'rgb(102, 105, 109)',
  },

  activeLabel: {
    fontWeight: '600',
    color: 'rgb(20, 71, 142)',
  },

  darkLabel: {
    color: 'rgb(153, 153, 153)',
  },

  darkActiveLabel: {
    color: 'rgb(82, 130, 255)',
  },

  pressable: {
    backgroundColor: 'rgba(30, 27, 27, 0.35)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default stylesNavBar;