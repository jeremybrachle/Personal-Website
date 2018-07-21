// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

// import the components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


// set up the routes
export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent}
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);


/*
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
*/
