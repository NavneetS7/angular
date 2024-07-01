import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PracticeComponent } from './practice/practice.component';
import { ForComponent } from '../for/for.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutusComponent,FormsModule,DirectivesComponent,PracticeComponent, ForComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'navneet ';
  // username ='navneet singh';
}
