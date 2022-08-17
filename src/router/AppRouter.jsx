import React from 'react'
import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heores';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>

   
    <Routes>
      
      {/* <Route path="login" element={<LoginPage />} /> */}
     
      {/* <Route path='/login' element={ */}

      <Route path='login/*' element={
        <PublicRoute> 
          {/* <LoginPage /> */}
        <Routes>
          <Route path='/*' element={<LoginPage /> } />
        </Routes>
        </PublicRoute>
      }/>

      
      {/* Este ejemplo es con proteccion de rutas si no se esta logeado */}
        <Route path='/*' element={ 
        <PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute> } />


      {/* Se importa esta ruta ya que es donde esta el Navbar
       esta es sin proteccion de rutas  */}
        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}


      </Routes>
    </>
  )
}
