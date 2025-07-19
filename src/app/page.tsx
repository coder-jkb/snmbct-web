'use client';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React, { useState, useEffect, useCallback } from 'react';

const events = [
  {
    name: {
      en: 'Annual Community Gala',
      gj: 'વાર્ષિક સમુદાય ગાલા',
    },
    date: new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000).toISOString(),
    description: {
      en: 'Join us for a night of celebration, cultural performances, and community bonding.',
      gj: 'ઉજવણી, સાંસ્કૃતિક પ્રદર્શન અને સામુદાયિક બંધનની રાત્રિ માટે અમારી સાથે જોડાઓ.',
    },
    registration_deadline: '2 weeks before event',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'community gathering',
  },
  {
    name: {
      en: 'Health Check-up Camp',
      gj: 'આરોગ્ય તપાસ શિબિર',
    },
    date: new Date(new Date().getTime() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    description: {
      en: 'Free health screenings and consultations with expert doctors. Open to all community members.',
      gj: 'નિષ્ણાત ડોકટરો સાથે મફત આરોગ્ય તપાસ અને પરામર્શ. તમામ સમુદાયના સભ્યો માટે ખુલ્લું છે.',
    },
    registration_deadline: '1 week before event',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical camp',
  },
  {
    name: {
      en: 'Educational Workshop for Students',
      gj: 'વિદ્યાર્થીઓ માટે શૈક્ષણિક વર્કશોપ',
    },
    date: new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    description: {
      en: 'A workshop on career guidance and skill development for students from class 10 to 12.',
      gj: 'ધોરણ 10 થી 12 ના વિદ્યાર્થીઓ માટે કારકિર્દી માર્ગદર્શન અને કૌશલ્ય વિકાસ પર વર્કશોપ.',
    },
    registration_deadline: '3 days before event',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'education workshop',
  },
];

const heroImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Community Celebration', hint: 'community celebration' },
  { src: 'https://placehold.co/600x400.png', alt: 'Cultural Event', hint: 'cultural event' },
  { src: 'https://placehold.co/600x400.png', alt: 'Volunteer Group', hint: 'volunteer group' },
];

export default function Home() {
  
  const { language } = useLanguage();
  const t = translations[language];
  
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="flex flex-col">
      <section className="w-full py-8 md:py-12 lg:py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t.home.heroTitle}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {t.home.heroSubtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/about">{t.home.learnMore}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/help">{t.home.reachUs}</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Carousel
                setApi={setApi}
                className="w-full max-w-xl mx-auto"
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          src={image.src}
                          data-ai-hint={image.hint}
                          width="600"
                          height="400"
                          alt={image.alt}
                          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex justify-center gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      current === index ? 'w-4 bg-primary' : 'bg-primary/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="w-full py-6 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">{t.home.upcomingEvents}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.home.eventsSubtitle}
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.name.en} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
