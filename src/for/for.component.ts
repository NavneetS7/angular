import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForchildComponent } from './forchild/forchild.component';
import { first } from 'rxjs';
import{CommonServiceService}from'../app/services/common-service.service';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule,ForchildComponent],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class  ForComponent{
  userData={
    firstname : "",
    lastname : "",
  }
  constructor(private ud:CommonServiceService){}
  onsent(){
    this.ud.setuserData(this.userData);
  }

}
