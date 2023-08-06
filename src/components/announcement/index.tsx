import { Text, View } from "react-native";
import Button from "../button";

export interface AnnouncementProps {
    title: string;
    information: string;

}

export default function Announcement({title, information}: AnnouncementProps) {
    return (
        <Button>
            <View style={{ width: 256, backgroundColor: "#F5F5F5", justifyContent: "center", alignItems: "center", padding: 12}}>
              <Text style={{color: "#8A05BE"}}>
                {title}<Text style={{color: "#000"}}> {information}</Text>
              </Text>
            </View>
          </Button>
          
    )
}