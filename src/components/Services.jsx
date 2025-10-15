import React from 'react'
import { Code, Globe, Smartphone, Cloud, Palette, Settings, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions tailored to your unique business requirements and workflows.',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Scalable Architecture', 'Agile Development', 'Quality Assurance'],
      price: 'Starting at $15,000'
    },
    {
      title: 'Web Application Development',
      description: 'High-performance web applications built with modern frameworks and cloud-native technologies.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['React/Next.js', 'Node.js', 'Cloud Deployment'],
      price: 'Starting at $10,000'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['React Native', 'Flutter', 'Native iOS/Android'],
      price: 'Starting at $12,000'
    },
    {
      title: 'Cloud Solutions & DevOps',
      description: 'Cloud infrastructure setup, migration, and optimization with CI/CD pipelines and automation.',
      icon: Cloud,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines'],
      price: 'Starting at $8,000'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive, engaging, and conversion-optimized interfaces.',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      price: 'Starting at $5,000'
    },
    {
      title: 'Maintenance & Support',
      description: 'Comprehensive ongoing support, updates, and performance optimization for your digital products.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Tuning'],
      price: 'Monthly plans from $500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services designed to transform your business 
            and drive digital innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-500 transition-colors">
                      <IconComponent className="h-6 w-6 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services