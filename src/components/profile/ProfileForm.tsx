
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Gamepad, Star, Trophy } from "lucide-react";

const games = [
  { id: 'csgo', name: 'Counter-Strike 2' },
  { id: 'lol', name: 'League of Legends' },
  { id: 'valorant', name: 'Valorant' },
  { id: 'dota2', name: 'Dota 2' },
  { id: 'fortnite', name: 'Fortnite' },
  { id: 'apex', name: 'Apex Legends' },
  { id: 'overwatch', name: 'Overwatch 2' },
  { id: 'r6', name: 'Rainbow Six Siege' },
];

const teams = [
  { id: 'furia', name: 'FURIA Esports' },
  { id: 'mibr', name: 'MIBR' },
  { id: 'pain', name: 'paiN Gaming' },
  { id: 'loud', name: 'LOUD' },
  { id: 'liquid', name: 'Team Liquid' },
  { id: 'g2', name: 'G2 Esports' },
  { id: 'fnatic', name: 'Fnatic' },
  { id: 'navi', name: 'Natus Vincere' },
];

interface ProfileFormProps {
  onNextStep: () => void;
}

const ProfileForm = ({ onNextStep }: ProfileFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedGames, setSelectedGames] = React.useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = React.useState<string[]>([]);

  const onSubmit = (data: any) => {
    if (selectedGames.length === 0 || selectedTeams.length === 0) {
      toast.error("Por favor, selecione pelo menos um jogo e um time");
      return;
    }

    console.log({ ...data, games: selectedGames, teams: selectedTeams });
    toast.success("Dados pessoais salvos com sucesso!");
    onNextStep();
  };

  const toggleGame = (gameId: string) => {
    setSelectedGames((prev) => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId) 
        : [...prev, gameId]
    );
  };

  const toggleTeam = (teamId: string) => {
    setSelectedTeams((prev) => 
      prev.includes(teamId) 
        ? prev.filter(id => id !== teamId) 
        : [...prev, teamId]
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card className="glassmorphism">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Star className="h-6 w-6 text-esports-purple" />
            Dados Pessoais
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Digite seu nome completo" 
                {...register("name", { required: "Nome é obrigatório" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message as string}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Digite seu email" 
                {...register("email", { 
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"
                  } 
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message as string}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input 
                id="cpf" 
                placeholder="000.000.000-00" 
                {...register("cpf", { 
                  required: "CPF é obrigatório",
                  pattern: {
                    value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                    message: "CPF inválido"
                  } 
                })}
              />
              {errors.cpf && (
                <p className="text-red-500 text-sm">{errors.cpf.message as string}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthdate">Data de Nascimento</Label>
              <Input 
                id="birthdate" 
                type="date" 
                {...register("birthdate", { required: "Data de nascimento é obrigatória" })}
              />
              {errors.birthdate && (
                <p className="text-red-500 text-sm">{errors.birthdate.message as string}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Endereço Completo</Label>
            <Input 
              id="address" 
              placeholder="Rua, número, complemento, bairro, cidade, estado, CEP" 
              {...register("address", { required: "Endereço é obrigatório" })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message as string}</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="glassmorphism">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Gamepad className="h-6 w-6 text-esports-purple" />
            Interesses em Esports
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Jogos favoritos</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {games.map((game) => (
                <div 
                  key={game.id} 
                  className={`p-2 border rounded-md cursor-pointer transition-colors ${
                    selectedGames.includes(game.id) 
                      ? "border-esports-purple bg-esports-purple/20" 
                      : "border-muted hover:bg-muted/20"
                  }`}
                  onClick={() => toggleGame(game.id)}
                >
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      checked={selectedGames.includes(game.id)} 
                      onCheckedChange={() => toggleGame(game.id)}
                      id={`game-${game.id}`}
                    />
                    <Label htmlFor={`game-${game.id}`} className="cursor-pointer">
                      {game.name}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Times favoritos</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {teams.map((team) => (
                <div 
                  key={team.id} 
                  className={`p-2 border rounded-md cursor-pointer transition-colors ${
                    selectedTeams.includes(team.id) 
                      ? "border-esports-purple bg-esports-purple/20" 
                      : "border-muted hover:bg-muted/20"
                  }`}
                  onClick={() => toggleTeam(team.id)}
                >
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      checked={selectedTeams.includes(team.id)} 
                      onCheckedChange={() => toggleTeam(team.id)}
                      id={`team-${team.id}`}
                    />
                    <Label htmlFor={`team-${team.id}`} className="cursor-pointer">
                      {team.name}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="events">Eventos que participou nos últimos 12 meses</Label>
            <Input 
              id="events" 
              placeholder="Ex: ESL One Rio, CBLOL Finals, etc." 
              {...register("events")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purchases">Produtos de esports adquiridos no último ano</Label>
            <Input 
              id="purchases" 
              placeholder="Ex: Jersey FURIA, Mouse Gamer, etc." 
              {...register("purchases")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-esports-purple hover:bg-esports-purple/80">
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ProfileForm;
