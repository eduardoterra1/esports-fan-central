
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Gamepad, Link as LinkIcon, Check, AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface GamingPlatformsProps {
  onComplete: () => void;
  onPrevStep: () => void;
}

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  profileUrl: string;
  verified: boolean;
  isVerifying: boolean;
}

const GamingPlatforms = ({ onComplete, onPrevStep }: GamingPlatformsProps) => {
  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      id: 'steam',
      name: 'Steam',
      icon: <Gamepad />,
      profileUrl: '',
      verified: false,
      isVerifying: false,
    },
    {
      id: 'faceit',
      name: 'Faceit',
      icon: <Gamepad />,
      profileUrl: '',
      verified: false,
      isVerifying: false,
    },
    {
      id: 'battlenet',
      name: 'Battle.net',
      icon: <Gamepad />,
      profileUrl: '',
      verified: false,
      isVerifying: false,
    },
    {
      id: 'riot',
      name: 'Riot Games',
      icon: <Gamepad />,
      profileUrl: '',
      verified: false,
      isVerifying: false,
    },
  ]);

  const handleUrlChange = (id: string, url: string) => {
    setPlatforms(platforms => 
      platforms.map(platform => {
        if (platform.id === id) {
          return { ...platform, profileUrl: url, verified: false };
        }
        return platform;
      })
    );
  };

  const verifyProfile = (id: string) => {
    const platform = platforms.find(p => p.id === id);
    if (!platform || !platform.profileUrl) {
      toast.error(`Por favor, insira uma URL válida para ${platform?.name}`);
      return;
    }

    // Verifica se a URL está em um formato válido
    try {
      new URL(platform.profileUrl);
    } catch (err) {
      toast.error("URL inválida. Por favor, inclua o protocolo http:// ou https://");
      return;
    }

    // Simulação de verificação com IA
    setPlatforms(platforms => 
      platforms.map(platform => {
        if (platform.id === id) {
          return { ...platform, isVerifying: true };
        }
        return platform;
      })
    );

    setTimeout(() => {
      setPlatforms(platforms => 
        platforms.map(platform => {
          if (platform.id === id) {
            return { 
              ...platform, 
              isVerifying: false,
              verified: true 
            };
          }
          return platform;
        })
      );
      toast.success(`Perfil ${platforms.find(p => p.id === id)?.name} verificado com sucesso!`);
    }, 2000);
  };

  const handleComplete = () => {
    const verifiedPlatforms = platforms.filter(p => p.verified);
    
    if (verifiedPlatforms.length === 0) {
      toast.error("Por favor, verifique pelo menos um perfil para continuar");
      return;
    }
    
    onComplete();
  };

  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Gamepad className="h-6 w-6 text-esports-purple" />
          Plataformas de Jogos
        </CardTitle>
        <CardDescription>
          Compartilhe seus perfis em plataformas de jogos para validação
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert className="bg-muted">
          <AlertDescription className="text-sm">
            Compartilhe links para seus perfis nas plataformas de esports para verificação.
            Nossa IA analisará se esses perfis são relevantes para sua experiência como fã.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                  {platform.icon}
                </div>
                <h4 className="font-medium">{platform.name}</h4>
                {platform.verified && (
                  <span className="ml-auto text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full flex items-center gap-1">
                    <Check className="h-3 w-3" /> Verificado
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <div className="flex-grow">
                  <Input
                    placeholder={`URL do perfil ${platform.name}`}
                    value={platform.profileUrl}
                    onChange={(e) => handleUrlChange(platform.id, e.target.value)}
                    className={platform.verified ? "border-green-500" : ""}
                  />
                </div>
                <Button
                  variant={platform.verified ? "outline" : "default"}
                  className={!platform.verified ? "bg-esports-blue hover:bg-esports-blue/80" : ""}
                  onClick={() => verifyProfile(platform.id)}
                  disabled={platform.isVerifying || !platform.profileUrl}
                >
                  {platform.isVerifying ? (
                    <>
                      <div className="mr-1 h-3 w-3 animate-spin rounded-full border-2 border-t-transparent" />
                      Verificando...
                    </>
                  ) : platform.verified ? (
                    <>
                      <Check className="h-4 w-4 mr-1" /> Verificado
                    </>
                  ) : (
                    'Verificar'
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onPrevStep}>
          Voltar
        </Button>
        <Button 
          className="bg-esports-purple hover:bg-esports-purple/80"
          onClick={handleComplete}
        >
          Finalizar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GamingPlatforms;
