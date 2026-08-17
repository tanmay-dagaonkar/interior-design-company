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
  categories = ['All', 'Residential', 'Furniture', 'Renovation'];
  activeCategory = signal('All');

  projects: Project[] = [
    { title: 'Bandra Apartment', category: 'Residential' },
    { title: 'Teak Dining Set', category: 'Furniture' },
    { title: 'Indiranagar Bungalow', category: 'Renovation' },
    { title: 'Whitefield Villa', category: 'Residential' },
    { title: 'Walnut Console', category: 'Furniture' },
    { title: 'Koregaon Park Loft', category: 'Residential' },
    { title: 'Heritage Home Restoration', category: 'Renovation' },
    { title: 'Cane Lounge Chair', category: 'Furniture' },
    { title: 'Juhu Penthouse', category: 'Residential' }
  ];

  get filteredProjects(): Project[] {
    const active = this.activeCategory();
    return active === 'All' ? this.projects : this.projects.filter((p) => p.category === active);
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
