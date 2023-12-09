import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";


const MainStack = () => {
    const TabStack = createBottomTabNavigator();
    return (
        <TabStack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
            headerShown: false,
        }}
        >
            <TabStack.Screen name="Home" component={Home}/>
            {/*<TabStack.Screen name="Profile" component={Profile}/>*/}
        </TabStack.Navigator>
    )
}

export default MainStack;