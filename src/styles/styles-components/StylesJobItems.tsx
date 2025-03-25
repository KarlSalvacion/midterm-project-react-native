import { StyleSheet } from "react-native";

const stylesJobItems = StyleSheet.create({
    mainContainer: { 
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgb(229, 229, 229)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    darkMainContainer: {
        backgroundColor: "rgb(30, 29, 29)",
        borderColor: 'rgb(66, 66, 67)',
    },

    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    logo: { 
        width: 44,
        height: 44,
        marginRight: 12,
        borderRadius: 8,
    },

    detailsContainer: {
        flex: 1,
        marginRight: 12,
    },

    title: { 
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 4,
        color: '#1A1A1A',
    },

    darkTitle: {
        color: 'rgb(255, 255, 255)',
    },

    company: { 
        fontSize: 14,
        fontWeight: "500",
        color: "#666",
        marginBottom: 4,
    },

    darkCompany: {
        color: "rgb(170, 170, 170)",
    },

    salaryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -8,
        width: '100%',
    },

    jobInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -5,
        marginBottom: 4,
    },

    jobTypeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        gap: 5
    },  

    workModelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },

    icon: {
        marginRight: 4,
        color: "rgb(102, 102, 102)",
        fontSize: 12,
    },

    darkIcon: {
        color: "rgb(255, 255, 255)",
    },

    jobInfo: {
        fontSize: 13,
        color: "rgb(102, 102, 102)",
    },

    darkJobInfo: {
        color: "rgb(235, 235, 235)",
    },

    dot: {
        fontSize: 13,
        color: "rgb(102, 102, 102)",
        marginHorizontal: 6,
    },

    darkDot: {
        color: "rgb(235, 235, 235)",
    },

    salary: { 
        fontSize: 16,
        fontWeight: '600',
        color: 'rgb(20, 71, 142)',
        flex: 1,
        marginRight: 8,
    },

    darkSalary: {
        color: "rgb(235, 235, 235)",
    },

    salaryUnavailable: {
        color: '#D32F2F',
    },

    buttonContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 20,
        marginLeft: 'auto',
        flexShrink: 0,
    },

    applyButton: {
        backgroundColor: 'rgb(20, 71, 142)',
        paddingVertical: 10,
        paddingHorizontal: 18,
        minWidth: 110,
        borderRadius: 6,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },

    darkApplyButton: {
        backgroundColor: "rgb(0, 75, 154)",
    },

    buttonPressed: {
        opacity: 0.7,
    },

    applyButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },

    darkButtonText: {
        color: "rgb(255, 255, 255)",
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },

    titleContainer: {
        flex: 1,
        marginRight: 10,
    },

    bookmarkButton: {
        padding: 4,
    },

    applyButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkIcon: {
        marginRight: 4,
    },

    appliedButton: {
        backgroundColor: 'rgb(20, 71, 142)',
        opacity: 0.5,
    },
    
    darkAppliedButton: {
        backgroundColor: "rgba(58, 121, 214, 0.66)",
    },

    appliedButtonText: {
        color: 'rgb(255, 255, 255)',
    },

});

export default stylesJobItems;
  