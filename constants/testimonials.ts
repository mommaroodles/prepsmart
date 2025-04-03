export interface Testimonial {
  id: string;
  username: string;
  handle: string;
  content: string;
  avatar: string;
  date: string;
  verified?: boolean;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    username: "Sarah Chen",
    handle: "@DrChen",
    content:
      "PrepSmart helped me prepare for my medical residency interviews. The AI's feedback on communication and clinical scenario responses was invaluable. Highly recommended for healthcare professionals!",
    avatar: "/avatars/user-avatar-img-1.jpg",
    date: "2024-02-15",
    verified: true,
    rating: 5,
  },
  {
    id: "2",
    username: "Michael Thompson",
    handle: "@MThompson",
    content:
      "As a legal professional, articulation is crucial. PrepSmart's feedback on my responses to behavioral questions significantly improved my interview performance. Secured a position at a top law firm.",
    avatar: "/avatars/user-avatar-img-13.jpg",
    date: "2024-02-14",
    verified: true,
    rating: 5,
  },
  {
    id: "3",
    username: "Emma Rodriguez, CPA",
    handle: "@EmmaFinance",
    content:
      "Excellent tool for finance professionals. The AI provided detailed feedback on my technical responses and helped refine my approach to complex analytical questions.",
    avatar: "/avatars/user-avatar-img-9.jpg",
    date: "2024-02-13",
    verified: true,
    rating: 5,
  },
  {
    id: "4",
    username: "Alexandra Peters",
    handle: "@AlexP",
    content:
      "As an HR Manager, I recommend PrepSmart to all job seekers. The platform's ability to adapt to different industry contexts is impressive. Perfect for professional development.",
    avatar: "/avatars/user-avatar-img-16.jpg",
    date: "2024-02-11",
    verified: true,
    rating: 5,
  },
];
