import { Card, CardContent } from "@/components/ui/card";
import { Database, Code, TrendingUp, Boxes } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Analysis Skills",
      skills: [
        "Data Cleaning & Wrangling",
        "Exploratory Data Analysis (EDA)",
        "SQL Queries",
        "Visualization (Matplotlib, Seaborn)",
        "Reporting & Insights",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools",
      skills: ["Excel", "Power BI", "Tableau", "SQL", "Python (Pandas, NumPy)"],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["C++", "Python", "Java"],
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Computer Science Concepts",
      skills: [
        "Object-Oriented Programming (OOP)",
        "Data Structures",
        "Algorithms",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 glow-cyan-sm" />
          </div>

          {/* About Description */}
          <div className="mb-16 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a Computer Science student at <span className="text-primary font-semibold">Modern Academy</span>, 
              deeply passionate about data analysis and technology. My journey combines technical expertise with 
              analytical thinking to solve complex problems and extract meaningful insights from data. 
              I thrive on turning numbers into narratives and helping organizations make data-driven decisions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card border-border card-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-md hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
