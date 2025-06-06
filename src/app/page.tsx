'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gamepad2, Users, Trophy, Zap, Star, ArrowRight, Heart, Sparkles, Smile } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-pastel-rainbow relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, -100], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          className="absolute top-20 left-10 text-pink-400"
        >
          <Heart className="h-6 w-6 animate-heartbeat" fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ y: [-20, -120], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-20 text-yellow-400"
        >
          <Star className="h-8 w-8 animate-sparkle" fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ y: [-20, -80], opacity: [0, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          className="absolute top-60 left-1/4 text-blue-400"
        >
          <Sparkles className="h-5 w-5 animate-dance" />
        </motion.div>
        
        {/* Geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-1/4 w-12 h-12 bg-cute-gradient rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-1/3 w-8 h-8 bg-mint-fresh rounded-lg opacity-30 animate-bounce-cute"
        />
      </div>
        
      <nav className="relative z-50 bg-white/90 backdrop-blur-xl border-b-4 border-pink-200 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Gamepad2 className="h-10 w-10 text-pink-500 animate-wiggle" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-sparkle" />
            </div>
            <span className="text-3xl font-black bg-pop-gradient bg-clip-text text-transparent animate-rainbow">
              ClanHub
            </span>
            <Heart className="h-6 w-6 text-pink-400 animate-heartbeat" fill="currentColor" />
          </motion.div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-purple-600 hover:bg-pink-100 font-medium">
                ログイン ✨
              </Button>
            </Link>
            <Link href="/dashboard">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-cute-gradient hover:bg-soft-pink text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-cute">
                  始めよう！ 🚀
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Title with extra kawaii elements */}
            <motion.div 
              className="mb-8 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute -top-4 -left-4 text-4xl animate-bounce-cute">🌟</div>
              <div className="absolute -top-6 -right-2 text-3xl animate-dance">✨</div>
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
                <span className="block bg-pop-gradient bg-clip-text text-transparent animate-rainbow">
                  みんなで
                </span>
                <span className="block bg-cute-gradient bg-clip-text text-transparent">
                  ゲームしよ！
                </span>
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl animate-wiggle">💕</div>
            </motion.div>
            
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-purple-700 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="relative">
                仲間を見つけて、一緒に楽しもう！
                <Smile className="inline h-8 w-8 ml-2 text-yellow-500 animate-heartbeat" />
              </span>
              <br />
              <span className="text-lg text-pink-600 font-medium">
                日本で一番可愛いゲーミングコミュニティ 🎮💖
              </span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-pop-gradient hover:bg-cute-gradient text-white font-black text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-pink-300/50 transition-all duration-300 min-w-[280px] relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      今すぐ始める！ 
                      <Heart className="ml-3 h-6 w-6 animate-heartbeat" fill="currentColor" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white/90 text-purple-700 font-bold text-lg px-8 py-6 rounded-full border-4 border-pink-300 hover:border-purple-400 hover:bg-pink-50 min-w-[200px] shadow-lg">
                  もっと見る 👀
                </Button>
              </motion.div>
            </motion.div>

            {/* Cute stats with emojis */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white/90 rounded-3xl p-6 shadow-xl border-4 border-pink-200 hover:border-purple-300 transition-all duration-300 animate-bubble">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-3xl font-black text-purple-700 mb-1">10,000+</div>
                <div className="text-purple-600 font-medium">アクティブプレイヤー</div>
              </div>
              <div className="bg-white/90 rounded-3xl p-6 shadow-xl border-4 border-blue-200 hover:border-purple-300 transition-all duration-300 animate-bubble" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-2">💫</div>
                <div className="text-3xl font-black text-purple-700 mb-1">500+</div>
                <div className="text-purple-600 font-medium">毎日新しいマッチ</div>
              </div>
              <div className="bg-white/90 rounded-3xl p-6 shadow-xl border-4 border-green-200 hover:border-purple-300 transition-all duration-300 animate-bubble" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-3xl font-black text-purple-700 mb-1">99.8%</div>
                <div className="text-purple-600 font-medium">満足度</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20 bg-white/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce-cute">🌈</div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-pop-gradient bg-clip-text text-transparent">
                なんで ClanHub？
              </h2>
              <p className="text-2xl text-purple-700 font-bold max-w-3xl mx-auto">
                他にはない、超キュートで楽しい機能がいっぱい！ ✨
              </p>
              <div className="absolute -bottom-2 right-1/4 text-2xl animate-dance">🎪</div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  emoji: "🤝",
                  icon: Users,
                  title: "運命の仲間探し",
                  description: "AIが超精密にマッチング！あなたにぴったりの仲間が必ず見つかる ❤️",
                  color: "from-pink-400 to-rose-400",
                  borderColor: "border-pink-300"
                },
                {
                  emoji: "🏆",
                  icon: Trophy,
                  title: "チーム運営も楽々",
                  description: "練習予定から戦績まで、可愛いUIで簡単管理！みんなで頑張ろう 💪",
                  color: "from-yellow-400 to-orange-400",
                  borderColor: "border-yellow-300"
                },
                {
                  emoji: "⚡",
                  icon: Zap,
                  title: "瞬速つながり",
                  description: "Discord連携でリアルタイム！待ち時間ゼロで楽しさ無限大 🚀",
                  color: "from-blue-400 to-purple-400",
                  borderColor: "border-blue-300"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-white/90 p-8 rounded-3xl border-4 ${feature.borderColor} hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 50, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 animate-bounce-cute" style={{ animationDelay: `${index * 0.2}s` }}>
                      {feature.emoji}
                    </div>
                    <feature.icon className="h-12 w-12 text-purple-600 mb-4 animate-float" />
                    <h3 className="text-2xl font-black text-purple-800 mb-4">{feature.title}</h3>
                    <p className="text-purple-700 font-medium leading-relaxed">{feature.description}</p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 text-2xl animate-sparkle">✨</div>
                    <div className="absolute bottom-4 left-4 text-xl animate-heartbeat">💖</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-pop-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 text-6xl animate-float">🌟</div>
            <div className="absolute top-20 right-20 text-5xl animate-dance">💫</div>
            <div className="absolute bottom-20 left-20 text-4xl animate-bubble">🎊</div>
            <div className="absolute bottom-10 right-10 text-6xl animate-wiggle">🎯</div>
            <div className="absolute top-1/2 left-1/4 text-3xl animate-sparkle">✨</div>
            <div className="absolute top-1/3 right-1/3 text-5xl animate-heartbeat">💕</div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-8 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl animate-rainbow">🌈</div>
                <h2 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl leading-tight">
                  <span className="block">運命の仲間が</span>
                  <span className="block animate-bounce-cute">ここにいる！</span>
                </h2>
                <div className="absolute -bottom-4 right-1/4 text-4xl animate-dance">🚀</div>
              </div>
              
              <p className="text-2xl md:text-3xl text-white/95 font-bold mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                今すぐ始めて、最高のゲーム体験をしよう！ 
                <br />
                <span className="text-xl">みんなで一緒に楽しもうね〜 💖</span>
              </p>

              <motion.div 
                className="mb-16"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/dashboard">
                  <Button className="bg-white text-purple-700 font-black text-2xl px-16 py-8 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 min-w-[350px] relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center">
                      💫 今すぐ無料で始める 💫
                      <Heart className="ml-4 h-8 w-8 animate-heartbeat text-pink-500" fill="currentColor" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 group-hover:from-pink-400/40 group-hover:to-purple-400/40 transition-all" />
                  </Button>
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-white/90 font-bold">
                  <div className="text-3xl mb-2">🆓</div>
                  <div className="text-lg">完全無料</div>
                </div>
                <div className="text-white/90 font-bold">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-lg">30秒で登録</div>
                </div>
                <div className="text-white/90 font-bold">
                  <div className="text-3xl mb-2">💯</div>
                  <div className="text-lg">満足保証</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-purple-100 to-pink-100 border-t-4 border-purple-300 py-12 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 text-3xl animate-float">🌸</div>
          <div className="absolute top-6 right-20 text-2xl animate-dance">✨</div>
          <div className="absolute bottom-4 left-1/3 text-3xl animate-heartbeat">💖</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center space-x-3 mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Gamepad2 className="h-8 w-8 text-purple-600 animate-wiggle" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-sparkle" />
              </div>
              <span className="text-2xl font-black bg-pop-gradient bg-clip-text text-transparent">
                ClanHub
              </span>
              <Heart className="h-6 w-6 text-pink-500 animate-heartbeat" fill="currentColor" />
            </motion.div>
            
            <div className="text-center md:text-right">
              <div className="text-purple-700 font-bold mb-2">
                © 2024 ClanHub. みんなで作る楽しいコミュニティ 🌟
              </div>
              <div className="text-purple-600 text-sm">
                Made with 💖 for gamers by gamers
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}