import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import { UsersProvider } from "../context/UsersContext";

export default function Routes() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </UsersProvider>
  );
}
