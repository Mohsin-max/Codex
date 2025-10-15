import React from 'react'
import Slider from 'react-slick'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechInnovate',
      content: 'TechSolutions delivered an exceptional web application that transformed our business operations. Their team was professional, responsive, and delivered beyond our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager, StartupXYZ',
      content: 'The mobile app developed by TechSolutions helped us scale from 10k to 100k users seamlessly. Their expertise in React Native and cloud technologies is outstanding.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Emily Davis',
      position: 'CEO, EduTech Solutions',
      content: 'Working with TechSolutions was a game-changer for our company. They understood our vision and delivered a scalable platform that continues to drive our growth.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow">
                <Quote className="h-8 w-8 text-orange-500 mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-orange-200"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-orange-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials