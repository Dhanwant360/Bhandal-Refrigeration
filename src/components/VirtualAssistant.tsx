import { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, X, MessageSquare, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Hello! I am the Bhandal Refrigeration assistant. How can I help you today? Are you looking for local repair services in Jalandhar or interested in international trading?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  async function handleSend() {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, input: userMessage }),
      });
      const data = await response.json();
      const responseText = data.text || "I'm sorry, I couldn't process that.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error. Please try calling us directly for assistance." }]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="bg-[#bb0014] text-white p-4 rounded-full shadow-lg hover:bg-[#e41f25] transition-colors flex items-center gap-2 group"
          >
            <MessageSquare size={24} />
            <span className="hidden group-hover:inline font-semibold">Chat with Assistant</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white border border-slate-200 shadow-2xl w-[350px] sm:w-[400px] h-[550px] flex flex-col overflow-hidden rounded-3xl"
          >
            <div className="bg-blue-700 text-white p-5 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold tracking-tight text-sm">Virtual Support</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-semibold opacity-80 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/20 p-2 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 scrollbar-thin"
            >
              <div className="flex justify-center">
                <span className="text-[10px] bg-slate-200 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest font-bold">Today</span>
              </div>

              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${m.role === 'user' ? 'bg-slate-300' : 'bg-blue-700 text-white'}`}>
                      {m.role === 'user' ? <User size={14} className="text-white" /> : <span className="text-[10px] font-bold uppercase">BR</span>}
                    </div>
                    <div className={`p-4 text-[13px] leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-none'}`}>
                      {m.content.split('\n').map((line, j) => (
                        <p key={j} className={j > 0 ? 'mt-2' : ''}>
                           {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-white uppercase">BR</span>
                    </div>
                    <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                      <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" />
                      <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 border-t border-slate-100 bg-white">
              <div className="flex gap-3">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-1 flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about repairs or trade..."
                    className="w-full text-sm bg-transparent border-none focus:ring-0 placeholder:text-slate-400"
                  />
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-blue-700 text-white h-11 w-11 flex items-center justify-center rounded-xl hover:bg-blue-800 disabled:opacity-50 shadow-lg shadow-blue-100 transition-all active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
                <button 
                  onClick={() => setInput("I need an AC repair in Jalandhar")}
                  className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                >
                  Repair Visit
                </button>
                <button 
                  onClick={() => setInput("International trading inquiry")}
                  className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                >
                  B2B Trade
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
