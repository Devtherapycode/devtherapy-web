import gamejamBanner from '@/assets/events/gamejam_2025_tsu.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      question: 'რა მოხდება თუ არ მყავს გუნდი?',
      answer: 'Game Jam-ის დაწყებისას აუცილებლად შეგვიძლია დაგეხმაროთ გუნდის მოძიებაში და შექმნაში! ყველა მონაწილე ხვდება თანაბარ პირობებში.',
    },
    {
      question: 'რა ინსტრუმენტების გამოყენება შემიძლია?',
      answer:
        'შეგიძლიათ გამოიყენოთ ნებისმიერი game development ინსტრუმენტი - Unity, Unreal Engine, Godot, ან სხვა. თემა მხოლოდ ღონისძიების დაწყებისას გაცხადდება.',
    },
    {
      question: 'ღონისძიება ონლაინია თუ პირდაპირ?',
      answer: 'ღონისძიება იმართება პირდაპირ TSU-ს მე-11 კორპუსში. ეს 48-საათიანი ონ-საიტ გამოცდილებაა!',
    },
    {
      question: 'როგორ შემიძლია საპრიზო ფონდის მხარდაჭერა?',
      answer: 'შეგიძლიათ ფინანსური მხარდაჭერა გაუწიოთ მითითებული რეკვიზიტებით. ყველა შემოწირულება community-სგან მოდის!',
    },
    {
      question: 'რა ხდება თუ 100 ადამიანზე მეტი დარეგისტრირდება?',
      answer: 'მონაწილეთა რაოდენობა შეზღუდულია 100 ადამიანით, ამიტომ გთხოვთ დროულად გაიაროთ რეგისტრაცია!',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative flex h-[60vh] items-center justify-center">
          <img src={gamejamBanner} alt="Game Jam 2025" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 px-4 text-center text-white">
            <h1 className="glow-text mb-4 text-5xl font-bold md:text-7xl">Game Jam 2025</h1>
            <p className="mb-8 text-xl font-light md:text-2xl">48 საათიანი Game Jam TSU-ში, 5-6 ივლისს 🎮</p>

            {timeLeft && (
              <div className="mb-8 flex justify-center gap-4 text-center">
                <div className="rounded-lg bg-brand-mint/20 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-brand-mint">{timeLeft.days}</div>
                  <div className="text-sm">დღე</div>
                </div>
                <div className="rounded-lg bg-brand-mint/20 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-brand-mint">{timeLeft.hours}</div>
                  <div className="text-sm">საათი</div>
                </div>
                <div className="rounded-lg bg-brand-mint/20 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-brand-mint">{timeLeft.minutes}</div>
                  <div className="text-sm">წუთი</div>
                </div>
              </div>
            )}

            <a href="https://lu.ma/rodmrn6z" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-brand-mint px-8 py-4 text-lg text-black hover:bg-brand-mint-dark">
                📅 დარეგისტრირდი
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-brand-mint">🎯 რა არის Game Jam 2025?</h2>
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <CalendarIcon className="mx-auto mb-4 h-12 w-12 text-brand-mint" />
                  <h3 className="mb-2 text-lg font-semibold">48 საათი</h3>
                  <p className="text-muted-foreground">5-6 ივლისს</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-brand-mint" />
                  <h3 className="mb-2 text-lg font-semibold">100 მონაწილე</h3>
                  <p className="text-muted-foreground">მაქს. 5 ადამიანი გუნდში</p>
                </div>
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-12 w-12 text-brand-mint" />
                  <h3 className="mb-2 text-lg font-semibold">TSU</h3>
                  <p className="text-muted-foreground">მე-11 კორპუსი</p>
                </div>
              </div>

              <p className="mb-6 text-lg leading-relaxed">
                სიხარულით მინდა გაცნობოთ, რომ Devtherapy ატარებს პირველ ოფიციალურ 48-საათიან Game Jam-ს 🎮, რომელიც გაიმართება ივანე ჯავახიშვილის სახელობის
                თბილისის სახელმწიფო უნივერსიტეტში (TSU).
              </p>

              <p className="mb-6 text-lg leading-relaxed">
                ჩვენთვის მნიშვნელოვანია, რომ ეს ღონისძიება იყოს community-ის მიერ წახალისებული და მათზე ორიენტირებული ("From community, to community") 🤝, რაც
                კიდევ უფრო გაზრდის მოტივაციას დამწყები დეველოპერების, დიზაინერების, არტისტებისა და ზოგადად ყველა იმ ადამიანისათვის, ვინც ახლა აპირებს პირველ
                ნაბიჯების გადადგმას 🚀.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid h-full w-full grid-cols-2 sm:grid-cols-4">
            <TabsTrigger value="rules">🎮 წესები</TabsTrigger>
            <TabsTrigger value="faq">❓ FAQ</TabsTrigger>
            <TabsTrigger value="location">📍 ლოკაცია</TabsTrigger>
            <TabsTrigger value="register">📝 რეგისტრაცია</TabsTrigger>
          </TabsList>

          <TabsContent value="rules" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">🎮 Game Jam წესები</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold text-brand-mint">📋 ძირითადი წესები:</h3>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>48 საათის განმავლობაში თამაშების შექმნა კონკრეტული თემის ირგვლივ</li>
                    <li>თემა გახდება ცნობილი მხოლოდ ღონისძიების დაწყებისას 🕹️</li>
                    <li>მონაწილეთა მაქსიმალური რაოდენობა: 100 ადამიანი</li>
                    <li>წინასწარ მომზადებული ნამუშევრების წარდგენა აკრძალულია ⚖️</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-brand-mint">👥 გუნდის შემადგენლობა:</h3>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>გუნდში შეგიძლიათ იყოთ მინიმუმ 1 ადამიანი ხოლო მაქსიმუმ 5</li>
                    <li>თუ ჯერ გუნდი არ გყავს, შეგიძლია დარეგისტრირდე ინდივიდუალურად - გუნდელს ადგილზე მოძებნი</li>
                    <li>მონაწილეების დასაშვები ასაკი: 15+ 🔞</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-brand-mint">📍 დასწრება და მუშაობის ფორმატი:</h3>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>Game Jam ტარდება მთლიანად ოფლაინ ფორმატში</li>
                    <li>არ არის დაშვებული დისტანციური მონაწილეობა — არც პროგრამისტებისთვის და არც არტისტებისთვის</li>
                    <li>დაშვებულია AI-ს გამოყენება 🤖</li>
                    <li>ყველა მონაწილე უნდა იმყოფებოდეს ადგილზე მთელი ღონისძიების განმავლობაში</li>
                    <li>არ დააგვიანოთ რეგისტრაციაზე ⏰</li>
                    <li>რეგისტრაციის დროს დაგჭირდებათ ზუსტი მეილი და სახელი რითიც დარეგისტრირდით</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-brand-mint">💻 აღჭურვილობა:</h3>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>ყველა მონაწილემ თავად უნდა მოიტანოს თავისი სამუშაო აღჭურვილობა:</li>
                    <li className="ml-4">• ლეპტოპი და დამტენი</li>
                    <li className="ml-4">• მაუსი</li>
                    <li className="ml-4">• ყურსასმენები</li>
                    <li className="ml-4">• რაც გჭირდებათ პროდუქტიულად სამუშაოდ</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-brand-mint">🏆 საპრიზო ფონდი:</h3>
                  <p className="mb-2 text-muted-foreground">
                    საპრიზო ფონდის ნაწილი უკვე დაფარულია ორგანიზატორებისა და Devtherapy-ის გუნდის მიერ, ხოლო დანარჩენი ნაწილი შედგება სრულად community-სგან
                    შემოსული crowdfunding-ის საშუალებით 💸.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-brand-mint">📹 დამატებითი ღონისძიებები:</h3>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
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
                <CardDescription>გაეცანით ყველაზე ხშირ კითხვებს Game Jam 2025-ის შესახებ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-muted/50 p-4 text-left transition-colors hover:bg-muted">
                        <span className="font-medium">{item.question}</span>
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4 pt-2">
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
                <CardTitle className="flex items-center gap-2">📍 ლოკაცია</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-brand-mint">🏢 მისამართი:</h3>
                    <p className="text-lg">TSU-ს მე-11 კორპუსი (განივი)</p>
                    <p className="text-muted-foreground">ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი</p>
                  </div>

                  <div className="rounded-lg bg-muted/30 p-6">
                    <h3 className="mb-4 font-semibold">🗺️ რუკა:</h3>
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1644464992664!2d44.7215512!3d41.7169702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447371b40dc741%3A0xaa9f66639d890960!2sTSU%2011th%20Building%20(Ganivi)!5e0!3m2!1sen!2sge!4v1750935079386!5m2!1sen!2sge"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
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
                <CardTitle className="flex items-center gap-2">📝 რეგისტრაცია</CardTitle>
                <CardDescription>მონაწილეთა რაოდენობა შეზღუდულია - დროულად დარეგისტრირდით! ⏳</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <a href="https://lu.ma/rodmrn6z" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-brand-mint px-12 py-6 text-black hover:bg-brand-mint-dark sm:text-xl">
                      📅 დარეგისტრირდი აქ
                      <ExternalLink className="ml-2 h-6 w-6" />
                    </Button>
                  </a>
                </div>

                {timeLeft && (
                  <div className="rounded-lg bg-gradient-to-r from-brand-mint/10 to-brand-mint/5 p-6 text-center">
                    <h3 className="mb-4 text-lg font-semibold">⏰ რეგისტრაციამდე დარჩა:</h3>
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
                  <h3 className="mb-4 font-semibold text-brand-mint">💰 საპრიზო ფონდის მხარდაჭერა:</h3>
                  <div className="space-y-2 rounded-lg bg-muted/30 p-4 text-sm">
                    <p>
                      <strong>🏦 მიმღები:</strong> Tornike Gomareli
                    </p>
                    <p>
                      <strong>💳 ანგარიში:</strong> GE63BG0000000609279471
                    </p>
                    <p>
                      <strong>📌 დანიშნულება:</strong> "Devtherapy Game Jam 2025"
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
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
