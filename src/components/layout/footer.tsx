import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <Image 
              src="/logo.png"
              alt="Logo Natural Health Center"
              width={100}
              height={80}
            />
            <span className="text-2xl font-bold font-headline">
              Natural heal center
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-4 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Natural Heal Center. All rights reserved.</p>
          <p className="mt-1">Made with ♡ in Mexico and USA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
