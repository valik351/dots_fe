import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';

import 'hammerjs';
import { CoursePreviewComponent } from './components/course-preview/course-preview.component';
import { CourseComponent } from './components/course/course.component';
import { ModuleComponent } from './components/module/module.component';
import { ModulePreviewComponent } from './components/module-preview/module-preview.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ProblemPreviewComponent } from './components/problem-preview/problem-preview.component';
import { SolutionComponent } from './components/solution/solution.component';
import { SolutionPreviewComponent } from './components/solution-preview/solution-preview.component';
import { ModulesComponent } from './components/modules/modules.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { StandingsComponent } from './components/standings/standings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PassForgotComponent } from './components/pass-forgot/pass-forgot.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { CourseBuyComponent } from './components/course-buy/course-buy.component';
import { CourseBuyResultComponent } from './components/course-buy-result/course-buy-result.component';
import { DialogComponent } from './components/dialog/dialog.component';


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
