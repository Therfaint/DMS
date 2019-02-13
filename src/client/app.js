/**
 * Created by therfaint- on 22/12/2018.
 */
import React, {Component} from 'react';
import fetch from 'cross-fetch';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Therfaint-'
    }
  }
  
  createWorkSpace(){
    fetch('/createWS').then(res => res.json()).then(res => console.log(res));
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <div>
        <a onClick={()=>this.createWorkSpace}>创建个人工作区</a>
        <a href="/download/FMDeviceManager_v3.1.9_a4dc9ac.tar.gz">下载</a>
      </div>
    );
  }
}
