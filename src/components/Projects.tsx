import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue forecasting with real-time data visualization.",
      image: "/placeholder.svg",
      github: "https://github.com/ahmedsaif/sales-dashboard",
      category: "featured",
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model built with Python to predict customer churn using historical data and behavioral patterns.",
      image: "/placeholder.svg",
      github: "https://github.com/ahmedsaif/churn-prediction",
      category: "featured",
    },
    {
      title: "SQL Database Optimization",
      description: "Comprehensive project optimizing complex SQL queries and database structures for improved performance and scalability.",
      image: "/placeholder.svg",
      github: "https://github.com/ahmedsaif/sql-optimization",
      category: "featured",
    },
  ];

  const newProjects = [
    {
      title: "Social Media Sentiment Analysis",
      description: "NLP-powered tool analyzing social media posts to gauge public sentiment using Python and machine learning algorithms.",
      image: "/placeholder.svg",
      github: "https://github.com/ahmedsaif/sentiment-analysis",
      category: "new",
    },
    {
      title: "Inventory Management System",
      description: "Full-stack web application for inventory tracking with real-time analytics and automated reporting features.",
      image: "/placeholder.svg",
      github: "https://github.com/ahmedsaif/inventory-system",
      category: "new",
    },
  ];

  const ProjectCard = ({ project }: { project: typeof featuredProjects[0] }) => (
    <Card className="bg-card border-border card-glow group overflow-hidden">
      <div
        className="relative overflow-hidden cursor-pointer h-48 bg-gradient-to-br from-primary/10 to-secondary/10"
        onClick={() => window.open(project.github, "_blank")}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <ExternalLink className="w-12 h-12 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="glow"
          className="w-full"
          onClick={() => window.open(project.github, "_blank")}
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 glow-cyan-sm" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of data analysis projects, from interactive dashboards to predictive models.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <span className="text-primary">★</span> Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* New Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <span className="text-secondary">✦</span> New & Upcoming Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {newProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
