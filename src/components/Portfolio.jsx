import React from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      category: 'Web Application',
      description: 'Scalable multi-vendor marketplace with real-time inventory management and AI-powered recommendations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Management System',
      category: 'Mobile Application',
      description: 'Comprehensive patient management and telemedicine platform for healthcare providers.',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Web Application',
      description: 'Real-time financial data visualization and predictive analytics for investment firms.',
      technologies: ['Vue.js', 'Python', 'D3.js', 'Azure'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      category: 'Web & Mobile',
      description: 'Feature-rich educational platform with course management and interactive learning tools.',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivering measurable 
            business results across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="h-64 bg-gradient-to-br from-orange-500 to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a href={project.liveUrl} className="bg-white text-gray-900 p-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href={project.githubUrl} className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors group/link"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/link"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio