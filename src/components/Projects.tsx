import React from 'react';
import { Sparkles, Rocket, Users } from 'lucide-react';
import { SectionHeading } from './common/SectionHeading';
import { Button } from './common/Button';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Early Adopter Benefits"
          subtitle="Join us on our journey and get exclusive benefits"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Free Consultation Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Free Consultation for Everyone
            </h3>
            <p className="mt-4 text-gray-600">
              We believe in building lasting relationships. That's why we offer free consultation 
              sessions for all potential clients. Let's discuss your vision and explore how we 
              can bring it to life.
            </p>
            <Button 
              icon={Sparkles}
              className="mt-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* First Customer Offer Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-2xl shadow-lg text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">
              First Customer Special Offer
            </h3>
            <p className="mt-4 text-indigo-100">
              Be our first customer and receive a <span className="font-semibold">free prototype</span> of 
              your project. This is your chance to experience our expertise firsthand and help shape 
              the future of Avenory while getting exceptional value.
            </p>
            <Button 
              variant="secondary"
              icon={Rocket}
              className="mt-6 bg-white/10 hover:bg-white/20 border-white/20 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Claim This Offer
            </Button>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-600">
            As a new company, we're committed to delivering exceptional value to our early clients. 
            Your success is our success, and we're here to prove it with our work.
          </p>
        </div>
      </div>
    </section>
  );
}