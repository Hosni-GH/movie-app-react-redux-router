

const movielist= [
  
  
  {id:"",rating:2,name:"Abc",img:"https://maghreb.space/P622948/8f5a07bebb4d94ba59bceaf7f0690c46/___www_maghrebspace_net__12082014173148_262Afifa%20iskandar.jpg"},
  {id:"",rating:2,name:"Abc",img:"https://maghreb.space/P622948/8f5a07bebb4d94ba59bceaf7f0690c46/___www_maghrebspace_net__12082014173148_262Afifa%20iskandar.jpg"},




]


const listMoviesReducers=(state=movielist,action)=>{
  if (action.type==="add-Movie")
{    
  return [...state,{id:Math.random(),rating:action.ratingAdd,name:action.nameAdd,img:action.img}]
}
else if(action.type==="EDIT_MOVIE"){
  return action.value
}
return state

}



export default listMoviesReducers