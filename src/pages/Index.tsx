
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Gamepad, Trophy, ArrowRight, User, FileCheck, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-esports-black via-esports-purple/40 to-esports-blue/30 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-float">
              Plataforma Definitiva para Fãs de Esports
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Eleve sua experiência como fã com acesso a eventos exclusivos, ofertas especiais e conteúdo premium personalizado para suas paixões em esports.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-esports-purple hover:bg-esports-purple/90 animate-pulse-glow"
                onClick={() => navigate('/register')}
              >
                Criar meu perfil <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/login')}
              >
                Já tenho uma conta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-esports-dark/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Como funciona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 glassmorphism rounded-lg">
              <div className="h-16 w-16 rounded-full bg-esports-purple/20 flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-esports-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Crie seu perfil de fã</h3>
              <p className="text-muted-foreground">
                Personalize seu perfil com seus jogos favoritos, times que torce e eventos que participou. 
                Quanto mais completo seu perfil, melhores serão suas recomendações.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 glassmorphism rounded-lg">
              <div className="h-16 w-16 rounded-full bg-esports-blue/20 flex items-center justify-center mb-4">
                <FileCheck className="h-8 w-8 text-esports-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verifique sua identidade</h3>
              <p className="text-muted-foreground">
                Faça upload de documentos para verificação. Nossa IA valida sua identidade e garante 
                acesso a eventos e ofertas exclusivas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 glassmorphism rounded-lg">
              <div className="h-16 w-16 rounded-full bg-esports-neon/20 flex items-center justify-center mb-4">
                <LinkIcon className="h-8 w-8 text-esports-neon" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conecte suas redes</h3>
              <p className="text-muted-foreground">
                Conecte suas redes sociais e plataformas de jogos para enriquecer seu perfil e 
                receber experiências personalizadas com base nas suas preferências reais.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-gradient">O que você ganha</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 glassmorphism rounded-lg">
                <h4 className="font-bold mb-2">Ofertas Exclusivas</h4>
                <p className="text-sm text-muted-foreground">Acesso a produtos e merch com desconto exclusivo.</p>
              </div>
              
              <div className="p-4 glassmorphism rounded-lg">
                <h4 className="font-bold mb-2">Eventos Personalizados</h4>
                <p className="text-sm text-muted-foreground">Recomendações de eventos baseadas nos seus interesses.</p>
              </div>
              
              <div className="p-4 glassmorphism rounded-lg">
                <h4 className="font-bold mb-2">Conteúdo Premium</h4>
                <p className="text-sm text-muted-foreground">Conteúdos exclusivos dos seus times e jogos favoritos.</p>
              </div>
              
              <div className="p-4 glassmorphism rounded-lg">
                <h4 className="font-bold mb-2">Comunidade de Fãs</h4>
                <p className="text-sm text-muted-foreground">Conecte-se com outros fãs que compartilham seus interesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-esports-purple/20 to-transparent opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <Trophy className="h-16 w-16 text-esports-purple" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para elevar sua experiência como fã?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Junte-se a milhares de fãs e desfrute de experiências personalizadas em esports.
            </p>
            <Button 
              size="lg"
              className="bg-esports-purple hover:bg-esports-purple/90 animate-pulse-glow"
              onClick={() => navigate('/register')}
            >
              Criar meu perfil agora <Gamepad className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
