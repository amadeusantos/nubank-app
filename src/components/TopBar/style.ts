import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 128,
        paddingHorizontal: 16,
        backgroundColor: "#8A05BE",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    perfilImage: { width: 36, height: 36, borderRadius: 30 },
    itensRight: { flexDirection: "row", alignItems: "center", justifyContent: "center" }
})