'use client';

import { useState, useEffect } from 'react';
import { MenuItem, SliderImage, AdBanner } from '@/types';
import { menuItems, sliderImages, adBanners } from '@/data/mockData';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import HomeSection from '@/components/dashboard/sections/HomeSection';
import { Sparkles, Star } from 'lucide-react';

const activityFeed = [
  {
    emoji: '🎮',
    message: 'Team PhoenixがVALORANTトーナメントで優勝しました！',
    time: '10分前'
  },
  {
    emoji: '👥',
    message: '新しいチーム「Apex Warriors」が結成されました',
    time: '30分前'
  },
  {
    emoji: '🏆',
    message: 'Winter Tournament 2024の参加登録が開始されました',
    time: '1時間前'
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 画面サイズの変更を監視
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // 初期表示時にも実行
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection />;
      case 'teams':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-slate-300 shadow-xl">
              <div className="text-6xl mb-4 animate-bounce-cute">🏆</div>
              <h2 className="text-2xl font-black text-slate-800 mb-4">チーム機能</h2>
              <p className="text-slate-700 font-medium mb-4">もうすぐ登場！お楽しみに 💫</p>
              <div className="text-2xl animate-sparkle">✨</div>
            </div>
          </div>
        );
      case 'players':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-slate-300 shadow-xl">
              <div className="text-6xl mb-4 animate-dance">👫</div>
              <h2 className="text-2xl font-black text-slate-800 mb-4">プレイヤー検索</h2>
              <p className="text-slate-700 font-medium mb-4">素敵な仲間を見つけよう 🌟</p>
            </div>
          </div>
        );
      case 'matches':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-slate-300 shadow-xl">
              <div className="text-6xl mb-4 animate-wiggle">⚡</div>
              <h2 className="text-2xl font-black text-slate-800 mb-4">マッチ機能</h2>
              <p className="text-slate-700 font-medium mb-4">準備中...しばらくお待ちを 🚀</p>
            </div>
          </div>
        );
      case 'tournaments':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-slate-300 shadow-xl">
              <div className="text-6xl mb-4 animate-bubble">🎪</div>
              <h2 className="text-2xl font-black text-slate-800 mb-4">トーナメント</h2>
              <p className="text-slate-700 font-medium mb-4">みんなで競争しよう 🏅</p>
              <div className="text-2xl animate-float">🎯</div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-slate-300 shadow-xl">
              <div className="text-6xl mb-4 animate-heartbeat">⚙️</div>
              <h2 className="text-2xl font-black text-slate-800 mb-4">設定</h2>
              <p className="text-slate-700 font-medium mb-4">カスタマイズしよう 🎨</p>
              <div className="text-2xl animate-dance">✨</div>
            </div>
          </div>
        );
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-200/10 rounded-full blur-3xl" />
      </div>

      {/* メインコンテンツ */}
      <div className="flex relative z-10 min-h-screen">
        <Sidebar
          items={menuItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
          <DashboardHeader
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            title={menuItems.find(item => item.id === activeTab)?.label || 'ホーム'}
            userImage="/images/avatar-placeholder.png"
          />

          <div className="flex-1 relative mt-16">
            <main className="absolute inset-0 overflow-y-auto">
              <div className="container mx-auto px-4 sm:px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                  {/* メインコンテンツエリア (12カラム) */}
                  <div className="lg:col-span-12">
                    {renderContent()}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}