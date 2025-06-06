'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Users, User, Calendar, Trophy, Settings, Heart, Sparkles, Gamepad2 } from 'lucide-react';
import { MenuItem } from '@/types';
import { cn } from '@/lib/utils';

interface SidebarProps {
  items: MenuItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const iconMap = {
  Home,
  Users,
  User,
  Calendar,
  Trophy,
  Settings,
};

const emojiMap = {
  home: '🏠',
  teams: '👥',
  players: '👤',
  matches: '📅',
  tournaments: '🏆',
  settings: '⚙️',
};

export default function Sidebar({ items, activeTab, onTabChange, isOpen, onClose }: SidebarProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-white/98 to-purple-50/95 backdrop-blur-xl border-r-4 border-purple-200 shadow-2xl lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b-4 border-pink-200 bg-gradient-to-r from-pink-100 to-purple-100">
          <motion.div 
            className="hidden lg:flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-pop-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
            </div>
            <div>
              <span className="text-xl font-black bg-pop-gradient bg-clip-text text-transparent">
                ClanHub
              </span>
              <div className="text-xs text-purple-600 font-medium">みんなで楽しもう！</div>
            </div>
            <Heart className="h-5 w-5 text-pink-500" fill="currentColor" />
          </motion.div>
          <motion.button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-pink-100 rounded-xl transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-5 w-5 text-purple-600" />
          </motion.button>
        </div>

        <div className="h-[calc(100vh-8rem)] overflow-y-auto">
          <nav className="p-4">
            <div className="mb-4">
              <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider px-2 mb-3 flex items-center">
                <span>📋 メニュー</span>
                <div className="ml-2 text-xs animate-sparkle">✨</div>
              </h2>
            </div>
            <ul className="space-y-1">
              {items.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                const emoji = emojiMap[item.id as keyof typeof emojiMap];
                const isActive = activeTab === item.id;

                return (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => {
                        onTabChange(item.id);
                        if (window.innerWidth < 1024) {
                          onClose();
                        }
                      }}
                      className={cn(
                        "w-full flex items-center space-x-4 px-6 py-5 transition-all duration-300 relative overflow-hidden group border-l-4 rounded-r-2xl",
                        isActive
                          ? "bg-pop-gradient text-white shadow-xl border-l-white bg-white/10 backdrop-blur-sm"
                          : "hover:bg-pink-50 hover:border-l-purple-300 text-purple-700 border-l-transparent hover:shadow-lg"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative">
                        <div className="text-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                          {emoji}
                        </div>
                      </div>
                      <span className="font-bold text-lg">{item.label}</span>
                      
                      {isActive && (
                        <motion.div
                          className="absolute right-3 text-xl"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          ✨
                        </motion.div>
                      )}
                    </motion.button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="sticky bottom-0 left-0 right-0 p-6 border-t-4 border-pink-200 bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="text-center">
            <div className="text-sm font-bold text-purple-700 mb-1">
              ClanHub v1.0.0 💖
            </div>
            <div className="text-xs text-purple-600">
              Made with 🌟 for gamers
            </div>
          </div>
        </div>
      </div>
    </>
  );
}