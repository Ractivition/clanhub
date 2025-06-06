'use client';

import { useState, useEffect } from 'react';
import { MenuItem, SliderImage, AdBanner } from '@/types';
import { menuItems, sliderImages, adBanners } from '@/data/mockData';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import HomeSection from '@/components/dashboard/sections/HomeSection';
import { Heart, Sparkles, Star } from 'lucide-react';

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
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-pink-300 shadow-xl">
              <div className="text-6xl mb-4 animate-bounce-cute">🏆</div>
              <h2 className="text-2xl font-black text-purple-800 mb-4">チーム機能</h2>
              <p className="text-purple-700 font-medium mb-4">もうすぐ登場！お楽しみに 💫</p>
              <div className="text-2xl animate-sparkle">✨</div>
            </div>
          </div>
        );
      case 'players':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-blue-300 shadow-xl">
              <div className="text-6xl mb-4 animate-dance">👫</div>
              <h2 className="text-2xl font-black text-purple-800 mb-4">プレイヤー検索</h2>
              <p className="text-purple-700 font-medium mb-4">素敵な仲間を見つけよう 🌟</p>
              <div className="text-2xl animate-heartbeat">💖</div>
            </div>
          </div>
        );
      case 'matches':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-green-300 shadow-xl">
              <div className="text-6xl mb-4 animate-wiggle">⚡</div>
              <h2 className="text-2xl font-black text-purple-800 mb-4">マッチ機能</h2>
              <p className="text-purple-700 font-medium mb-4">準備中...しばらくお待ちを 🚀</p>
              <div className="text-2xl animate-rainbow">🌈</div>
            </div>
          </div>
        );
      case 'tournaments':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-yellow-300 shadow-xl">
              <div className="text-6xl mb-4 animate-bubble">🎪</div>
              <h2 className="text-2xl font-black text-purple-800 mb-4">トーナメント</h2>
              <p className="text-purple-700 font-medium mb-4">みんなで競争しよう 🏅</p>
              <div className="text-2xl animate-float">🎯</div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto bg-white/90 rounded-3xl p-8 border-4 border-purple-300 shadow-xl">
              <div className="text-6xl mb-4 animate-heartbeat">⚙️</div>
              <h2 className="text-2xl font-black text-purple-800 mb-4">設定</h2>
              <p className="text-purple-700 font-medium mb-4">カスタマイズしよう 🎨</p>
              <div className="text-2xl animate-dance">✨</div>
            </div>
          </div>
        );
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-pastel-rainbow relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

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
          />

          <div className="flex-1 relative mt-16">
            <main className="absolute inset-0 overflow-y-auto">
              <div className="container mx-auto px-4 sm:px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                  {/* メインコンテンツエリア (8カラム) */}
                  <div className="lg:col-span-8">
                    {renderContent()}
                  </div>

                  {/* サイドバー (4カラム) */}
                  <div className="lg:col-span-4">
                    <div className="space-y-6">
                      {/* 広告バナー */}
                      {adBanners.map((banner) => (
                        <div key={banner.id} className="bg-white/90 backdrop-blur-xl rounded-2xl border-4 border-pink-200 shadow-xl overflow-hidden">
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-purple-900 mb-2">{banner.title}</h3>
                            <p className="text-purple-700 mb-4">{banner.description}</p>
                            <a
                              href={banner.linkUrl}
                              className="inline-block bg-pop-gradient text-white px-4 py-2 rounded-lg font-bold hover:shadow-lg transition-shadow"
                            >
                              詳細を見る
                            </a>
                          </div>
                        </div>
                      ))}

                      {/* 統計カード */}
                      <div className="bg-white/90 backdrop-blur-xl rounded-2xl border-4 border-pink-200 shadow-xl p-6">
                        <h3 className="text-lg font-bold text-purple-900 mb-4">統計</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-50/50 rounded-xl p-4">
                            <div className="text-2xl font-bold text-purple-900">1,234</div>
                            <div className="text-sm text-purple-600">アクティブユーザー</div>
                          </div>
                          <div className="bg-pink-50/50 rounded-xl p-4">
                            <div className="text-2xl font-bold text-pink-900">56</div>
                            <div className="text-sm text-pink-600">アクティブチーム</div>
                          </div>
                        </div>
                      </div>
                    </div>
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