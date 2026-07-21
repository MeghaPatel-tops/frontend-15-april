import { useReducer } from "react"

export const  initialState  = {count:0,isLogged:false,loggedUser:null}
const Reducer = (state,action)=>{
    switch(action.type){
        case "INCRE":
            return {count : state.count+1}
        
         case "DECRE":
            return {count : state.count-1}
        case "Login":
            return {isLogged:true,loggedUser:{name:"Mgeha"}}
        case "Logout":
            return {isLogged:false,loggedUser:null}
        default:
            return state
    }
}
export default Reducer

