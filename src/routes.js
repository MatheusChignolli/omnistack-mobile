import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      mavigationOptions: {
        title: "DevRadar"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Perfil no GitHub"
      }
    }, 
  }, {
    defaultNavigationOptions: {
      headerTintColor: "#FFFFFF",
      headerStyle: {
        backgroundColor: "#7D50E7"
      }
    }
  })
)

export default Routes;