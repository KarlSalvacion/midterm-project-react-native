import { StyleSheet } from "react-native";

const stylesNotifyCancelModal = StyleSheet.create({
    blurContainer: {
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

    messageTitle: {
        fontSize: 16,
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold',
    },

    darkMessage: {
        color: 'white',
    },    

    messageTextTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgb(51, 51, 51)',
        marginRight: 12,
    },

    messageText: {
        fontSize: 14,
        fontWeight: '400',

    },

    closeButton: {
        padding: 8,
    },
})          

export default stylesNotifyCancelModal;
