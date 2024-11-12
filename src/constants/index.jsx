import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { ServerCog} from "lucide-react";
import { Smartphone } from "lucide-react";
import { Building} from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Custom Software Development",
    description:
     "Our team specializes in creating custom software solutions that perfectly align with your business goals. From initial consultation to deployment, we ensure every detail meets your requirements, delivering efficient and scalable applications.",
  },
  {
    icon: <ServerCog/>,
    text: "Web Development",
    description:
    "We design and develop stunning websites that provide an engaging user experience. Utilizing the latest technologies, our web solutions are not only visually appealing but also fast, secure, and mobile-friendly."  },
  {
    icon: <Smartphone/>,
    text: "Mobile App Development",
    description:
    "Our expertise in mobile app development spans both iOS and Android platforms. We create intuitive and feature-rich apps that cater to your target audience, ensuring seamless performance and high user satisfaction."  },
  {
    icon: <BatteryCharging />,
    text: "UI/UX Design",
    description:
      "Our design team focuses on creating intuitive and aesthetically pleasing interfaces. By understanding user behavior and preferences, we design products that are not only beautiful but also easy to use, enhancing overall user engagement.",
  },
  {
    icon: <Building/>,
    text: "Cloud Services",
    description:
      "We offer comprehensive cloud services, including cloud migration, management, and integration. Our solutions ensure your data is secure, accessible, and scalable, allowing your business to grow without limitations.",
  },
  {
    icon: <GlobeLock />,
    text: "Quality Assurance and Testing",
    description:
      "Our rigorous quality assurance and testing processes ensure that your software performs flawlessly. We conduct thorough testing to identify and resolve any issues before deployment, guaranteeing a reliable and robust final product.",
  },
];

export const checklistItems = [
  {
    title: "Discovery & Consultation",
    description:
      "Understanding Your Vision: We begin by thoroughly understanding your business needs and objectives through detailed consultations.",
  },
  {
    title: "Planning & Strategy",
    description:
      "Crafting a Roadmap for Success: Our team develops a comprehensive plan outlining the project's scope, timeline, and milestones.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Bringing Ideas to Life: Our designers create wireframes and prototypes to visualize the end product. ",
  },
  {
    title: "Development",
    description:
      "Building Robust Solutions: Our developers turn designs into functional software using the latest technologies and best practices.",
  },
  {
    title: "Deployment & Launch",
    description:
      "Going Live with Confidence: Once everything is tested and approved, we deploy the software to the live environment.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: " $300",
    features: [
      "Ideal for Startups and Small Businesses",
      "Custom Website Design",
      "Basic Functionality Implementation",
      "Mobile Optimization",
      "Initial SEO Setup",
 ],
  },
  {
    title: "Standard",
    price: "$700",
    features: [
      "Perfect for Growing Businesses",
      "Everything in Basic Package",
      "Advanced Functionality (e.g., eCommerce, User Accounts)",
      "Enhanced SEO Services",
      "Regular Updates & Maintenance",  
     ],
  },
  {
    title: "Premium",
    price: "$1,000",
    features: [
      "Best for Large Enterprises",
      "Everything in Standard Package",
      "Full-scale Web and Mobile App Development",
      "Comprehensive Security Features",
      "Continuous Integration & Deployment",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
