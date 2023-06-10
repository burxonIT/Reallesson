import React, { Component } from 'react'
import './Login.css'
import img from './img/logo.png'
import face from './img/Facebook_Logo_(2019) 1.png'
import google from './img/image-removebg-preview (4) 2.png'
import kotta from './img/image 22.png'
import kotta2 from './img/image 22 (1).png'
export default class Login extends Component {
  state={
    data:"salom",
    page:1
  }
  none=()=>{
  document.querySelector(".aa").style="display:none"

  }
  componentDidMount(){
  setTimeout(()=>{
document.querySelector(".aa").style="display:none"
  }, 12000);
  var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);
}
//   plus=()=>{
//     this.setState({page:this.state.page+1})
//    }
//   minus=()=>{
//   this.setState({page:this.state.page-1})
//  }
  render() {
    return (
      <div className="asosiy">
        {/* <div className="aa"><img className='siuu' src="https://media.tenor.com/yIWsA_YgyiMAAAAM/sarhosternal-ronaldo.gif" alt="" /><h1 onClick={()=>this.none()}>пропустить</h1><progress value="0" max="10" id="progressBar"></progress></div> */}
        <div className="aa"><img className='imgaa' src="https://i.gifer.com/embedded/download/4seJ.gif" alt="" /><h1 onClick={()=>this.none()}>пропустить</h1><progress value="0" max="10" id="progressBar"></progress></div>

        <div className="logo"><img src={img} alt="" className='logotip' />
          {this.state.page===1?(<img src={kotta} alt=""className='katta' />):(<div><img src={kotta2} alt="" className='rimg'/></div>)}
           
            
        </div>
  {/* {this.state.page} */}
    <div className="form">
        <div className="all_button">
            <button style={this.state.page===1?
            {background:'#C2EDF4'}:{background:'white'}} className='butt1' onClick={()=>{this.setState({page:1})}}>Вход</button>
            <button style={this.state.page===1?
            {background:'white'}:{background:'#C2EDF4'}} className='butt2' onClick={()=>{this.setState({page:2})}}>Регистрация</button>
        </div>
    <div className="asosiy_form">
   {this.state.page===1?(<div className="login">
    <div className="pochta">
      <label htmlFor="">Почта/номер телефона</label>
      <input type="text" />
    </div>
      <div className="parol">
        <label htmlFor="">Пароль</label><br />
        <input type="text" />
      </div>
      <div className="chekbox">
      <input className='radio' type="radio" /><span>Запомнить меня</span></div>
      <div className="line"></div>
      <div className="voyti">
        <h1>Войти с помощью</h1>
      </div>
     <div className="img">
     <div className="face">
        <img src={face} alt="" />
      </div>
      <div className="google">
        <img src={google} alt="" />
      </div>
     </div>
   </div>):(<div className="registratsiya">
   <div className="pochta">
      <label htmlFor="">Почта/номер телефона</label>
      <input type="text" />
    </div>
      <div className="parol">
        <label htmlFor="">Пароль</label><br />
        <input type="text" />
      </div>
      <div className="povtarite_parol">
        <label htmlFor="">Повторите пароль</label><br />
        <input type="text" />
      </div>
      <div className="chekbox">
      <input className='radio' type="radio" /><span>Согласен с условиями</span></div>
      <div className="butt">
        <button className='ustoz'>Я учитель</button>
        <button className='oquvchi'>Я ученик</button>
      </div>

   </div>)}
            
            
        </div>
        </div>
    </div>
    )
  }
}
