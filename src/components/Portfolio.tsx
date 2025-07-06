import { ExternalLink, Globe, Smartphone, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Lightbox from "./Lightbox";
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const projects = [{
    title: "CoolBreeze HVAC",
    category: "HVAC Services",
    description: "Modern design for HVAC service providers",
    image: "https://i.imgur.com/OzMkGTa.jpeg",
    technologies: ["React", "Tailwind CSS", "Booking System"],
    link: "#",
    color: "from-blue-500 to-cyan-500"
  }, {
    title: "Jack's Pizza",
    category: "Restaurant",
    description: "Appetizing design for local pizzerias",
    image: "https://i.imgur.com/Jq9PNdq.jpeg",
    technologies: ["React", "Tailwind CSS", "Online Ordering"],
    link: "#",
    color: "from-red-500 to-orange-500"
  }, {
    title: "Miami Luxury Yacht Charter",
    category: "Yacht Services",
    description: "Elegant design for high-end yacht services",
    image: "https://i.imgur.com/8LjMfvz.jpeg",
    technologies: ["React", "Booking System", "Premium Design"],
    link: "#",
    color: "from-blue-500 to-teal-500"
  }, {
    title: "DreamHomes",
    category: "Real Estate",
    description: "Sophisticated layouts for property listings",
    image: "https://i.imgur.com/Gnfjr2I.jpeg",
    technologies: ["React", "Property Search", "Map Integration"],
    link: "#",
    color: "from-green-500 to-emerald-500"
  }, {
    title: "LA Luxury Dog Grooming",
    category: "Pet Care",
    description: "Premium design for pet care businesses",
    image: "https://i.imgur.com/QWYTGz1.jpeg",
    technologies: ["React", "Appointment Booking", "Service Management"],
    link: "#",
    color: "from-purple-500 to-pink-500"
  }, {
    title: "Atlanta Hair",
    category: "Beauty & Spa",
    description: "Stylish design for hair salons and spas",
    image: "https://i.imgur.com/SEZFMPS.jpeg",
    technologies: ["React", "Online Booking", "Style Gallery"],
    link: "#",
    color: "from-indigo-500 to-purple-500"
  }];
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
  };
  return <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Web Design
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent web design projects. Each website is crafted with care, 
            just like a bunny's attention to detail! 🐰
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 overflow-hidden hover:-translate-y-2 cursor-pointer" onClick={() => handleProjectClick(project)}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover object-center group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100" onClick={e => {
                e.stopPropagation();
                handleProjectClick(project);
              }}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>)}
        </div>

        
      </div>

      <Lightbox project={selectedProject} isOpen={isLightboxOpen} onClose={closeLightbox} />
    </section>;
};
export default Portfolio;