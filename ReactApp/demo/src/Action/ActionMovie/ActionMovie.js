import * as ThaterService from '../../Service/TheaterService/TheaterService'
import {GET_MREQUEST,GET_MFAILED,GET_TREQUEST,GET_TFAILED,UPDATE_REQUEST,UPDATE_FAILED} from '../../Reducer/ReducerMovie/ReducerMovie'


export  const TheaterMovie=(id)=>{
    return (dispatch)=>{
        return new Promise((resolve,reject)=>{
        ThaterService.TheaterMovie(id)
        .then((response)=>{ 
            console.log("response",response);
            if(response.status===200){
                dispatch({
                    type:GET_MREQUEST,
                    data:{result:response.data}
                })
            }
            return resolve(response.status);
        })
        .catch((err)=>{
            if(err.response) {
                console.log(err.response)
               dispatch({
                   type:GET_MFAILED,
                   data:{resultcode:err.response.status}
               })
               return reject(err.response.status);
            }
        })     
        });
    }
};

export  const TheaterTicket=(id,date)=>{
    return (dispatch)=>{
        return new Promise((resolve,reject)=>{
        ThaterService.TheaterTicket(id,date)
        .then((response)=>{ 
            if(response.status===200){
                dispatch({
                    type:GET_TREQUEST,
                    data:{result:response.data}
                })
            }
            return resolve(response.status);
        })
        .catch((err)=>{
            if(err.response) {
               dispatch({
                   type:GET_TFAILED,
                   data:{resultcode:err.response.status}
               })
               return reject(err.response);
            }
        })     
        });
    }
};

export const updateTicket=(id,date,credential)=>{
    return(dispatch)=>{
        return new Promise((resolve,reject)=>{
        ThaterService.updateTicket(id,date,credential)
        .then((response)=>{
            console.log(credential);
            if(response.status===200)
            {
                dispatch({
                    type:UPDATE_REQUEST,
                    data:{result:response.data,resultcode:response.status}
                })
            }
            return resolve(response.status);
        }).catch(err=>{
            dispatch({
                type:UPDATE_FAILED,
                data:{resultcode:err.response}
            })
            return reject(err.response);
        })
    })  
    }
}


