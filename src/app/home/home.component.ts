import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomechildComponent } from './homechild/homechild.component';
import{CommonServiceService}from'../services/common-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,HomechildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private obj:CommonServiceService){}

  sharedata = '';
  onsendData(){
    this.obj.setData(this.sharedata);
  }
  FullF={
  F1 :'',
  F2 :'',
  F3 :'',
  F4 :'',
  F5 :'',
  F6 :''
  F1sender='';
  F2sender='';
  }
  onclick()
  {
    const FullFD=this.FullF;
    this.FullFE=this.F2;
    this.FullFG=this.F3;
    this.FullFH=this.F4;
    this.FullFI=this.F5;
    this.FullFJ=this.F6;
  
    console.log("Clicked")
    console.log(this.F1sender)
  } 

  }
// currentaddress="current address"    

