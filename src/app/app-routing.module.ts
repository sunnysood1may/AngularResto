import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestComponent } from './rest/rest.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    component: UploadComponent,
    path: 'upload'
  },
  {
    component: AddRestoComponent,
    path: 'add'
  },
  {
    component: ListRestoComponent,
    path: 'list'
  },
  {
    component: UpdateRestoComponent,
    path: 'update/:id'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: RestComponent,
    path: 'rest'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
