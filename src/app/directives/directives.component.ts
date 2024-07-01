import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  showHide = true
  showUndoBtn = false
  Isimagevisible = true
  onShow(){
    this.showHide = true;
    this.Isimagevisible =true;

  }
  
  onHide(){
    this.showHide = false;
    this.showUndoBtn = true;
    this.Isimagevisible =false;
  }

}
