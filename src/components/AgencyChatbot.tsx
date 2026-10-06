import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  Calculator,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Share2,
  PhoneCall,
  RefreshCw
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: { label: string; action: string }[];
  actionLink?: { label: string; service?: string };
}

interface AgencyChatbotProps {
  onOpenContactModal: (service?: string) => void;
}

export const AgencyChatbot: React.FC<AgencyChatbotProps> = ({ onOpenContactModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewBadge, setHasNewBadge] = useState(true);
  const [showTeaser, setShowTeaser] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting messages
  const initialMessages: Message[] = [
    {
      id: '1',
      sender: 'bot',
      text: "Welcome to **SELESTIA RITUEL**! I'm your AI Studio Assistant. How can I help elevate your brand today?",
      timestamp: getCurrentTime(),
      options: [
        { label: '🚀 Explore Services', action: 'services' },
        { label: '📈 SEO & Paid Ads ROAS', action: 'marketing' },
        { label: '💻 Web Design & Speed', action: 'web' },
        { label: '💰 Pricing & Timelines', action: 'pricing' },
        { label: '📅 Book Strategy Call', action: 'contact' }
      ]
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // Auto scroll to bottom when new messages appear
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Teaser tooltip timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  const handleSendUserMessage = (textToSend?: string, actionKey?: string) => {
    const queryText = textToSend || inputMessage;
    if (!queryText.trim()) return;

    // Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      timestamp: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Process Bot Response after short realistic delay
    setTimeout(() => {
      generateBotResponse(queryText, actionKey);
      setIsTyping(false);
    }, 600);
  };

  const generateBotResponse = (query: string, actionKey?: string) => {
    const q = query.toLowerCase();
    let botReplyText = "";
    let options: { label: string; action: string }[] | undefined = undefined;
    let actionLink: { label: string; service?: string } | undefined = undefined;

    if (actionKey === 'services' || q.includes('service') || q.includes('what do you do') || q.includes('offer')) {
      botReplyText = "We specialize in **5 core digital studio disciplines**:\n\n• **Web Design & Development**: Bespoke React/TypeScript sites with sub-0.8s SLA.\n• **E-Commerce**: Scalable Shopify & custom high-converting storefronts.\n• **Digital Marketing & Ads**: Google PMax & Meta ad scaling (+340% ROAS).\n• **SEO Rank Dominance**: #1 Google placements & organic growth.\n• **Social Media Growth**: Brand strategy & copywriting.";
      options = [
        { label: '💻 Web Design Details', action: 'web' },
        { label: '📊 Paid Ads ROAS', action: 'marketing' },
        { label: '🚀 Start a Project', action: 'contact' }
      ];
    } else if (actionKey === 'marketing' || q.includes('ads') || q.includes('marketing') || q.includes('roas') || q.includes('seo') || q.includes('google')) {
      botReplyText = "Our **Digital Marketing Acquisition Engine** is built for aggressive revenue growth:\n\n⚡ **+340% Average ROAS** on Meta & Google Ads\n🎯 **1,450+ High-Intent Keywords** captured for #1 Google rank\n📈 **Full-Funnel Tracking**: Real-time CRO and lead optimization.\n\nWould you like a custom marketing strategy audit for your brand?";
      actionLink = { label: 'Inquire About Digital Marketing', service: 'Digital Marketing & Paid Ads' };
      options = [
        { label: '💰 View Pricing', action: 'pricing' },
        { label: '📅 Book Strategy Meeting', action: 'contact' }
      ];
    } else if (actionKey === 'web' || q.includes('web') || q.includes('website') || q.includes('design') || q.includes('code') || q.includes('react')) {
      botReplyText = "We engineer **luxury, high-converting websites**:\n\n• **Core Web Vitals SLA**: Sub-0.8s loading speed guaranteed.\n• **Craftsmanship**: Bespoke Figma UI/UX tailored to luxury branding.\n• **Technology**: Built with React, TypeScript, Tailwind CSS, & Next.js.\n• **Conversion Boost**: +38% average CRO lift.";
      actionLink = { label: 'Start Web Design Project', service: 'Web Design & Development' };
      options = [
        { label: '📐 Calculate Scope & Budget', action: 'pricing' },
        { label: '💬 Talk to Agency Team', action: 'contact' }
      ];
    } else if (actionKey === 'pricing' || q.includes('price') || q.includes('cost') || q.includes('budget') || q.includes('fee') || q.includes('estimate')) {
      botReplyText = "Our project engagements typically range based on scope:\n\n• **Standard Web / Strategy Project**: $5,000 – $15,000\n• **Full Scale E-Commerce & Web**: $15,000 – $35,000\n• **Monthly Digital Marketing Retainer**: $3,500 – $10,000/mo\n\nYou can use our interactive Scope Calculator or book a call for a custom proposal.";
      actionLink = { label: 'Get Custom Estimate', service: 'Custom Project Estimate' };
      options = [
        { label: '📅 Book Free Consultation', action: 'contact' },
        { label: '🚀 Explore Services', action: 'services' }
      ];
    } else if (actionKey === 'contact' || q.includes('contact') || q.includes('call') || q.includes('email') || q.includes('hire') || q.includes('meeting') || q.includes('talk')) {
      botReplyText = "Ready to create something remarkable? You can connect with our studio lead directly:\n\n📧 **Email**: hello@selestiarituel.com\n📞 **Phone**: +1 (800) 987-6543\n⚡ **Response SLA**: Within 2 business hours.\n\nClick below to open our interactive project inquiry form!";
      actionLink = { label: 'Open Project Inquiry Form', service: 'Direct Consultation' };
      options = [
        { label: '🚀 Explore All Services', action: 'services' }
      ];
    } else {
      botReplyText = `Thank you for asking about "${query}"! At **SELESTIA RITUEL**, we partner with ambitious brands to deliver high-converting web experiences, organic SEO, performance ad scaling, and bespoke brand strategy.\n\nHow would you like to proceed?`;
      options = [
        { label: '🚀 View Services', action: 'services' },
        { label: '💰 Estimate Budget', action: 'pricing' },
        { label: '📅 Contact Agency', action: 'contact' }
      ];
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botReplyText,
      timestamp: getCurrentTime(),
      options,
      actionLink
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Teaser Bubble (Popped up when closed) */}
      <AnimatePresence>
        {!isOpen && showTeaser && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 mr-1 bg-selestia-black text-white border border-selestia-gold/50 p-4 rounded-2xl shadow-2xl max-w-xs flex items-start space-x-3 relative backdrop-blur-xl gold-glow"
          >
            <button
              onClick={() => setShowTeaser(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xs"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="w-9 h-9 rounded-full bg-selestia-gold/20 text-selestia-gold flex items-center justify-center border border-selestia-gold/40 flex-shrink-0">
              <Bot className="w-5 h-5" />
            </div>

            <div className="text-xs space-y-1 pr-3">
              <div className="font-bold text-selestia-gold flex items-center space-x-1">
                <span>SELESTIA AI ASSISTANT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Looking to scale your brand with custom Web UI, SEO, or Paid Ads? Ask me anything!
              </p>
              <button
                onClick={() => {
                  setShowTeaser(false);
                  setIsOpen(true);
                  setHasNewBadge(false);
                }}
                className="text-[11px] font-bold text-selestia-gold underline hover:text-white pt-1 block"
              >
                Chat Now →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-[90vw] sm:w-[380px] h-[540px] bg-selestia-black border border-selestia-gold/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden gold-glow backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="bg-[#121212] px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-selestia-gold/20 text-selestia-gold border border-selestia-gold/50 flex items-center justify-center shadow-inner">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-selestia-black" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-white uppercase tracking-wider font-display flex items-center space-x-1.5">
                    <span>SELESTIA CONCIERGE</span>
                    <Sparkles className="w-3.5 h-3.5 text-selestia-gold" />
                  </h3>
                  <div className="text-[10px] text-gray-400 font-mono flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-selestia-gold animate-ping" />
                    <span>AI Studio Assistant · Active 24/7</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 text-gray-400 hover:text-selestia-gold rounded-lg hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs scrollbar-thin scrollbar-thumb-selestia-gold/20">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-end space-x-2 max-w-[85%]">
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-selestia-gold/20 text-selestia-gold flex items-center justify-center text-[10px] flex-shrink-0 mb-1 border border-selestia-gold/30">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                        msg.sender === 'user'
                          ? 'bg-selestia-gold text-selestia-black font-semibold rounded-br-none shadow-md'
                          : 'bg-white/10 text-gray-200 border border-white/10 rounded-bl-none'
                      }`}
                    >
                      {msg.text}

                      {/* Direct Modal Action Link if provided */}
                      {msg.actionLink && (
                        <div className="mt-3 pt-2.5 border-t border-white/15">
                          <button
                            onClick={() => {
                              onOpenContactModal(msg.actionLink?.service);
                              setIsOpen(false);
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-selestia-gold text-selestia-black font-extrabold uppercase text-[10px] tracking-wider hover:bg-selestia-gold-dark transition-all flex items-center justify-center space-x-1.5 shadow-md"
                          >
                            <span>{msg.actionLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] flex-shrink-0 mb-1">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <span className="text-[9px] text-gray-500 font-mono mt-1 px-1">
                    {msg.timestamp}
                  </span>

                  {/* Quick Action Chips attached to bot messages */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%] pl-8">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendUserMessage(opt.label, opt.action)}
                          className="text-[10px] font-bold bg-white/5 hover:bg-selestia-gold hover:text-selestia-black text-selestia-gold border border-selestia-gold/30 px-3 py-1.5 rounded-full transition-all duration-200"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center space-x-2 pl-2">
                  <div className="w-6 h-6 rounded-full bg-selestia-gold/20 text-selestia-gold flex items-center justify-center text-[10px] border border-selestia-gold/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-selestia-gold rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-selestia-gold rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-selestia-gold rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#121212] border-t border-white/10 flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendUserMessage()}
                placeholder="Ask about Web Design, SEO, Ads..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-selestia-gold transition-colors"
              />
              <button
                onClick={() => handleSendUserMessage()}
                disabled={!inputMessage.trim()}
                className={`p-2.5 rounded-xl transition-all ${
                  inputMessage.trim()
                    ? 'bg-selestia-gold text-selestia-black hover:bg-selestia-gold-dark shadow-md'
                    : 'bg-white/10 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTeaser(false);
          setHasNewBadge(false);
        }}
        className="relative group p-4 bg-selestia-black text-selestia-gold border border-selestia-gold/80 rounded-full shadow-2xl hover:bg-selestia-gold hover:text-selestia-black transition-all duration-300 gold-glow focus:outline-none flex items-center justify-center"
        aria-label="Toggle AI Agency Chatbot"
      >
        {hasNewBadge && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-selestia-gold rounded-full animate-ping opacity-80" />
        )}
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>
    </div>
  );
};
