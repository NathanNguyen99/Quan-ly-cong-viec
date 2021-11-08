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
import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter, CustomDateParserFormatter } from './Shared/Services/customday.service';
import { SubPostComponent } from './sub-post/sub-post.component';
import { MinPostComponent } from './min-post/min-post.component';
import { TaskComponent } from './task/task.component';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataService } from './Shared/Services/data.service';
import { MainPostDetailComponent } from './main-post-detail/main-post-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoadingComponent,
    NavigationComponent,
    ChangePasswordComponent,
    AlertComponent,
    MainPostComponent,
    SubPostComponent,
    MinPostComponent,
    TaskComponent,
    ControlBarComponent,
    MainPostDetailComponent,

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
    NgbModule,
    Ng2SearchPipeModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [
    TokenService,
    baseService,
    Auth,
    NavService,
    AlertService,
    UserService,
    AuthGuard,
    AppConfig,
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
