import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

export const getList = createAsyncThunk("bus/getList", async(payload, {rejectWithValue})=>{
    let result = null;

    try{
        result = await axios.get('http://openapi.seoul.go.kr:8088/6c61594f5a7365753130325779546a57/json/CardBusTimeNew/1/24/202205/');
    }catch(err){
        result = rejectWithValue(err.response);
    }
    
    return result;
});

export const tab3AxiosSlice = createSlice({
    name: "tab3Axios",
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false
    },

    reducers: {},

    extraReducers: {
        [getList.pending]: (state, {payload})=>{
            return {...state, loading: true}
        },
        [getList.fulfilled]: (state, {payload})=>{
            return {
                ...state, 
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false
            }
        },
        [getList.rejected]: (state, {payload})=>{
             return {
                ...state, 
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false
            }
        },
    }
});

export default tab3AxiosSlice.reducer;