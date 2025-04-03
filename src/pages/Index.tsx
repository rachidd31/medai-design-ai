
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';
import { Search, BarChart, Lightbulb, LineChart, Shield, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Our AI-Powered Healthcare Solutions</h2>
              <p className="section-subtitle mx-auto">
                We leverage cutting-edge artificial intelligence to transform medical processes and operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Diagnostic Optimization" 
                description="Enhance diagnostic accuracy and speed using AI algorithms trained on vast medical datasets."
                icon={<Search size={24} />}
              />
              <ServiceCard 
                title="Operational Efficiency" 
                description="Streamline healthcare workflows and reduce administrative burden with intelligent automation."
                icon={<BarChart size={24} />}
              />
              <ServiceCard 
                title="Predictive Analytics" 
                description="Anticipate patient needs and optimize resource allocation through advanced predictive models."
                icon={<LineChart size={24} />}
              />
              <ServiceCard 
                title="Research Acceleration" 
                description="Speed up medical research and drug discovery with AI-powered data analysis and pattern recognition."
                icon={<Lightbulb size={24} />}
              />
              <ServiceCard 
                title="Data Security" 
                description="Protect sensitive patient information with state-of-the-art security measures and protocols."
                icon={<Shield size={24} />}
              />
              <ServiceCard 
                title="Personalized Care" 
                description="Deliver tailored healthcare experiences by analyzing individual patient data and treatment responses."
                icon={<Users size={24} />}
              />
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="solutions" className="py-20 bg-medai-light-gray">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle mx-auto">
                A structured approach to implementing AI solutions in healthcare environments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl text-center">
                <div className="w-12 h-12 bg-medai-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-medium">1</div>
                <h3 className="text-xl font-medium text-medai-dark-gray mb-3">Assessment</h3>
                <p className="text-medai-medium-gray">Evaluate current processes and identify optimization opportunities.</p>
              </div>
              <div className="bg-white p-8 rounded-xl text-center">
                <div className="w-12 h-12 bg-medai-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-medium">2</div>
                <h3 className="text-xl font-medium text-medai-dark-gray mb-3">Strategy</h3>
                <p className="text-medai-medium-gray">Develop a tailored AI implementation plan aligned with your objectives.</p>
              </div>
              <div className="bg-white p-8 rounded-xl text-center">
                <div className="w-12 h-12 bg-medai-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-medium">3</div>
                <h3 className="text-xl font-medium text-medai-dark-gray mb-3">Implementation</h3>
                <p className="text-medai-medium-gray">Deploy AI solutions with minimal disruption to existing workflows.</p>
              </div>
              <div className="bg-white p-8 rounded-xl text-center">
                <div className="w-12 h-12 bg-medai-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-medium">4</div>
                <h3 className="text-xl font-medium text-medai-dark-gray mb-3">Refinement</h3>
                <p className="text-medai-medium-gray">Continuously monitor, evaluate, and improve AI performance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Case Studies</h2>
              <p className="section-subtitle mx-auto">
                Real-world examples of how our AI solutions have transformed healthcare operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CaseStudyCard 
                title="Reducing Diagnostic Time by 63%" 
                description="How a regional hospital network improved patient outcomes with AI-assisted diagnostics."
                category="Diagnostics"
                image="MRI"
              />
              <CaseStudyCard 
                title="Streamlining Patient Flow Management" 
                description="AI-powered scheduling reduced wait times and increased throughput at a busy urban clinic."
                category="Operations"
                image="EMR"
              />
              <CaseStudyCard 
                title="Enhancing Clinical Trial Accuracy" 
                description="Machine learning algorithms improved data quality and participant matching for a pharmaceutical company."
                category="Research"
                image="DNA"
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-medai-light-gray">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle mx-auto">
                Feedback from healthcare organizations that have partnered with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="The AI diagnostic support system has been transformative for our radiology department. We've seen dramatic improvements in both speed and accuracy."
                author="Dr. Sarah Johnson"
                title="Chief of Radiology"
                company="Metropolitan Hospital"
              />
              <TestimonialCard 
                quote="Implementing MedAI's operational efficiency solutions helped us reduce administrative overhead by 42% while improving patient satisfaction scores."
                author="Mark Thompson"
                title="COO"
                company="HealthFirst Network"
              />
              <TestimonialCard 
                quote="The predictive analytics platform gave us insights that would have taken years to discover through traditional methods. It's accelerated our research significantly."
                author="Dr. David Chen"
                title="Research Director"
                company="BioMed Research Institute"
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-medai-blue text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Transform Your Medical Processes?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss how AI can enhance efficiency and outcomes for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-medai-blue hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition-colors">
                Schedule a Consultation
              </a>
              <a href="#services" className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
