import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from '../Pages/MoviesPage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MoviesPage" component={MoviesPage} options={{headerShown: false}}/>
            <Stack.Screen name="MovieDetailsPage" component={MovieDetailsPage} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}
