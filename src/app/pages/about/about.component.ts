import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InstagramEmbedService } from '../../services/instagram-embed.service';

interface Value {
  title: string;
  description: string;
}

interface Fact {
  value: string;
  label: string;
}

interface ProcessStep {
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

  facts: Fact[] = [
    { value: '6', label: 'Core Service Categories' },
    { value: '1 Team', label: 'Design Through Handover' },
    { value: '35 Days', label: '90% Done On a Recent Office Fit-Out' },
    { value: 'Jabalpur', label: "Where We're Based" }
  ];

  process: ProcessStep[] = [
    {
      title: 'Understand',
      description: 'A site visit and an honest conversation about your requirement, timeline, and budget — before anything gets designed.'
    },
    {
      title: 'Design',
      description: '3D design and material selection, finalized and signed off before civil work begins — so there are no surprises mid-project.'
    },
    {
      title: 'Execute',
      description: 'Civil, electrical, and plumbing work coordinated on site by the same team that designed it, not handed off to a separate contractor.'
    },
    {
      title: 'Handover',
      description: 'Final styling, a full walkthrough, and handover — the requirement you gave us, built.'
    }
  ];

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
