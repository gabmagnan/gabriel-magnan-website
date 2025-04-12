import { GraduationCapIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

const education = [
  {
    degree: 'Master of Computer Science',
    school: 'Tech University',
    period: '2016 - 2018',
    description: 'Specialized in Software Engineering and Distributed Systems',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'State University',
    period: '2012 - 2016',
    description: "Dean's List, Computer Science Club President",
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
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.school} • {edu.period}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.description}
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
