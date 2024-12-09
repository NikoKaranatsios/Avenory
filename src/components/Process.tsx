import React from 'react';
import { MessageSquare, PenTool, Code, CheckCircle } from 'lucide-react';
import { SectionHeading } from './common/SectionHeading';

const steps = [
  {
    name: 'Consultation',
    description: 'We start by understanding your needs and objectives through detailed discussions.',
    icon: MessageSquare,
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    name: 'Design',
    description: 'Our team creates comprehensive designs and technical specifications.',
    icon: PenTool,
    gradient: 'from-indigo-400 to-purple-600',
  },
  {
    name: 'Development',
    description: 'We build your solution using modern technologies and best practices.',
    icon: Code,
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    name: 'Delivery',
    description: 'After thorough testing, we deploy your solution and provide ongoing support.',
    icon: CheckCircle,
    gradient: 'from-pink-400 to-red-600',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Process"
          subtitle="A streamlined approach to delivering exceptional results"
        />

        <div className="mt-20">
          <div className="relative">
            {/* Steps */}
            <div className="relative flex flex-col md:flex-row md:justify-between space-y-12 md:space-y-0">
              {/* Connection line - hidden on mobile */}
              <div className="absolute top-8 left-0 right-0 hidden md:block" aria-hidden="true">
                <div className="h-0.5 w-full bg-gray-200" />
              </div>

              {steps.map((step, stepIdx) => (
                <div key={step.name} className="relative flex flex-col items-center md:items-start">
                  <div className="relative w-full max-w-xs mx-auto text-center md:w-48">
                    <div className={`relative z-20 w-16 h-16 mx-auto bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 group`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}