import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function UserForm({ route, navigation }) {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View>
      <Text>Nome</Text>
      <TextInput
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o Nome"
        value={user.name}
      />
    </View>
  );
}
