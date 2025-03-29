import { StyleSheet } from 'react-native';

const stylesConfirmApplyModal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(5, 7, 10, 0.5)'
      },
      
      blurContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },

      confirmModalView: {
        width: '90%',
        borderRadius: 15,
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      
      darkConfirmModalView: {
        backgroundColor: 'rgb(30, 30, 30)'
      },
      
      confirmTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
      },
      
      darkTitle: {
        color: 'white'
      },

      confirmMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#666'
      },

      darkSubtitle: {
        color: 'white'
      },
      
      confirmButton: {
        backgroundColor: 'rgb(20, 71, 142)',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 50,
        elevation: 2
      },

      darkConfirmButton: {
        backgroundColor: 'rgb(20, 71, 142)'
      },

      buttonPressed: {
        opacity: 0.5
      },

      submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
      },
      
      
      
      
}); 

export default stylesConfirmApplyModal;
