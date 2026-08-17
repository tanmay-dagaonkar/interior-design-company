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
      description: 'Complete home design — from spatial planning to final styling, for every room in the house.',
      points: ['Space planning & layout', 'Material & finish selection', 'Lighting design', 'Furniture & decor styling']
    },
    {
      title: 'Kitchen & Home Bar Design',
      description: 'Modular kitchens and home bars designed around how you actually cook, store, and entertain.',
      points: ['Modular kitchen layouts', 'Smart storage solutions', 'Home bar & entertaining spaces', 'Appliance integration']
    },
    {
      title: 'Office Interiors',
      description: 'Workspaces designed for focus, meetings, and a good first impression on clients.',
      points: ['Workstations & cabins', 'Meeting & conference rooms', 'Reception & branding', 'Lighting & acoustics']
    },
    {
      title: 'Renovation & Turnkey',
      description: 'End-to-end execution so you deal with one team, not five contractors.',
      points: ['Civil & structural work', 'Electrical & plumbing coordination', 'Site supervision', 'Final handover']
    },
    {
      title: 'Smart Home Integration',
      description: 'Lighting, security, and automation layered into the design from the start, not bolted on after.',
      points: ['Smart lighting & switches', 'Home automation wiring', 'Security integration']
    },
    {
      title: 'Design Consultation',
      description: 'A focused session for homeowners who want expert direction without a full engagement.',
      points: ['Layout & flow review', 'Colour & material guidance', 'Vastu-conscious planning', 'Shopping list & vendor recommendations']
    }
  ];
}
