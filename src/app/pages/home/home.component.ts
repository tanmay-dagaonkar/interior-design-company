import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InstagramEmbedService } from '../../services/instagram-embed.service';

interface ServicePreview {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
}

// The 5 most recent Karigrah posts, sourced from the account's own post export.
const LATEST_POST_URLS: string[] = [
  'https://www.instagram.com/p/DcOhHHoI5xd/',
  'https://www.instagram.com/p/DcDkmOByUdG/',
  'https://www.instagram.com/p/Db55W4YyYwJ/',
  'https://www.instagram.com/p/DbgLv8lpXSp/',
  'https://www.instagram.com/p/DbaG4Trya_3/',
];

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  private embeds = inject(InstagramEmbedService);

  latestPosts = LATEST_POST_URLS;

  servicePreviews: ServicePreview[] = [
    {
      title: 'Residential Interiors',
      description: 'Full-home design from concept to final styling — bedrooms, living rooms, and everything between.'
    },
    {
      title: 'Modular Kitchens & Wardrobes',
      description: 'Our most-requested work — kitchens and storage built around finishes, shutters, and layouts that last.'
    },
    {
      title: 'Office & Commercial Interiors',
      description: 'Workspaces and commercial spaces designed to work as hard as the people using them.'
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

  ngAfterViewInit(): void {
    this.embeds.process();
  }
}
