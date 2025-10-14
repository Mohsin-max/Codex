import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      category: 'Web Application',
      description: 'Scalable multi-vendor marketplace with real-time inventory management and AI-powered recommendations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Management System',
      category: 'Mobile Application',
      description: 'Comprehensive patient management and telemedicine platform for healthcare providers.',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Web Application',
      description: 'Real-time financial data visualization and predictive analytics for investment firms.',
      technologies: ['Vue.js', 'Python', 'D3.js', 'Azure'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      category: 'Web & Mobile',
      description: 'Feature-rich educational platform with course management and interactive learning tools.',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a href={project.liveUrl} className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href={project.githubUrl} className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
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