
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Menu, X, Gamepad, Bell } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 glassmorphism py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Gamepad className="h-8 w-8 text-esports-purple" />
          <span className="text-xl font-rajdhani font-bold text-gradient">ESPORTS FAN</span>
        </Link>
        
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full glassmorphism py-4">
                <div className="flex flex-col gap-2 px-4">
                  <Button variant="ghost" onClick={() => { navigate('/dashboard'); setIsMenuOpen(false); }}>
                    Dashboard
                  </Button>
                  <Button variant="ghost" onClick={() => { navigate('/profile'); setIsMenuOpen(false); }}>
                    Perfil
                  </Button>
                  <Button variant="ghost" onClick={() => { navigate('/events'); setIsMenuOpen(false); }}>
                    Eventos
                  </Button>
                  <Button variant="ghost" onClick={() => { navigate('/offers'); setIsMenuOpen(false); }}>
                    Ofertas
                  </Button>
                  <Button variant="default" className="bg-esports-purple hover:bg-esports-purple/80" onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>
                    Entrar
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate('/profile')}>Perfil</Button>
            <Button variant="ghost" onClick={() => navigate('/events')}>Eventos</Button>
            <Button variant="ghost" onClick={() => navigate('/offers')}>Ofertas</Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-esports-purple hover:bg-esports-purple/80" onClick={() => navigate('/login')}>
              Entrar
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
