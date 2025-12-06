import { TestimonialCard } from '../../components/TestimonialCard';
import Link from 'next/link';
import { Button } from '../../components/Button';

export const metadata = {
  title: 'PeelCommunityClub - Our Impact',
  description: 'Read success stories and testimonials from the PeelCommunityClub community.',
};

const testimonials = [
  {
    quote: 'PeelCommunityClub transformed my understanding of local needs and gave me a platform to contribute effectively. Truly inspiring work!',
    author: 'Aisha Khan',
    role: 'Volunteer',
  },
  {
    quote: 'The support I received from PeelCommunityClub during a difficult time was invaluable. They are a beacon of hope in our community.',
    author: 'David Lee',
    role: 'Beneficiary',
  },
  {
    quote: 'Being part of PeelCommunityClub has allowed me to connect with so many wonderful people and see the direct impact of our efforts. Highly recommend getting involved!',
    author: 'Maria Garcia',
    role: 'Community Member',
  },
  {
    quote: 'The dedication of the PeelCommunityClub team is truly remarkable. They go above and beyond to serve those in need.',
    author: 'Dr. Emily Chen',
    role: 'Community Partner',
  },
];

export default function ImpactPage() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-12">
        <h1 className="text-5xl font-extrabold text-primary mb-6">Our Impact in the Community</h1>
        <p className="text-xl text-text leading-relaxed max-w-3xl mx-auto">
          At PeelCommunityClub, we believe in transparency and celebrating the tangible differences
          we make together. Here are some stories of lives touched and communities strengthened.
        </p>
      </section>

      <section className="my-16 p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Voices of Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </section>

      <section className="my-16 p-8 bg-secondary rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Be a Part of Our Story</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Your support directly enables us to create more positive change. Join our mission today!
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="/donate">
            Donate Now
          </Link>
        </Button>
      </section>
    </div>
  );
}
