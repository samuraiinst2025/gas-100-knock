import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, CheckCircle2, ChevronRight, Terminal, Github } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import problems from './data/problems';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [activeCategory, setActiveCategory] = useState('すべて');

    const categories = ['すべて', ...new Set(problems.map(p => p.category))];

    const filteredProblems = problems.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'すべて' || p.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen p-4 md:p-8">
            {/* Header */}
            <header className="max-w-6xl mx-auto mb-12 text-center pt-8 pb-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 text-blue-400 text-sm font-medium"
                >
                    <Code2 size={16} />
                    <span>GAS 100本ノック v1.0</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    GAS 100本ノック挑戦状
                </motion.h1>

                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Google Apps Scriptをマスターするための100の問題。
                    基本から実戦まで、一歩ずつレベルアップしていきましょう。
                </p>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* Left Side: Problem List */}
                <div className={`w-full lg:w-1/2 flex flex-col gap-6 ${selectedProblem ? 'hidden lg:flex' : 'flex'}`}>
                    <div className="glass p-4 rounded-2xl flex items-center gap-3">
                        <Search className="text-slate-500" size={20} />
                        <input
                            type="text"
                            placeholder="問題を検索..."
                            className="bg-transparent border-none outline-none w-full text-white placeholder:text-slate-600"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-blue-600 text-white'
                                        : 'glass text-slate-400 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        {filteredProblems.map(p => (
                            <motion.div
                                layout
                                key={p.id}
                                onClick={() => {
                                    setSelectedProblem(p);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`p-4 rounded-2xl cursor-pointer transition-all glass hover-glow relative overflow-hidden ${selectedProblem?.id === p.id ? 'ring-2 ring-blue-500 bg-blue-500/10' : ''
                                    }`}
                            >
                                {selectedProblem?.id === p.id && (
                                    <motion.div
                                        layoutId="active-glow"
                                        className="absolute inset-0 bg-blue-500/5 pointer-events-none"
                                    />
                                )}
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <span className="text-xs font-mono text-blue-400 mb-1 block">Q.{p.id} [{p.category}]</span>
                                        <h3 className="font-semibold">{p.title}</h3>
                                    </div>
                                    <ChevronRight size={18} className={`transition-transform ${selectedProblem?.id === p.id ? 'rotate-90 text-blue-400' : 'text-slate-600'}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Problem Detail */}
                <div className={`w-full lg:w-1/2 ${selectedProblem ? 'flex' : 'hidden lg:flex'}`}>
                    <AnimatePresence mode="wait">
                        {selectedProblem ? (
                            <motion.div
                                key={selectedProblem.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="glass p-6 md:p-8 rounded-3xl w-full sticky top-8"
                            >
                                <button
                                    onClick={() => setSelectedProblem(null)}
                                    className="lg:hidden mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    <ChevronRight size={20} className="rotate-180" />
                                    リストに戻る
                                </button>

                                <div className="flex items-center gap-2 mb-6 text-purple-400">
                                    <Terminal size={24} />
                                    <h2 className="text-2xl font-bold text-white">問題解析</h2>
                                </div>

                                <div className="mb-8">
                                    <span className="text-sm text-blue-400 font-mono mb-2 block tracking-widest uppercase">Overview</span>
                                    <h3 className="text-xl font-bold mb-4">{selectedProblem.title}</h3>
                                    <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                                        <p className="text-slate-300 leading-relaxed">
                                            {selectedProblem.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <span className="text-sm text-purple-400 font-mono mb-2 block tracking-widest uppercase">Start Template</span>
                                        <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl">
                                            <SyntaxHighlighter
                                                language="javascript"
                                                style={atomDark}
                                                customStyle={{ margin: 0, padding: '1.5rem', background: '#0d0d0f' }}
                                            >
                                                {selectedProblem.sample}
                                            </SyntaxHighlighter>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            onClick={() => alert('解答は準備中です。頑張って自力で解いてみましょう！')}
                                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
                                        >
                                            <CheckCircle2 size={20} />
                                            解答・解説を確認
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="glass p-12 rounded-3xl w-full min-h-[400px] flex flex-col items-center justify-center text-center text-slate-500 border-dashed border-2 border-white/10">
                                <Code2 size={48} className="mb-4 opacity-20" />
                                <p className="text-lg">問題を選択して詳細を確認しましょう</p>
                                <p className="text-sm mt-2 opacity-60">100問の挑戦がここから始まります</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <footer className="max-w-6xl mx-auto mt-20 pb-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>© 2026 samuraiinst2025 - GAS 100 Knock Challenge</p>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <a href="https://github.com/samuraiinst2025/gas-100-knock" className="hover:text-white transition-colors flex items-center gap-1">
                        <Github size={16} /> GitHub Repository
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;
