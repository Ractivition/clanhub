'use client';

import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

export default function StatCard({ title, value, change, icon: Icon, trend }: StatCardProps) {
  const isPositive = trend === 'up';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="font-medium text-sm">{title}</h3>
        </div>
      </div>
      
      <div className="flex items-baseline justify-between">
        <div className="text-2xl font-bold">{value}</div>
        <div className={cn(
          'flex items-center text-xs font-medium',
          isPositive ? 'text-green-600' : 'text-red-600'
        )}>
          {isPositive ? (
            <TrendingUp className="h-3 w-3 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 mr-1" />
          )}
          {change}
        </div>
      </div>
    </motion.div>
  );
}