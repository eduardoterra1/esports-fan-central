
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ProfileForm from '@/components/profile/ProfileForm';
import DocumentUpload from '@/components/profile/DocumentUpload';
import SocialConnect from '@/components/profile/SocialConnect';
import GamingPlatforms from '@/components/profile/GamingPlatforms';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { User, FileCheck, Link as LinkIcon, Gamepad, Check } from 'lucide-react';

const steps = [
  {
    id: 'profile',
    title: 'Perfil',
    icon: <User className="h-5 w-5" />
  },
  {
    id: 'document',
    title: 'Documento',
    icon: <FileCheck className="h-5 w-5" />
  },
  {
    id: 'social',
    title: 'Redes Sociais',
    icon: <LinkIcon className="h-5 w-5" />
  },
  {
    id: 'platforms',
    title: 'Plataformas',
    icon: <Gamepad className="h-5 w-5" />
  }
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleComplete = () => {
    toast.success("Perfil criado com sucesso! Redirecionando para o dashboard...");
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8 glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Crie seu perfil de fã de esports
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div 
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        index < currentStep 
                          ? "bg-esports-purple text-white" 
                          : index === currentStep 
                            ? "bg-esports-blue text-white" 
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index < currentStep ? <Check className="h-5 w-5" /> : step.icon}
                    </div>
                    <span className="mt-2 text-sm hidden md:block">{step.title}</span>
                  </div>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div 
                      className={`flex-1 h-1 mx-2 ${
                        index < currentStep ? "bg-esports-purple" : "bg-muted"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step content */}
          <div>
            {currentStep === 0 && <ProfileForm onNextStep={nextStep} />}
            {currentStep === 1 && <DocumentUpload onNextStep={nextStep} onPrevStep={prevStep} />}
            {currentStep === 2 && <SocialConnect onNextStep={nextStep} onPrevStep={prevStep} />}
            {currentStep === 3 && <GamingPlatforms onComplete={handleComplete} onPrevStep={prevStep} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
