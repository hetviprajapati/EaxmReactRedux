import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button } from 'reactstrap';

import * as ActionMovie from '../../Action/ActionMovie/ActionMovie'
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data:this.props.location.state.Data,
             mname:this.props.location.state.mname,
             booked:[],
             finalbooked:[],
             flag:true,
             AvailableSeat:'',
             bookedseat:''
        }
    }
    componentDidMount(){
        this.props.action.data.TheaterTicket(this.state.data.rdbid,this.state.data.date);
    }
    componentDidUpdate(){
       var bookedData=[];
       bookedData.push( this.props.Movie.result.booked)
        if(this.state.flag)
        {
            if(bookedData.length!==0)
            {
                this.setState({
                    booked:bookedData[0],
                    flag:false,
                    AvailableSeat:bookedData[0].length
                })
            }
        }
    }
    createButton=()=>{
        var arr=[];
        for(var i=0;i<20;i++)
        {
            if((i+1)%5===0)
            {
                arr.push(  
                   <button onClick={this.btnClick} style={{height:'50px',width:'50px',backgroundColor:'gray'}} id={i+1}>{i+1}</button>
                    ,<br></br> 
                )  
            }
            else
            {
                arr.push(
                    <button onClick={this.btnClick} id={i+1} style={{height:'50px',width:'50px',backgroundColor:'gray'}}>{i+1}</button> 
                 )
            }
        }
        return arr
    }
    btnClick=(e)=>{
          var final=[...this.state.finalbooked]
          if(document.getElementById(parseInt(e.target.id)).style.backgroundColor==='gray')
          {
            final.push(e.target.id);
            document.getElementById(parseInt(e.target.id)).style.backgroundColor='green'
          }
          else
          {
            final=final.filter(res => res!==e.target.id)
            document.getElementById(parseInt(e.target.id)).style.backgroundColor='gray'
          }
          this.setState({
            finalbooked:final,
            bookedseat:final.length
        })
    }
    onBook=(e)=>{
          var final=[...this.state.finalbooked]
          var booked=[...this.state.booked];
          final=final.concat(booked);
          this.setState({
              booked:final
          })
          var obj={
              booked:final
          }
          this.props.action.data.updateTicket(this.state.data.rdbid,this.state.data.date,obj)
    }
    render() {
        if(this.state.booked.length!==0)
        {
            var data=this.state.booked;
            data.map(res=>{
                    document.getElementById(parseInt(res)).style.backgroundColor='lightpink'
                    document.getElementById(parseInt(res)).disabled=true;
                 return null
            })
        }
        return (
               <div>
                   <center>
                       <h2>Ticket Book</h2>
                        {
                            <h4>{this.state.mname}  {this.state.data.date}</h4>
                        }
                        <div>
                       { this.createButton()}
                        </div>
                        <h4> Available Seat :{20-this.state.AvailableSeat} </h4>
                        <h4> Booked Seat :{this.state.bookedseat?this.state.bookedseat:0} </h4>
                        <Button onClick={this.onBook}>Book</Button>
                   </center>
               </div>
        )
    }
}
const mapStatetoProps = (state) => {
    const { Movie } = state
    return {
        Movie
    }
}
const mapDispatchToProps = dispatch => ({
    action: {
        data: bindActionCreators(ActionMovie, dispatch)
    }
})
export default connect(mapStatetoProps, mapDispatchToProps)(Movie)