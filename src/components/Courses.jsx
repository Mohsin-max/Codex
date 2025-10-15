import React from 'react'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      title: 'Full Stack Web Development',
      description: 'Complete web development bootcamp covering frontend, backend, and deployment.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      duration: '12 Weeks',
      students: '500+',
      rating: '4.9',
      price: '$999',
      originalPrice: '$1499'
    },
    {
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      duration: '10 Weeks',
      students: '300+',
      rating: '4.8',
      price: '$899',
      originalPrice: '$1299'
    },
    {
      title: 'Cloud Computing & DevOps',
      description: 'Master cloud platforms and DevOps practices for scalable applications.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      duration: '8 Weeks',
      students: '250+',
      rating: '4.7',
      price: '$799',
      originalPrice: '$1199'
    }
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-orange-500">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advance your career with our industry-relevant courses taught by expert instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-orange-200"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-orange-500" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-blue-500" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-orange-600">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group/btn shadow-lg hover:shadow-xl">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses