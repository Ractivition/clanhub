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
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-white/98 to-slate-50/95 backdrop-blur-xl border-r-4 border-slate-200 shadow-2xl lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-center h-18 p-3 border-b-4 border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
          <motion.div 
            className="hidden lg:flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-black text-slate-800">ClanHub</span>
              <div className="text-xs text-slate-600 font-medium">みんなで楽しもう！</div>
            </div>
          </motion.div>
        </div>

        <div className="h-[calc(100vh-8rem)] overflow-y-auto">
          <nav className="p-4">
            <div className="mb-4">
              <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider px-2 mb-3 flex items-center">
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
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl border-l-white bg-white/10 backdrop-blur-sm"
                          : "hover:bg-slate-50 hover:border-l-blue-400 text-slate-700 border-l-transparent hover:shadow-lg"
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

        <div className="sticky bottom-0 left-0 right-0 p-6 border-t-4 border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
          <div className="text-center">
            <div className="text-sm font-bold text-slate-700 mb-1">
              ClanHub v1.0.0
            </div>
            <div className="text-xs text-slate-600">
              Made with 🌟 for gamers
            </div>
          </div>
        </div>
      </div>
    </>
  );
}