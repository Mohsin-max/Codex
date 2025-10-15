import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@techsolutions.com',
      description: 'Send us an email anytime',
      color: 'text-orange-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm EST',
      color: 'text-orange-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Suite 100',
      description: 'San Francisco, CA 94105',
      color: 'text-orange-500'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your project requirements 
            and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors group cursor-pointer">
                    <div className={`bg-orange-100 p-3 rounded-lg flex-shrink-0 group-hover:bg-orange-500 transition-colors`}>
                      <IconComponent className={`h-6 w-6 ${item.color} group-hover:text-white transition-colors`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 font-medium">{item.content}</p>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none outline-none"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact