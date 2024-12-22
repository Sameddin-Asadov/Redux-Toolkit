import { useState } from 'react'

import './App.css'
import ProductList from './ProdcutSlice.jsx/ProductList'
import PageRoute from './config/PageRoute'
import Loading from './store/pages/Loading'

function App() {
 
 return(
  <div>
    <PageRoute/>
    <Loading/>
    
  </div>
 )
}

export default App
