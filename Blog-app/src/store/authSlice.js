import { createSlice } from "@reduxjs/toolkit";

const intialState ={
    status:false,
    userData:null,
}
const authSlice = createSlice({
    name:"auth",
    initialState: intialState,
    reducers:{
        login:(state, action)=>{
            state.status = true;
            state.userData = action.payload.userData;

        },
        logOut:(state)=>{
           state.status = false;
           state.userData = null;
        }
    }

})

 export {logOut,login}  from authSlice.actions;

export default  authSlice.reducer;
