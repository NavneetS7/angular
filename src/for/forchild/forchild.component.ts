import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CommonServiceService}from '../../app/services/common-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-forchild',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forchild.component.html',
  styleUrl: './forchild.component.css'
})
export class ForchildComponent {
  userdatarecive = {
    firstname:'',
    lastname:'',
  }
  header = ["FirstName","LastName"];

constructor (private css:CommonServiceService){}
getData(){
  this.css.userData$.subscribe(res=>{
    this.userdatarecive=res;

    this.detail[0][0] = this.userdatarecive.firstname;
    this.detail[0][1] = this.userdatarecive.lastname;
  })
}
detail = [
  {
    0:this.userdatarecive.firstname,
    1:this.userdatarecive.lastname,
  }
]

}




