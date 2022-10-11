import React, {useContext} from 'react';
import {SwitchTransition} from "react-transition-group";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import {privateRoutes, publicRoutes} from '/react-ot-a-do-ya/src/router/router';
import {AuthContext} from "../../context";
import Loader from "./Loader/Loader";

const AppRouter = () => {

    const {isAuth, isLoading}= useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }


    return ( <SwitchTransition>
           <Routes>
               <Route exact path="/about" element=<About/>/>
               <Route exact path="/posts" element=<Posts/>/>
               <Route exact path="/posts: id" element=<PostIdPage/>/>
           </Routes>
       </SwitchTransition>
    );
};
/* isAuth
       ?<switch>
               {privateRoutes.map(route=>
               <Route
                   component={route.component}
                   path={route.path}
                   exact={route.exact}
                   key={route.path}
                   />
                   )}
           </switch>
           :<switch>
               {publicRoutes.map(route=>
               <Route
                   components={route.component}
                   path={route.path}
                   exact={route.exact}
                   key={route.path}
               />
                   )}
           </switch>
   */
export default AppRouter;