import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPersonFormComponent } from './components/add-person-form/add-person-form.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddPersonFormComponent,
    HeaderComponent,
    PersonTableComponent,
    HomeComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
