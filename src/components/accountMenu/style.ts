import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    salute: { backgroundColor: "#8A05BE" },
    saluteText: { color: "#fff", fontSize: 18, padding: 16 },
    balance: {
        flexDirection: "row",
        width: "90%",
        padding: 10,
        marginVertical: 10,
        alignSelf: "center",
        justifyContent: "space-between",
    },
    balanceText: { fontSize: 16, fontWeight: "bold" },
    marginHorizontal4: { marginHorizontal: 16 },
    creditCard: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        width: "90%",
        borderRadius: 16,
        alignSelf: "center",
    },
    imagePortfolio: { width: 32, height: 32 },
    creditCardText: { marginLeft: 16, fontSize: 16 },
    listAnnouncement: { paddingLeft: 16, marginVertical: 6 }
})