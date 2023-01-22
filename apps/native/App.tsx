import { Provider } from "ui";
import HomeScreen from "./screens/homeScreen";

export default function Native() {

  return (
    <Provider>
      <HomeScreen/>
    </Provider>
  );
}