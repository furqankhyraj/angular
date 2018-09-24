import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName = '';
  userName = '';
  resetUserNameFlag = true;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
    
  }

  updateUserName(){
    // console.log(this.userName)
    if(this.userName == ''){
      this.resetUserNameFlag = false;
    }else{
      this.resetUserNameFlag = true;
    }
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created & Name is '+this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickUserNameReset(){
    if(this.userName == ''){
      this.resetUserNameFlag = false;
    }else{
      this.resetUserNameFlag = true;
    }

  }

}
