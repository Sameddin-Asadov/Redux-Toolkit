import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from './ProductsSlice';
import Product from '../store/pages/Product';

function ProductList() {

const dispatch = useDispatch()
const {products}= useSelector((store)=> store.product);

console.log(products)

    useEffect(()=>{
        dispatch(setProducts())
    },[])
  return (
    <div>
      {products && products.map((product)=>(
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductList
