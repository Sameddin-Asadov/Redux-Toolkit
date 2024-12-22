import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const Base_Url ='https://fakestoreapi.com'

const initialState ={
    products :[],
    product:{},
    loading : false
}

export const setProducts= createAsyncThunk('setproducts', async ()=>{
    const response = await axios.get(`${Base_Url}/products`)
    return response.data
})

export const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
extraReducers: (builder)=>{
builder.addCase(setProducts.pending , (state)=>{
    state.loading = true
})
builder.addCase(setProducts.fulfilled , (state , actions)=>{
    state.loading = false
    state.products = actions.payload
})
}
})

export const {} = ProductsSlice.actions

export default ProductsSlice.reducer