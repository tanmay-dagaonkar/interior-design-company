import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  points: string[];
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Residential Interiors',
      description: 'Complete home design — from spatial planning to final styling.',
      points: ['Space planning & layout', 'Material & finish selection', 'Lighting design', 'Furniture & decor styling']
    },
    {
      title: 'Bespoke Furniture',
      description: 'Custom-made pieces built with local artisans, designed to fit your space exactly.',
      points: ['Custom joinery & carpentry', 'Upholstery', 'Restoration of heirloom pieces', 'Small-batch production']
    },
    {
      title: 'Renovation & Turnkey',
      description: 'End-to-end execution so you deal with one team, not five contractors.',
      points: ['Civil & structural work', 'Electrical & plumbing coordination', 'Site supervision', 'Final handover']
    },
    {
      title: 'Design Consultation',
      description: 'A focused session for homeowners who want expert direction without a full engagement.',
      points: ['Layout & flow review', 'Colour & material guidance', 'Shopping list & vendor recommendations']
    }
  ];
}
