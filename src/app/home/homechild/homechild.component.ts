import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CommonServiceService}from'../../services/common-service.service';

@Component({
  selector: 'app-homechild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './homechild.component.html',
  styleUrl: './homechild.component.css'
})
export class HomechildComponent {
  constructor(private obj:CommonServiceService){}
  // currentaddress="current address";
  // flatnumber="flat number";
  // building="building";
  // landmark="landmark";
  // city="city";
  // pincode="pincode";
  // state="state";
F1="F1";
F2="F2";

@Input() f1value = "";
@Input() f2value = "";

  onEmitData(){
    
  }
  getData(){
    this.obj.data$.subscribe(res=>{
      alert(res);
    })
  }

}
