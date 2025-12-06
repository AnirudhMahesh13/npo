import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold hover:text-secondary transition duration-300">
          PeelCommunityClub
        </Link>
        <ul className="flex space-x-6">
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
      </nav>
    </header>
  );
};
