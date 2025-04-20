import { GraduationCapIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { TEducation } from '@/types/education';

const education: TEducation[] = [
  {
    degree: 'Master engineering in Electronics and Industrial Computer Science',
    school: 'Polytech Sorbonne Université',
    period: '2017 - 2020',
    location: 'Paris, France',
  },
  {
    degree:
      'Two-year university diploma in Electronics and Electronical Engineering',
    school: 'Université Paris-Saclay',
    location: 'Paris, France',
    period: '2015 - 2017',
  },
];

const Education = () => {
  return (
    <>
      <div className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <GraduationCapIcon className="size-6" />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.degree} className="bg-card/50 p-6 backdrop-blur-sm">
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="mt-3 py-0 text-sm text-muted-foreground">
                  {edu.period}
                </p>
                <p className="mt-1 text-muted-foreground">{edu.school}</p>
                <p className="font-light text-muted-foreground">
                  {edu.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
