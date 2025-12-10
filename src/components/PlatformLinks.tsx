import { Button } from '@/components/ui/button';
import { YOUTUBE_URL } from '@/utils/const';
import { Spotify, ApplePodcasts, Buzzsprout, Pocketcasts, Deezer, Youtube } from '@/assets/icons/svgs';

const PlatformLinks = () => {
  const platforms = [
    { name: 'Spotify', Icon: Spotify, url: 'https://open.spotify.com/show/6fF0duVCFxXKIOFagc1ovJ', borderClass: 'border-spotify', textClass: 'text-spotify' },
    { name: 'Apple Podcasts', Icon: ApplePodcasts, url: 'https://podcasts.apple.com/us/podcast/devtherapy/id1774788149', borderClass: 'border-apple', textClass: 'text-apple' },
    { name: 'Buzzsprout', Icon: Buzzsprout, url: 'https://www.buzzsprout.com/2415161', borderClass: 'border-buzzsprout', textClass: 'text-buzzsprout' },
    { name: 'Pocketcast', Icon: Pocketcasts, url: 'https://pocketcasts.com/podcasts/0f623c60-6fb8-013d-bd8d-02e325935ba3', borderClass: 'border-pocketcast', textClass: 'text-pocketcast' },
    { name: 'Deezer', Icon: Deezer, url: 'https://www.deezer.com/en/show/1001333811', borderClass: 'border-deezer', textClass: 'text-deezer' },
  ];

  return (
    <section className="px-4 py-20" id="listen-everywhere">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-brand-mint md:text-5xl">Listen Everywhere</h2>
        <p className="mb-12 text-xl text-muted-foreground">Choose your preferred platform and never miss an episode.</p>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* YouTube button (matches visual sample) */}
          <Button variant="ghost" size="lg" className="hover-lift h-14 w-full rounded-lg border-youtube bg-[#0b0b0b] text-white px-3" asChild>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <Youtube className="h-6 w-6 text-youtube" />
              <span className="text-sm font-medium">YouTube</span>
            </a>
          </Button>

          {platforms.map((platform) => (
            <Button
              key={platform.name}
              variant="ghost"
              size="lg"
              className={`hover-lift h-14 w-full rounded-lg bg-[#0b0b0b] text-white px-3 ${platform.borderClass ?? 'border-white/5'}`}
              asChild
            >
              <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <platform.Icon className={`h-6 w-6 ${platform.textClass ?? 'text-white'}`} />
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
