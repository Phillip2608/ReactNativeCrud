import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import UserForm from "../screens/UserForm";
import UserList from "../screens/UserList";
import { Button } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="UserList" screenOptions={screenOpt}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Página Inicial" }}
      />
      <Stack.Screen
        name="UserForm"
        component={UserForm}
        options={{ title: "Formulário de Usuários" }}
      />
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={({ navigation }) => {
          return {
            title: "Lista de Usuários",
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate("UserForm");
                }}
                type="clear"
                icon={<Feather name="plus" color="#fff" size={32} />}
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

const screenOpt = {
  headerStyle: {
    backgroundColor: "#425b96",
  },
  headerTintColor: "#fff",
  headerTintStyle: {
    fontWeight: "bold",
  },
};
