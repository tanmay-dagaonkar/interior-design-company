import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Value {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
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
}
