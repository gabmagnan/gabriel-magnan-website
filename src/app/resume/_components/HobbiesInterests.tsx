import { HeartIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { strings } from '@/translations/strings';

const hobbies: string[] = [
  'AI-Driven Innovation',
  'Investments',
  'Blockchain & WEB3',
  'Asset Management ',
  'Entrepreneurship',
  'Guitar',
  'Travel',
];

const HobbiesInterests = () => {
  return (
    <div className="space-y-6">
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <HeartIcon className="size-6" />
        {strings.resume.hobbiesSection}
      </h2>
      <Card className="bg-card/50 p-6 backdrop-blur-sm">
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby) => (
            <Badge key={hobby} variant="secondary">
              {hobby}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default HobbiesInterests;
