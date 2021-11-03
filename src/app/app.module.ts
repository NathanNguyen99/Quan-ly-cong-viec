import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { LoginComponent } from './login/login.component';
import { TokenService } from './Shared/Services/token.service';
import { baseService } from './Shared/Services/base.service';
import { LoadingComponent } from './Shared/loading/loading/loading.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule} from '@angular/material/menu';
import { Auth } from './Auth/auth';
import { HttpClientModule } from '@angular/common/http'
import { AppConfig } from './Config/config';
import { AuthGuard } from './Auth/canActivateAuthGuard';
import { NavService } from './Shared/Services/nav.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './Shared/Services/alert.service';
import { UserService } from './Shared/Services/user.service';
import { MainPostComponent } from './main-post/main-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoadingComponent,
    NavigationComponent,
    ChangePasswordComponent,
    AlertComponent,
    MainPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    NoopAnimationsModule,
    MatIconModule,
    NgMaterialMultilevelMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    TokenService,
    baseService,
    Auth,
    NavService,
    AlertService,
    UserService,
    AuthGuard,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
