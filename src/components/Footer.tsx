'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import Image from 'next/image';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
       <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start space-y-4">
             <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="SNMBCT Logo" width={40} height={40} />
                <span className="font-bold text-lg">SNMBCT</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              {t.copyright.replace('{year}', currentYear.toString())}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-semibold font-headline text-lg">{t.socialTitle}</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                {t.facebook}
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                {t.instagram}
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                {t.whatsapp}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
