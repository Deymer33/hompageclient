import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const locations = [
  {
    name: 'Mexico Wellness Center',
    address: 'Av. Paseo de la Reforma 222, Juárez, 06600 Ciudad de México, CDMX',
    phone: '+52 55 1234 5678',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },
  {
    name: 'Carolina Wellness Center',
    address: '123 Wellness Way, Charlotte, NC 28202, USA',
    phone: '+1 (704) 876-5432',
    hours: 'Tue - Sun: 10:00 AM - 8:00 PM',
  },
];

const Locations = () => {
  const mapImage = PlaceHolderImages.find(p => p.id === 'location-map');

  return (
    <section id="locations" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Visit Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Find your local Natural Harmony wellness center.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          {locations.map((location) => (
            <Card key={location.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">{location.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mapImage && (
                  <div className="aspect-video w-full overflow-hidden rounded-md">
                    <Image
                      src={mapImage.imageUrl}
                      alt={`Map of ${location.name}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={mapImage.imageHint}
                    />
                  </div>
                )}
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
