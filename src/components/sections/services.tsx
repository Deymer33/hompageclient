import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart, Wind, Gem, Flower } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

const services = [
  {
    icon: HandHeart,
    title: 'Swedish Massage',
    description: 'A gentle full-body massage to promote relaxation and improve circulation.',
  },
  {
    icon: Wind,
    title: 'Deep Tissue Massage',
    description: 'Targets deeper layers of muscle to relieve chronic tension and pain.',
  },
  {
    icon: Gem,
    title: 'Hot Stone Therapy',
    description: 'Uses heated stones to ease muscle stiffness and increase metabolism.',
  },
  {
    icon: Flower,
    title: 'Aromatherapy Massage',
    description: 'Combines soft, gentle pressure with the use of essential oils.',
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Rejuvenate your body and mind with our therapeutic treatments.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center group hover:border-primary transition-colors duration-300">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl font-bold font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
