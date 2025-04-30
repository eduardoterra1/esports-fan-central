
import { useState } from 'react';
import { toast } from "sonner";

// Define data types
export interface ProfileData {
  name: string;
  email: string;
  cpf: string;
  birthdate: string;
  address: string;
  games: string[];
  teams: string[];
  events: string;
  purchases: string;
  avatarUrl: string;
}

export const availableGames = [
  { id: 'csgo', name: 'Counter-Strike 2' },
  { id: 'lol', name: 'League of Legends' },
  { id: 'valorant', name: 'Valorant' },
  { id: 'dota2', name: 'Dota 2' },
  { id: 'fortnite', name: 'Fortnite' },
  { id: 'apex', name: 'Apex Legends' },
  { id: 'overwatch', name: 'Overwatch 2' },
  { id: 'r6', name: 'Rainbow Six Siege' },
];

export const availableTeams = [
  { id: 'furia', name: 'FURIA Esports' },
  { id: 'mibr', name: 'MIBR' },
  { id: 'pain', name: 'paiN Gaming' },
  { id: 'loud', name: 'LOUD' },
  { id: 'liquid', name: 'Team Liquid' },
  { id: 'g2', name: 'G2 Esports' },
  { id: 'fnatic', name: 'Fnatic' },
  { id: 'navi', name: 'Natus Vincere' },
];

// Default profile data (move this to a separate file if needed)
const defaultProfileData: ProfileData = {
  name: "João Silva",
  email: "fan@exemplo.com",
  cpf: "123.456.789-00",
  birthdate: "1995-05-15",
  address: "Rua Exemplo, 123 - São Paulo, SP",
  games: ['csgo', 'lol', 'valorant'],
  teams: ['furia', 'loud', 'liquid'],
  events: "ESL One Rio, CBLOL Finals 2024",
  purchases: "Jersey FURIA, Mouse Gamer HyperX",
  avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
};

export function useProfileData() {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [isAvatarEditing, setIsAvatarEditing] = useState(false);
  
  const handleEditProfile = () => {
    setIsEditing(true);
  };
  
  const handleSaveProfile = (newData: ProfileData) => {
    setProfileData({
      ...newData,
      avatarUrl: profileData.avatarUrl // Keep current avatar URL
    });
    toast.success("Perfil atualizado com sucesso!");
  };
  
  const handleEditAvatar = () => {
    setIsAvatarEditing(true);
  };
  
  const handleSaveAvatar = (url: string) => {
    setProfileData(prev => ({
      ...prev,
      avatarUrl: url
    }));
    setIsAvatarEditing(false);
    toast.success("Avatar atualizado com sucesso!");
  };
  
  const handleCancelAvatar = () => {
    setIsAvatarEditing(false);
  };
  
  return {
    profileData,
    isEditing,
    isAvatarEditing,
    handleEditProfile,
    handleSaveProfile,
    setIsEditing,
    handleEditAvatar,
    handleSaveAvatar,
    handleCancelAvatar
  };
}
