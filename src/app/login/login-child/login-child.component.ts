import { Component, EventEmitter, Input,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-child.component.html',
  styleUrl: './login-child.component.css'
})
export class LoginChildComponent {
  @Input() formname = '';
  @Input() formpassword = '';
  // @Input() ChildData = new EventEmitter();
  @Output() ChildData1 = new EventEmitter();
  childUser = '';

  onEmitData(){
    this.ChildData1.emit(this.childUser);

  }

}
