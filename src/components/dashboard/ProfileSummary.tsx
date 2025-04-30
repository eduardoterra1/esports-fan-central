
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy } from 'lucide-react';

const ProfileSummary = () => {
  return (
    <Card className="glassmorphism">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Trophy className="h-5 w-5 text-esports-purple" />
          Seu perfil de fã
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Nível de fã</span>
              <span className="text-sm font-medium">Nível 3</span>
            </div>
            <Progress value={60} className="h-2 bg-muted" />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">150 XP</span>
              <span className="text-xs text-muted-foreground">250 XP para o próximo nível</span>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-sm font-medium mb-2">Seus interesses principais</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="bg-esports-purple/10">Counter-Strike 2</Badge>
              <Badge variant="outline" className="bg-esports-blue/10">FURIA Esports</Badge>
              <Badge variant="outline" className="bg-esports-neon/10">FPS Games</Badge>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-sm font-medium mb-2">Conquistas</h4>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-esports-purple/20 flex items-center justify-center mb-1">
                  <Star className="h-5 w-5 text-esports-purple" />
                </div>
                <span className="text-xs text-center">Perfil Completo</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-esports-blue/20 flex items-center justify-center mb-1">
                  <Trophy className="h-5 w-5 text-esports-blue" />
                </div>
                <span className="text-xs text-center">Fã Dedicado</span>
              </div>
              <div className="flex flex-col items-center opacity-40">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-1">
                  <Star className="h-5 w-5" />
                </div>
                <span className="text-xs text-center">Bloqueado</span>
              </div>
              <div className="flex flex-col items-center opacity-40">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-1">
                  <Star className="h-5 w-5" />
                </div>
                <span className="text-xs text-center">Bloqueado</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSummary;
