import avtandil from '@/assets/hosts/avtandil.jpeg';
import tornike from '@/assets/hosts/tornike.jpeg';
import { guests } from '@/server/data/guests/guests.data';
import { Link } from 'react-router-dom';
import { CrtImage } from './CrtImage';
import { Rail } from './Rail';

const HOSTS = [
  { name: 'Tornike Gomareli', role: 'Host', image: tornike },
  { name: 'Avtandil Ushikishvili', role: 'Host', image: avtandil },
];

const cardSize = 'h-[240px] w-[180px] rounded sm:h-[272px] sm:w-[204px]';

const PersonCard = ({ name, role, image, badge }: { name: string; role: string; image: string; badge: string }) => (
  <CrtImage src={image} alt={name} mono className={cardSize}>
    <span className="absolute left-2 top-2 rounded-[3px] bg-crt-ink/75 px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.14em] text-crt-cream">{badge}</span>
    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-b from-transparent to-black/90 px-3 pb-3 pt-10">
      <span className="text-[15px] font-bold leading-5 text-white">{name}</span>
      <span className="line-clamp-2 text-xs leading-4 text-[#BDBDBD]">{role}</span>
    </div>
  </CrtImage>
);

/** The hosts, then every guest with a profile, in black and white. */
export const PeopleRail = () => (
  <Rail title="Hosts and guests">
    {HOSTS.map((host) => (
      <div key={host.name} className="shrink-0 snap-start">
        <PersonCard name={host.name} role={host.role} image={host.image} badge="HOST" />
      </div>
    ))}
    {guests.map((guest) => (
      <Link key={guest.id} to={`/guests/${guest.id}`} className="block shrink-0 snap-start transition-transform duration-150 ease-out active:scale-[0.97]">
        <PersonCard name={guest.name} role={guest.title} image={guest.image} badge={typeof guest.episode === 'string' ? guest.episode.replace('Episode #', 'EP ').toUpperCase() : 'GUEST'} />
      </Link>
    ))}
  </Rail>
);
