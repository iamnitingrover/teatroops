import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-6 bg-[#f0f9f6]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image src="/logo.svg" alt="Tea Troops Logo" width={40} height={40} className="w-auto h-8" />
            {/*<span className="ml-2 text-lg font-bold text-[#00ab67]">Tea Troops</span>*/}
          </Link>
          <p className="text-sm text-gray-600">Premium organic herbal teas for your daily ritual.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-2">
            <Link className="text-sm hover:underline" href="/" aria-label="Home">Home</Link>
            <Link className="text-sm hover:underline" href="/privacy" aria-label="Privacy Policy">Privacy Policy</Link>
            <Link className="text-sm hover:underline" href="/shop" aria-label="Shop">Shop</Link>
            <Link className="text-sm hover:underline" href="/shipping" aria-label="Shipping Policy">Shipping Policy</Link>
            <Link className="text-sm hover:underline" href="/about" aria-label="About">About</Link>
            <Link className="text-sm hover:underline" href="/terms" aria-label="Terms and Conditions">T&C</Link>
            <Link className="text-sm hover:underline" href="/contact" aria-label="Contact">Contact</Link>
            <Link className="text-sm hover:underline" href="/refund" aria-label="Cancellation and Refund Policy">Cancellation & Refund Policy</Link>
        </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="text-sm text-gray-600">© 2024 Tea Troops. All rights reserved.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
          Made with <Heart className="h-4 w-4 text-red-500" /> by{' '}
          <Link href="https://nitingrover.in" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
            Nitin Grover
          </Link>
        </div>
      </div>
    </footer>
  )
}