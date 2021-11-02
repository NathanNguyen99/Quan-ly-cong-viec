import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoadingComponent
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
  ],
  providers: [
    TokenService,
    baseService,
    Auth,
    NavService,
    AuthGuard,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
