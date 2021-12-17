
import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";
import StarterIntro from "./screens/StarterIntro";
import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import OTP from "./screens/OTP"
import ProductScreen from "./screens/ProductScreen"
import { supabase } from "./supabaseClient";


const theme = extendTheme({
  colors: {
    primary: nbTheme.colors.violet,
  },
});

const Drawer = createDrawerNavigator();
const ProductStack = createStackNavigator();
// const AuthStack = createStackNavigator();

const ProductScreenStack = () => (
	<ProductStack.Navigator screenOptions={{headerShown: false}}>
		<ProductStack.Screen name={"ProductScreen"} component={ProductScreen}/>
  	</ProductStack.Navigator>
)

const AuthScreenStack = () => (
	// <AuthStack.Navigator screenOptions={{headerShown: false}}>
	// 	<AuthStack.Screen name={"SignUp"} component={SignUp}/>
	// 	<AuthStack.Screen name={"SignIn"} component={SignIn}/>
	// 	<AuthStack.Screen name={"OTP"} component={OTP}/>
  	// </AuthStack.Navigator>
	<Drawer.Navigator screenOptions={{ headerShown: false }}>
	  <Drawer.Screen name={"SignUp"} component={SignUp} />
	  <Drawer.Screen name={"SignIn"} component={SignIn} />
	  <Drawer.Screen name={"OTP"} component={OTP} />
	  {/* <Drawer.Screen name={"ProductScreen"} component={ProductScreen} /> */}

  </Drawer.Navigator>
)

export default function App() {

	const [auth, setAuth] = useState(false);

	useEffect(() => {
		setAuth(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event, session) => {
			setAuth(session);
		})
	})

	return (
		<NativeBaseProvider theme={theme}>
			<NavigationContainer>
				
					{auth ? <ProductScreenStack/> : <AuthScreenStack/>}
				
				{/* <Drawer.Navigator screenOptions={{ headerShown: false }}>
					<Drawer.Screen name={"SignUp"} component={SignUp} />
					<Drawer.Screen name={"SignIn"} component={SignIn} />
					<Drawer.Screen name={"OTP"} component={OTP} />
					<Drawer.Screen name={"ProductScreen"} component={ProductScreen} />

				</Drawer.Navigator> */}
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
