const INITIAL_STATE={
    result:[],
    resultcode:'',
    err_msg:''
 }
 export const GET_MREQUEST='GET_MREQUEST';
 export const GET_MFAILED='GET_MFAILED';

 export const GET_TREQUEST='GET_TREQUEST';
 export const GET_TFAILED='GET_TFAILED';

export const UPDATE_REQUEST='UPDATE_REQUEST';
export const UPDATE_FAILED='UPDATE_FAILED';

 export default(state=INITIAL_STATE,action)=>{
   
     switch(action.type){
         case GET_MREQUEST:{
             return Object.assign({},state,{result:action.data.result,resultcode:action.data.resultcode});
         }
         case GET_MFAILED:{
              return Object.assign({},state,{resultcode:action.data.resultcode});
         }
         case GET_TREQUEST:{
            return Object.assign({},state,{result:action.data.result,resultcode:action.data.resultcode});
        }
        case GET_TFAILED:{
             return Object.assign({},state,{resultcode:action.data.resultcode});
        }
        case UPDATE_REQUEST:{
            return Object.assign({}, state, {result: state.result.map(res => {
                  return res._id === action.data.result._id ? action.data.result : res;
              })
            })
       }
       case UPDATE_FAILED:{
           return Object.assign({},state,{resultcode:action.data.resultcode});
       }
         default:
             return state; 
     }
 }