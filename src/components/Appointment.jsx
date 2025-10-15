import React, { useState } from 'react'
import { Calendar, Clock, User, Mail, Building } from 'lucide-react'

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const services = [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'Cloud Solutions & DevOps',
    'UI/UX Design',
    'Maintenance & Support',
    'Technical Consultation'
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM'
  ]

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Appointment booked:', appointmentData)
    alert('Appointment booked successfully! We will send a confirmation email shortly.')
    setAppointmentData({
      name: '', email: '', company: '', service: '', date: '', time: '', message: ''
    })
  }

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule a <span className="text-orange-500">Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our experts to discuss your 
            project requirements and get a personalized solution proposal.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="appointment-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <input
                    type="text"
                    id="appointment-name"
                    name="name"
                    value={appointmentData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="appointment-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <input
                    type="email"
                    id="appointment-email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={appointmentData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={appointmentData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Schedule Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={appointmentData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                  <select
                    id="time"
                    name="time"
                    value={appointmentData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="appointment-message" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Overview
              </label>
              <textarea
                id="appointment-message"
                name="message"
                value={appointmentData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none outline-none"
                placeholder="Briefly describe your project goals, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Appointment