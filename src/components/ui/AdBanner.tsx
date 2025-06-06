'use client';

import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  onClose?: () => void;
}

export default function AdBanner({ title, description, imageUrl, linkUrl, onClose }: AdBannerProps) {
  const handleClick = () => {
    window.open(linkUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <div className="flex items-center p-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          <Button variant="outline" size="sm" className="pointer-events-none">
            <ExternalLink className="h-4 w-4 mr-2" />
            詳細を見る
          </Button>
        </div>
        
        <div className="ml-4 hidden sm:block">
          <div 
            className="w-20 h-20 bg-muted rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
      </div>

      {onClose && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-6 w-6"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="h-4 w-4" />
        </Button>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 pointer-events-none" />
    </motion.div>
  );
}