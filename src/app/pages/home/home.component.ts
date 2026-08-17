import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ServicePreview {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  servicePreviews: ServicePreview[] = [
    {
      title: 'Residential Interiors',
      description: 'Full-home design from concept to final styling — bedrooms, living rooms, and everything between.'
    },
    {
      title: 'Kitchen & Home Bar',
      description: 'Smart, modular kitchens and statement home bars built for how you actually cook and entertain.'
    },
    {
      title: 'Office Interiors',
      description: 'Workspaces that look sharp on camera and work harder on a normal Tuesday.'
    }
  ];

  // Real client feedback from Karigrah's Instagram (Office highlight, 19 Jan 2025).
  // Add more real testimonials here as they come in — do not invent quotes.
  testimonials: Testimonial[] = [
    {
      quote: 'Thank you Karigrah, for such an amazing interior.',
      author: 'Aditya A. — Office project'
    }
  ];
}
