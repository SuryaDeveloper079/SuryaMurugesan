
import { GraduationCap, Award, Code2, Brain, Target } from "lucide-react";

export default function About() {
  const skills = [
    { category: "Technical Skills", icon: Code2, items: [
      "Java Development & Spring Boot",
      "Embedded C Programming & STM32",
      "React & Frontend Development",
      "Database Design (SQL & NoSQL)",
      "REST API Architecture"
    ]},
    { category: "Soft Skills", icon: Brain, items: [
      "Original Thinking & Problem-solving",
      "Team Collaboration & Communication",
      "Scientific Approach to Development",
      "Continuous Learning Mindset",
      "Attention to Detail"
    ]}
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-gray-50/80 to-blue-50/50 relative overflow-hidden backdrop-blur-sm">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute right-10 top-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute left-20 bottom-20 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="content-section relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a dedicated software developer with a focus on embedded systems, I blend strong technical knowledge with practical implementation skills to create solutions that make a real difference. I'm passionate about bridging the gap between hardware and software, crafting efficient, scalable applications that solve complex problems.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-xl border border-primary/10">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Master of Computer Applications</h4>
                    <p className="text-gray-600 mt-1">Rathinam Technical Campus</p>
                    <p className="text-sm text-primary font-medium mt-2">Expected May 2025</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Bachelor of Computer Applications</h4>
                    <p className="text-gray-600 mt-1">Sri Kaliswari College</p>
                    <p className="text-sm text-blue-600 font-medium mt-2">July 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Skills & Competencies</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center">
                    <skillGroup.icon className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-medium text-gray-900">{skillGroup.category}</h4>
                  </div>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center group">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{skill}</span>
                      </div>
                    ))}
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
