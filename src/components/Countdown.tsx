'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].eventCard;

  useEffect(() => {
    setIsClient(true);
    // Set initial value on client mount
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return null; // Don't render on the server
  }

  if (!timeLeft) {
    return <div className="text-center text-lg font-bold text-primary">{t.eventStarted}</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 text-center bg-secondary/50 p-4 rounded-lg">
      <div>
        <div className="text-2xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-xs uppercase text-muted-foreground">{t.days}</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs uppercase text-muted-foreground">{t.hours}</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs uppercase text-muted-foreground">{t.minutes}</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs uppercase text-muted-foreground">{t.seconds}</div>
      </div>
    </div>
  );
};

export default Countdown;
