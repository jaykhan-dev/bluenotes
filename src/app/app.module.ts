import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { TagsComponent } from './components/tags/tags.component';
import { RelaysComponent } from './pages/relays/relays.component';
import { PeopleComponent } from './pages/people/people.component';
import { NoteComponent } from './components/note/note.component';
import { ConductComponent } from './pages/conduct/conduct.component';
import { StoreModule } from '@ngrx/store';
import { MaeveComponent } from './components/maeve/maeve.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { AboutComponent } from './pages/about/about.component';
import { SavedComponent } from './pages/saved/saved.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { AccountComponent } from './pages/account/account.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NotionComponent } from './pages/notion/notion.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    TagsComponent,
    RelaysComponent,
    PeopleComponent,
    NoteComponent,
    ConductComponent,
    MaeveComponent,
    NoteFormComponent,
    AboutComponent,
    SavedComponent,
    LoadingComponent,
    ErrorComponent,
    AccountComponent,
    NotificationsComponent,
    ResourcesComponent,
    BlogComponent,
    NotionComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
