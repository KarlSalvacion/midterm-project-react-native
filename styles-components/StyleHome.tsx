import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
    homeContainer: {
        flex: 1,
        padding: 20,
        width: "100%",
    },
    topContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    mainContainer: {
        flex: 1,
        width: "100%",
    },

    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    jobItem: {
        padding: 15,
        backgroundColor: "#f9f9f9",
        marginVertical: 5,
        borderRadius: 10,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    jobCompany: {
        fontSize: 16,
        color: "#555",
    },
    jobSalary: {
        fontSize: 14,
        color: "#007BFF",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    saveButton: {
        padding: 10,
        backgroundColor: "#28A745",
        borderRadius: 5,
    },
    savedButton: {
        backgroundColor: "#ccc",
    },
    applyButton: {
        padding: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },

    loading: {
        marginTop: 100, 
        alignSelf: "center", // Center the indicator horizontally
    },
});

export default stylesHome;
