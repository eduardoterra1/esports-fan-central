
import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad, Twitter, Instagram, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto py-8 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad className="h-6 w-6 text-esports-purple" />
              <span className="text-lg font-rajdhani font-bold text-gradient">ESPORTS FAN</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A melhor plataforma para os verdadeiros fãs de esports.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-esports-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-esports-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Website" className="text-muted-foreground hover:text-esports-purple transition-colors">
                <LinkIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Links Rápidos</h3>
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-esports-purple transition-colors">Dashboard</Link>
            <Link to="/profile" className="text-sm text-muted-foreground hover:text-esports-purple transition-colors">Perfil</Link>
            <Link to="/events" className="text-sm text-muted-foreground hover:text-esports-purple transition-colors">Eventos</Link>
            <Link to="/offers" className="text-sm text-muted-foreground hover:text-esports-purple transition-colors">Ofertas</Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-esports-purple transition-colors">Termos de Uso</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-esports-purple transition-colors">Política de Privacidade</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-esports-purple transition-colors">Política de Cookies</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ESPORTS FAN. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
