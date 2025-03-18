import { StyleSheet } from "react-native";

const stylesJobItems = StyleSheet.create({
    container: { 
        flexDirection: "row", 
        padding: 10, 
        borderBottomWidth: 1 
    },
    
    logo: { 
        width: 50, 
        height: 50, 
        marginRight: 10 
    },

    title: { 
        fontSize: 16, 
        fontWeight: "bold" 
    },

    company: { 
        fontSize: 14, 
        color: "gray" 
    },

    salary: { 
        fontSize: 14, 
        color: "green" 
    },
 });

 export default stylesJobItems;
  