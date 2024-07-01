import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [AppComponent,FormsModule,CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
firstname="navneet";
age="20";
course='B tech';
intValue='';
showHide = true;
showUndoBtn = false;
Countries=["India","Canada","Japan","Tokyo"];
header=["studentname","maths","English","Science"]
marks = [
  {
  0:"student1",
  1: 96,
  2:78,
  3:87,
},
{
  0:"student2",
  1: 96,
  2:78,
  3:87,
},
{
  0:"student3",
  1: 96,
  2:78,
  3:87,
},
{
  0:"student4",
  1: 96,
  2:78,
  3:87,
}
]
// onChange(){
//   document.write("called");
//   this.intValue = '';
// }

onShow(){
  this.showHide = true;
}

onHide(){
  this.showHide = false;
  this.showUndoBtn = true;
}
}
