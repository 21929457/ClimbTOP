import {configureStore , createSlice} from '@reduxjs/toolkit'

let gold = createSlice({
    name : 'gold',
    initialState : 100,
    reducers : {
        payGold(state , gold){
            return state - gold.payload
        }
    }
  })
export default configureStore({
    reducer: {
        gold : gold.reducer
    }
})
export let {payGold} = gold.actions