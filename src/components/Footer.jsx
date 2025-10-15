import React from 'react'
import { Code2, Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
    ]

    const services = [
        'Custom Software',
        'Web Development',
        'Mobile Apps',
        'Cloud Solutions',
        'UI/UX Design',
        'Support & Maintenance'
    ]

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
        { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' }
    ]

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        {/* <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Tech<span className="text-orange-500">Solutions</span></span>
            </div> */}

                        <img src="/codex_logo.png" alt="" width={130} />


                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Transforming businesses through innovative software solutions.
                            We deliver enterprise-grade digital products that drive growth and innovation.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`bg-gray-800 ${social.color} p-3 rounded-lg transition-all duration-200 hover:scale-110`}
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-orange-500">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-orange-500">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-orange-500">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3 hover:text-orange-400 transition-colors cursor-pointer">
                                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-500" />
                                <span>hello@techsolutions.com</span>
                            </li>
                            <li className="flex items-start space-x-3 hover:text-orange-400 transition-colors cursor-pointer">
                                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start space-x-3 hover:text-orange-400 transition-colors cursor-pointer">
                                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-500" />
                                <span>
                                    123 Tech Street, Suite 100<br />
                                    San Francisco, CA 94105
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 TechSolutions. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer