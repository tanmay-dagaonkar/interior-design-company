import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Karigrah Interiors — Timeless Interior Design' },
  { path: 'about', component: AboutComponent, title: 'About — Karigrah Interiors' },
  { path: 'services', component: ServicesComponent, title: 'Services — Karigrah Interiors' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery — Karigrah Interiors' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Karigrah Interiors' },
  { path: '**', redirectTo: '' },
];
