import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import salesProfitDashboard from "@/assets/dashboard-sales-profit.jpg";
import salesQuantityDashboard from "@/assets/dashboard-sales-quantity.jpg";
import salesStateDashboard from "@/assets/dashboard-sales-state.jpg";
import startupExpansionDashboard from "@/assets/dashboard-startup-expansion.jpg";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Sales & Profit Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing $20M in total sales across multiple states, tracking profit trends, profitability rates (49.9%), and sales performance by stock items with interactive filters.",
      image: salesProfitDashboard,
      github: "https://github.com/ahmedsaif/sales-profit-dashboard",
      category: "featured",
    },
    {
      title: "Sales Quantity Analysis Dashboard",
      description: "Interactive dashboard visualizing 1M+ quantity sold across 14K chiller items and 1M dry items. Tracks total sales trends by year and provides detailed stock item breakdowns with filterable dimensions.",
      image: salesQuantityDashboard,
      github: "https://github.com/ahmedsaif/sales-quantity-dashboard",
      category: "featured",
    },
    {
      title: "State Sales Performance Tracker",
      description: "Geographic sales analysis showing $19.9M total sales across US states (Alaska, California, Hawaii, Nevada, Oregon, Washington) with performance ratings and detailed state-level metrics.",
      image: salesStateDashboard,
      github: "https://github.com/ahmedsaif/state-sales-tracker",
      category: "featured",
    },
  ];

  const newProjects = [
    {
      title: "Startup Expansion Analytics",
      description: "Strategic dashboard analyzing $5M profit and $6M revenue across two sales regions with geographic mapping, marketing spend analysis ($428K), and expansion tracking by store ID.",
      image: startupExpansionDashboard,
      github: "https://github.com/ahmedsaif/startup-expansion",
      category: "new",
    },
  ];

  const ProjectCard = ({ project }: { project: typeof featuredProjects[0] }) => (
    <Card className="bg-card border-border card-glow group overflow-hidden">
      <div
        className="relative overflow-hidden cursor-pointer h-48 bg-muted"
        onClick={() => window.open(project.github, "_blank")}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ExternalLink className="w-12 h-12 text-primary" />
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
