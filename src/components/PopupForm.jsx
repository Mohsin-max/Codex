import React, { useState, useEffect } from 'react'
import { X, User, Mail, Phone, Calendar, BookOpen, Check } from 'lucide-react'

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
    setIsOpen(false)
  }

  const courses = [
    'Web Development Bootcamp',
    'Mobile App Development',
    'Cloud Computing',
    'UI/UX Design Course',
    'DevOps Training',
    'Data Science Program',
    'Custom Software Development'
  ]

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-auto relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button - Mobile ke liye adjust */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full p-1.5 sm:p-2 transition-all duration-200 z-10 shadow-lg hover:scale-110"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Content - Mobile pe hidden, Desktop pe show */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 lg:p-8 lg:w-2/5 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none hidden lg:block">
            <div className="text-center lg:text-left h-full flex flex-col justify-center">
              {/* Icon */}
              <div className="bg-white/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              
              {/* Heading */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                Ready to Start Your Tech Career?
              </h3>
              
              {/* Features List */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/30 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-orange-100">Free Career Guidance Session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/30 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-orange-100">Industry Expert Mentors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/30 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-orange-100">Job Placement Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/30 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-orange-100">Flexible Learning Options</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-orange-400">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-orange-200">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs text-orange-200">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form - Mobile pe full width */}
          <div className="p-4 sm:p-6 lg:p-8 lg:w-3/5 w-full">
            {/* Mobile Header - Sirf mobile pe show */}
            <div className="lg:hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-lg -mt-4 -mx-4 mb-4">
              <div className="text-center">
                <div className="bg-white/20 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold">Free Career Consultation</h4>
                <p className="text-orange-100 text-sm mt-1">Get expert guidance for your tech career</p>
              </div>
            </div>

            {/* Desktop Header - Sirf desktop pe show */}
            <div className="text-center mb-6 hidden lg:block">
              <h4 className="text-2xl font-bold text-gray-900">Get Free Career Consultation</h4>
              <p className="text-gray-600 mt-2 text-sm">Speak with our career experts and discover the right path for you</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mobile pe single column, Desktop pe grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="relative">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                      placeholder="Full Name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div className="relative">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors appearance-none bg-white text-sm sm:text-base"
                    >
                      <option value="">Select Course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your career goals and expectations..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl mt-2 hover:scale-105 text-sm sm:text-base"
              >
                Get Free Consultation
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupForm