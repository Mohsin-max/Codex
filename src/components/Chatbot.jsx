import React, { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message! Our team will get back to you shortly. In the meantime, you can browse our services or schedule a consultation.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const quickQuestions = [
    "What services do you offer?",
    "How much does a project cost?",
    "Can I see your portfolio?",
    "How to get started?"
  ]

  // Chatbot dimensions for mobile and desktop
  const chatWidth = isMobile ? 'w-full' : 'w-96'
  const chatHeight = isMinimized ? 'h-16' : 'h-[500px]'
  const chatPosition = isMobile 
    ? 'bottom-0 left-0 right-0 rounded-b-none' 
    : 'bottom-20 right-6 rounded-2xl'

  return (
    <>
      {/* Chat Button - Only show when chatbot is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 z-40 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed ${chatPosition} ${chatWidth} ${chatHeight} bg-white shadow-2xl border border-gray-200 z-50 flex flex-col transition-all duration-300 ${
            isMobile ? 'rounded-t-2xl' : 'rounded-2xl'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6" />
              <div>
                <div className="font-semibold">TechSolutions Assistant</div>
                <div className="text-sm text-orange-100">Online • Ready to help</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Minimize Button */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-orange-100 hover:text-white transition-colors p-1"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsOpen(false)
                  setIsMinimized(false)
                }}
                className="text-orange-100 hover:text-white transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages - Hide when minimized */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[85%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-orange-500 to-blue-500' 
                            : 'bg-gray-600'
                        }`}
                      >
                        {message.sender === 'user' ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`px-4 py-2 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-br-none'
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="px-4 pb-2 flex-shrink-0">
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(question)}
                      className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex-shrink-0">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white p-2 rounded-full transition-colors flex-shrink-0"
                  >
                    <Send className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Chatbot