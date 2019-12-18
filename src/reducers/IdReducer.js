const IdReducer =(state="",action)=>{
    if(action.type==="GET_ID"){
        return action.id
    }
    return state

}
export default  IdReducer