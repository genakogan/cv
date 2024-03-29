import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { HomePageComponent } from './home-page/home.page.component';
import { AboutMeComponent } from './about-me/about.me.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';


const appRoutes: Routes =[
  {path: '', component: HomePageComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'personal-details', component: AboutMeComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMeComponent,
    ResumeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(appRoutes, { useHash: true })]
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
