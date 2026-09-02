import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InstagramEmbedService } from '../../services/instagram-embed.service';

interface Value {
  title: string;
  description: string;
}

// A handful of posts spanning different project types, used as a collage
// on the About page instead of a single static image.
const COLLAGE_URLS = [
  'https://www.instagram.com/p/DZo5lftSB-I/',
  'https://www.instagram.com/p/DcOhHHoI5xd/',
  'https://www.instagram.com/p/DbaG4Trya_3/',
  'https://www.instagram.com/p/DbgLv8lpXSp/'
];

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  private embeds = inject(InstagramEmbedService);

  collagePosts = COLLAGE_URLS;

  values: Value[] = [
    {
      title: 'Trust the process',
      description: 'Design, materials, and site execution run under one team, so nothing falls through the cracks.'
    },
    {
      title: 'No hidden costs',
      description: 'Budgets are planned upfront and explained clearly — the price you agree to is the price you pay.'
    },
    {
      title: 'Built for real life',
      description: 'Smart storage, well-planned kitchens, and layouts that hold up to how you actually live and work.'
    }
  ];

  ngAfterViewInit(): void {
    this.embeds.processWithRetries();
  }
}
