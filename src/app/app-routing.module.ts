import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RelaysComponent } from './pages/relays/relays.component';
import { PeopleComponent } from './pages/people/people.component';
import { ConductComponent } from './pages/conduct/conduct.component';
import { MaeveComponent } from './components/maeve/maeve.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'relays', component: RelaysComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'conduct', component: ConductComponent },
  { path: 'maeve', component: MaeveComponent },
  { path: 'note-form', component: NoteFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
