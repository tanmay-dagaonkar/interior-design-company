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
      title: 'Just tell us the requirement',
      description: "Bas requirement bata — baaki poora project hum sambhaal lenge. We handle the rest, end to end."
    },
    {
      title: 'Built for real life',
      description: 'Smart storage, smart kitchens, and layouts that hold up to how you actually live and work.'
    }
  ];
}
