'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HeartHandshake, Lightbulb, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import HelpContact from '../../components/HelpContact';

const programs = [
  {
    title: { en: "Mavjat (Health Care)", gj: "માવજત (આરોગ્ય સંભાળ)" },
    icon: <HeartHandshake className="h-6 w-6 text-primary" />,
    content: {
      en: "The 'Mavjat' program focuses on the health and well-being of our community. We organize regular health check-up camps, blood donation drives, and awareness seminars to promote a healthy lifestyle.",
      gj: "'માવજત' કાર્યક્રમ આપણા સમુદાયના સ્વાસ્થ્ય અને સુખાકારી પર ધ્યાન કેન્દ્રિત કરે છે. અમે સ્વસ્થ જીવનશૈલીને પ્રોત્સાહન આપવા માટે નિયમિત આરોગ્ય તપાસ શિબિરો, રક્તદાન શિબિરો અને જાગૃતિ સેમિનારનું આયોજન કરીએ છીએ.",
    }
  },
  {
    title: { en: "Jeevan Jyot (Social Support)", gj: "જીવન જ્યોત (સામાજિક સમર્થન)" },
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    content: {
      en: "'Jeevan Jyot' provides a guiding light for community members facing social or economic challenges. We offer counseling, support for essential needs, and a network of volunteers to assist families in difficult times.",
      gj: "'જીવન જ્યોત' સામાજિક કે આર્થિક પડકારોનો સામનો કરી રહેલા સમુદાયના સભ્યો માટે માર્ગદર્શક પ્રકાશ પૂરો પાડે છે. અમે પરામર્શ, આવશ્યક જરૂરિયાતો માટે સમર્થન અને મુશ્કેલ સમયમાં પરિવારોને મદદ કરવા માટે સ્વયંસેવકોનું નેટવર્ક પ્રદાન કરીએ છીએ.",
    }
  },
  {
    title: { en: "Education Support", gj: "શિક્ષણ સહાય" },
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    content: {
      en: "Our education initiative empowers the next generation by providing scholarships for meritorious students, career counseling workshops, and access to educational resources to support their academic journey.",
      gj: "અમારી શિક્ષણ પહેલ ગુણવત્તાવાળા વિદ્યાર્થીઓ માટે શિષ્યવૃત્તિ, કારકિર્દી માર્ગદર્શન વર્કશોપ અને તેમની શૈક્ષણિક યાત્રાને ટેકો આપવા માટે શૈક્ષણિક સંસાધનોની સુવિધા પૂરી પાડીને આગામી પેઢીને સશક્ત બનાવે છે.",
    }
  }
];
const helplineNumber = '+91-9930200033'; // Replace with actual number

export default function HelpPage() {
  const { language } = useLanguage();
  const t = translations[language].help;

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <HelpContact
            helplineNumber={helplineNumber} text={t.contact}
          />

        <Accordion type="single" collapsible className="w-full">
          {programs.map((program, index) => (
            <AccordionItem value={`item-${index}`} key={program.title.en}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                  {program.icon}
                  {program.title[language]}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pl-14">
                {program.content[language]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
