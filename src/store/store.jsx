import { configureStore } from "@reduxjs/toolkit";
import ProductsRedux  from "../ProdcutSlice.jsx/ProductsSlice";

 

 export const store = configureStore({
    reducer:{
        product: ProductsRedux
    }
 }) 