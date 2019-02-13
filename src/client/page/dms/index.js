/**
 * Created by therfaint- on 26/12/2018.
 */
import React, {Component} from 'react';
import {Input, Upload, Button, message, Icon} from 'antd';
import fetch from 'cross-fetch';

export default class DMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ws: '',
      pc: '',
      an: '',
      fn: '',
    };
  }
  
  createWS() {
    const {ws} = this.state;
    fetch(`/createWS?dirname=${ws}`).then(res => res.json()).then(res => {
      if (res.success) {
        message.success(res.msg);
      }else{
        message.error(res.msg);
      }
    });
  }
  
  handleInputChange(e, key) {
    let state = {};
    state[key] = e.target.value;
    this.setState(state);
  };
  
  componentDidMount() {
    [1,2,3].reduce(()=>console.log(1))
    // fetch(`http://localhost:8080/upload`, {
    //   method: "post",
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   //make sure to serialize your JSON body
    //   body: JSON.stringify({
    //     a: 1
    //   })
    // }).then(res => res.json()).then(res => {
    //
    // });
  }
  
  render() {
    
    const {ws, pc, an, fn} = this.state;
    const props = {
      name: 'file',
      action: 'http://localhost:8080/upload',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    
    return <div>
      <Input value={ws} onChange={(e) => this.handleInputChange(e, 'ws')}/>
      <Button onClick={this.createWS.bind(this)}>创建</Button>
      <Input value={pc} onChange={(e) => this.handleInputChange(e, 'pc')}/>
      <Input value={an} onChange={(e) => this.handleInputChange(e, 'an')}/>
      <Input value={fn} onChange={(e) => this.handleInputChange(e, 'fn')}/>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    </div>;
  }
}
