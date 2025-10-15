import React from 'react'
import Slider from 'react-slick'
import { ArrowRight, Play, Star, Users, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
    >
      <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
    </button>
  )

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
    >
      <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
    </button>
  )

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false
  }

  const slides = [
    {
      title: "Enterprise Software Solutions",
      subtitle: "Custom-built applications that scale with your business",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Start Your Project",
      stats: ["200+ Projects", "50+ Clients", "99% Satisfaction"]
    },
    {
      title: "Digital Transformation Experts",
      subtitle: "Transform your business with cutting-edge technology solutions",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Get Free Consultation",
      stats: ["5+ Years Experience", "24/7 Support", "Agile Methodology"]
    },
    {
      title: "Innovation-Driven Development",
      subtitle: "Building the future with AI, Cloud, and Modern Technologies",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "View Our Work",
      stats: ["AI Integration", "Cloud Native", "Secure & Scalable"]
    }
  ]

  return (
    <section id="home" className="relative h-screen"> {/* Added pt-20 for navbar space */}
      <Slider {...sliderSettings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-orange-500 text-white text-xs md:text-sm font-medium mb-4 md:mb-6">
                    🚀 Trusted by 50+ Companies Worldwide
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <button className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-base md:text-lg">
                      {slide.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-base md:text-lg">
                      <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Watch Demo
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-12">
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center text-white">
                        <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 mr-2" />
                        <span className="text-sm md:text-base font-semibold">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-4 md:py-6">
            {[
              { icon: Users, number: '200+', label: 'Projects Completed' },
              { icon: Award, number: '50+', label: 'Happy Clients' },
              { icon: Star, number: '5+', label: 'Years Experience' },
              { icon: Clock, number: '24/7', label: 'Support Available' }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center space-x-1 md:space-x-2">
                    <IconComponent className="h-4 w-4 md:h-6 md:w-6 text-orange-500 group-hover:text-blue-500 transition-colors" />
                    <div className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{stat.number}</div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition-colors">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero