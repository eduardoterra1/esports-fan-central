
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ProfileSummary from '@/components/dashboard/ProfileSummary';
import EventCard from '@/components/dashboard/EventCard';
import OfferCard from '@/components/dashboard/OfferCard';
import ContentCard from '@/components/dashboard/ContentCard';
import { Bell, CalendarIcon, Gift, Gamepad, Video } from 'lucide-react';

const Dashboard = () => {
  // Dados simulados
  const events = [
    {
      id: 1,
      title: "CBLOL Finals 2025",
      game: "League of Legends",
      date: "20 Ago 2025",
      location: "São Paulo, SP",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["CBLOL", "Finals"],
      recommended: true,
    },
    {
      id: 2,
      title: "ESL Pro League Season 27",
      game: "Counter-Strike 2",
      date: "15 Set 2025",
      location: "Rio de Janeiro, RJ",
      imageUrl: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["ESL", "CS2"],
      recommended: true,
    },
    {
      id: 3,
      title: "Valorant Champions Tour",
      game: "Valorant",
      date: "10 Oct 2025",
      location: "Belo Horizonte, MG",
      imageUrl: "https://images.unsplash.com/photo-1627856014754-2907e2355392?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["VCT", "LOUD"],
    },
    {
      id: 4,
      title: "Free Fire World Series",
      game: "Free Fire",
      date: "05 Nov 2025",
      location: "Fortaleza, CE",
      imageUrl: "https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["FFWS", "Battle Royale"],
    },
  ];
  
  const offers = [
    {
      id: 1,
      title: "Jersey FURIA Edição Especial",
      description: "Camisa oficial da FURIA edição limitada 2025 com 30% de desconto exclusivo",
      imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      discountPercent: 30,
      expiresIn: "3 dias",
      originalPrice: 299.90,
      currentPrice: 209.90,
      exclusive: true,
    },
    {
      id: 2,
      title: "Mouse Gamer Pro X",
      description: "Mouse profissional usado pelos jogadores da Team Liquid",
      imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      discountPercent: 15,
      expiresIn: "5 dias",
      originalPrice: 499.90,
      currentPrice: 424.90,
    },
    {
      id: 3,
      title: "Ingresso VIP - ESL Pro League",
      description: "Acesso VIP com meet & greet com os jogadores",
      imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      currentPrice: 799.90,
      exclusive: true,
    },
    {
      id: 4,
      title: "Headset Gamer RGB",
      description: "Headset com som 7.1 surround e microfone noise-cancelling",
      imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      discountPercent: 20,
      originalPrice: 399.90,
      currentPrice: 319.90,
    },
  ];
  
  const content = [
    {
      id: 1,
      title: "Preparação mental para jogadores de CS2 - Como os pros fazem",
      type: "video" as const,
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      creator: "FURIA Academy",
      creatorAvatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      views: 25420,
      isPremium: true,
      isRecommended: true,
    },
    {
      id: 2,
      title: "LOUD vs Pain - Melhores momentos CBLOL 2025",
      type: "video" as const,
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      creator: "CBLOL Official",
      creatorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      views: 104850,
    },
    {
      id: 3,
      title: "Treino da FURIA para o Major",
      type: "stream" as const,
      imageUrl: "https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      creator: "FURIA Official",
      creatorAvatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 4,
      title: "Análise: O meta atual de Valorant e como se adaptar",
      type: "article" as const,
      imageUrl: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      creator: "Esports Analytics",
      creatorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      isPremium: true,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Novo evento recomendado para você!",
      description: "CBLOL Finals acontecerá em 3 semanas em São Paulo.",
      time: "Agora",
      unread: true,
    },
    {
      id: 2,
      title: "30% de desconto na Jersey da FURIA!",
      description: "Oferta exclusiva para fãs verificados como você.",
      time: "2 horas atrás",
      unread: true,
    },
    {
      id: 3,
      title: "Novo vídeo premium disponível",
      description: "Confira a análise exclusiva do último jogo da FURIA.",
      time: "1 dia atrás",
      unread: false,
    },
    {
      id: 4,
      title: "Seu perfil foi atualizado",
      description: "Seu nível de fã subiu para 3. Parabéns!",
      time: "3 dias atrás",
      unread: false,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Coluna da esquerda - Perfil e Notificações */}
          <div className="md:w-1/3 space-y-6">
            <ProfileSummary />

            <Card className="glassmorphism">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5 text-esports-purple" />
                  Notificações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-3 border-l-2 ${
                        notification.unread 
                          ? "border-esports-purple bg-esports-purple/5" 
                          : "border-muted"
                      } rounded-sm`}
                    >
                      <h4 className={`text-sm font-medium ${notification.unread ? "text-white" : ""}`}>
                        {notification.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna da direita - Tabs com recomendações */}
          <div className="md:w-2/3">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="glassmorphism grid grid-cols-3 mb-6">
                <TabsTrigger value="events" className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" /> Eventos
                </TabsTrigger>
                <TabsTrigger value="offers" className="flex items-center gap-1">
                  <Gift className="h-4 w-4" /> Ofertas
                </TabsTrigger>
                <TabsTrigger value="content" className="flex items-center gap-1">
                  <Video className="h-4 w-4" /> Conteúdo
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="events">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Eventos recomendados para você</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.filter(event => event.recommended).map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Outros eventos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.filter(event => !event.recommended).map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="offers">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Ofertas exclusivas para você</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {offers.filter(offer => offer.exclusive).map((offer) => (
                      <OfferCard key={offer.id} {...offer} />
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Outras ofertas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {offers.filter(offer => !offer.exclusive).map((offer) => (
                      <OfferCard key={offer.id} {...offer} />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="content">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Conteúdo recomendado</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.filter(item => item.isRecommended).map((item) => (
                      <ContentCard 
                        key={item.id} 
                        {...item}
                      />
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Conteúdo premium</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.filter(item => item.isPremium && !item.isRecommended).map((item) => (
                      <ContentCard 
                        key={item.id} 
                        {...item}
                      />
                    ))}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Conteúdo recente</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.filter(item => !item.isPremium && !item.isRecommended).map((item) => (
                      <ContentCard 
                        key={item.id} 
                        {...item}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
