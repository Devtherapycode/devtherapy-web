
import { BackToHomeHeader } from '@/components/back-to-home-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import gamejamBanner from '@/assets/events/gamejam_2025_tsu.png';
import { CalendarIcon, ChevronDown, ExternalLink, MapPin, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const GameJam2025 = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const eventDate = new Date('2025-07-05T10:00:00Z');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft(null);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const faqItems = [
    {
      question: "რა მოხდება თუ არ მყავს გუნდი?",
      answer: "Game Jam-ის დაწყებისას აუცილებლად შეგვიძლია დაგეხმაროთ გუნდის მოძიებაში და შექმნაში! ყველა მონაწილე ხვდება თანაბარ პირობებში."
    },
    {
      question: "რა ინსტრუმენტების გამოყენება შემიძლია?",
      answer: "შეგიძლიათ გამოიყენოთ ნებისმიერი game development ინსტრუმენტი - Unity, Unreal Engine, Godot, ან სხვა. თემა მხოლოდ ღონისძიების დაწყებისას გაცხადდება."
    },
    {
      question: "ღონისძიება ონლაინია თუ პირდაპირ?",
      answer: "ღონისძიება იმართება პირდაპირ TSU-ს მე-11 კორპუსში. ეს 48-საათიანი ონ-საიტ გამოცდილებაა!"
    },
    {
      question: "როგორ შემიძლია საპრიზო ფონდის მხარდაჭერა?",
      answer: "შეგიძლიათ ფინანსური მხარდაჭერა გაუწიოთ მითითებული რეკვიზიტებით. ყველა შემოწირულება community-სგან მოდის!"
    },
    {
      question: "რა ხდება თუ 100 ადამიანზე მეტი დარეგისტრირდება?",
      answer: "მონაწილეთა რაოდენობა შეზღუდულია 100 ადამიანით, ამიტომ გთხოვთ დროულად გაიაროთ რეგისტრაცია!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackToHomeHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] flex items-center justify-center">
          <img 
            src={gamejamBanner} 
            alt="Game Jam 2025" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">Game Jam 2025</h1>
            <p className="text-xl md:text-2xl mb-8 font-light">48 საათიანი Game Jam TSU-ში, 5-6 ივლისს 🎮</p>
            
            {timeLeft && (
              <div className="mb-8 flex justify-center gap-4 text-center">
                <div className="bg-brand-mint/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-brand-mint">{timeLeft.days}</div>
                  <div className="text-sm">დღე</div>
                </div>
                <div className="bg-brand-mint/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-brand-mint">{timeLeft.hours}</div>
                  <div className="text-sm">საათი</div>
                </div>
                <div className="bg-brand-mint/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-brand-mint">{timeLeft.minutes}</div>
                  <div className="text-sm">წუთი</div>
                </div>
              </div>
            )}
            
            <a href="https://lu.ma/rodmrn6z" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-brand-mint text-black hover:bg-brand-mint-dark text-lg px-8 py-4">
                📅 დარეგისტრირდი
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-mint mb-8 text-center">🎯 რა არის Game Jam 2025?</h2>
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <CalendarIcon className="h-12 w-12 text-brand-mint mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">48 საათი</h3>
                  <p className="text-muted-foreground">5-6 ივლისს</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-brand-mint mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">100 მონაწილე</h3>
                  <p className="text-muted-foreground">მაქს. 5 ადამიანი გუნდში</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-brand-mint mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">TSU</h3>
                  <p className="text-muted-foreground">მე-11 კორპუსი</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                სიხარულით მინდა გაცნობოთ, რომ Devtherapy ატარებს პირველ ოფიციალურ 48-საათიან Game Jam-ს 🎮, 
                რომელიც გაიმართება ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტში (TSU).
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                ჩვენთვის მნიშვნელოვანია, რომ ეს ღონისძიება იყოს community-ის მიერ წახალისებული და მათზე ორიენტირებული 
                ("From community, to community") 🤝, რაც კიდევ უფრო გაზრდის მოტივაციას დამწყები დეველოპერების, 
                დიზაინერების, არტისტებისა და ზოგადად ყველა იმ ადამიანისათვის, ვინც ახლა აპირებს პირველ ნაბიჯების გადადგმას 🚀.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="rules">🎮 წესები</TabsTrigger>
            <TabsTrigger value="faq">❓ FAQ</TabsTrigger>
            <TabsTrigger value="location">📍 ლოკაცია</TabsTrigger>
            <TabsTrigger value="register">📝 რეგისტრაცია</TabsTrigger>
          </TabsList>

          <TabsContent value="rules" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎮 Game Jam წესები
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-brand-mint mb-3">📋 ძირითადი წესები:</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>48 საათის განმავლობაში თამაშების შექმნა კონკრეტული თემის ირგვლივ</li>
                    <li>თემა გახდება ცნობილი მხოლოდ ღონისძიების დაწყებისას 🕹️</li>
                    <li>მაქსიმალური გუნდის ზომა: 5 ადამიანი 👥</li>
                    <li>მონაწილეთა მაქსიმალური რაოდენობა: 100 ადამიანი</li>
                    <li>წინასწარ მომზადებული ნამუშევრების წარდგენა აკრძალულია ⚖️</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-brand-mint mb-3">🏆 საპრიზო ფონდი:</h3>
                  <p className="text-muted-foreground mb-2">
                    საპრიზო ფონდის ნაწილი უკვე დაფარულია ორგანიზატორებისა და Devtherapy-ის გუნდის მიერ, 
                    ხოლო დანარჩენი ნაწილი შედგება სრულად community-სგან შემოსული crowdfunding-ის საშუალებით 💸.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-mint mb-3">📹 დამატებითი ღონისძიებები:</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Tech Talk-ები და Q&A სესიები 🎤❓</li>
                    <li>მთელი პროცესის ვლოგის სახით გადაღება 🎥</li>
                    <li>გუნდის შექმნაში დახმარება იმათთვის, ვისაც არ აქვს გუნდი 🛠️</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>❓ ხშირად დასმული კითხვები</CardTitle>
                <CardDescription>
                  გაეცანით ყველაზე ხშირ კითხვებს Game Jam 2025-ის შესახებ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <span className="font-medium">{item.question}</span>
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pt-2 pb-4">
                        <p className="text-muted-foreground">{item.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📍 ლოკაცია
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-brand-mint mb-2">🏢 მისამართი:</h3>
                    <p className="text-lg">TSU-ს მე-11 კორპუსი (განივი)</p>
                    <p className="text-muted-foreground">ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი</p>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold mb-4">🗺️ რუკა:</h3>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.0164729856434!2d44.78076!3d41.7103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472cfb077dd71%3A0x8b6f8c8e8c7b8a8!2sTbilisi%20State%20University!5e0!3m2!1sen!2sge!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📝 რეგისტრაცია
                </CardTitle>
                <CardDescription>
                  მონაწილეთა რაოდენობა შეზღუდულია - დროულად დარეგისტრირდით! ⏳
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <a href="https://lu.ma/rodmrn6z" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-brand-mint text-black hover:bg-brand-mint-dark text-xl px-12 py-6">
                      📅 დარეგისტრირდი აქ
                      <ExternalLink className="ml-2 h-6 w-6" />
                    </Button>
                  </a>
                </div>
                
                {timeLeft && (
                  <div className="bg-gradient-to-r from-brand-mint/10 to-brand-mint/5 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold mb-4">⏰ რეგისტრაციამდე დარჩა:</h3>
                    <div className="flex justify-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-mint">{timeLeft.days}</div>
                        <div className="text-sm text-muted-foreground">დღე</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-mint">{timeLeft.hours}</div>
                        <div className="text-sm text-muted-foreground">საათი</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-brand-mint">{timeLeft.minutes}</div>
                        <div className="text-sm text-muted-foreground">წუთი</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-brand-mint mb-4">💰 საპრიზო ფონდის მხარდაჭერა:</h3>
                  <div className="bg-muted/30 rounded-lg p-4 space-y-2 text-sm">
                    <p><strong>🏦 მიმღები:</strong> Tornike Gomareli</p>
                    <p><strong>💳 ანგარიში:</strong> GE63BG0000000609279471</p>
                    <p><strong>📌 დანიშნულება:</strong> "Devtherapy Game Jam 2025"</p>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    ყველა შემოწირულება community-დან მოდის და პირდაპირ მონაწილეების მოტივაციას უწყობს ხელს! 🤝
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GameJam2025;
