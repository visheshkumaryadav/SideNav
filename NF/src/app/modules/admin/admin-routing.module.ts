import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CustomertableComponent } from './components/customertable/customertable.component';
import { NewdashboardComponent } from './components/newdashboard/newdashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: NewdashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path: 'customertable', component: CustomertableComponent },
      {path: 'dashboard', component: DashboardComponent },
      {path: 'profile ', component: ProfileComponent },
      {path: 'header', component: HeaderComponent },
      //  { path:'personal', component:PersonalInfoComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
