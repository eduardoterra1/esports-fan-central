
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from '@/components/dashboard/EventCard';
import { CalendarIcon, CalendarDays, CalendarSearch, Filter, MapPin } from 'lucide-react';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  // Dados simulados de eventos
  const events = [
    {
      id: 1,
      title: "CBLOL Finals 2025",
      game: "League of Legends",
      date: "20 Ago 2025",
      location: "São Paulo, SP",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["CBLOL", "Finals", "Presencial"],
      recommended: true,
    },
    {
      id: 2,
      title: "ESL Pro League Season 27",
      game: "Counter-Strike 2",
      date: "15 Set 2025",
      location: "Rio de Janeiro, RJ",
      imageUrl: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["ESL", "CS2", "VIP"],
      recommended: true,
    },
    {
      id: 3,
      title: "Valorant Champions Tour",
      game: "Valorant",
      date: "10 Oct 2025",
      location: "Belo Horizonte, MG",
      imageUrl: "https://images.unsplash.com/photo-1627856014754-2907e2355392?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["VCT", "LOUD", "Meet & Greet"],
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
    {
      id: 5,
      title: "Rocket League Championship Series",
      game: "Rocket League",
      date: "12 Set 2025",
      location: "Online",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["RLCS", "Online"],
    },
    {
      id: 6,
      title: "PUBG Global Championship",
      game: "PUBG",
      date: "23 Out 2025",
      location: "Curitiba, PR",
      imageUrl: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["PGC", "Battle Royale"],
    },
    {
      id: 7,
      title: "Rainbow Six Invitational",
      game: "Rainbow Six Siege",
      date: "18 Dez 2025",
      location: "São Paulo, SP",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["R6", "FaZe", "VIP"],
      recommended: true,
    },
    {
      id: 8,
      title: "Dota 2 Major Brasil",
      game: "Dota 2",
      date: "09 Nov 2025",
      location: "Online",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["Dota", "Major", "Online"],
    },
  ];

  // Filtrar eventos com base em pesquisa, jogo e localização
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesGame = selectedGame === 'all' || event.game === selectedGame;
    const matchesLocation = selectedLocation === 'all' || event.location.includes(selectedLocation);
    
    if (filter === 'recommended') {
      return matchesSearch && matchesGame && matchesLocation && event.recommended;
    } else {
      return matchesSearch && matchesGame && matchesLocation;
    }
  });

  // Extrair todos os jogos e cidades únicas para os filtros
  const uniqueGames = Array.from(new Set(events.map(event => event.game)));
  const uniqueLocations = Array.from(new Set(events.map(event => {
    const cityState = event.location.split(',')[0].trim();
    return cityState === 'Online' ? 'Online' : cityState;
  })));
  
  // Filtrar eventos futuros para o calendário
  const upcomingEvents = events
    .filter(event => {
      // Simulando eventos futuros - na vida real, compararia com a data atual
      return true;
    })
    .sort((a, b) => {
      // Ordenado por data (na vida real, ordenar corretamente por data)
      return a.date.localeCompare(b.date);
    })
    .slice(0, 5); // Primeiros 5 eventos

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Eventos de E-sports</h1>
          <p className="text-muted-foreground">
            Descubra os principais eventos de e-sports no Brasil e no mundo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Coluna da esquerda - Filtros e Próximos Eventos */}
          <div className="space-y-6">
            <Card className="glassmorphism">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5 text-esports-purple" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Pesquisar</label>
                  <Input 
                    placeholder="Pesquisar por nome ou tag..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Jogo</label>
                  <Select value={selectedGame} onValueChange={setSelectedGame}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar jogo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os jogos</SelectItem>
                      {uniqueGames.map(game => (
                        <SelectItem key={game} value={game}>{game}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Localização</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar localização" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as localizações</SelectItem>
                      {uniqueLocations.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedGame('all');
                      setSelectedLocation('all');
                    }}
                  >
                    Limpar filtros
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-esports-purple" />
                  Próximos Eventos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-2 hover:bg-black/30 rounded-md transition-colors">
                    <div className="w-12 h-12 relative rounded overflow-hidden">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{event.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="link" className="w-full text-esports-purple">
                  Ver calendário completo
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Coluna da direita - Lista de eventos */}
          <div className="md:col-span-2">
            <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
              <TabsList className="glassmorphism grid grid-cols-2 mb-6">
                <TabsTrigger value="all">Todos os eventos</TabsTrigger>
                <TabsTrigger value="recommended">Recomendados para você</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                {filteredEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredEvents.map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                ) : (
                  <Card className="w-full glassmorphism">
                    <CardContent className="flex flex-col items-center justify-center py-10">
                      <CalendarSearch className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">Nenhum evento encontrado</h3>
                      <p className="text-center text-muted-foreground max-w-md">
                        Não encontramos nenhum evento com os filtros selecionados. 
                        Tente outros critérios de pesquisa.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="recommended" className="mt-0">
                {filteredEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredEvents.map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                ) : (
                  <Card className="w-full glassmorphism">
                    <CardContent className="flex flex-col items-center justify-center py-10">
                      <CalendarSearch className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">Nenhum evento recomendado</h3>
                      <p className="text-center text-muted-foreground max-w-md">
                        Atualmente não temos eventos recomendados com base nos filtros selecionados.
                        Tente outros critérios ou confira todos os eventos disponíveis.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
