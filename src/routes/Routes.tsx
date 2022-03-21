import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { themes } from '../global/themes';
import { UserState } from '../storage/ducks/user/types';
import { useAppSelector } from '../hooks/redux';
import { MainRoutes, AuthRoutes } from './app.routes';

interface StateProps {
    user: UserState;
}

type Props = StateProps;

const Routes: React.FC<Props> = (props) => {
    const user = useAppSelector(state => state.user.data)
    //const { user } = props;
    return (
        <NavigationContainer theme={themes.dark}>
            {user? <MainRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}




export default Routes;