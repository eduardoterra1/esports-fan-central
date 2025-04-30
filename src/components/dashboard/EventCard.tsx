
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  game: string;
  date: string;
  location: string;
  imageUrl: string;
  tags?: string[];
  recommended?: boolean;
}

const EventCard = ({
  title,
  game,
  date,
  location,
  imageUrl,
  tags = [],
  recommended = false,
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden card-hover glassmorphism">
      <div className="relative">
        {recommended && (
          <div className="absolute top-2 right-2 z-10">
            <Badge className="bg-esports-purple">Recomendado para você</Badge>
          </div>
        )}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{game}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-1 mb-1">
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-esports-blue hover:bg-esports-blue/90">
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
