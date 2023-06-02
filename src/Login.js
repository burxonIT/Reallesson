import React, { Component } from 'react'
import './Login.css'
import img from './img/logo.png'
export default class Login extends Component {
  State={
    data:"salom",
    page:1
  }
  plus=()=>{
    this.setState({page:this.state.page+1})
   }
  minus=()=>{
  this.setState({page:this.state.page-1})
 }
  render() {
    return (
      <div className="asosiy">
        <div className="logo">
            <img src={img} alt="" />
            <img src="" alt=""className='katta' />
        </div>
  {this.State.page}
    <div className="form">
        <div className="all_button">
            <button onClick={()=>{this.setState({page:1})}}>Вход</button>
            <button onClick={()=>{this.setState({page:2})}}>Регистрация</button>
        </div>
    <div className="asosiy_form">
      {this.state.page===1?(<div className="login">login</div>):(<div className="registratsiya">registratsiya</div>)}
            
            
        </div>
        </div>
    </div>
    )
  }
}
