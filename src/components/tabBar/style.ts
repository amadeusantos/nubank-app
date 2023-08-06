import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flexDirection: "row", position: "absolute", bottom: 36, backgroundColor: "#dedede", borderRadius: 30, alignSelf: "center" },
    active: { backgroundColor: "#8A05BE", width: 56, height: 48, justifyContent: "center", alignItems: "center", borderRadius: 30 },
    disable: { backgroundColor: "#dedede", width: 56, height: 48, justifyContent: "center", alignItems: "center", borderRadius: 30 }
})