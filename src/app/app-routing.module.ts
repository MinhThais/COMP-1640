import { StudentViewingComponent } from './components/student/student-viewing/student-viewing.component';
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
import { CommentViewingComponent } from './components/coordinator/comment/comment-viewing/comment-viewing.component';
import { CommentAddingComponent } from './components/coordinator/comment/comment-adding/comment-adding.component';
import { PublicationViewingComponent } from './components/coordinator/publication/publication-viewing/publication-viewing.component';
import { PublicationDetailComponent } from './components/coordinator/publication/publication-detail/publication-detail.component';
import { AdminStatisticComponent } from './components/admin/admin-statistic/admin-statistic.component';
import { StudentCommentComponent } from './components/student/student-comment/student-comment.component';
import { AdminAccountComponent } from './components/admin/admin-account/admin-account.component';

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

  //Student
  {path:'View-Student', component: StudentViewingComponent},
  {path:'View-StudentComment', component: StudentCommentComponent},

  //Coordinator
  {path:'Manager-Comment', component: CommentViewingComponent},
  {path:'Add-Comment', component: CommentAddingComponent},
  {path:'View-Pub', component: PublicationViewingComponent},
  {path:'Detail-Pub', component: PublicationDetailComponent},

  //Admin
  {path:'Admin-Statistic', component: AdminStatisticComponent}, 
  {path:'Admin-Account', component: AdminAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
