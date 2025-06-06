'use client';

import { motion } from 'framer-motion';
import { Calendar, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Announcement } from '@/types';
import { cn } from '@/lib/utils';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const typeIcons = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
};

const typeColors = {
  info: 'text-blue-500',
  warning: 'text-yellow-500',
  success: 'text-green-500',
};

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const Icon = typeIcons[announcement.type];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start space-x-3">
        <Icon className={cn('h-5 w-5 mt-0.5', typeColors[announcement.type])} />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-sm truncate">{announcement.title}</h4>
            {announcement.isNew && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                NEW
              </span>
            )}
          </div>
          
          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
            {announcement.content}
          </p>
          
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(announcement.date).toLocaleDateString('ja-JP')}
          </div>
        </div>
      </div>
    </motion.div>
  );
}