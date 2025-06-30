import { Button } from '@/components/ui/button';
import { YOUTUBE_URL } from '@/utils/const';
import { Youtube } from 'lucide-react';

const PlatformLinks = () => {
  const platforms = [
    {
      name: 'Spotify',
      icon: '🟢',
      url: 'https://open.spotify.com/show/6fF0duVCFxXKIOFagc1ovJ',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      name: 'Apple Podcasts',
      icon: '🍎',
      url: 'https://podcasts.apple.com/us/podcast/devtherapy/id1774788149',
      color: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      name: 'Buzzsprout',
      icon: '🌀',
      url: 'https://www.buzzsprout.com/2415161',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Pocketcast',
      icon: '🎧',
      url: 'https://pocketcasts.com/podcasts/0f623c60-6fb8-013d-bd8d-02e325935ba3',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Deezer',
      icon: '🎶',
      url: 'https://www.deezer.com/en/show/1001333811',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
  ];

  return (
    <section className="px-4 py-20" id="listen-everywhere">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-brand-mint md:text-5xl">Listen Everywhere</h2>
        <p className="mb-12 text-xl text-muted-foreground">Choose your preferred platform and never miss an episode.</p>

        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          <Button variant="outline" size="lg" className="hover-lift h-20 flex-col gap-2 border-none bg-red-600 text-white hover:bg-red-700" asChild>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              <Youtube className="h-6 w-6" />
              <span className="text-sm font-medium">YouTube</span>
            </a>
          </Button>
          {platforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              size="lg"
              className={`${platform.color} hover-lift h-20 flex-col gap-2 border-none text-white`}
              asChild
            >
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-sm font-medium">{platform.name}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* <div className="rounded-xl border border-brand-mint/10 bg-card/30 p-8">
          <h3 className="mb-4 text-2xl font-semibold">Stay Updated</h3>
          <p className="mb-6 text-muted-foreground">Get notified when new episodes drop and join our community of developers.</p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-brand-mint/20 bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-mint"
            />
            <Button className="bg-brand-mint text-black hover:bg-brand-mint-dark">Subscribe</Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PlatformLinks;
