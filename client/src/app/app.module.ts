import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent} from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import {TasksComponent} from './tasks/tasks.component';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService,AuthGuardService,MessageService,HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
