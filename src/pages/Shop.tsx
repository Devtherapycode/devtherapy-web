import MatrixBackground from '@/components/MatrixBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: 'Devtherapy Hoodie',
      price: 45,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      description: 'Cozy hoodie for those late-night debugging sessions',
    },
    {
      id: 2,
      name: 'Binary Dreams T-Shirt',
      price: 25,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'Soft cotton tee with subtle binary pattern',
    },
    {
      id: 3,
      name: 'Coffee Mug - Debug Life',
      price: 15,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop',
      description: 'Essential fuel for your coding sessions',
    },
    {
      id: 4,
      name: 'Sticker Pack',
      price: 8,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      description: 'Rep the brand on your laptop',
    },
    {
      id: 5,
      name: 'Tech Therapy Notebook',
      price: 20,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
      description: 'Document your debugging journey',
    },
    {
      id: 6,
      name: 'Code & Chill Cap',
      price: 28,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
      description: 'Stay cool while your code compiles',
    },
  ];

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [productId, count]) => {
      const product = products.find((p) => p.id === parseInt(productId));
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-brand-mint/10 p-6">
        <Link to="/" className="flex items-center gap-3 text-brand-mint transition-colors hover:text-brand-mint-light">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Podcast</span>
        </Link>

        <div className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-brand-mint" />
          {getTotalItems() > 0 && <Badge className="bg-brand-mint font-bold text-black">{getTotalItems()}</Badge>}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="glow-text mb-6 text-4xl font-bold md:text-6xl">Support the Podcast</h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">Grab some merch, rep the dev life.</p>
          <div className="mx-auto h-1 w-24 rounded-full bg-brand-mint"></div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative z-10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="hover-lift border-brand-mint/20 bg-card/50 transition-all duration-300 hover:border-brand-mint/40">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-brand-mint">${product.price}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>

                  {cart[product.id] ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                          className="h-8 w-8 border-brand-mint/20 p-0 hover:border-brand-mint/40"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium text-brand-mint">{cart[product.id]}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addToCart(product.id)}
                          className="h-8 w-8 border-brand-mint/20 p-0 hover:border-brand-mint/40"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="text-sm text-muted-foreground">${(product.price * cart[product.id]).toFixed(2)}</span>
                    </div>
                  ) : (
                    <Button onClick={() => addToCart(product.id)} className="w-full bg-brand-mint font-medium text-black hover:bg-brand-mint-dark">
                      Add to Cart
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary & Checkout */}
      {getTotalItems() > 0 && (
        <section className="relative z-10 border-t border-brand-mint/10 px-4 py-16">
          <div className="mx-auto max-w-2xl">
            <Card className="border-brand-mint/20 bg-card/80">
              <CardHeader>
                <CardTitle className="text-center">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Total Items:</span>
                  <span className="font-medium text-brand-mint">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-brand-mint">${getTotalPrice().toFixed(2)}</span>
                </div>
                <Button className="w-full bg-brand-mint py-6 text-lg font-bold text-black hover:bg-brand-mint-dark">Complete Order</Button>
                <p className="text-center text-sm text-muted-foreground">Coming soon – real dev gear, real soon.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="relative z-10 border-t border-brand-mint/10 bg-card/20 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-4 text-2xl font-bold">All merch supports more dev therapy.</h3>
          <p className="mb-6 text-muted-foreground">Every purchase helps us create more content for the developer community.</p>
          <Link to="/" className="inline-block">
            <Button variant="outline" className="border-brand-mint/40 hover:border-brand-mint hover:bg-brand-mint/10">
              Listen to Latest Episode
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Shop;
