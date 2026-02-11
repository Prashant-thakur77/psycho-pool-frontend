import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Smartphone, Monitor, Users, Trophy, Timer, Sparkles } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background bg-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Animated grid overlay */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20"
        />
        {/* Animated blobs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Floating Callout Badge */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
          className="absolute left-1/2 -top-8 -translate-x-1/2 bg-gradient-to-r from-neon-cyan to-neon-magenta text-white px-6 py-2 rounded-full shadow-lg font-bold text-base tracking-wide border-2 border-white/10 backdrop-blur-md"
        >
          🚀 New: Play with friends instantly!
        </motion.div>
        {/* Sparkle Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute left-1/2 top-10 -translate-x-1/2 pointer-events-none"
        >
          <Sparkles className="w-16 h-16 text-neon-yellow/40 animate-pulse" />
        </motion.div>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 rounded-3xl border-4 border-transparent bg-clip-padding bg-black/30 backdrop-blur-md p-8 relative overflow-hidden shadow-2xl"
          style={{ boxShadow: '0 0 40px 0 rgba(0,255,255,0.10), 0 0 80px 0 rgba(255,0,255,0.08)' }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 32px 8px #06b6d4, 0 0 0 0 #d946ef',
                '0 0 0 0 #06b6d4, 0 0 32px 8px #d946ef',
                '0 0 32px 8px #06b6d4, 0 0 0 0 #d946ef',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-gradient-to-r from-neon-cyan to-neon-magenta opacity-40"
          />
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block mb-6"
          >
            <Zap 
              className="w-20 h-20 text-neon-cyan mx-auto" 
              style={{ filter: 'drop-shadow(0 0 20px hsl(var(--neon-cyan)))' }} 
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-4">
            <span className="neon-text-cyan">Quiz</span>
            <span className="neon-text-magenta">Sync</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real-time multiplayer trivia. <span className="text-neon-yellow">Compete, connect, and conquer.</span>
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link to="/play">
              <Button size="xl" className="bg-neon-cyan text-black font-bold text-lg px-8 py-4 shadow-lg hover:bg-neon-cyan/80 hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6 mr-2" /> Join Game
              </Button>
            </Link>
            <Link to="/admin">
              <Button size="xl" className="bg-neon-magenta text-black font-bold text-lg px-8 py-4 shadow-lg hover:bg-neon-magenta/80 hover:scale-105 transition-transform">
                <Monitor className="w-6 h-6 mr-2" /> Host/Admin
              </Button>
            </Link>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {([
              { icon: Users, label: 'Multiplayer' },
              { icon: Timer, label: 'Real-time' },
              { icon: Trophy, label: 'Leaderboards' },
              { icon: Sparkles, label: 'No Downloads' },
            ]).map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border shadow-sm hover:shadow-neon-cyan/20 transition-shadow"
              >
                <feature.icon className="w-5 h-5 text-neon-cyan" />
                <span className="text-sm font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo/Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card/80 border border-neon-cyan/20 rounded-2xl p-8 max-w-2xl mx-auto mb-12 shadow-xl backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-2 text-neon-cyan">How it works</h2>
          <ul className="text-muted-foreground text-lg space-y-2 mb-4">
            <li>1. <span className="text-white">Join as a player</span> on your phone or computer.</li>
            <li>2. <span className="text-white">Host starts the game</span> and controls the flow.</li>
            <li>3. <span className="text-white">Answer questions live</span> and climb the leaderboard!</li>
          </ul>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/play">
              <Button variant="outline" className="border-neon-cyan text-neon-cyan font-bold px-6 py-3">
                Try Demo
              </Button>
            </Link>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-neon-magenta text-neon-magenta font-bold px-6 py-3">
                View on GitHub
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Testimonial/Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="max-w-xl mx-auto text-center mt-12 mb-4 p-6 rounded-xl bg-black/40 border border-neon-yellow/20 shadow-lg"
        >
          <p className="text-lg text-neon-yellow font-semibold mb-2">
            “The most fun I’ve had in a browser game. Fast, social, and addictive!”
          </p>
          <span className="text-muted-foreground text-sm">— Real User, 2026</span>
        </motion.div>

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-muted-foreground text-sm mt-16"
        >
          Built for real-time multiplayer experiences • Socket.io ready
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
