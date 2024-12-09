import React from 'react';
import { Code2, Smartphone, Globe, Database } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your specific business needs.',
    icon: Code2,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: Smartphone,
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications using cutting-edge technologies.',
    icon: Globe,
  },
  {
    title: 'Database Solutions',
    description: 'Scalable and secure database architectures to manage your business data effectively.',
    icon: Database,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive software solutions to drive your business forward
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}