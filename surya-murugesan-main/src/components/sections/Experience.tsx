
export default function Experience() {
  return (
    <section id="experience" className="bg-gradient-to-br from-white/70 to-gray-50/70 relative backdrop-blur-sm">
      <div className="content-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="relative border-l-2 border-primary pl-8 ml-4">
          {/* Experience Item */}
          <div className="mb-10 relative">
            {/* Timeline dot */}
            <div className="absolute -left-[2.8rem] top-0 w-6 h-6 bg-primary rounded-full"></div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-wrap justify-between mb-4">
                <h3 className="text-xl font-semibold">Embedded System Engineer</h3>
                <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">Jul 2024 - Aug 2024</span>
              </div>
              
              <p className="text-gray-600 mb-2">Phytec Embedded Pvt. Ltd</p>
              
              <h4 className="font-medium mb-2">Real-Time Industrial Energy Monitoring System</h4>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Developed a comprehensive energy monitoring system for industrial applications</li>
                <li>Integrated STM32F446RE microcontroller with BLE33 module, USB485 converter, LCD display, and various sensors</li>
                <li>Optimized the Finite State Machine (FSM)-based Modbus RTU protocol, achieving a 30% improvement in performance</li>
                <li>Implemented real-time data publishing to ThingsBoard cloud platform via MQTT protocol</li>
                <li>Collaborated with cross-functional teams to ensure seamless integration and deployment</li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium">STM32</span>
                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium">Embedded C</span>
                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium">Modbus RTU</span>
                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium">MQTT</span>
                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium">ThingsBoard</span>
              </div>
            </div>
          </div>
          
          {/* Additional experiences can be added here following the same pattern */}
        </div>
      </div>
    </section>
  );
}
