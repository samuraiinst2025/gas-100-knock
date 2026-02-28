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
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
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
                                onClick={() => setSelectedProblem(p)}
                                className={`p-4 rounded-2xl cursor-pointer transition-all glass hover-glow ${selectedProblem?.id === p.id ? 'border-blue-500 bg-blue-500/10' : ''
                                    }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-mono text-blue-400 mb-1 block">Q.{p.id} [{p.category}]</span>
                                        <h3 className="font-semibold">{p.title}</h3>
                                    </div>
                                    <ChevronRight size={18} className="text-slate-600" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Problem Detail */}
                <div className="w-full lg:w-1/2">
                    <AnimatePresence mode="wait">
                        {selectedProblem ? (
                            <motion.div
                                key={selectedProblem.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="glass p-8 rounded-3xl h-full sticky top-8"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <Terminal size={24} className="text-purple-400" />
                                    <h2 className="text-2xl font-bold">問題解析</h2>
                                </div>

                                <div className="mb-8">
                                    <span className="text-sm text-blue-400 font-mono mb-2 block tracking-widest uppercase">Overview</span>
                                    <h3 className="text-xl font-bold mb-4">{selectedProblem.title}</h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        {selectedProblem.description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <span className="text-sm text-purple-400 font-mono mb-2 block tracking-widest uppercase">Start Template</span>
                                        <div className="rounded-xl overflow-hidden border border-white/5">
                                            <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ margin: 0 }}>
                                                {selectedProblem.sample}
                                            </SyntaxHighlighter>
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={false}
                                        className="overflow-hidden"
                                    >
                                        <button
                                            onClick={() => alert('解答は実装中の機能です。')}
                                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                                        >
                                            <CheckCircle2 size={20} />
                                            解答を見る
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="glass p-12 rounded-3xl h-full flex flex-col items-center justify-center text-center text-slate-500 border-dashed border-2">
                                <Code2 size={48} className="mb-4 opacity-20" />
                                <p>左側のリストから問題を選択して挑戦を開始しましょう</p>
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
