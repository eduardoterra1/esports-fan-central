
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import { Twitter, Gamepad } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Login realizado com sucesso!");
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <Card className="glassmorphism">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Entrar na plataforma</CardTitle>
              <CardDescription>
                Acesse sua conta para ver recomendações personalizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu-email@exemplo.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <a href="#" className="text-xs text-esports-purple hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-esports-purple hover:bg-esports-purple/90">
                  Entrar
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-muted"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 bg-background text-muted-foreground">
                    Ou continue com
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Twitter className="mr-2 h-4 w-4" /> Twitter
                </Button>
                <Button variant="outline" className="w-full">
                  <Gamepad className="mr-2 h-4 w-4" /> Steam
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-center text-muted-foreground">
                Não tem uma conta?{" "}
                <a 
                  className="text-esports-purple hover:underline cursor-pointer" 
                  onClick={() => navigate('/register')}
                >
                  Criar perfil
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
