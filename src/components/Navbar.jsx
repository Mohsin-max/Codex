import React, { useState } from 'react'
import { Code2, Menu, X, ChevronDown, ChevronUp, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  const servicesDropdown = [
    { name: 'Custom Software Development', href: '#services' },
    { name: 'Web Application Development', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Maintenance & Support', href: '#services' }
  ]

  const coursesDropdown = [
    { name: 'Web Development Bootcamp', href: '#courses' },
    { name: 'Mobile App Development', href: '#courses' },
    { name: 'Cloud Computing', href: '#courses' },
    { name: 'UI/UX Design Course', href: '#courses' },
    { name: 'DevOps Training', href: '#courses' },
    { name: 'Data Science Program', href: '#courses' }
  ]

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: servicesDropdown
    },
    { name: 'About', href: '#about' },
    { 
      name: 'Courses', 
      href: '#courses',
      dropdown: coursesDropdown
    },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdown(mobileDropdown === itemName ? null : itemName)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          {/* <div className="flex items-center space-x-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Tech<span className="text-orange-500">Solutions</span>
            </span>
          </div> */}

          <a href=""><img src="/codex_logo.png" alt="" width={130}/></a>

          {/* Centered Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex space-x-1 bg-gray-50 rounded-xl p-1 border border-gray-200">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-white hover:text-orange-500 hover:shadow-sm transition-all duration-200 flex items-center"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="h-4 w-4 ml-1" />}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Phone Number */}
            {/* <div className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors cursor-pointer">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+1 (555) 123-4567</span>
            </div> */}

            {/* Appointment Button */}
            <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Book Consultation
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 max-h-[80vh] overflow-y-auto">
            <div className="px-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <span>{item.name}</span>
                        {mobileDropdown === item.name ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      
                      {/* Mobile Dropdown */}
                      {mobileDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1 bg-orange-50 rounded-lg p-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-100 hover:text-orange-700 rounded-lg transition-colors"
                              onClick={() => {
                                setIsOpen(false)
                                setMobileDropdown(null)
                              }}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Buttons */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-gray-700 px-4 py-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">+1 (555) 123-4567</span>
                </div>
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar