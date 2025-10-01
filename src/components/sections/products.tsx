import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const products = [
  { id: 'product-oil', name: 'Organic Lavender Oil', description: 'Pure essential oil for relaxation and calm.' },
  { id: 'product-cream', name: 'Nourishing Face Cream', description: 'Hydrates and revitalizes skin with natural ingredients.' },
  { id: 'product-soap', name: 'Handmade Oatmeal Soap', description: 'Gently cleanses and exfoliates for smooth skin.' },
  { id: 'product-tea', name: 'Herbal Detox Tea', description: 'A soothing blend of herbs to cleanse and rejuvenate.' },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Pure, natural, and effective solutions for your well-being.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const productImage = PlaceHolderImages.find(p => p.id === product.id);
            return (
              <Card key={product.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {productImage && (
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src={productImage.imageUrl}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={productImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-headline">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#">Shop Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#">View All Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
