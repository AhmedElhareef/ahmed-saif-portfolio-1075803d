import { Button } from "@/components/ui/button";
import { Github, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in-up">
            <span className="text-primary text-lg font-medium">Hi, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ahmed <span className="text-primary glow-cyan-sm">Saif</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Data Analyst & Computer Science Student
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Passionate about transforming raw data into actionable insights. I specialize in data analysis, problem-solving, 
            and leveraging technology to drive informed decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="glow"
              size="lg"
              onClick={() => window.open("https://github.com/ahmedsaif", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Profile
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
