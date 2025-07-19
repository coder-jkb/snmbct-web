'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <Image
          src="https://placehold.co/1200x600.png"
          data-ai-hint="team meeting"
          alt="Our Team"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />

        <div className="prose prose-lg max-w-none text-foreground font-body">
          <p>
            {t.body1}
          </p>

          <h2 className="font-headline">{t.missionTitle}</h2>
          <p>
            {t.missionBody}
          </p>

          <h2 className="font-headline">{t.visionTitle}</h2>
          <p>
            {t.visionBody}
          </p>
        </div>
      </div>
    </div>
  );
}
