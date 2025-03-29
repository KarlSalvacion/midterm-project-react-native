import { StyleSheet } from "react-native";

const stylesCancelApplicationModal = StyleSheet.create({
    blurContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(5, 7, 10, 0.5)',
        width: '100%',
    },
    modalView: {        
        margin: 20,
        backgroundColor: 'rgb(250, 250, 250)',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        shadowColor: 'rgb(0, 0, 0)',
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

    jobTitleText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'rgb(28, 28, 28)',
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
        justifyContent: 'center',
    },

    pressedButton: {
        opacity: 0.5,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },

    noButton: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        borderColor: 'rgb(187, 187, 187)',
    },

    darkNoButton: {
        backgroundColor: 'rgb(42, 42, 42)',
        borderColor: 'rgb(105, 105, 105)',
    },

    noButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'rgb(42, 42, 42)',
    },

    darkNoButtonText: {
        color: 'rgb(255, 255, 255)',
    },

    confirmButton: {
        backgroundColor: 'rgb(220, 38, 38)',
        borderWidth: 1,
        borderColor: 'rgb(220, 38, 38)',
    },

    darkConfirmButton: {
        backgroundColor: 'rgb(220, 38, 38)',
        borderColor: 'rgb(220, 38, 38)',
    },

    confirmButtonText: {
        color: 'rgb(255, 255, 255)',
    },
    darkConfirmButtonText: {
        color: 'rgb(255, 255, 255)',
    },
});

export default stylesCancelApplicationModal;