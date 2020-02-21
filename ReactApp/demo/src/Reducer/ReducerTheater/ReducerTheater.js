const INITIAL_STATE={
    result:[],
    resultcode:'',
    err_msg:''
 }
 export const GET_REQUEST='GET_REQUEST';
 export const GET_FAILED='GET_FAILED';
 
 
 export default(state=INITIAL_STATE,action)=>{
     switch(action.type){
         case GET_REQUEST:{
             return Object.assign({},state,{result:action.data.result,resultcode:action.data.resultcode});
         }
         case GET_FAILED:{
              return Object.assign({},state,{resultcode:action.data.resultcode});
         }
         default:
             return state; 
     }
 }