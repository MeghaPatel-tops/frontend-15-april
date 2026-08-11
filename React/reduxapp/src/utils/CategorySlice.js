import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../Firebase/db";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";


export const createCategory = createAsyncThunk('createCategory',async(data)=>{
    try {
        const docRef = collection(db,'category');
        const res = await addDoc(docRef,data)
        
        return {
                id:res.id,
                msg:"Category added"
        }
        
    } catch (error) {
       console.log(error.message);
       let eMsg = {err:error.message}
       return  eMsg
       
    }
})

export const getCategory =createAsyncThunk('getCategory',async()=>{
    try {
        const docRef = collection(db,"category");
        const querySnapShort = await getDocs(docRef);
        let catArray = [];
        querySnapShort.forEach((doc)=>{
              catArray.push({...doc.data(),id:doc.id})
        })
         return catArray;
        
    } catch (error) {
        console.log(error);
        return error.message
    }
})

export const deleteCategory = createAsyncThunk('deleteCategory',async(id)=>{
    try {
        const docRef = doc(db,"category",id);
        const res = await deleteDoc(docRef);
        return {
            msg:"Category Deleted!"
        }
    } catch (error) {
        return error.message;
    }
})

export const getCategoryById= createAsyncThunk('getCategoryById',async(id)=>{
    try {
        const docRef= doc(db,'category',id);
        const res = await getDoc(docRef);
        const data = res.data();
        return data;
    } catch (error) {
        return error.message
    }
})

export const updateCategory= createAsyncThunk('updateCategory',async(data)=>{
    try {
        const docRef= doc(db,'category',data.cid);
       
        const res = await updateDoc(docRef,data.catdata);
       
        
        return {
            msg:'Category updated!'
        }
    } catch (error) {
        console.log(error);
        
        return error.message
    }
})

const CategorySlice = createSlice({
    name:"category",
    initialState:{
        singleCat:{},
        catMsg:null,
        catError:null,
        catLoader:null,
        catArray:[]
    },
    extraReducers:(builder)=>{
       builder.addCase(createCategory.pending,(state,action)=>{
           state.catLoader=true; 
       })
       .addCase(createCategory.fulfilled,(state,action)=>{
           state.catLoader=null;
           console.log(action.payload.msg);
           
           state.catMsg=action.payload.msg
           
       })
       .addCase(createCategory.rejected,(state,action)=>{
            state.catLoader=null;
            state.catError=action.payload
            console.log("in promise",state.catError);   
       })
        .addCase(getCategory.pending,(state,action)=>{
                state.catLoader=true;
               
       })
       .addCase(getCategory.fulfilled,(state,action)=>{
          state.catLoader=false;
           state.catArray=action.payload
           
       })
       .addCase(getCategory.rejected,(state,action)=>{
            state.catLoader=false;
            state.catError=action.payload
           
       })
       .addCase(deleteCategory.pending,(state,action)=>{
                state.catLoader=true;
               
       })
       .addCase(deleteCategory.fulfilled,(state,action)=>{
          state.catLoader=false;
           state.catMsg=action.payload.msg
       })
       .addCase(deleteCategory.rejected,(state,action)=>{
            state.catLoader=false;
            state.catError=action.payload
           
       })
        .addCase(getCategoryById.pending,(state,action)=>{
                state.catLoader=true;
               
       })
       .addCase(getCategoryById.fulfilled,(state,action)=>{
          state.catLoader=false;
           state.singleCat= action.payload
       })
       .addCase(getCategoryById.rejected,(state,action)=>{
            state.catLoader=false;
            state.catError=action.payload
           
       })
       .addCase(updateCategory.pending,(state,action)=>{
           state.catLoader=true; 
       })
       .addCase(updateCategory.fulfilled,(state,action)=>{
           state.catLoader=null;
         
           state.catMsg=action.payload.msg
           
       })
       .addCase(updateCategory.rejected,(state,action)=>{
            state.catLoader=null;
            state.catError=action.payload
               
       })
    }
})

const  CategoryReducer = CategorySlice.reducer;
export default CategoryReducer