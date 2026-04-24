import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

type ProfileAvatarProps = {
  alt: string;
  className?: string;
  darkImageSrc: string;
  darkVideoSrc?: string;
  fallbackDarkImageSrc?: string;
  fallbackLightImageSrc?: string;
  lightImageSrc: string;
  priority?: boolean;
};

const mediaTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const ProfileAvatar = ({
  alt,
  className = '',
  darkImageSrc,
  darkVideoSrc,
  fallbackDarkImageSrc,
  fallbackLightImageSrc,
  lightImageSrc,
  priority = false,
}: ProfileAvatarProps) => {
  const { isDark } = useTheme();
  const [lightSrc, setLightSrc] = useState(lightImageSrc);
  const [darkSrc, setDarkSrc] = useState(darkImageSrc);
  const [canUseDarkVideo, setCanUseDarkVideo] = useState(Boolean(darkVideoSrc));

  useEffect(() => {
    setLightSrc(lightImageSrc);
  }, [lightImageSrc]);

  useEffect(() => {
    setDarkSrc(darkImageSrc);
  }, [darkImageSrc]);

  useEffect(() => {
    setCanUseDarkVideo(Boolean(darkVideoSrc));
  }, [darkVideoSrc]);

  const showDarkVideo = isDark && Boolean(darkVideoSrc) && canUseDarkVideo;
  const activeKey = showDarkVideo ? 'dark-video' : isDark ? 'dark-image' : 'light-image';
  const activeImageSrc = isDark ? darkSrc : lightSrc;

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/25 bg-[var(--color-accent-soft)] shadow-xl ${className}`}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />

      <AnimatePresence mode="wait" initial={false}>
        {showDarkVideo ? (
          <motion.video
            key={activeKey}
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            loop
            muted
            onError={() => setCanUseDarkVideo(false)}
            playsInline
            poster={darkSrc}
            preload="metadata"
            transition={mediaTransition}
          >
            <source src={darkVideoSrc} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.img
            key={activeKey}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority={priority ? 'high' : 'auto'}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            loading={priority ? 'eager' : 'lazy'}
            onError={() => {
              if (isDark) {
                setDarkSrc(fallbackDarkImageSrc ?? fallbackLightImageSrc ?? lightImageSrc);
                return;
              }

              setLightSrc(fallbackLightImageSrc ?? lightImageSrc);
            }}
            src={activeImageSrc}
            transition={mediaTransition}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
