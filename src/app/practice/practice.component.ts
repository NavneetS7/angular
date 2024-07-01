import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [PracticeComponent,FormsModule,AppComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
hello='navneet';
firstname='navneetsingh';
total='';

onChange(){
  document.write(this.hello);
  alert("username   =" + "    " + this.firstname)
}
Isuserloggedin:boolean=false;

login()
{
  this.Isuserloggedin=true;
}
logout()
{
  this.Isuserloggedin=false;
}


}
