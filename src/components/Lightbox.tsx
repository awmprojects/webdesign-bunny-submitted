import { X, ExternalLink, Globe, Smartphone, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  color: string;
}

interface LightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox = ({ project, isOpen, onClose }: LightboxProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl p-0 gap-0 border-0 bg-white rounded-2xl overflow-hidden h-[95vh] max-h-[95vh]">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <ScrollArea className="h-full w-full">
          <div className="flex flex-col">
            {/* Project Image - Full width visible on mobile */}
            <div className="relative bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] object-contain sm:object-cover sm:object-top" 
              />
              <div className={`absolute top-4 left-4 w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`} />
              
              {/* Category Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                <div className="text-center">
                  <Smartphone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">Mobile Ready</p>
                </div>
                <div className="text-center">
                  <Code className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">Clean Code</p>
                </div>
                <div className="text-center">
                  <Globe className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 font-medium">SEO Ready</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link to="/register">
                  <Button 
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Order a Similar Web Design
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;
