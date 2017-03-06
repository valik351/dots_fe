import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';

import 'hammerjs';
import { CoursePreviewComponent } from './course-preview/course-preview.component';
import { CourseComponent } from './course/course.component';
import { ModuleComponent } from './module/module.component';
import { ModulePreviewComponent } from './module-preview/module-preview.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemPreviewComponent } from './problem-preview/problem-preview.component';
import { SolutionComponent } from './solution/solution.component';
import { SolutionPreviewComponent } from './solution-preview/solution-preview.component';
import { ModulesComponent } from './modules/modules.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ProblemsComponent } from './problems/problems.component';
import { StandingsComponent } from './standings/standings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PassForgotComponent } from './pass-forgot/pass-forgot.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { CourseBuyComponent } from './course-buy/course-buy.component';
import { CourseBuyResultComponent } from './course-buy-result/course-buy-result.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursePreviewComponent,
    CourseComponent,
    ModuleComponent,
    ModulePreviewComponent,
    NavMenuComponent,
    ProblemComponent,
    ProblemPreviewComponent,
    SolutionComponent,
    SolutionPreviewComponent,
    ModulesComponent,
    SolutionsComponent,
    ProblemsComponent,
    StandingsComponent,
    LoginComponent,
    RegisterComponent,
    PassForgotComponent,
    ProfileComponent,
    UserComponent,
    UserPreviewComponent,
    CourseBuyComponent,
    CourseBuyResultComponent,
    DialogComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
