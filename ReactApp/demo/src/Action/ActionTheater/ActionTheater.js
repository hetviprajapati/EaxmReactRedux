import * as ThaterService from '../../Service/TheaterService/TheaterService'
import {GET_REQUEST,GET_FAILED} from '../../Reducer/ReducerTheater/ReducerTheater'


export  const TheaterShow=()=>{
    return (dispatch)=>{
        return new Promise((resolve,reject)=>{
        ThaterService.TheaterShow()
        .then((response)=>{ 
            if(response.status===200){
                dispatch({
                    type:GET_REQUEST,
                    data:{result:response.data}
                })
            }
            return resolve(response.status);
        })
        .catch((err)=>{
            if(err.response) {
                console.log(err.response)
               dispatch({
                   type:GET_FAILED,
                   data:{resultcode:err.response.status}
               })
               return reject(err.response.status);
            }
        })     
        });
    }
};

