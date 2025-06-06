'use client';

import { motion } from 'framer-motion';
import { Menu, Search, Bell, User, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface DashboardHeaderProps {
  onMenuToggle: () => void;
  title: string;
}

export default function DashboardHeader({ onMenuToggle, title }: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 z-50 bg-white/95 backdrop-blur-xl border-b-4 border-pink-300 px-4 py-4 lg:px-6 lg:pl-6 shadow-lg overflow-hidden lg:w-[calc(100%-16rem)] xl:w-[calc(100%-16rem)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-10 text-2xl">🌈</div>
        <div className="absolute top-1 right-20 text-xl">✨</div>
        <div className="absolute bottom-1 left-1/3 text-lg">💖</div>
      </div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="lg:hidden p-3 hover:bg-pink-100 rounded-xl text-purple-600"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <h1 className="text-2xl sm:text-3xl font-black bg-pop-gradient bg-clip-text text-transparent">
              {title}
            </h1>
            <div className="text-xl sm:text-2xl">
              {title === 'ホーム' && '🏠'}
              {title === 'チーム' && '👥'}
              {title === 'プレイヤー' && '👤'}
              {title === 'マッチ' && '📅'}
              {title === 'トーナメント' && '🏆'}
              {title === '設定' && '⚙️'}
            </div>
          </motion.div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="hidden sm:flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
              <Input
                type="text"
                placeholder="何を探そうかな？ 🔍"
                className="pl-12 pr-4 py-3 bg-white/80 border-3 border-pink-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 text-sm w-48 sm:w-72 font-medium text-purple-700 placeholder-purple-400"
              />
              <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-400" />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative p-3 hover:bg-pink-100 rounded-xl text-purple-600"
            >
              <Bell className="h-6 w-6" />
              <motion.span 
                className="absolute -top-1 -right-1 h-6 w-6 bg-pink-500 text-white rounded-full text-xs flex items-center justify-center font-bold shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                3
              </motion.span>
              <div className="absolute -bottom-1 -left-1 text-xs animate-heartbeat">💖</div>
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
              className="p-3 hover:bg-pink-100 rounded-xl text-purple-600 relative"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-pink-200">
                <Image
                  src="/images/avatar-placeholder.png"
                  alt="マイアカウント"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}