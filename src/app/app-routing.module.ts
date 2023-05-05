import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RelaysComponent } from './pages/relays/relays.component';
import { PeopleComponent } from './pages/people/people.component';
import { ConductComponent } from './pages/conduct/conduct.component';
import { MaeveComponent } from './components/maeve/maeve.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { AboutComponent } from './pages/about/about.component';
import { SavedComponent } from './pages/saved/saved.component';
import { AccountComponent } from './pages/account/account.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { LoginComponent } from './components/login/login.component';
import { ResourcesComponent } from './pages/resources/resources.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'relays', component: RelaysComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'conduct', component: ConductComponent },
  { path: 'maeve', component: MaeveComponent },
  { path: 'new-note', component: NoteFormComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'account', component: AccountComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
