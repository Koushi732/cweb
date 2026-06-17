export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [];
