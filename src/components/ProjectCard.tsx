import { Card2 } from "../components/ui/card2";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) => {
  // Extract GitHub owner and repo from the URL
  const getGithubEmbedUrl = (url: string) => {
    return githubUrl;
  };

  // Generate the GitHub embed image URL
  const imageUrl = getGithubEmbedUrl(githubUrl);

  // Mapping technology names to their respective background classes
  const techBgClasses: Record<string, string> = {
    React: "bg-portfolio-react",
    "Node.js": "bg-portfolio-nodejs",
    MongoDB: "bg-portfolio-mongodb",
    Tailwind: "bg-portfolio-tailwindcss",
    Firebase: "bg-portfolio-firebase",
    Typescript: "bg-portfolio-typescript",
    "Material-UI": "bg-portfolio-materialui",
    "Chart.js": "bg-portfolio-chartjs",
    "Weather API": "bg-portfolio-weatherapi",
    "Styled Components": "bg-portfolio-styledcomponents",
    HTML: "bg-portfolio-HTML",
    JavaScript: "bg-portfolio-JavaScript",
    Swift: "bg-portfolio-Swift",
    Python: "bg-portfolio-Python",
    C: "bg-portfolio-C",
    "C++": "bg-portfolio-C++",
  };

  return (
    <Card2 className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ">
      <div className=" overflow-hidden bg-white" >
        <img
          src={imageUrl}
          alt={title}
          className="w-500 h-500 object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-portfolio-dark mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 ${
                techBgClasses[tech] || "bg-portfolio-secondary"
              } text-portfolio-white rounded-full text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github size={16} />
            Code
          </Button>
          {demoUrl && (
            <Button
              size="sm"
              className="flex items-center gap-2 bg-portfolio-primary hover:bg-portfolio-accent"
              onClick={() => window.open(demoUrl, "_blank")}
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card2>
  );
};

export default ProjectCard;
