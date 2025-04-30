
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, FileCheck, Link as LinkIcon, Gamepad, Edit, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header do perfil */}
          <Card className="glassmorphism mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Usuário" />
                    <AvatarFallback>FÃ</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-background"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">João Silva</h2>
                      <p className="text-muted-foreground">fan@exemplo.com</p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                        <Badge className="bg-esports-purple">Nível 3</Badge>
                        <Badge variant="outline">São Paulo, SP</Badge>
                        <Badge variant="outline" className="bg-green-500/10">Verificado</Badge>
                      </div>
                    </div>
                    <Button className="bg-esports-purple hover:bg-esports-purple/80">
                      <Edit className="h-4 w-4 mr-2" /> Editar perfil
                    </Button>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Progresso para o próximo nível</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-2 bg-muted" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Abas do perfil */}
          <Tabs defaultValue="info">
            <TabsList className="glassmorphism grid grid-cols-4 mb-6">
              <TabsTrigger value="info" className="flex items-center gap-2">
                <User className="h-4 w-4" /> 
                <span className="hidden md:inline">Informações</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" /> 
                <span className="hidden md:inline">Documentos</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" /> 
                <span className="hidden md:inline">Redes Sociais</span>
              </TabsTrigger>
              <TabsTrigger value="platforms" className="flex items-center gap-2">
                <Gamepad className="h-4 w-4" /> 
                <span className="hidden md:inline">Plataformas</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Conteúdo da aba Informações */}
            <TabsContent value="info">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-esports-purple" /> 
                    Informações Pessoais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Nome completo</h3>
                      <p>João Silva</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                      <p>fan@exemplo.com</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">CPF</h3>
                      <p>123.456.789-00</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Data de nascimento</h3>
                      <p>15/05/1995</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Endereço</h3>
                      <p>Rua Exemplo, 123 - São Paulo, SP</p>
                    </div>
                  </div>

                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Interesses em Esports</h3>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">Jogos favoritos</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-esports-purple/10">Counter-Strike 2</Badge>
                        <Badge variant="outline" className="bg-esports-purple/10">League of Legends</Badge>
                        <Badge variant="outline" className="bg-esports-purple/10">Valorant</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">Times favoritos</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-esports-blue/10">FURIA Esports</Badge>
                        <Badge variant="outline" className="bg-esports-blue/10">LOUD</Badge>
                        <Badge variant="outline" className="bg-esports-blue/10">Team Liquid</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">Eventos que participou</h4>
                      <p>ESL One Rio, CBLOL Finals 2024</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">Produtos adquiridos</h4>
                      <p>Jersey FURIA, Mouse Gamer HyperX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Conteúdo da aba Documentos */}
            <TabsContent value="documents">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-esports-purple" /> 
                    Documentos Verificados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-muted rounded-md flex items-center justify-center">
                        <FileCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium">RG / CNH</h4>
                        <p className="text-sm text-muted-foreground">Verificado em 15/04/2025</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Verificado</Badge>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Star className="h-5 w-5 text-esports-purple" />
                      Benefícios da verificação
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        Acesso a ofertas exclusivas
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        Participação em sorteios especiais
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        Meet & Greet com jogadores profissionais
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Conteúdo da aba Redes Sociais */}
            <TabsContent value="social">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-esports-purple" /> 
                    Redes Sociais Conectadas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <Twitter className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Twitter</h4>
                            <p className="text-xs text-muted-foreground">@usuario_twitter</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => toast.success("Desconectado do Twitter")}>
                          Desconectar
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <Instagram className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Instagram</h4>
                            <p className="text-xs text-muted-foreground">@usuario_insta</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => toast.success("Desconectado do Instagram")}>
                          Desconectar
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-medium mb-4">Conecte mais redes sociais</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button variant="outline" className="justify-start" onClick={() => toast.success("Discord conectado!")}>
                        <div className="h-5 w-5 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                            <path d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541zM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.241 0 32.654-23.41 59.241-52.843 59.241zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.241 0 32.654-23.177 59.241-52.844 59.241z" />
                          </svg>
                        </div>
                        Conectar Discord
                      </Button>
                      <Button variant="outline" className="justify-start" onClick={() => toast.success("YouTube conectado!")}>
                        <div className="h-5 w-5 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                          </svg>
                        </div>
                        Conectar YouTube
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Conteúdo da aba Plataformas */}
            <TabsContent value="platforms">
              <Card className="glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad className="h-5 w-5 text-esports-purple" /> 
                    Plataformas de Jogos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <Gamepad className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Steam</h4>
                            <p className="text-xs text-muted-foreground">steamcommunity.com/id/user123</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Verificado</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <Gamepad className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium">Faceit</h4>
                            <p className="text-xs text-muted-foreground">faceit.com/en/players/user123</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Verificado</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-medium mb-4">Adicione outras plataformas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button variant="outline" className="justify-start">
                        <Gamepad className="mr-2 h-5 w-5" />
                        Battle.net
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Gamepad className="mr-2 h-5 w-5" />
                        Riot Games
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

// Adicione o componente Check para o perfil
const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Adicione um componente Instagram para o perfil
const Instagram = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default Profile;
