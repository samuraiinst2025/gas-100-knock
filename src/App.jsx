import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, CheckCircle2, ChevronDown, Terminal, Github, ArrowUp } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import problems from './data/problems';

const ProblemCard = ({ problem }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  // Consider template "not needed" if it's just a simple empty function like function qX() { // ここに記入 }
  const isTemplateNeeded = (sample) => {
    if (!sample) return false;
    const cleanSample = sample.replace(/\s/g, '');
    const emptyPattern = /functionq\d+\(\)\{\/\/.+\}/;
    return !emptyPattern.test(cleanSample);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass p-6 md:p-8 rounded-3xl mb-8 border border-white/5 hover:border-blue-500/30 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-mono text-blue-400 mb-1 block tracking-wider font-bold">Q.{problem.id} — {problem.category}</span>
          <h3 className="text-xl md:text-2xl font-bold text-white">{problem.title}</h3>
        </div>
      </div>

      <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 mb-6">
        <p className="text-slate-300 leading-relaxed text-lg">
          {problem.description}
        </p>
      </div>

      {isTemplateNeeded(problem.sample) && (
        <div className="mb-6">
          <span className="text-xs text-purple-400 font-mono mb-2 block tracking-widest uppercase font-bold">Start Template</span>
          <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl">
            <SyntaxHighlighter 
              language="javascript" 
              style={atomDark} 
              customStyle={{ margin: 0, padding: '1.25rem', background: '#0d0d0f', fontSize: '0.9rem' }}
            >
              {problem.sample}
            </SyntaxHighlighter>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <button 
          onClick={() => setShowAnswer(!showAnswer)}
          className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
            showAnswer 
              ? 'bg-slate-800 text-slate-300 ring-1 ring-white/10' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:brightness-110 shadow-blue-900/20'
          }`}
        >
          {showAnswer ? <ChevronDown className="rotate-180" size={20} /> : <CheckCircle2 size={20} />}
          {showAnswer ? '解答を隠す' : '解答・解説を確認'}
        </button>

        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <div>
                  <span className="text-xs text-green-400 font-mono mb-2 block tracking-widest uppercase font-bold">Answer Example</span>
                  <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={atomDark} 
                      customStyle={{ margin: 0, padding: '1.25rem', background: '#0d0d0f', fontSize: '0.95rem' }}
                    >
                      {problem.answer}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('すべて');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const categories = ['すべて', ...new Set(problems.map(p => p.category))];

  const filteredProblems = problems.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'すべて' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pb-20">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-16 text-center pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 text-blue-400 text-sm font-medium"
        >
          <Code2 size={16} />
          <span>GAS 100本ノック v2.0 — List View</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          GAS 100本ノック挑戦状
        </motion.h1>

        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
          Google Apps Scriptをマスターするための100の問題。<br className="hidden md:block" />
          上から順に解いて、実戦力を身につけましょう。
        </p>
      </header>

      {/* Controls */}
      <div className="max-w-4xl mx-auto mb-12 sticky top-4 z-40 space-y-4 px-2 md:px-0">
        <div className="glass p-3 md:p-4 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-xl border border-white/10">
          <Search className="text-slate-500 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="問題を検索 (タイトル、内容...)" 
            className="bg-transparent border-none outline-none w-full text-white placeholder:text-slate-600 text-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm md:text-base whitespace-nowrap transition-all font-bold ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                  : 'glass text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Problem List */}
      <main className="max-w-4xl mx-auto">
        {filteredProblems.length > 0 ? (
          filteredProblems.map(p => (
            <ProblemCard key={p.id} problem={p} />
          ))
        ) : (
          <div className="glass p-20 rounded-3xl text-center text-slate-500 border-dashed border-2 border-white/10">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-xl font-bold">一致する問題が見つかりませんでした</p>
            <p className="mt-2 text-slate-600">検索ワードやカテゴリーを変えてみてください</p>
          </div>
        )}
      </main>

      {/* Scroll Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-900/40 hover:bg-blue-500 transition-colors z-50"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="max-w-4xl mx-auto mt-20 pb-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>© 2026 samuraiinst2025 — GAS 100 Knock Challenge</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="https://github.com/samuraiinst2025/gas-100-knock" className="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
            <Github size={18} /> Repository
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
