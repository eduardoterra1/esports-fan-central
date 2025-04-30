
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ContentCardProps {
  title: string;
  type: 'video' | 'article' | 'stream';
  imageUrl: string;
  creator: string;
  creatorAvatar: string;
  views?: number;
  isPremium?: boolean;
  isRecommended?: boolean;
}

const ContentCard = ({
  title,
  type,
  imageUrl,
  creator,
  creatorAvatar,
  views,
  isPremium = false,
  isRecommended = false,
}: ContentCardProps) => {
  return (
    <Card className="overflow-hidden card-hover glassmorphism">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {isPremium && (
            <Badge className="bg-esports-neon">Premium</Badge>
          )}
          {isRecommended && (
            <Badge className="bg-esports-purple">Recomendado</Badge>
          )}
        </div>
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
        {type === 'stream' && (
          <Badge className="absolute bottom-2 left-2 bg-red-500">AO VIVO</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2">
          <img
            src={creatorAvatar}
            alt={creator}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-muted-foreground">{creator}</span>
        </div>
        {views !== undefined && (
          <p className="text-xs text-muted-foreground mt-1">{views.toLocaleString()} visualizações</p>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-esports-blue hover:bg-esports-blue/90">
          {type === 'video' ? 'Assistir' : type === 'stream' ? 'Entrar na stream' : 'Ler artigo'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
