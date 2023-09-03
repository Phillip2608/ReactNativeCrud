import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Users from "../data/Users";
import { Button, ListItem } from "@rneui/themed";
import { Avatar } from "@rneui/base";
import { Feather } from "@expo/vector-icons";

export default function UserList(props) {
  function confirmUserDelete(user) {
    Alert.alert("Excluir usuário", "Deseja excluir o usuário do sistema?", [
      {
        text: "Sim",
        onPress() {
          console.warn("delete" + user.id);
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate("UserForm", user)}
          type="clear"
          icon={<Feather name="edit" size={32} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDelete(user)}
          type="clear"
          icon={<Feather name="trash-2" size={32} color="red" />}
        />
      </>
    );
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate("UserForm")}
      >
        <Avatar size={48} rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        data={Users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
}
