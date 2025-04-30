
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Save, X } from "lucide-react";

interface AvatarEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (url: string) => void;
  currentAvatarUrl: string;
}

const AvatarEditModal = ({
  isOpen,
  onClose,
  onSave,
  currentAvatarUrl
}: AvatarEditModalProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(currentAvatarUrl);

  const avatarOptions = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  ];

  const handleSave = () => {
    onSave(selectedAvatar);
    toast.success("Avatar atualizado com sucesso!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md glassmorphism">
        <DialogHeader>
          <DialogTitle className="text-xl">Escolher avatar</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 py-4">
          {avatarOptions.map((url, index) => (
            <div 
              key={index}
              className={`
                relative cursor-pointer rounded-full overflow-hidden border-2 
                ${selectedAvatar === url 
                  ? 'border-esports-purple' 
                  : 'border-transparent'}
              `}
              onClick={() => setSelectedAvatar(url)}
            >
              <img 
                src={url} 
                alt={`Avatar option ${index + 1}`}
                className="w-full h-auto aspect-square object-cover"
              />
              {selectedAvatar === url && (
                <div className="absolute inset-0 bg-esports-purple/20 flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={onClose}
            className="gap-2"
          >
            <X className="h-4 w-4" /> Cancelar
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-esports-purple hover:bg-esports-purple/80 gap-2"
          >
            <Save className="h-4 w-4" /> Salvar avatar
          </Button>
        </DialogFooter>
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

export default AvatarEditModal;
