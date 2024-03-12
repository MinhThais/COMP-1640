import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { DetailArticlesComponent } from './components/articles/detail-articles/detail-articles.component';
import { ManagementArticlesComponent } from './components/management/articles/management-articles/management-articles.component';
import { AddArticlesComponent } from './components/management/articles/add-articles/add-articles.component';
import { ViewArticlesComponent } from './components/articles/view-articles/view-articles.component';
import { UpdateArticlesComponent } from './components/management/articles/update-articles/update-articles.component';
import { ManagementAcademicYearComponent } from './components/management/academicYear/management-academic-year/management-academic-year.component';
import { AddAcademicYearComponent } from './components/management/academicYear/add-academic-year/add-academic-year.component';
import { UpdateAcademicYearComponent } from './components/management/academicYear/update-academic-year/update-academic-year.component';
import { ManagementFacultyComponent } from './components/management/faculties/management-faculty/management-faculty.component';
import { AddFacultyComponent } from './components/management/faculties/add-faculty/add-faculty.component';
import { UpdateFacultyComponent } from './components/management/faculties/update-faculty/update-faculty.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'Reset-Password', component: ResetPasswordComponent},
  {path:'Profile', component: ProfileComponent},
  {path:'View-Articles', component: ViewArticlesComponent},
  {path:'Detail-Articles', component: DetailArticlesComponent},
  {path:'Create-Account', component: CreateAccountComponent},
  {path:'Management-Articles', component: ManagementArticlesComponent},
  {path:'Add-Articles', component: AddArticlesComponent},
  {path:'Update-Articles', component: UpdateArticlesComponent},
  {path:'Management-AcademicYear', component: ManagementAcademicYearComponent},
  {path:'Add-AcademicYear', component: AddAcademicYearComponent},
  {path:'Update-AcademicYear/:id', component: UpdateAcademicYearComponent},
  {path:'Management-Faculty', component: ManagementFacultyComponent},
  {path:'Add-Faculty', component: AddFacultyComponent},
  {path:'Update-Faculty', component: UpdateFacultyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
