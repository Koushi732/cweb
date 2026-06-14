export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "CTO",
    company: "TechVista Solutions",
    text: "SimpleIn Solutions transformed our entire digital infrastructure. Their team delivered a custom ERP system that reduced our operational costs by 35%. The professionalism and technical expertise were outstanding.",
    rating: 5,
    avatar: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    designation: "Founder & CEO",
    company: "HealthPlus Digital",
    text: "Working with SimpleIn was the best decision for our healthcare startup. They built our telemedicine platform from scratch, and it now serves over 50,000 patients monthly. Truly a game-changer.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 3,
    name: "Amit Patel",
    designation: "Director of IT",
    company: "RetailMax Corp",
    text: "The e-commerce platform SimpleIn developed for us increased our online sales by 200% within six months. Their attention to UX design and performance optimization is second to none.",
    rating: 5,
    avatar: "AP",
  },
  {
    id: 4,
    name: "Sarah Williams",
    designation: "VP of Engineering",
    company: "FinEdge Global",
    text: "SimpleIn's cloud migration services saved us over $200K annually. They handled our complex multi-cloud setup with zero downtime. I would recommend them to any enterprise looking for reliable IT partners.",
    rating: 5,
    avatar: "SW",
  },
  {
    id: 5,
    name: "Vikram Singh",
    designation: "Managing Director",
    company: "BuildPro Industries",
    text: "From hardware procurement to complete IT setup for our new manufacturing facility, SimpleIn handled everything flawlessly. Their one-stop-shop approach saved us months of coordination.",
    rating: 4,
    avatar: "VS",
  },
  {
    id: 6,
    name: "Ananya Reddy",
    designation: "Product Manager",
    company: "EduLearn Platform",
    text: "SimpleIn built our learning management system that now powers education for 100+ institutions. Their AI-powered features like smart content recommendations set us apart from competitors.",
    rating: 5,
    avatar: "AR",
  },
];
