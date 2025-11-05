import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const ContactNew = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. I will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Let's Connect
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to elevate your investment strategy? Get in touch for a personalized consultation
              </p>
            </div>
          </ScrollReveal>

          {/* 2x2 Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Email Card */}
            <ScrollReveal direction="left" delay={0}>
              <Card className="p-7 bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-semibold text-foreground mb-2 text-lg">Email</p>
                    <p className="text-muted-foreground">research@bulltrading.com</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Phone Card */}
            <ScrollReveal direction="right" delay={0}>
              <Card className="p-7 bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-semibold text-foreground mb-2 text-lg">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal direction="left" delay={100}>
              <Card className="p-7 bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-semibold text-foreground mb-2 text-lg">Office</p>
                    <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Office Hours Card */}
            <ScrollReveal direction="right" delay={100}>
              <Card className="p-7 bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-semibold text-foreground mb-3 text-lg">Office Hours</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Mon - Fri</span>
                        <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Saturday</span>
                        <span className="font-medium text-foreground">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Sunday</span>
                        <span className="font-medium text-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Contact Form - Full Width */}
          <ScrollReveal direction="up" delay={200}>
            <Card className="p-8 md:p-12 bg-background border-border shadow-xl">
              <div className="text-center md:text-left mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Send a Message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-background h-12 border-muted-foreground/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="bg-background h-12 border-muted-foreground/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="bg-background h-12 border-muted-foreground/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your investment goals and how I can help you achieve them..."
                    rows={6}
                    className="bg-background resize-none border-muted-foreground/20 focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <p className="text-sm text-muted-foreground text-center md:text-left">
                    * Required fields
                  </p>
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-12 bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactNew;
