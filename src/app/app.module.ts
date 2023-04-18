import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { HomePageComponent } from './home-page/home.page.component';
import { PersonalDetailsComponent } from './personal-details/personal.details.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes =[
  {path: '', component: HomePageComponent},
  {path: 'education', component: EducationComponent},
  {path: 'personal-details', component: PersonalDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PersonalDetailsComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
