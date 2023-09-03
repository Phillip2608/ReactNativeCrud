import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { Button, ListItem, Avatar, Icon } from "@rneui/themed";
import { useContext } from "react";
import UsersContext from "../context/UsersContext";

export default function UserList(props) {
  const { state } = useContext(UsersContext);

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
          icon={<Icon name="edit" size={32} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDelete(user)}
          type="clear"
          icon={<Icon name="delete" size={32} color="red" />}
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
        data={state.Users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
}
