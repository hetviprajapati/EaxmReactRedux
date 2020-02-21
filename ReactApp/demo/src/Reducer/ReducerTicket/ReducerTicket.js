const INITIAL_STATE={
    result:[],
    resultcode:'',
    err_msg:''
 }



 export default(state=INITIAL_STATE,action)=>{
     debugger;
    console.log("Reducer",action.data);
    switch(action.type){
      
        default:
            return state; 
    }
}