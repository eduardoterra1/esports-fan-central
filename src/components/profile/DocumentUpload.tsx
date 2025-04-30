
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { FileCheck, FileCode, Upload, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface DocumentUploadProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const DocumentUpload = ({ onNextStep, onPrevStep }: DocumentUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [verificationMessage, setVerificationMessage] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.includes('image/') && !file.type.includes('application/pdf')) {
      toast.error('Por favor, envie apenas arquivos PDF ou imagens (JPG, PNG)');
      return;
    }
    
    setUploadedFile(file);
    setVerificationStatus('idle');
    
    if (file.type.includes('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
    
    toast.success(`Arquivo ${file.name} carregado com sucesso!`);
  };

  const verifyDocument = () => {
    if (!uploadedFile) {
      toast.error('Por favor, envie um documento primeiro');
      return;
    }
    
    setVerificationStatus('processing');
    setVerificationMessage('Verificando documento...');
    
    // Simulação de análise de IA 
    setTimeout(() => {
      // Simulação de análise de IA bem-sucedida
      setVerificationStatus('success');
      setVerificationMessage('Documento verificado com sucesso! Identidade confirmada.');
    }, 3000);
  };

  const handleContinue = () => {
    if (verificationStatus !== 'success') {
      toast.error('Por favor, verifique seu documento antes de continuar');
      return;
    }
    
    onNextStep();
  };

  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <FileCode className="h-6 w-6 text-esports-purple" />
          Verificação de Identidade
        </CardTitle>
        <CardDescription>
          Envie um documento de identificação (RG ou CNH) para verificação
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div 
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive 
              ? "border-esports-purple bg-esports-purple/10" 
              : "border-muted"
          } ${
            uploadedFile ? "border-green-500 bg-green-500/10" : ""
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          {!uploadedFile ? (
            <>
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Arraste e solte seu documento aqui</h3>
              <p className="text-muted-foreground mb-4">Ou clique para selecionar um arquivo</p>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*,.pdf"
                onChange={handleChange}
              />
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Selecionar arquivo
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <FileCheck className="h-12 w-12 text-green-500 mb-2" />
              <h3 className="text-lg font-semibold mb-2">{uploadedFile.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
              {filePreview && (
                <div className="mt-4 max-w-xs mx-auto">
                  <img 
                    src={filePreview} 
                    alt="Preview do documento" 
                    className="rounded-md max-h-48 mx-auto border"
                  />
                </div>
              )}
              <div className="mt-4 flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setUploadedFile(null);
                    setFilePreview(null);
                    setVerificationStatus('idle');
                  }}
                >
                  Remover
                </Button>
                <Button 
                  onClick={() => document.getElementById('file-upload')?.click()}
                  variant="outline"
                >
                  Trocar
                </Button>
              </div>
            </div>
          )}
        </div>

        {uploadedFile && (
          <div className="space-y-4">
            {verificationStatus === 'idle' && (
              <Button 
                className="w-full bg-esports-blue hover:bg-esports-blue/80"
                onClick={verifyDocument}
              >
                Verificar Documento
              </Button>
            )}
            
            {verificationStatus === 'processing' && (
              <Alert className="bg-esports-blue/20 border-esports-blue">
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-5 w-5 border-2 border-esports-blue border-t-transparent rounded-full" />
                  <AlertTitle>Processando</AlertTitle>
                </div>
                <AlertDescription>{verificationMessage}</AlertDescription>
              </Alert>
            )}
            
            {verificationStatus === 'success' && (
              <Alert className="bg-green-500/20 border-green-500">
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-green-500" />
                  <AlertTitle>Verificação Concluída</AlertTitle>
                </div>
                <AlertDescription>{verificationMessage}</AlertDescription>
              </Alert>
            )}
            
            {verificationStatus === 'error' && (
              <Alert className="bg-destructive/20 border-destructive">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  <AlertTitle>Erro na Verificação</AlertTitle>
                </div>
                <AlertDescription>{verificationMessage}</AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onPrevStep}>
          Voltar
        </Button>
        <Button 
          className="bg-esports-purple hover:bg-esports-purple/80"
          onClick={handleContinue}
          disabled={verificationStatus !== 'success'}
        >
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentUpload;
