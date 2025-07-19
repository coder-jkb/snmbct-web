'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Languages } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import Image from 'next/image';

const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/team', labelKey: 'team' },
  { href: '/help', labelKey: 'help' },
];

export default function Header() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].header;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src="/images/logo.png" alt="SNMBCT Logo" width={40} height={40} className="h-10 w-10" />
          <span className="hidden font-bold sm:inline-block">SNMBCT</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, labelKey }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {t[labelKey as keyof typeof t]}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button onClick={toggleLanguage} variant="outline" className="gap-2">
            <Languages className="h-5 w-5" />
            <span className='hidden sm:inline'>{t.toggleLanguage}</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map(({ href, labelKey }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'transition-colors hover:text-foreground/80',
                      pathname === href ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    {t[labelKey as keyof typeof t]}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
