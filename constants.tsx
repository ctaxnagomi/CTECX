
import React from 'react';
import { Cpu, ShieldCheck, Zap, Globe, HardDrive, LayoutGrid } from 'lucide-react';
import { Service, Industry } from './types';

export const SERVICES: Service[] = [
  {
    title: "Consulting Services",
    description: "Expert guidance on AI integration, governance frameworks, and regulatory compliance for modern enterprises.",
    icon: "ShieldCheck"
  },
  {
    title: "Custom AI Solutions",
    description: "Development of bespoke agentic systems, data lifecycle management, and offline-capable infrastructures.",
    icon: "Cpu"
  },
  {
    title: "Managed Support",
    description: "Continuous maintenance, proactive optimization, and monitoring of your integrated AI ecosystems.",
    icon: "Zap"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Agriculture & AgriTech",
    description: "Optimizing yields and supply chains through intelligent AI coordination.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Energy",
    description: "Smart grid management and predictive maintenance for sustainable energy systems.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Manufacturing",
    description: "Coordinating autonomous agents across the factory floor for maximum efficiency.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Research & Development",
    description: "Accelerating discovery with orchestrated AI personas and data workflows.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  }
];

export const COMPANY_BIO = `
CTECX is a technology leader founded in 2024, dedicated to delivering solutions in AI coordination and agentic ecosystems. 
Specializing in overcoming AI tool fragmentation, CTECX provides structured governance frameworks and integrated systems.
Core values: Innovation, Integrity, and Excellence.
Led by Founder Wan Mohd Azizi bin Wan Hosen.
Based at Sarawak Innovation Hub, Kuching, Malaysia.
Main product: DeckerGUI Agentic Ecosystem.
`;
