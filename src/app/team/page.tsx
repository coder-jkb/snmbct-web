'use client';
import TeamMemberCard from '@/components/TeamMemberCard';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const teamMembers = [
  // Trustees
  { name: 'Gopal Laxmidas Bhadra', role: 'Chairman', category: 'Trustee', image: '/images/member-photos/trustee/gopal Laxmidas Bhadra.png' },
  { name: 'Vasantlal Manji Bhadra', role: 'President', category: 'Trustee', image: '/images/member-photos/trustee/Vasantlal Manji Bhadra.jpg' },
  { name: 'Dinesh Kalyanji Mav', role: 'Vice President', category: 'Trustee', image: '/images/member-photos/trustee/Dinesh Kalyanji Mav.png' },
  { name: 'Mulji Desar Mange', role: 'Treasurer', category: 'Trustee', image: '/images/member-photos/trustee/Mulji Desar Mange.jpg' },
  { name: 'Nanji Murji Dama', role: 'Secretary', category: 'Trustee', image: '/images/member-photos/trustee/Nanji Murji Dama.jpg' },
  { name: 'Shambhulal Morarji Gori', role: 'Trustee', category: 'Trustee', image: '/images/member-photos/trustee/Shambhulal Morarji Gori.png' },
  
  // Committee Members
  { name: 'Dr. Mukesh Mohanlal Chandra', role: 'Health Program Lead', category: 'Committee Member', image: '/images/member-photos/Dr. Mukesh Mohanlal Chandra.jpeg' },
  { name: 'Rajesh Vithaldas Gajra', role: 'Event Coordinator', category: 'Committee Member', image: '/images/member-photos/Rajesh Vithaldas Gajra.jpg' },
  { name: 'Janak Bhanushali', role: 'Community Relations', category: 'Committee Member', image: '/images/member-photos/Janak Bhanushali.jpeg' },
  { name: 'Mehul Maheshbhai Vador', role: 'Youth Wing Head', category: 'Committee Member', image: '/images/member-photos/Mehul Maheshbhai Vador.jpeg' },
  { name: 'Mahesh Tharyabhai Joiser', role: 'Education Lead', category: 'Committee Member', image: '/images/member-photos/Mahesh Tharyabhai Joiser.jpeg' },
  { name: 'Ramesh Sundarji Chandra', role: 'Cultural Activities', category: 'Committee Member', image: '/images/member-photos/Ramesh Sundarji Chandra.jpg' },
  { name: 'Yogesh Mavjibhai Khaniya', role: 'Volunteer Coordinator', category: 'Committee Member', image: '/images/member-photos/Yogesh Mavjibhai Khaniya.jpeg' },
  { name: 'Suresh Hansraj Gori', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Suresh Hansraj Gori.jpeg' },
  { name: 'Suresh Hansraj Dama', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Suresh Hansraj Dama.jpeg' },
  { name: 'Sunil Chagganlal Hurbada', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Sunil Chagganlal Hurbada.jpeg' },
  { name: 'Sagar Virjibhai Gori', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Sagar Virjibhai Gori.jpeg' },
  { name: 'Sachin Shivjibhai Chandra', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Sachin Shivjibhai Chandra.jpeg' },
  { name: 'Rajesh Odhavji Bhadra', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Rajesh Odhavji Bhadra.jpeg' },
  { name: 'Praful Babulal Mange', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Praful Babulal Mange.jpeg' },
  { name: 'Nitin Pradhanji Mange', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Nitin Pradhanji Mange.jpeg' },
  { name: 'Mohanbhai Dayatbhai Chandra', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Mohanbhai Dayatbhai Chandra.jpeg' },
  { name: 'Kamlesh Tulsidas Khaniya', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Kamlesh Tulsidas Khaniya.jpeg' },
  { name: 'Jayesh Ladak Gori', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Jayesh Ladak Gori.jpeg' },
  { name: 'Jitesh Shambhulal Bhadra', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Jitesh Shambhulal Bhadra.jpeg' },
  { name: 'Kapil Suresh Bhadra', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Kapil Suresh Bhadra.jpeg' },
  { name: 'Hansraj Prashottam Khaniya', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Hansraj Prashottam Khaniya.jpeg' },
  { name: 'Harish Kakubhai Shethia', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Harish Kakubhai Shethia.jpeg' },
  { name: 'Ishwar Chhaganlal Gori', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Ishwar Chhaganlal Gori.jpeg' },
  { name: 'Jayanti Arjan Kodvara', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Jayanti Arjan Kodvara.jpeg' },
  { name: 'Jayantilal Kalyanji Mithiya', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Jayantilal Kalyanji Mithiya.jpeg' },
  { name: 'Kanji Shambhuram Dama', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Kanji Shambhuram Dama.jpeg' },
  { name: 'Mahendra Pragji Shethia', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Mahendra Pragji Shethia.jpeg' },
  { name: 'Ajay Rameshbhai Mengar', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Ajay Rameshbhai Mengar.jpeg' },
  { name: 'Bhavesh Laxmidas Gori', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Bhavesh Laxmidas Gori.jpeg' },
  { name: 'Deepak Manji Bhadra', role: 'Volunteer', category: 'Committee Member', image: '/images/member-photos/Deepak Manji Bhadra.jpeg' },
];

const renderTeamSection = (title: string, category: string) => {
  const members = teamMembers.filter(member => member.category === category);
  if (!members?.length) return null;
  return (
    <section>
      <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md: gap-6 lg:gap-8">
        {members.map(member => (
          <TeamMemberCard key={member.name} name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </section>
  );
};

export default function TeamPage() {
  const { language } = useLanguage();
  const t = translations[language].team;
  return (
    <div className="container py-12 md:py-24 space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 text-xl text-muted-foreground">{t.subtitle}</p>
      </div>

      {renderTeamSection(t.trustees, 'Trustee')}
      {renderTeamSection(t.committee, 'Committee Member')}
      {renderTeamSection(t.coCommittee, 'Co-committee Member')}
    </div>
  );
}
