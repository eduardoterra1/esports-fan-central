
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import OfferCard from '@/components/dashboard/OfferCard';
import { Filter, Percent, Tag, ShoppingBag, Gift, Calendar } from 'lucide-react';

const Offers = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Dados simulados
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
      category: "Vestuário",
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
      category: "Periféricos",
    },
    {
      id: 3,
      title: "Ingresso VIP - ESL Pro League",
      description: "Acesso VIP com meet & greet com os jogadores",
      imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      currentPrice: 799.90,
      exclusive: true,
      category: "Ingressos",
    },
    {
      id: 4,
      title: "Headset Gamer RGB",
      description: "Headset com som 7.1 surround e microfone noise-cancelling",
      imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      discountPercent: 20,
      originalPrice: 399.90,
      currentPrice: 319.90,
      category: "Periféricos",
    },
    {
      id: 5,
      title: "Cadeira Gamer Team LOUD",
      description: "Cadeira oficial da Team LOUD com design exclusivo",
      imageUrl: "https://images.unsplash.com/photo-1611118567475-a8990f47fe07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      discountPercent: 10,
      expiresIn: "1 semana",
      originalPrice: 1299.90,
      currentPrice: 1169.90,
      category: "Mobiliário",
      exclusive: true,
    },
    {
      id: 6,
      title: "Assinatura Premium CSGO Stats",
      description: "1 ano de assinatura premium com 25% de desconto",
      imageUrl: "https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      discountPercent: 25,
      originalPrice: 129.90,
      currentPrice: 97.42,
      category: "Assinaturas",
    },
    {
      id: 7,
      title: "Kit Teclado e Mouse FURIA",
      description: "Kit teclado mecânico e mouse com logo da FURIA",
      imageUrl: "https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      discountPercent: 15,
      originalPrice: 599.90,
      currentPrice: 509.92,
      category: "Periféricos",
    },
    {
      id: 8,
      title: "Curso: Como se tornar um pro player",
      description: "Aprenda com os melhores jogadores da FURIA e LOUD",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      currentPrice: 249.90,
      category: "Cursos",
      exclusive: true,
    },
  ];

  // Filtrar ofertas
  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         offer.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || offer.category === selectedCategory;
    
    const matchesPriceRange = () => {
      if (priceRange === 'all') return true;
      if (priceRange === 'under100' && offer.currentPrice < 100) return true;
      if (priceRange === '100to500' && offer.currentPrice >= 100 && offer.currentPrice <= 500) return true;
      if (priceRange === 'above500' && offer.currentPrice > 500) return true;
      return false;
    };
    
    if (filter === 'exclusive') {
      return matchesSearch && matchesCategory && matchesPriceRange() && offer.exclusive;
    } else if (filter === 'discounted') {
      return matchesSearch && matchesCategory && matchesPriceRange() && offer.discountPercent;
    } else {
      return matchesSearch && matchesCategory && matchesPriceRange();
    }
  });

  // Extrair categorias únicas para filtro
  const uniqueCategories = Array.from(new Set(offers.map(offer => offer.category)));
  
  // Destacar ofertas populares
  const popularOffers = offers
    .filter(offer => offer.discountPercent && offer.discountPercent >= 20)
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Ofertas Exclusivas</h1>
          <p className="text-muted-foreground">
            Produtos e experiências exclusivas para fãs de e-sports como você
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Coluna da esquerda - Filtros e Ofertas populares */}
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
                    placeholder="Pesquisar por nome ou descrição..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Categoria</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as categorias</SelectItem>
                      {uniqueCategories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Faixa de preço</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar faixa de preço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os preços</SelectItem>
                      <SelectItem value="under100">Até R$ 100</SelectItem>
                      <SelectItem value="100to500">R$ 100 a R$ 500</SelectItem>
                      <SelectItem value="above500">Acima de R$ 500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setPriceRange('all');
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
                  <Percent className="h-5 w-5 text-esports-purple" />
                  Ofertas Populares
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {popularOffers.map((offer) => (
                  <div key={offer.id} className="flex items-center gap-3 p-2 hover:bg-black/30 rounded-md transition-colors">
                    <div className="w-12 h-12 relative rounded overflow-hidden">
                      <img
                        src={offer.imageUrl}
                        alt={offer.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-esports-purple text-xs text-white px-1 rounded-bl-sm">
                        -{offer.discountPercent}%
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium line-clamp-1">{offer.title}</h4>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold">R$ {offer.currentPrice.toFixed(2)}</span>
                        <span className="text-xs text-muted-foreground line-through">
                          R$ {offer.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Separator className="my-3" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Próximo cupom em:</span>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4 text-esports-purple" />
                    <span>2 dias</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="p-4 rounded-lg bg-gradient-to-r from-esports-purple to-esports-blue">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">Clube Fã Premium</h3>
                <Badge className="bg-white/20">Novo</Badge>
              </div>
              <p className="text-sm text-white/80 mb-4">
                Assine o clube e tenha acesso a descontos exclusivos e produtos limitados.
              </p>
              <Button className="w-full bg-white text-esports-purple hover:bg-white/90">
                Saiba mais
              </Button>
            </div>
          </div>
          
          {/* Coluna da direita - Lista de ofertas */}
          <div className="md:col-span-2">
            <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
              <TabsList className="glassmorphism grid grid-cols-3 mb-6">
                <TabsTrigger value="all" className="flex items-center gap-1">
                  <ShoppingBag className="h-4 w-4" />
                  Todas as ofertas
                </TabsTrigger>
                <TabsTrigger value="exclusive" className="flex items-center gap-1">
                  <Gift className="h-4 w-4" />
                  Exclusivas
                </TabsTrigger>
                <TabsTrigger value="discounted" className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  Com desconto
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                {filteredOffers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredOffers.map((offer) => (
                      <OfferCard key={offer.id} {...offer} />
                    ))}
                  </div>
                ) : (
                  <Card className="w-full glassmorphism">
                    <CardContent className="flex flex-col items-center justify-center py-10">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">Nenhuma oferta encontrada</h3>
                      <p className="text-center text-muted-foreground max-w-md">
                        Não encontramos nenhuma oferta com os filtros selecionados.
                        Tente outros critérios de pesquisa.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="exclusive" className="mt-0">
                {filteredOffers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredOffers.map((offer) => (
                      <OfferCard key={offer.id} {...offer} />
                    ))}
                  </div>
                ) : (
                  <Card className="w-full glassmorphism">
                    <CardContent className="flex flex-col items-center justify-center py-10">
                      <Gift className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">Nenhuma oferta exclusiva encontrada</h3>
                      <p className="text-center text-muted-foreground max-w-md">
                        Não encontramos nenhuma oferta exclusiva com os filtros selecionados.
                        Tente outros critérios ou verifique todas as ofertas disponíveis.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="discounted" className="mt-0">
                {filteredOffers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredOffers.map((offer) => (
                      <OfferCard key={offer.id} {...offer} />
                    ))}
                  </div>
                ) : (
                  <Card className="w-full glassmorphism">
                    <CardContent className="flex flex-col items-center justify-center py-10">
                      <Percent className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">Nenhuma oferta com desconto encontrada</h3>
                      <p className="text-center text-muted-foreground max-w-md">
                        Não encontramos nenhuma oferta com desconto usando os filtros selecionados.
                        Tente outros critérios ou verifique todas as ofertas disponíveis.
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

export default Offers;
