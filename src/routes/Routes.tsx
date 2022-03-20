import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { connect } from 'react-redux';
import { themes } from '../global/themes';
import { ApplicationState } from '../global/types';
import { UserState } from '../storage/ducks/user/types';
import { useAppSelector } from '../storage/hooks';
import { MainRoutes, AuthRoutes } from './app.routes';

interface StateProps {
    user: UserState;
}

type Props = StateProps;

const Routes: React.FC<Props> = (props) => {
    const user = useAppSelector(state => state.user)
    console.log(user)
    //const { user } = props;
    return (
        <NavigationContainer theme={themes.dark}>
            {user.email? <MainRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    user: state.user,
});



export default connect(mapStateToProps)(Routes);