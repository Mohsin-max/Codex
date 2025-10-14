import React from 'react'
import { Target, Users, Award, TrendingUp } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver innovative software solutions that empower businesses to thrive in the digital age.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team, ensuring seamless communication and alignment.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality through best practices and continuous improvement.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Focused on creating solutions that drive measurable business growth and competitive advantage.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Digital Innovation Since 2018
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TechSolutions has been at the forefront of digital transformation, 
              helping enterprises leverage cutting-edge technology to solve complex 
              business challenges and drive sustainable growth.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our team of seasoned developers, architects, and strategists brings 
              together deep technical expertise and business acumen to deliver 
              solutions that not only meet today's needs but also scale for tomorrow's opportunities.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Client Retention</div>
              </div>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About