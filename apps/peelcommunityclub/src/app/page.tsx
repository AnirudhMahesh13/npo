import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/Button';

export const metadata = {
  title: 'PeelCommunityClub - Home',
  description: 'Welcome to PeelCommunityClub - serving the Peel community.',
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Empowering <span className="text-secondary">Peel</span>, Building Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
              Join us in fostering local initiatives and creating a vibrant, inclusive environment for everyone.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/activities">
                Volunteer Today!
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/placeholder-hero.jpg"
              alt="Community members smiling and working together"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
        {/* Subtle background graphic for aesthetic */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <path fill="currentColor" d="M0 0h100v100H0z"/>
            <path fill="url(#gradient)" d="M0 0h100v100H0z"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0"/>
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto p-8 my-16 bg-white rounded-lg shadow-xl text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
        <p className="text-xl text-text leading-relaxed max-w-3xl mx-auto">
          The PeelCommunityClub is dedicated to fostering community spirit, supporting local initiatives,
          and providing valuable resources to residents across the Peel region. We believe in the power of collective action
          to create a vibrant and inclusive environment for everyone.
        </p>
      </section>

      {/* Get Involved Section */}
      <section className="container mx-auto p-8 my-16">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4">Volunteer</h3>
            <p className="text-text mb-6">Lend a hand and make a real difference in your community.</p>
            <Button asChild>
              <Link href="/activities">
                Learn More
              </Link>
            </Button>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4">Donate</h3>
            <p className="text-text mb-6">Your contributions help us continue our vital work.</p>
            <Button variant="secondary" asChild>
              <Link href="/donate">
                Support Us
              </Link>
            </Button>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-4">Connect</h3>
            <p className="text-text mb-6">Join our newsletter and stay up-to-date with events.</p>
            <Button variant="outline" asChild>
              <a href="#footer-newsletter">
                Sign Up
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
