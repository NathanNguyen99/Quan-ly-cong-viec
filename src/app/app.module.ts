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
import {
  MultilevelMenuService,
  NgMaterialMultilevelMenuModule,
} from 'ng-material-multilevel-menu';
import { LoginComponent } from './login/login.component';
import { TokenService } from './Shared/Services/token.service';
import { baseService } from './Shared/Services/base.service';
import { LoadingComponent } from './Shared/loading/loading/loading.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Auth } from './Auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
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
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbModule,
  NgbDate,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import {
  CustomAdapter,
  CustomDateParserFormatter,
} from './Shared/Services/customday.service';
import { SubPostComponent } from './sub-post/sub-post.component';
import { MinPostComponent } from './min-post/min-post.component';
import { TaskComponent } from './task/task.component';
import { ControlBarComponent } from './control-bar/control-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataService } from './Shared/Services/data.service';
import { MainPostDetailComponent } from './main-post-detail/main-post-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SubProductService } from './Shared/Services/sub-product.service';
import { IssueDetailComponent } from './task/issue-detail/issue-detail.component';
import { IssueDeleteModalComponent } from './task/issue-delete-modal/issue-delete-modal.component';
import { IssueTitleComponent } from './task/task-title/issue-title.component';
import { IssueCommentsComponent } from './task/issue-comments/issue-comments.component';
import { IssueCommentComponent } from './task/issue-comment/issue-comment.component';
import { IssueStatusComponent } from './task/issue-status/issue-status.component';
import { IssueAssigneesComponent } from './task/issue-assignees/issue-assignees.component';
import { IssueLoaderComponent } from './task/issue-loader/issue-loader.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { UserComponent } from './user/user.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';
//import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
//import { SvgIconRegistryService } from 'angular-svg-icon';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputComponent } from './input/input.component';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

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
    IssueDetailComponent,
    IssueDeleteModalComponent,
    IssueTitleComponent,
    IssueCommentsComponent,
    IssueCommentComponent,
    IssueStatusComponent,
    IssueAssigneesComponent,
    IssueLoaderComponent,
    UserComponent,
    AvatarComponent,
    ButtonComponent,
    SvgIconComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
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
    NzModalModule,
    Ng2SearchPipeModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    MatProgressBarModule,
    NzDropDownModule,
    ContentLoaderModule,
    //    AngularSvgIconModule,
    NzToolTipModule,
    DragDropModule,
    environment.production ? [] : AkitaNgDevtools,
    AkitaNgRouterStoreModule,
  ],
  providers: [
    MultilevelMenuService,
    TokenService,
    baseService,
    Auth,
    NavService,
    AlertService,
    UserService,
    SubProductService,
    AuthGuard,
    AppConfig,
    NgbActiveModal,
    //    SvgIconRegistryService,
    NzModalService,
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
