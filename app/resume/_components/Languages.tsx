import { LanguagesIcon } from 'lucide-react';
import { languages } from '@/app/resume/_data/languages';
import { Card } from '@/components/ui/card';
import { strings } from '@/src/strings';

const Languages = () => {
  return (
    <div className="space-y-6">
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <LanguagesIcon className="size-6" />
        {strings.resume.languagesSection}
      </h2>
      <Card className="bg-card/50 p-6 backdrop-blur-sm">
        <div className="space-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted-foreground">{lang.level}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Languages;
