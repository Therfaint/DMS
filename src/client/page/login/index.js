/**
 * Created by therfaint- on 26/12/2018.
 */
import React, {Component} from 'react';
import {Button, Input, message} from 'antd';
import fetch from 'cross-fetch';
import './index.less';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  
  login() {
    const {username, password} = this.state;
    fetch(`/login?username=${username}&password=${password}`).then(res => res.json()).then(res=>{
    
    });
  };
  
  handleInputChange(e, key) {
    let state = {};
    state[key] = e.target.value;
    this.setState(state);
  };
  
  render() {
    
    const {
      username,
      password,
    } = this.state;
    
    return (
      <div className="container">
        <div className="login-area">
          <div className="login-header">
            DMS
          </div>
          <div className="login-content">
            <Input style={{marginTop: 9}} value={username} placeholder="请输入用户名"
                   onChange={(e) => this.handleInputChange(e, 'username')}/>
            <Input style={{marginTop: 19}} value={password} placeholder="请输入密码"
                   type="password"
                   onChange={(e) => this.handleInputChange(e, 'password')}/>
          </div>
          <div className="login-footer">
            <Button type="primary" style={{width: '100%'}} onClick={this.login.bind(this)}>登录</Button>
          </div>
        </div>
      </div>
    );
  }
  
}
