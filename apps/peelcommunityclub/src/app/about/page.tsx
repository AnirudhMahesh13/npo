import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/Button';

export const metadata = {
  title: 'PeelCommunityClub - About Us',
  description: 'Learn more about PeelCommunityClub, our mission, vision, and values.',
};

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder',
    image: '/placeholder-person.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Volunteer Coordinator',
    image: '/placeholder-person.jpg',
  },
  {
    name: 'Peter Jones',
    role: 'Community Liaison',
    image: '/placeholder-person.jpg',
  },
  {
    name: 'Sarah Lee',
    role: 'Outreach Manager',
    image: '/placeholder-person.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-12">
        <h1 className="text-5xl font-extrabold text-primary mb-6">Our Story: Building a Better Peel</h1>
        <p className="text-xl text-text leading-relaxed max-w-3xl mx-auto">
          Discover the heart behind PeelCommunityClub – our unwavering commitment to empowering residents
          and fostering a thriving, connected community.
        </p>
      </section>

      <section className="my-16 p-8 bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-text leading-relaxed mb-6">
            Our mission is to empower and connect the diverse communities within the Peel region
            by providing accessible programs, fostering local initiatives, and advocating for social well-being.
          </p>
          <p className="text-lg text-text leading-relaxed">
            We envision a vibrant, inclusive, and thriving Peel community where every individual feels valued,
            supported, and has the opportunity to contribute to collective growth.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder-mission-vision.jpg"
            alt="Diverse group of people collaborating happily"
            width={500}
            height={350}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      <section className="my-16 p-8 bg-background rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">Compassion</h3>
            <p className="text-text">Acting with empathy and kindness towards all community members.</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">Local Action</h3>
            <p className="text-text">Driving change through grassroots efforts and community-led initiatives.</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">Inclusivity</h3>
            <p className="text-text">Embracing diversity and ensuring everyone has a voice and a place.</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">Transparency</h3>
            <p className="text-text">Operating with openness and accountability in all our endeavors.</p>
          </div>
        </div>
      </section>

      <section className="my-16 p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Meet Our Dedicated Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center p-4 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover w-36 h-36 border-4 border-secondary"
              />
              <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-16 p-8 bg-secondary rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Become a volunteer, partner, or donor and help us make a greater impact.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="/activities">
            Get Involved
          </Link>
        </Button>
      </section>
    </div>
  );
}
