import { FlatList, Image, Text, View } from "react-native";
import QuickAccess from "../quickAccess";
import Button from "../button";
import { AntDesign } from "@expo/vector-icons";
import Portfolio from "../../assets/images/portfolio.png";
import Point from "../point";
import Announcement, { AnnouncementProps } from "../announcement";
import Pix from "../../assets/images/pix.png";
import Pay from "../../assets/images/pay.png";
import Loan from "../../assets/images/loan.png";
import IninitiateMoneyTransfer from "../../assets/images/initiateMoneyTransfer.png";
import RequestMoney from "../../assets/images/requestMoney.png";
import Phone from "../../assets/images/phone.png";
import { styles } from "./style";

interface AccountMenuProps {
  name: string;
  balance: number;
  hidden: boolean;
  listAnnouncement: AnnouncementProps[];
}

export default function AccountMenu({
  name,
  balance,
  hidden,
  listAnnouncement,
}: AccountMenuProps) {
  const quickAccess = [
    { name: "Área Pix", icon: Pix },
    { name: "Pagar", icon: Pay },
    { name: "Pegar emprestado", icon: Loan },
    { name: "transferir", icon: IninitiateMoneyTransfer },
    { name: "Depositar", icon: RequestMoney },
    { name: "Recarga de celular", icon: Phone },
  ];
  return (
    <View>
      <View style={styles.salute}>
        <Text style={styles.saluteText}>Olá, {name}</Text>
      </View>
      <View>
        <Button>
          <View style={styles.balance}>
            <View>
              <Text style={styles.balanceText}>Conta</Text>
              <Text style={styles.balanceText}>
                {hidden ? (
                  <>
                    <Point />
                    <Point />
                    <Point />
                    <Point />
                  </>
                ) : (
                  "R$ " + balance.toFixed(2).replace(".", ",")
                )}
              </Text>
            </View>
            <View>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </View>
        </Button>
        <FlatList
          horizontal={true}
          style={styles.marginHorizontal4}
          data={quickAccess}
          renderItem={(item) => (
            <QuickAccess
              key={item.index}
              name={item.item.name}
              icon={item.item.icon}
            />
          )}
        />
        <Button>
          <View style={styles.creditCard}>
            <Image source={Portfolio} style={styles.imagePortfolio} />
            <Text style={styles.creditCardText}>Meu cartões</Text>
          </View>
        </Button>
        <FlatList
          horizontal={true}
          style={styles.listAnnouncement}
          data={listAnnouncement}
          renderItem={(item) => (
            <Announcement
              key={item.index}
              title={item.item.title}
              information={item.item.information}
            />
          )}
        />
      </View>
    </View>
  );
}
