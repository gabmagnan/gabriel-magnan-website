import { BriefcaseBusiness } from 'lucide-react';
import { experiences } from '@/app/resume/_data/experiences';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { strings } from '@/src/strings';
import { formatDescription } from '@/utils/utils';

const Experience = () => {
  return (
    <>
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <BriefcaseBusiness className="size-6" />
        {strings.resume.experienceSection}
      </h2>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <Card key={index} className="bg-card/50 p-6 backdrop-blur-sm">
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-muted-foreground">
                  {job.company} • {job.period}
                </p>
              </div>
              <p className="whitespace-pre-line text-muted-foreground">
                {formatDescription(job.description)}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Badge key={tech.name} icon={tech.iconName} variant="skill">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Experience;
