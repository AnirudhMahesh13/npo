import Link from 'next/link';
import { Button } from './Button';
import { Input } from './Input';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white p-8 mt-12 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">PeelCommunityClub</h3>
          <p className="text-gray-200">Making a difference in the Peel community.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-secondary transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-secondary transition duration-300">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/impact" className="hover:text-secondary transition duration-300">
                Impact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-secondary transition duration-300">
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-secondary transition duration-300" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="hover:text-secondary transition duration-300" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" className="hover:text-secondary transition duration-300" aria-label="Instagram">
              Instagram
            </a>
          </div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form className="flex flex-col space-y-3">
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-blue-800 border-blue-700 text-white placeholder-blue-300 focus:ring-secondary"
              aria-label="Email for Newsletter"
            />
            <Button type="submit" variant="secondary" className="w-full">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400">
        &copy; {new Date().getFullYear()} PeelCommunityClub. All rights reserved.
      </div>
    </footer>
  );
};
