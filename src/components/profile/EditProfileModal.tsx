
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { X, Save } from "lucide-react";
import { useForm } from "react-hook-form";

interface ProfileData {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  address: string;
  games: string[];
  teams: string[];
  events: string;
  purchases: string;
}

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ProfileData) => void;
  initialData: ProfileData;
  availableGames: { id: string; name: string }[];
  availableTeams: { id: string; name: string }[];
}

const EditProfileModal = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  availableGames,
  availableTeams
}: EditProfileModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileData>({
    defaultValues: initialData
  });

  const [selectedGames, setSelectedGames] = useState<string[]>(initialData.games || []);
  const [selectedTeams, setSelectedTeams] = useState<string[]>(initialData.teams || []);

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

  const onSubmit = (data: any) => {
    if (selectedGames.length === 0 || selectedTeams.length === 0) {
      toast.error("Por favor, selecione pelo menos um jogo e um time");
      return;
    }

    const updatedData = {
      ...data,
      games: selectedGames,
      teams: selectedTeams
    };
    
    onSave(updatedData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glassmorphism">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            Editar Perfil
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Digite seu nome completo" 
                {...register("name", { required: "Nome é obrigatório" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
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
                <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                <p className="text-red-500 text-sm">{errors.cpf.message}</p>
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
                <p className="text-red-500 text-sm">{errors.birthdate.message}</p>
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
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Jogos favoritos</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {availableGames.map((game) => (
                <Badge 
                  key={game.id} 
                  variant={selectedGames.includes(game.id) ? "default" : "outline"}
                  className={`
                    flex items-center gap-1 cursor-pointer px-3 py-1.5
                    ${selectedGames.includes(game.id) 
                      ? "bg-esports-purple" 
                      : "hover:bg-esports-purple/10"}
                  `}
                  onClick={() => toggleGame(game.id)}
                >
                  {selectedGames.includes(game.id) && (
                    <Check className="h-3 w-3" />
                  )}
                  {game.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Times favoritos</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {availableTeams.map((team) => (
                <Badge 
                  key={team.id} 
                  variant={selectedTeams.includes(team.id) ? "default" : "outline"}
                  className={`
                    flex items-center gap-1 cursor-pointer px-3 py-1.5
                    ${selectedTeams.includes(team.id) 
                      ? "bg-esports-blue" 
                      : "hover:bg-esports-blue/10"}
                  `}
                  onClick={() => toggleTeam(team.id)}
                >
                  {selectedTeams.includes(team.id) && (
                    <Check className="h-3 w-3" />
                  )}
                  {team.name}
                </Badge>
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

          <DialogFooter className="pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="gap-2"
            >
              <X className="h-4 w-4" /> Cancelar
            </Button>
            <Button 
              type="submit"
              className="bg-esports-purple hover:bg-esports-purple/80 gap-2"
            >
              <Save className="h-4 w-4" /> Salvar alterações
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Add Check component
const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default EditProfileModal;
