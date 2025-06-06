import { MenuItem, Announcement, AdBanner, Recruitment, SliderImage, GameStats } from '@/types';

export const menuItems: MenuItem[] = [
  { id: 'home', label: 'ホーム', icon: 'Home', href: '/dashboard', isActive: true },
  { id: 'teams', label: 'チーム', icon: 'Users', href: '/teams' },
  { id: 'players', label: 'プレイヤー', icon: 'User', href: '/players' },
  { id: 'matches', label: 'マッチ', icon: 'Calendar', href: '/matches' },
  { id: 'tournaments', label: 'トーナメント', icon: 'Trophy', href: '/tournaments' },
  { id: 'settings', label: '設定', icon: 'Settings', href: '/settings' },
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'サーバーメンテナンスのお知らせ',
    content: '2024年1月15日 2:00-4:00にメンテナンスを実施します。',
    date: '2024-01-10',
    type: 'warning',
    isNew: true,
  },
  {
    id: '2',
    title: 'マッチング機能がアップデートされました',
    content: 'より精度の高いマッチングが可能になりました。',
    date: '2024-01-08',
    type: 'success',
  },
  {
    id: '3',
    title: '新しいゲームタイトル追加',
    content: 'Apex LegendsとOVERWATCH 2が追加されました。',
    date: '2024-01-05',
    type: 'info',
  },
];

export const adBanners: AdBanner[] = [
  {
    id: '1',
    title: 'ゲーミングデバイス特価セール',
    description: '人気ゲーミングマウス・キーボードが30%OFF！',
    imageUrl: 'https://placehold.co/600x300/4f46e5/ffffff?text=Gaming+Devices+Sale',
    linkUrl: 'https://example.com/sale',
    isActive: true,
  },
  {
    id: '2',
    title: 'プロチーム協賛スポンサー募集',
    description: 'あなたの会社もeスポーツ界に参入しませんか？',
    imageUrl: 'https://placehold.co/600x300/ec4899/ffffff?text=Sponsor+Recruitment',
    linkUrl: 'https://example.com/sponsor',
    isActive: true,
  },
  {
    id: '3',
    title: '夏のキャンペーン',
    description: '新規登録で豪華賞品が当たる！',
    imageUrl: 'https://placehold.co/600x300/0ea5e9/ffffff?text=Summer+Campaign',
    linkUrl: 'https://example.com/campaign',
    isActive: true,
  }
];

export const recruitments: Recruitment[] = [
  {
    id: '1',
    title: 'VALORANT競技チームメンバー募集',
    game: 'VALORANT',
    teamName: 'Team Phoenix',
    rank: 'イモータル以上',
    positions: ['デュエリスト', 'センチネル'],
    description: '大会出場を目指す競技チームです。週3回以上の練習に参加できる方を募集中。',
    requirements: ['年齢18歳以上', 'Discord必須', '平日夜練習参加可能'],
    contact: 'discord: phoenix#1234',
    postedAt: '2024-01-10',
    isUrgent: true,
  },
  {
    id: '2',
    title: 'カジュアルLeague of Legendsチーム',
    game: 'League of Legends',
    teamName: 'Casual Legends',
    rank: 'ゴールド以上',
    positions: ['ジャングル', 'サポート'],
    description: 'エンジョイ勢歓迎！楽しくプレイできる仲間を募集しています。',
    requirements: ['マナーの良い方', 'VC参加可能'],
    contact: 'Twitter: @casuallegends',
    postedAt: '2024-01-09',
  },
  {
    id: '3',
    title: 'Apex Legends ランクマッチチーム',
    game: 'Apex Legends',
    teamName: 'Apex Warriors',
    rank: 'プラチナ以上',
    positions: ['IGL', 'サポート'],
    description: 'プレデター到達を目指すチームです。連携重視で活動しています。',
    requirements: ['毎日2時間以上プレイ可能', 'コーチング経験歓迎'],
    contact: 'LINE: apexwarriors2024',
    postedAt: '2024-01-08',
    isUrgent: true,
  },
];

export const sliderImages: SliderImage[] = [
  {
    id: '1',
    title: 'Winter Tournament 2024',
    description: '賞金総額500万円の大規模トーナメント開催！',
    imageUrl: 'https://placehold.co/1200x400/4f46e5/ffffff?text=Winter+Tournament+2024',
    linkUrl: '/tournaments/winter2024',
    isActive: true,
  },
  {
    id: '2',
    title: 'New Feature Release',
    description: 'チーム管理機能がパワーアップしました',
    imageUrl: 'https://placehold.co/1200x400/ec4899/ffffff?text=New+Feature+Release',
    linkUrl: '/features/team-management',
    isActive: true,
  },
  {
    id: '3',
    title: 'Pro Player Interview',
    description: '国内トッププレイヤーとの独占インタビュー',
    imageUrl: 'https://placehold.co/1200x400/0ea5e9/ffffff?text=Pro+Player+Interview',
    linkUrl: '/interviews/pro-player',
    isActive: true,
  },
];

export const gameStats: GameStats[] = [
  { game: 'VALORANT', playerCount: 1250, teamCount: 180, trending: true },
  { game: 'League of Legends', playerCount: 980, teamCount: 145, trending: false },
  { game: 'Apex Legends', playerCount: 750, teamCount: 95, trending: true },
  { game: 'OVERWATCH 2', playerCount: 680, teamCount: 120, trending: false },
  { game: 'Counter-Strike 2', playerCount: 520, teamCount: 78, trending: true },
];