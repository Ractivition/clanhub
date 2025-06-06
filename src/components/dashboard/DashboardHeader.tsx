'use client';

import { motion } from 'framer-motion';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface DashboardHeaderProps {
  onMenuToggle: () => void;
  title: string;
  userImage?: string;
}

export default function DashboardHeader({ onMenuToggle, title, userImage = "/images/avatar-placeholder.png" }: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-50 bg-white/95 backdrop-blur-xl border-b-4 border-slate-200 px-4 py-3.5 lg:px-6 lg:pl-6 shadow-lg overflow-hidden lg:w-[calc(100%-16rem)] xl:w-[calc(100%-16rem)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1 right-20 text-xl">✨</div>
      </div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuToggle}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-black text-slate-800">{title}</h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative p-3 hover:bg-blue-50 rounded-xl text-blue-600"
            >
              <Bell className="h-6 w-6" />
            </Button>
          </motion.div>

          <ThemeToggle />

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              size="icon"
              className="p-3 hover:bg-blue-50 rounded-xl text-blue-600 relative"
            >
              <div className="relative">
                <Image
                  src={userImage}
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}