import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:msaif0652@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Opening email client...",
      description: "Your message will be sent via your default email application.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 glow-cyan-sm" />
            <p className="text-lg text-muted-foreground">
              Have a project in mind or want to discuss data analysis? Let's connect!
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:msaif0652@gmail.com"
              className="hover:text-primary transition-colors"
            >
              msaif0652@gmail.com
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border focus:border-primary focus:ring-primary glow-cyan-sm transition-all"
              />
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-primary focus:ring-primary glow-cyan-sm transition-all"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card border-border focus:border-primary focus:ring-primary glow-cyan-sm transition-all resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
