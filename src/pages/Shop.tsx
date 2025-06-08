
import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import MatrixBackground from '@/components/MatrixBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Shop = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: "Devtherapy Hoodie",
      price: 45,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      description: "Cozy hoodie for those late-night debugging sessions"
    },
    {
      id: 2,
      name: "Binary Dreams T-Shirt",
      price: 25,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      description: "Soft cotton tee with subtle binary pattern"
    },
    {
      id: 3,
      name: "Coffee Mug - Debug Life",
      price: 15,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
      description: "Essential fuel for your coding sessions"
    },
    {
      id: 4,
      name: "Sticker Pack",
      price: 8,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      description: "Rep the brand on your laptop"
    },
    {
      id: 5,
      name: "Tech Therapy Notebook",
      price: 20,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
      description: "Document your debugging journey"
    },
    {
      id: 6,
      name: "Code & Chill Cap",
      price: 28,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
      description: "Stay cool while your code compiles"
    }
  ];

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
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
      const product = products.find(p => p.id === parseInt(productId));
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 border-b border-brand-mint/10">
        <Link to="/" className="flex items-center gap-3 text-brand-mint hover:text-brand-mint-light transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Podcast</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-brand-mint" />
          {getTotalItems() > 0 && (
            <Badge className="bg-brand-mint text-black font-bold">
              {getTotalItems()}
            </Badge>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Support the Podcast
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Grab some merch, rep the dev life.
          </p>
          <div className="w-24 h-1 bg-brand-mint mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover-lift bg-card/50 border-brand-mint/20 hover:border-brand-mint/40 transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-brand-mint">${product.price}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  
                  {cart[product.id] ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                          className="h-8 w-8 p-0 border-brand-mint/20 hover:border-brand-mint/40"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium text-brand-mint">{cart[product.id]}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => addToCart(product.id)}
                          className="h-8 w-8 p-0 border-brand-mint/20 hover:border-brand-mint/40"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ${(product.price * cart[product.id]).toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => addToCart(product.id)}
                      className="w-full bg-brand-mint hover:bg-brand-mint-dark text-black font-medium"
                    >
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
        <section className="relative z-10 py-16 px-4 border-t border-brand-mint/10">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/80 border-brand-mint/20">
              <CardHeader>
                <CardTitle className="text-center">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Total Items:</span>
                  <span className="text-brand-mint font-medium">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-brand-mint">${getTotalPrice().toFixed(2)}</span>
                </div>
                <Button className="w-full bg-brand-mint hover:bg-brand-mint-dark text-black font-bold text-lg py-6">
                  Complete Order
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Coming soon – real dev gear, real soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="relative z-10 py-16 px-4 bg-card/20 border-t border-brand-mint/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">All merch supports more dev therapy.</h3>
          <p className="text-muted-foreground mb-6">
            Every purchase helps us create more content for the developer community.
          </p>
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
