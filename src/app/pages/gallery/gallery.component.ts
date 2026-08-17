import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  categories = ['All', 'Residential', 'Office', 'Kitchen', 'Home Bar', 'Renovation'];
  activeCategory = signal('All');

  // Placeholder entries — swap in real project photos and names once available.
  projects: Project[] = [
    { title: 'Residential Project', category: 'Residential' },
    { title: 'Office Fit-Out', category: 'Office' },
    { title: 'Modular Kitchen', category: 'Kitchen' },
    { title: 'Home Bar', category: 'Home Bar' },
    { title: 'Full Home Renovation', category: 'Renovation' },
    { title: 'Residential Project', category: 'Residential' },
    { title: 'Office Interior', category: 'Office' },
    { title: 'Smart Kitchen', category: 'Kitchen' },
    { title: 'Residential Project', category: 'Residential' }
  ];

  get filteredProjects(): Project[] {
    const active = this.activeCategory();
    return active === 'All' ? this.projects : this.projects.filter((p) => p.category === active);
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
