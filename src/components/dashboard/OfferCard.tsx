
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from 'lucide-react';

interface OfferCardProps {
  title: string;
  description: string;
  imageUrl: string;
  discountPercent?: number;
  expiresIn?: string;
  originalPrice?: number;
  currentPrice: number;
  exclusive?: boolean;
}

const OfferCard = ({
  title,
  description,
  imageUrl,
  discountPercent,
  expiresIn,
  originalPrice,
  currentPrice,
  exclusive = false,
}: OfferCardProps) => {
  return (
    <Card className="overflow-hidden card-hover glassmorphism">
      <div className="relative">
        {exclusive && (
          <div className="absolute top-2 right-2 z-10">
            <Badge className="bg-esports-neon">Exclusivo</Badge>
          </div>
        )}
        {discountPercent && (
          <div className="absolute top-2 left-2 z-10">
            <Badge className="bg-esports-purple">-{discountPercent}%</Badge>
          </div>
        )}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {expiresIn && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <Clock className="h-4 w-4" />
            <span>Expira em {expiresIn}</span>
          </div>
        )}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg">R$ {currentPrice.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-esports-purple hover:bg-esports-purple/90">
          Ver oferta
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OfferCard;
