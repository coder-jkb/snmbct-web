import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <Card className="text-center shadow-lg transition-transform hover:scale-105">
      <CardContent className="p-6">
        {/* <Image
          src={image}
          data-ai-hint="person portrait"
          alt={`Photo of ${name}`}
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4 border-4 border-secondary"
        /> */}
        <div className="relative w-40 h-40 mx-auto mb-4">
          <Image
            src={image}
            data-ai-hint="person portrait"
            alt={`Photo of ${name}`}
            fill
            className="rounded-full object-cover object-top border-4 border-secondary"
          />
        </div>
        <h3 className="text-xl font-bold font-headline">{name}</h3>
        <p className="text-primary">{role}</p>
      </CardContent>
    </Card>
  );
}
