import React from 'react'
import { Login } from './login';
import { Main } from './OrderPlaced';

import { useState } from 'react';
import '../App.css'

export const Otpsender = () => {
    const [isAuthenticate,setAuth] = useState(false);

  return (
    <div>
            {!isAuthenticate?<Main/>:
        <div className='popup'>
          <Login isAuthenticate={isAuthenticate} setAuth={setAuth}/>

        </div>
        }
    </div>
  )
}
