import { FlatList, Image, Text, View } from "react-native";
import QuickAccess from "../quickAccess";
import Button from "../button";
import { AntDesign } from '@expo/vector-icons';
import Portfolio from "../../assets/images/portfolio.png";
import Point from "../point";
import Announcement, { AnnouncementProps } from "../announcement";
import Pix from "../../assets/images/pix.png";
import Pay from "../../assets/images/pay.png";
import Loan from "../../assets/images/loan.png";
import IninitiateMoneyTransfer from "../../assets/images/initiateMoneyTransfer.png";
import RequestMoney from "../../assets/images/requestMoney.png";
import Phone from "../../assets/images/phone.png"

interface AccountMenuProps {
  name: string
  balance: number
  hidden: boolean
  listAnnouncement: AnnouncementProps[]
} 


export default function AccountMenu({name, balance, hidden, listAnnouncement }: AccountMenuProps) {

  const quickAccess = [{name: "Área Pix", icon: Pix}, {name: "Pagar", icon: Pay}, {name: "Pegar emprestado", icon: Loan}, {name: "transferir", icon: IninitiateMoneyTransfer},{name: "Depositar", icon: RequestMoney}, {name: "Recarga de celular", icon: Phone}]
  return (
    <View>
      <View style={{ backgroundColor: "#8A05BE" }}>
        <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
          Olá, {name}
        </Text>
      </View>
      <View>
        <Button>
          <View style={{flexDirection: "row", width: "90%", padding: 10, marginVertical: 10, alignSelf: "center", justifyContent: "space-between"}}>
            <View>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>Conta</Text>
              <Text style={{fontSize: 16, fontWeight: "bold"}}>{hidden? <><Point /><Point /><Point /><Point /></>:"R$ " + balance.toFixed(2).replace(".", ",")}</Text>
            </View>
            <View>
            <AntDesign name="right" size={20} color="black" />
            </View>
          </View>
        </Button>
        <FlatList horizontal={true} style={{ marginHorizontal: 16 }} data={quickAccess} renderItem={item => <QuickAccess key={item.index} name={item.item.name} icon={item.item.icon} />} />
        <Button>
          <View style={{ flexDirection: "row", padding: 10, alignItems: "center", backgroundColor: "#F5F5F5", width: "90%", borderRadius: 16, alignSelf: "center" }}>
          <Image source={Portfolio} style={{ width: 32, height: 32 }} />
          <Text style={{marginLeft: 16, fontSize: 16}}>Meu cartões</Text>
          </View>
        </Button>
        <FlatList horizontal={true} style={{ paddingLeft: 16, marginVertical: 6 }} data={listAnnouncement} renderItem={item => <Announcement key={item.index} title={item.item.title} information={item.item.information} />} />
          
      </View>
    </View>
  );
}
