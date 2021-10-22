// import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import GroupList from '../group/group-list';
// import GroupDetails from '../group/group-details';
// import { useAuth } from '../../hooks/useAuth';
// import Register from '../user/register';
// import Account from '../user/account';

function Main() {

// const { authData } = useAuth();

    return (
        <div>
            <h1>(Main)</h1>
            {/* {authData && <h3>{authData.user.username}</h3>} */}
            <Switch>
                <Route exact path ='/'>
                    <h1>INDEX</h1>
                    {/* <GroupList /> */}
                </Route>
                {/* <Route path ='/details/:id'>
                    <GroupDetails />
                </Route> */}
                <Route path ='/register'>
                    <h1>Register</h1>
                    {/* <Register /> */}
                </Route>
                <Route path ='/account'>
                    <h1>Account</h1>
                    {/* <Account /> */}
                </Route>
            </Switch>
            
        </div>
    )
};

export default Main;