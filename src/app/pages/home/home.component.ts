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
      description: 'Full-home design from concept to final styling, tailored to how you actually live.'
    },
    {
      title: 'Bespoke Furniture',
      description: 'Handcrafted pieces made with local artisans — built to last generations, not seasons.'
    },
    {
      title: 'Renovation & Turnkey',
      description: 'End-to-end execution: civil work, electrical, and finishing, managed under one roof.'
    }
  ];

  testimonials: Testimonial[] = [
    {
      quote: 'Karigrah turned our flat into something that finally feels like us — warm, considered, unhurried.',
      author: 'Aditi & Rohan, Bandra'
    },
    {
      quote: 'The attention to craft is rare. Every joint, every finish was chosen with intent.',
      author: 'Naveen K., Indiranagar'
    }
  ];
}
