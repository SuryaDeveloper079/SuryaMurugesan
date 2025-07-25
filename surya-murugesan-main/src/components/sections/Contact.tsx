
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone, Send, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with random success/failure
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3; // 70% success rate
      
      setIsSubmitting(false);
      
      if (isSuccess) {
        console.log("Form submitted successfully:", formData);
        toast({
          title: "Message Sent Successfully! 🚀",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        console.error("Failed to send message:", formData);
        toast({
          variant: "destructive",
          title: "Message Failed to Send ❌",
          description: "Sorry, there was an error sending your message. Please try again or contact me directly.",
        });
      }
    }, 2000);
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50/70 to-indigo-100/70 relative overflow-hidden backdrop-blur-sm">
      <div className="content-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>
                    <a href="mailto:suryadeveloper079@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">suryadeveloper079@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Phone</p>
                    <a href="tel:+919360233836" className="text-lg font-semibold hover:text-primary transition-colors">+91 93602 33836</a>
                  </div>
                </div>
                
                <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">LinkedIn</p>
                    <a href="https://linkedin.com/in/surya-murugesan-72a86b208" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">linkedin.com/in/surya-murugesan</a>
                  </div>
                </div>
                
                <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">GitHub</p>
                    <a href="https://github.com/SuryaDeveloper079" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">github.com/SuryaDeveloper079</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Additional Info</h4>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Sivakasi, Tamil Nadu, India - 626131</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Response Time</p>
                    <p className="font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center">⚠️ {errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center">⚠️ {errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-2 flex items-center">⚠️ {errors.message}</p>}
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full flex items-center justify-center py-3 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                💡 <strong>Note:</strong> This is a portfolio demo. For real email functionality, integrate with Supabase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
