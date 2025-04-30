
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Twitter, Instagram, Gamepad, Link as LinkIcon, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SocialConnectProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

interface SocialAccount {
  id: string;
  name: string;
  icon: React.ReactNode;
  connected: boolean;
  username: string;
}

const SocialConnect = ({ onNextStep, onPrevStep }: SocialConnectProps) => {
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      connected: false,
      username: '',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      connected: false,
      username: '',
    },
    {
      id: 'steam',
      name: 'Steam',
      icon: <Gamepad className="h-5 w-5" />,
      connected: false,
      username: '',
    },
    {
      id: 'faceit',
      name: 'Faceit',
      icon: <LinkIcon className="h-5 w-5" />,
      connected: false,
      username: '',
    },
  ]);

  const [authorizing, setAuthorizing] = useState<string | null>(null);

  const handleConnect = (accountId: string) => {
    setAuthorizing(accountId);
    
    // Simulação de autorização
    setTimeout(() => {
      setSocialAccounts(accounts => 
        accounts.map(account => {
          if (account.id === accountId) {
            return { 
              ...account, 
              connected: true,
              username: `user_${accountId}123`,
            };
          }
          return account;
        })
      );
      setAuthorizing(null);
      toast.success(`Conectado ao ${accountId.charAt(0).toUpperCase() + accountId.slice(1)} com sucesso!`);
    }, 2000);
  };

  const handleDisconnect = (accountId: string) => {
    setSocialAccounts(accounts => 
      accounts.map(account => {
        if (account.id === accountId) {
          return { ...account, connected: false, username: '' };
        }
        return account;
      })
    );
    toast(`Desconectado do ${accountId.charAt(0).toUpperCase() + accountId.slice(1)}`);
  };

  const handleContinue = () => {
    const connectedAccounts = socialAccounts.filter(account => account.connected);
    if (connectedAccounts.length === 0) {
      toast.error("Por favor, conecte pelo menos uma rede social para continuar");
      return;
    }
    
    onNextStep();
  };

  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <LinkIcon className="h-6 w-6 text-esports-purple" />
          Conexão com Redes Sociais
        </CardTitle>
        <CardDescription>
          Conecte suas redes sociais para uma experiência personalizada
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert className="bg-muted">
          <AlertDescription className="text-sm">
            Ao conectar suas redes sociais, você autoriza a leitura de interações, páginas seguidas e atividades 
            relacionadas a esports para personalizar sua experiência.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          {socialAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  {account.icon}
                </div>
                <div>
                  <h4 className="font-medium">{account.name}</h4>
                  {account.connected && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-500" />
                      Conectado como @{account.username}
                    </p>
                  )}
                </div>
              </div>
              <div>
                {account.connected ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDisconnect(account.id)}
                  >
                    Desconectar
                  </Button>
                ) : (
                  <Button 
                    size="sm" 
                    className="bg-esports-blue hover:bg-esports-blue/80"
                    onClick={() => handleConnect(account.id)}
                    disabled={!!authorizing}
                  >
                    {authorizing === account.id ? (
                      <>
                        <div className="mr-1 h-3 w-3 animate-spin rounded-full border-2 border-t-transparent" />
                        Conectando...
                      </>
                    ) : (
                      'Conectar'
                    )}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <div className="flex items-center justify-between border-t pt-4">
            <Label htmlFor="allow-analysis" className="text-base font-normal flex-grow">
              Permitir análise de interações para personalização
            </Label>
            <Switch id="allow-analysis" defaultChecked />
          </div>

          <div className="flex items-center justify-between pt-4">
            <Label htmlFor="allow-recommendations" className="text-base font-normal flex-grow">
              Receber recomendações personalizadas
            </Label>
            <Switch id="allow-recommendations" defaultChecked />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onPrevStep}>
          Voltar
        </Button>
        <Button 
          className="bg-esports-purple hover:bg-esports-purple/80"
          onClick={handleContinue}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SocialConnect;
