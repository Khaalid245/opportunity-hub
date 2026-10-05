export type OpportunityStatus = 'draft' | 'published' | 'expired' | 'unpublished';

export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Volunteer' | 'Temporary';

export type ExperienceLevel = 'Entry Level' | 'Graduate' | '1-2 years' | '3-5 years' | '5+ years';

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface Opportunity {
  id: number;
  title: string;
  slug: string;
  organization_name: string;
  organization_logo?: string | null;
  category: Category | null;
  category_id?: number | null;
  location: string;
  job_type: JobType;
  experience_level?: ExperienceLevel | null;
  salary?: string | null;
  short_description: string;
  full_description: string;
  responsibilities?: string | null;
  requirements?: string | null;
  benefits?: string | null;
  application_instructions?: string | null;
  application_url: string;
  deadline: string;
  status: OpportunityStatus;
  featured: boolean;
  verified: boolean;
  views: number;
  created_by?: number | null;
  created_at: string;
  updated_at: string;
}
