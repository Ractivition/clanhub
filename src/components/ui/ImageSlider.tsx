'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SliderImage } from '@/types';
import { Button } from '@/components/ui/button';

interface ImageSliderProps {
  images: SliderImage[];
  autoSlide?: boolean;
  slideInterval?: number;
}

export default function ImageSlider({ 
  images, 
  autoSlide = true, 
  slideInterval = 5000 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, images.length, slideInterval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="relative h-64 bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">画像がありません</p>
      </div>
    );
  }

  return (
    <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden bg-card border border-border">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-end"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${images[currentIndex].imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h3>
              <p className="text-lg opacity-90">{images[currentIndex].description}</p>
              {images[currentIndex].linkUrl && (
                <Button 
                  variant="secondary" 
                  className="mt-4"
                  onClick={() => window.open(images[currentIndex].linkUrl, '_blank')}
                >
                  詳細を見る
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm text-white hover:bg-background/40"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm text-white hover:bg-background/40"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}