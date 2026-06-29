export interface Project {
  id: string;
  name: string;
  status: 'Active Development' | 'Prototype' | 'Foundation Phase' | 'Strategic Planning';
  purpose: string;
  mission?: string;
  details: string[];
  challenges: string[];
  futurePlans: string[];
  architecture?: {
    nodes: Array<{ id: string; label: string; x: number; y: number; type: 'core' | 'service' | 'client' | 'hardware' }>;
    links: Array<{ source: string; target: string }>;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  classification: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
