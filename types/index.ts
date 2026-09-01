export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDetails: string;
  benefits: string[];
  duration: string;
  priceEstimate: string;
  image: string;
  iconName: string;
  badgeText: string;
  slug: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  speciality: string;
  bio: string;
  availableDays: string;
  clinics: string[];
  image: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  treatment: string;
  rating: number;
  image?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceInr: string;
  priceUsd: string;
  period: string;
  iconName: string;
  isPopular?: boolean;
  features: string[];
  recommendedFor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface AppointmentData {
  doctor: string;
  service: string;
  location: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  notes: string;
}

export interface ClinicLocation {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  address: string;
  fullAddress: string;
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  mapUrl: string;
  embedMapUrl: string;
  landmark: string;
  features: string[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  bgGradient?: string;
}
