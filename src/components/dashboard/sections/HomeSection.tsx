'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { sliderImages, recruitments } from '@/data/mockData';
import ImageSlider from '@/components/ui/ImageSlider';
import RecruitmentCard from '@/components/ui/cards/RecruitmentCard';
import AdBanner from '@/components/ui/AdBanner';

export default function HomeSection() {
  return (
    <div className="space-y-8 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-20 text-3xl">🎮</div>
        <div className="absolute top-40 right-10 text-2xl">🌟</div>
        <div className="absolute bottom-20 left-10 text-4xl">💫</div>
      </div>
      
      <div className="relative z-10 space-y-8">
        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -top-2 -left-2 text-2xl">✨</div>
          <ImageSlider images={sliderImages} />
        </motion.div>

        {/* Recruitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6 bg-white/90 rounded-3xl p-6 border-4 border-slate-200 shadow-lg backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">📝</div>
              <h2 className="text-3xl font-black text-slate-800">
                みんなの募集
              </h2>
              <div className="text-2xl">🎯</div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-6 py-3 rounded-full shadow-lg">
                <Plus className="h-5 w-5 mr-2" />
                募集する！ 📢
              </Button>
            </motion.div>
          </div>
          
          <div className="grid gap-6">
            {recruitments.map((recruitment, index) => (
              <motion.div
                key={recruitment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <RecruitmentCard recruitment={recruitment} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ad Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AdBanner
            title="新機能リリース記念キャンペーン 🎉"
            description="プレミアム機能が1ヶ月無料！今すぐチェックして、もっと楽しいゲーム体験を！ ✨"
            imageUrl="/images/campaign-banner.jpg"
            linkUrl="/premium"
          />
        </motion.div>

        {/* Additional Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Featured Tournament */}
          <div className="bg-white/90 rounded-3xl p-6 border-4 border-slate-200 shadow-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl animate-bounce-cute">🏆</div>
              <h3 className="text-2xl font-black text-slate-800">注目のトーナメント</h3>
              <div className="text-xl animate-sparkle">✨</div>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border-3 border-slate-300">
                <h4 className="font-black text-slate-800 mb-2">Winter Championship 2024 ❄️</h4>
                <p className="text-sm text-slate-700 mb-2">賞金総額: 500万円 💰</p>
                <p className="text-xs text-slate-600">参加登録受付中！</p>
                <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 rounded-xl hover:scale-105 transition-transform">
                  参加する 🚀
                </button>
              </div>
            </div>
          </div>

          {/* Community Spotlight */}
          <div className="bg-white/90 rounded-3xl p-6 border-4 border-slate-200 shadow-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">💫</div>
              <h3 className="text-2xl font-black text-slate-800">コミュニティハイライト</h3>
              <div className="text-xl">🌟</div>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border-3 border-slate-300">
                <h4 className="font-black text-slate-800 mb-2">今月のMVPプレイヤー 👑</h4>
                <p className="text-sm text-slate-700 mb-2">ゆめちゃん - VALORANT</p>
                <p className="text-xs text-slate-600">素晴らしいチームワークで多くの勝利を導きました！</p>
                <button className="mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 rounded-xl hover:scale-105 transition-transform">
                  プロフィールを見る 👀
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}