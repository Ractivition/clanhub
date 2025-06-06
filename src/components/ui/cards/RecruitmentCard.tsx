'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, AlertCircle } from 'lucide-react';
import { Recruitment } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RecruitmentCardProps {
  recruitment: Recruitment;
}

export default function RecruitmentCard({ recruitment }: RecruitmentCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-lg">{recruitment.title}</h3>
            {recruitment.isUrgent && (
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                <AlertCircle className="h-3 w-3 mr-1" />
                急募
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {recruitment.game}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {recruitment.teamName}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(recruitment.postedAt)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-medium text-sm mb-2">募集ポジション</h4>
          <div className="flex flex-wrap gap-1">
            {recruitment.positions.map((position, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary"
              >
                {position}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-2">必要ランク</h4>
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
            {recruitment.rank}
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {recruitment.description}
      </p>

      <div className="mb-4">
        <h4 className="font-medium text-sm mb-2">応募条件</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          {recruitment.requirements.map((requirement, index) => (
            <li key={index} className="flex items-center">
              <div className="w-1 h-1 bg-muted-foreground rounded-full mr-2" />
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">
          <Clock className="h-3 w-3 inline mr-1" />
          連絡先: {recruitment.contact}
        </div>
        <Button size="sm" variant="outline">
          応募する
        </Button>
      </div>
    </motion.div>
  );
}