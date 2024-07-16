import { StyleSheet } from "react-native";

const BlockStyle = StyleSheet.create({
    infoContainer: {
        borderRadius: 15,
        backgroundColor: '#FBF6E2',
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    courseContainer: {
        borderRadius: 15,
        backgroundColor: '#D6EFD8',
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default BlockStyle