'use client';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Countdown from './Countdown';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

interface Event {
  name: { en: string; gj: string };
  date: string;
  description: { en: string; gj: string };
  registration_deadline: string;
  image: string;
  dataAiHint: string;
}

export default function EventCard({ event }: { event: Event }) {
  const { language } = useLanguage();
  const t = translations[language].eventCard;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105">
      <CardHeader className="p-0">
        <Image
          src={event.image}
          data-ai-hint={event.dataAiHint}
          alt={event.name.en}
          width={600}
          height={400}
          className="aspect-video w-full object-cover"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-2xl mb-2">{event.name[language]}</CardTitle>
        <p className="text-muted-foreground mb-4">{event.description[language]}</p>
        <Countdown targetDate={event.date} />
        <p className="text-sm text-muted-foreground mt-4">
          <strong>{t.registrationDeadline}:</strong> {event.registration_deadline}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">{t.registerNow}</Button>
      </CardFooter>
    </Card>
  );
}
