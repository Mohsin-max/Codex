import React from 'react'
import { Code, Globe, Smartphone, Cloud, Palette, Settings } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions tailored to your unique business requirements and workflows.',
      icon: Code,
      features: ['Scalable Architecture', 'Agile Development', 'Quality Assurance']
    },
    {
      title: 'Web Application Development',
      description: 'High-performance web applications built with modern frameworks and cloud-native technologies.',
      icon: Globe,
      features: ['React/Next.js', 'Node.js', 'Cloud Deployment']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      icon: Smartphone,
      features: ['React Native', 'Flutter', 'Native iOS/Android']
    },
    {
      title: 'Cloud Solutions & DevOps',
      description: 'Cloud infrastructure setup, migration, and optimization with CI/CD pipelines and automation.',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive, engaging, and conversion-optimized interfaces.',
      icon: Palette,
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Maintenance & Support',
      description: 'Comprehensive ongoing support, updates, and performance optimization for your digital products.',
      icon: Settings,
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Tuning']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-blue-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services