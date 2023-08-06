import { FlatList, Text, View } from "react-native";
import Card from "../card";

export default function FindOutMore() {
  const services = [
    {
      title: "Parcele compras no app",
      information: "Descontos em compras à vista no crédito, controle total sobr...",
      image:
        "https://www.melhorescartoes.com.br/wp-content/uploads/2021/05/nova-logo-nubank.jpg",
    },
    {
      title: "Portabilidade de salário",
      information: "Sua liberdade financeira começa com você escolhend...",
      image:
        "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2017/01/formacao_sera-que-sou-uma-pessoa-que-tem-virtudes.jpg",
    },
    {
      title: "Indique seus amigos",
      information: "Mostre aos seus amigos como é fácil ter uma vida sem ...",
      image:
        "https://www.eusemfronteiras.com.br/wp-content/uploads/2019/11/shutterstock_1392193913-810x540.jpg",
    },
    {
      title: "WhatsApp",
      information: "Pagamentos seguros, rápidos e sem tarifa. A experiência ...",
      image:
        "https://www.callbell.eu/wp-content/uploads/2019/03/Senza-nome.png",
    }
  ];

  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 6 }}>
        Descubra mais
      </Text>
      <FlatList
        horizontal={true}
        data={services}
        renderItem={(item) => (
          <Card
            key={item.index}
            image={item.item.image}
            title={item.item.title}
            information={item.item.information}
          />
        )}
      />
    </View>
  );
}
