import { Component } from '@angular/core';
import{FormsModule}from'@angular/forms';
import { LoginChildComponent } from './login-child/login-child.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,LoginChildComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Fname = "";
formTitle ="User Login Form";
userName ='';
password =' ';
childData ='';
onLogin()
{
  alert('username  =  ' +this.userName+ '!!password = ' +'  '  + this.password  +'!!thank you!');
}

  onRecieverData(event:any){
this.childData = event;
alert(event);
  }


}
