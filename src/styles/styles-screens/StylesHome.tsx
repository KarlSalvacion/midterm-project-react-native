import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
    homeContainer: {
        flex: 1,
        width: "100%",
    },

    mainContent: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },

    darkMainContent: {
        backgroundColor: 'rgb(17, 17, 17)',
    },

    headerContainer: {
        padding: 20,
        backgroundColor: 'rgb(20, 71, 142)',
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221, 221, 221)',
    },
    
    darkHeaderContainer: {
        backgroundColor: 'rgb(26, 26, 26)',
        borderBottomColor: 'rgb(41, 41, 41)',
    },

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Kodchasan-Bold',
    },

    darkTitle: {
        color: 'rgb(255, 255, 255)',
    },

    themeToggle: {
        width: 60,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    themeToggleButton: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: 'rgb(238, 238, 238)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

    darkThemeToggle: {
        backgroundColor: 'rgb(51, 51, 51)',
    },

    darkThemeToggleButton: {
        backgroundColor: 'rgb(250, 205, 80)',
    },

    
    flatListContainer: {
        padding: 20,
    },

    searchContainer: {
        marginBottom: 20,
    },

    searchInputContainer: {
        position: 'relative',
    },

    searchBar: {
        height: 48,
        borderWidth: 1,
        borderColor: "rgb(221, 221, 221)",
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingRight: 90,
        fontSize: 16,
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(51, 51, 51)',
    },

    darkSearchBar: {
        backgroundColor: 'rgb(45, 45, 45)',
        borderColor: 'rgb(68, 68, 68)',
        color: 'rgb(255, 255, 255)',
    },

    searchBarFocused: {
        borderColor: "rgb(0, 123, 255)",
        borderWidth: 2,
    },

    darkSearchBarFocused: {
        borderColor: "rgb(255, 215, 0)",
    },

    iconsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        alignItems: 'center',
        paddingRight: 8,
    },

    clearButton: {
        padding: 8,
        marginRight: 4,
    },

    searchButton: {
        padding: 8,
    },

    jobItem: {
        padding: 15,
        backgroundColor: "rgb(249, 249, 249)",
        marginVertical: 5,
        borderRadius: 10,
    },

    darkJobItem: {
        backgroundColor: "rgb(45, 45, 45)",
    },
    
    jobTitle: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'flex-start',
        textAlign: 'left',
        color: 'rgb(51, 51, 51)',
    },
    darkJobTitle: {
        color: 'rgb(255, 255, 255)',
    },
    jobCompany: {
        fontSize: 16,
        color: "rgb(85, 85, 85)",
    },
    darkJobCompany: {
        color: "rgb(170, 170, 170)",
    },
    jobSalary: {
        fontSize: 14,
        color: "rgb(0, 123, 255)",
    },
    darkJobSalary: {
        color: "rgb(255, 215, 0)",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    saveButton: {
        padding: 10,
        backgroundColor: "rgb(40, 167, 69)",
        borderRadius: 5,
    },
    darkSaveButton: {
        backgroundColor: "rgb(26, 93, 26)",
    },
    savedButton: {
        backgroundColor: "rgb(204, 204, 204)",
    },
    applyButton: {
        padding: 10,
        backgroundColor: "rgb(0, 123, 255)",
        borderRadius: 5,
    },
    darkApplyButton: {
        backgroundColor: "rgb(0, 86, 179)",
    },
    buttonText: {
        color: "rgb(255, 255, 255)",
        fontWeight: "bold",
    },
    darkButtonText: {
        color: "rgb(255, 255, 255)",
    },

    loading: {
        marginTop: 100, 
        alignSelf: "center",
    },

    footerLoader: {
        paddingVertical: 20,
        alignItems: 'center',
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },

    darkEmptyContainer: {
        backgroundColor: 'rgb(18, 18, 18)',
    },

    emptyText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'rgb(116, 116, 116)',
    },

    emptyIcon: {
        fontSize: 100,
        marginBottom: 30,
        color: 'rgb(116, 116, 116)',
    },

    darkEmptyIcon: {
        color: 'rgb(156, 163, 175)',
    },
        
    darkEmptyText: {
        color: 'rgb(156, 163, 175)',
    },
});

export default stylesHome;
