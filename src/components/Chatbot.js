'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap, ArrowRight, ExternalLink } from 'lucide-react'
import { intents, responses, quickSuggestions, serviceLinks, whatsappConfig } from '@/data/chatbotData'

// Find the best matching intent for user input
const findIntent = (input) => {
    const lowerInput = input.toLowerCase()

    for (const intent of intents) {
        for (const pattern of intent.patterns) {
            if (lowerInput.includes(pattern.toLowerCase())) {
                return intent.response
            }
        }
    }
    return 'fallback'
}

// Get response for an intent
const getResponse = (intentKey) => {
    return responses[intentKey] || responses.fallback
}

const Chatbot = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [showQuickStart, setShowQuickStart] = useState(false)
    const [quickStartData, setQuickStartData] = useState({
        name: '',
        email: '',
        service: 'Website Development',
        budget: 'Undisclosed'
    })
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: "Hello! 👋 I'm ProgVision's assistant. I can help you learn about our services, pricing, team, and more. What would you like to know?",
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && !showQuickStart) {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [isOpen, showQuickStart])

    const handleSendMessage = (text = inputValue) => {
        if (!text.trim()) return

        // Add user message
        const userMessage = {
            id: Date.now(),
            type: 'user',
            text: text.trim(),
            timestamp: new Date()
        }
        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate typing delay and get bot response
        setTimeout(() => {
            const intentKey = findIntent(text)
            const botResponse = getResponse(intentKey)

            const botMessage = {
                id: Date.now() + 1,
                type: 'bot',
                text: botResponse,
                timestamp: new Date()
            }
            setMessages(prev => [...prev, botMessage])
            setIsTyping(false)
        }, 800 + Math.random() * 500)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const handleQuickSuggestion = (suggestion) => {
        handleSendMessage(suggestion)
    }

    const handleQuickStartSubmit = (e) => {
        e.preventDefault()

        // Build WhatsApp message
        const message = `Hi ProgVision! I'm interested in your services.

Name: ${quickStartData.name}
Email: ${quickStartData.email}
Service: ${quickStartData.service}
Budget: ${quickStartData.budget}

Please get back to me soon!`

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')

        // Close quick start and show confirmation
        setShowQuickStart(false)
        const confirmMessage = {
            id: Date.now(),
            type: 'bot',
            text: `Thanks ${quickStartData.name}! 🎉 You're being redirected to WhatsApp to connect with us directly. We'll get back to you within 24 hours!`,
            timestamp: new Date()
        }
        setMessages(prev => [...prev, confirmMessage])
    }

    const handleServiceClick = (serviceKey) => {
        const path = serviceLinks[serviceKey]
        if (path) {
            router.push(path)
            setIsOpen(false)
        }
    }

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl shadow-blue-500/30 flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Pulse animation when closed */}
            {!isOpen && (
                <div className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 rounded-full animate-ping opacity-20" />
            )}

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[550px] max-h-[calc(100vh-120px)] bg-slate-950 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot size={20} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-white text-sm">ProgVision Assistant</h3>
                                <p className="text-blue-100 text-xs flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    Online • Typically replies instantly
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={18} className="text-white" />
                            </button>
                        </div>

                        {/* Quick Start Form */}
                        <AnimatePresence>
                            {showQuickStart && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="absolute inset-0 top-[72px] bg-slate-950 z-20 p-4 overflow-y-auto"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-bold text-white flex items-center gap-2">
                                            <Zap size={18} className="text-yellow-400" />
                                            Quick Start
                                        </h4>
                                        <button
                                            onClick={() => setShowQuickStart(false)}
                                            className="text-slate-400 hover:text-white text-sm"
                                        >
                                            Back to chat
                                        </button>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4">
                                        Fill in your details and we'll connect you directly on WhatsApp!
                                    </p>
                                    <form onSubmit={handleQuickStartSubmit} className="space-y-4">
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">Your Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={quickStartData.name}
                                                onChange={(e) => setQuickStartData({ ...quickStartData, name: e.target.value })}
                                                placeholder="John Doe"
                                                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                value={quickStartData.email}
                                                onChange={(e) => setQuickStartData({ ...quickStartData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">Service Interested In</label>
                                            <select
                                                value={quickStartData.service}
                                                onChange={(e) => setQuickStartData({ ...quickStartData, service: e.target.value })}
                                                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                                            >
                                                <option>Website Development</option>
                                                <option>App Development</option>
                                                <option>iOS Development</option>
                                                <option>Web Security Audit</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">Budget Range</label>
                                            <select
                                                value={quickStartData.budget}
                                                onChange={(e) => setQuickStartData({ ...quickStartData, budget: e.target.value })}
                                                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                                            >
                                                <option>Undisclosed</option>
                                                <option>$500 - $2,000</option>
                                                <option>$2,000 - $5,000</option>
                                                <option>$5,000 - $15,000</option>
                                                <option>$15,000+</option>
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                                        >
                                            Connect on WhatsApp <ArrowRight size={18} />
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.type === 'bot'
                                            ? 'bg-blue-600'
                                            : 'bg-slate-700'
                                        }`}>
                                        {message.type === 'bot' ? (
                                            <Sparkles size={14} className="text-white" />
                                        ) : (
                                            <User size={14} className="text-white" />
                                        )}
                                    </div>
                                    <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${message.type === 'bot'
                                            ? 'bg-slate-800 text-slate-200 rounded-tl-sm'
                                            : 'bg-blue-600 text-white rounded-tr-sm'
                                        }`}>
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <Sparkles size={14} className="text-white" />
                                    </div>
                                    <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Suggestions & Quick Start Button */}
                        {messages.length <= 2 && !showQuickStart && (
                            <div className="px-4 py-3 border-t border-white/5 bg-slate-900/50">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Quick Questions</p>
                                    <button
                                        onClick={() => setShowQuickStart(true)}
                                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-full font-bold flex items-center gap-1 transition-colors"
                                    >
                                        <Zap size={12} /> Quick Start
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {quickSuggestions.map((suggestion, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleQuickSuggestion(suggestion)}
                                            className="px-3 py-1.5 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs rounded-full transition-all border border-slate-700 hover:border-blue-500"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Service Links - Show after services response */}
                        {messages.some(m => m.text.includes('Website Development') && m.type === 'bot') && !showQuickStart && (
                            <div className="px-4 py-3 border-t border-white/5 bg-slate-900/50">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">View Service Details</p>
                                    <button
                                        onClick={() => setShowQuickStart(true)}
                                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-full font-bold flex items-center gap-1 transition-colors"
                                    >
                                        <Zap size={12} /> Quick Start
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <button onClick={() => handleServiceClick('website')} className="px-3 py-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs rounded-lg transition-all border border-slate-700 hover:border-blue-500 flex items-center gap-1">
                                        🌐 Website <ExternalLink size={10} />
                                    </button>
                                    <button onClick={() => handleServiceClick('app')} className="px-3 py-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs rounded-lg transition-all border border-slate-700 hover:border-blue-500 flex items-center gap-1">
                                        📱 App <ExternalLink size={10} />
                                    </button>
                                    <button onClick={() => handleServiceClick('ios')} className="px-3 py-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs rounded-lg transition-all border border-slate-700 hover:border-blue-500 flex items-center gap-1">
                                        🍎 iOS <ExternalLink size={10} />
                                    </button>
                                    <button onClick={() => handleServiceClick('security')} className="px-3 py-2 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs rounded-lg transition-all border border-slate-700 hover:border-blue-500 flex items-center gap-1">
                                        🔒 Security <ExternalLink size={10} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        {!showQuickStart && (
                            <div className="p-4 border-t border-white/5 bg-slate-900">
                                <div className="flex gap-3 items-center">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                    <button
                                        onClick={() => handleSendMessage()}
                                        disabled={!inputValue.trim() || isTyping}
                                        className="w-11 h-11 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors"
                                    >
                                        <Send size={18} className="text-white" />
                                    </button>
                                </div>
                                <p className="text-[10px] text-slate-600 text-center mt-2">
                                    Powered by ProgVision AI
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Chatbot
