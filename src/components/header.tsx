'use client';

import Link from 'next/link';
import { Menu, ShoppingCart, Bot } from 'lucide-react';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { cn } from "@/lib/utils";


const navLinks = [
  { href: '#vorteile', label: 'Vorteile' },
  { href: '#produkte', label: 'Produkte' },
  { href: '#versprechen', label: 'Unser Versprechen' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="font-bold inline-block font-headline">Lumi-Systems.io</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden sm:flex items-center gap-2">
              <Button asChild className="bg-royal-blue hover:bg-royal-blue/90 text-white">
                  <Link href="#">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Online Shop
                  </Link>
              </Button>
              <Button asChild className="bg-royal-green hover:bg-royal-green/90 text-white">
                  <Link href="#">
                      <Bot className="mr-2 h-4 w-4" />
                      AI Support Assistent
                  </Link>
              </Button>
          </div>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8" onClick={() => setIsMenuOpen(false)}>
                <Logo className="h-6 w-6" />
                <span className="font-bold font-headline">Lumi-Systems.io</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                 <div className="flex flex-col gap-2 mt-4">
                    <Button asChild className="bg-royal-blue hover:bg-royal-blue/90 text-white" onClick={() => setIsMenuOpen(false)}>
                        <Link href="#">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Online Shop
                        </Link>
                    </Button>
                    <Button asChild className="bg-royal-green hover:bg-royal-green/90 text-white" onClick={() => setIsMenuOpen(false)}>
                        <Link href="#">
                            <Bot className="mr-2 h-4 w-4" />
                            AI Support Assistent
                        </Link>
                    </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
