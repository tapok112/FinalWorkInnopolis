import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ItemList from "./pages/CameraList/ItemList";
import LoginPage from "./pages/sign-in/login-page";
import Cart from './pages/Cart/Cart';
import { Context } from "./Context";
import {ProtectedPage} from "./components/ProtectedPage";
import AnyCamera from "./pages/AnyCamera/AnyCamera";
import Profile from './pages/Profile/Profile';
import { setAuthData } from './reducers';
import { useDispatch, useSelector } from 'react-redux';
import Subscribes from './pages/Subscribes/Subscribes';

export const App = () => {

    const id = useSelector(state => state.main.id);
    const token = useSelector(state => state.main.token);

    const dispatch = useDispatch();

    const [isAuth, setIsAuth] = useState(() => {

        const isAuth = localStorage.getItem('isAuth');
        
        if (isAuth === 'true') {
          return true
        }
    
        return false
      })

    const onExit = () => {
        setIsAuth(false);
        dispatch(setAuthData('',''));

    }
    const onAuth = (bool) => {
        if (bool === true) {
         setIsAuth(true)
        }
        else setIsAuth(false)
    }

    useEffect(() => {
        localStorage.setItem('isAuth', isAuth)
      }, [isAuth]);

    useEffect(() => {
        localStorage.setItem('id', id)
    }, [id])

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

  return (
      <Context.Provider value = {{onExit, isAuth, onAuth}}>
            <Routes>
                <Route path = "/*" element={<Subscribes />} />
                <Route path = '/login' element={<LoginPage />} />
                <Route path = '/profile' element = {
                    <ProtectedPage>
                        <Profile />
                    </ProtectedPage>}>
                </Route>
                <Route path = '/cart' element={<Cart />} />
                <Route path = '/catalog/*' element={<ItemList />} />
                <Route path = '/catalog/:id' element={<AnyCamera/>} />
            </Routes>
      </Context.Provider>
  )
}
export default App;
