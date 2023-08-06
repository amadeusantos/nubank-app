import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import TopBar from "./src/components/topBar";
import AccountMenu from "./src/components/accountMenu";
import Line from "./src/components/line";
import { useState } from "react";
import CreditCard from "./src/components/creditCard";
import Services from "./src/components/services";
import FindOutMore from "./src/components/findOutMore";
import TabBar from "./src/components/tabBar";

export default function App() {
  const [occult, setoccult] = useState(false);

  function alterVisibility() {
    setoccult(!occult);
  }

  return (
    <View>
      <ScrollView>
        <StatusBar style="inverted" backgroundColor="#8A05BE" />
        <TopBar setHidden={alterVisibility} />
        <AccountMenu
          name="Amadeu"
          balance={11.8}
          hidden={occult}
          listAnnouncement={[
            {
              title: "Você tem até R$12.500,00",
              information: "disponívies para empréstimo.",
            },
            {
              title: "Convide amigos para o Nubank",
              information: "e desbloqueie descontos...",
            },
          ]}
        />
        <Line />
        <CreditCard value="200,00"  limite="1.000,00" active />
        <Line />
        <Services />
        <Line />
        <FindOutMore />
        <View style={{height: 100}} />
      </ScrollView>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
