import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Top-grade materials and rigorous quality control'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Nationwide delivery within 48 hours'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals at your service'
  },
  {
    icon: Award,
    title: 'Industry Leader',
    description: 'Trusted name in roofing solutions'
  }
];

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Juja Mabati Factory, we take pride in delivering top-quality roofing solutions that stand the test of time. As one of Kenya's leading roofing manufacturers, we specialize in providing durable, reliable, and aesthetically pleasing roofing materials for both residential and commercial projects.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our extensive range of roofing sheets, including pre-painted, galvanized, and aluminum options, ensures that we meet the diverse needs of our customers. With a commitment to excellence and unmatched craftsmanship, Juja Mabati Factory has earned its reputation as a trusted name in the roofing industry across Kenya.
            </p>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              With state-of-the-art manufacturing facilities and a team of skilled professionals, we ensure that every roofing sheet meets the highest standards of quality and durability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're building a new home, renovating an existing structure, or undertaking a large-scale commercial project, we provide the best roofing solutions that guarantee long-lasting protection and value for your property.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;