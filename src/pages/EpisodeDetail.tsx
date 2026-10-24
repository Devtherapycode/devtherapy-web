import { CrtImage } from '@/components/browse/CrtImage';
import { EpisodeCard } from '@/components/browse/EpisodeCard';
import { YouTubeDialog } from '@/components/browse/YouTubeDialog';
import { getDifficultyColor } from '@/components/quiz/quiz.utils';
import { QuizResults } from '@/components/quiz/QuizResults';
import { QuizRunner } from '@/components/quiz/QuizRunner';
import {
  CHAPTER_LINE,
  durationSeconds,
  episodeChannel,
  episodeChapters,
  episodeDuration,
  episodeGuests,
  episodeName,
  episodeNumber,
  episodeTopics,
  episodeViews,
  formatTimestamp,
  formatViews,
  frameUrl,
  moreLikeThis,
  seasonLabel,
  toSeconds,
  youtubeUrl,
} from '@/lib/episodes';
import { cn } from '@/lib/utils';
import { episodes } from '@/server/data/episodes/episodes.data';
import { Quiz } from '@/server/data/quizzes/quizzes.types';
import { useAnalyticsStore } from '@/stores/analyticsStore';
import { Check, ChevronDown, Clock, ExternalLink, Play, Plus, Trophy } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const HOSTS = 'Tornike Gomareli, Avtandil Ushikishvili';
const URL_OR_TIME = /(https?:\/\/[^\s]+)|\b(\d{1,2}:\d{2}(?::\d{2})?)\b/g;

// "ai" → "AI", "startups" → "Startups".
const formatTag = (tag: string) => (tag.length <= 3 ? tag.toUpperCase() : tag[0].toUpperCase() + tag.slice(1));

const formatDay = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

const EpisodeDetail = () => {
  const { episodeSlug } = useParams();
  const episode = episodes[episodeSlug as keyof typeof episodes];
  const { episodeStats, trackEpisodePlay, toggleEpisodeFavorite, markEpisodeCompleted } = useAnalyticsStore();
  const [playFrom, setPlayFrom] = useState<number | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTimeSpent, setQuizTimeSpent] = useState(0);

  if (!episode) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-[#0A0A0A] px-4 text-center">
        <span className="font-mono text-xs font-semibold tracking-[0.24em] text-crt-orange">NO SIGNAL</span>
        <h1 className="text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">Episode not found</h1>
        <Link to="/episodes" className="mt-2 rounded bg-white px-5 py-3 font-bold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97]">
          Browse episodes
        </Link>
      </main>
    );
  }

  const number = episodeNumber(episode);
  const topics = episodeTopics(episode);
  const chapters = episodeChapters(episode);
  const total = durationSeconds(episode);
  const guests = episodeGuests(episode);
  const favorite = episodeStats[episode.id]?.isFavorite ?? false;
  const watched = episodeStats[episode.id]?.isCompleted ?? false;
  const lead = episode.description.replace('🚀', '').trim().split(/\n\n+/);
  // The rest of the description: the lead is shown above and the chapters have their own list.
  const fullDescription = episode.fullDescription
    .replace(episode.description, '')
    .split('\n')
    .filter((line) => !(chapters.length && CHAPTER_LINE.test(line)))
    .join('\n')
    .trim();

  const handlePlay = (seconds: number) => {
    trackEpisodePlay(episode.id);
    setPlayFrom(seconds);
  };

  const handleQuizComplete = (score: number, timeSpent: number) => {
    setQuizScore(score);
    setQuizTimeSpent(timeSpent);
    setShowResults(true);
  };

  const handleCloseQuiz = () => {
    setCurrentQuiz(null);
    setShowResults(false);
  };

  // Links and timestamps in the description become clickable; a timestamp plays the episode from there.
  const renderLine = (line: string) => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    for (const match of line.matchAll(URL_OR_TIME)) {
      parts.push(line.slice(lastIndex, match.index));
      const [text, url, time] = match;
      parts.push(
        url ? (
          <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="break-all text-brand-mint underline underline-offset-2">
            {url}
          </a>
        ) : (
          <button key={match.index} type="button" onClick={() => handlePlay(toSeconds(time))} className="font-mono text-brand-mint underline underline-offset-2">
            {text}
          </button>
        ),
      );
      lastIndex = match.index + text.length;
    }
    parts.push(line.slice(lastIndex));
    return parts;
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-foreground">
      <section className="relative flex h-[78vh] max-h-[820px] min-h-[560px] items-end overflow-hidden">
        <CrtImage src={frameUrl(episode)} alt="" loading="eager" className="absolute inset-y-0 right-0 w-full md:w-[78%]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent md:via-[#0A0A0A]/40" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 pb-10 md:px-[60px] md:pb-14">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[13px] font-bold tracking-[0.14em] text-brand-mint [text-shadow:0_0_10px_rgba(101,229,177,0.8)]">{episodeChannel(episode)}</span>
            <span className="flex items-center gap-1.5 rounded bg-crt-orange px-2 py-1 font-mono text-[10px] font-bold leading-[13px] tracking-[0.14em] text-crt-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-crt-ink" />
              TUNED IN · COLOUR
            </span>
          </div>
          {number !== null && <span className="font-mono text-xs font-semibold tracking-[0.3em] text-white">EPISODE {number}</span>}
          <h1 className="max-w-[760px] text-5xl font-black leading-[0.95] tracking-[-0.045em] text-white md:text-[88px]">{episodeName(episode)}</h1>
          {topics.length > 0 && <p className="max-w-[640px] text-lg font-semibold leading-6 text-[#E5E5E5]">{topics.join(', ')}</p>}
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => handlePlay(0)}
              className="flex h-12 items-center gap-2.5 rounded bg-white px-6 text-lg font-bold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              <Play className="h-5 w-5 fill-[#0A0A0A]" />
              Play
            </button>
            <button
              type="button"
              onClick={() => toggleEpisodeFavorite(episode.id)}
              aria-label={favorite ? 'Remove from my list' : 'Add to my list'}
              aria-pressed={favorite}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-[#2A2A2A]/60 text-white transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              {favorite ? <Check className="h-5 w-5" strokeWidth={2.4} /> : <Plus className="h-5 w-5" strokeWidth={2.4} />}
            </button>
            <a
              href={youtubeUrl(episode)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-[#2A2A2A]/60 text-white transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              <ExternalLink className="h-5 w-5" strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-4 pb-24 md:px-[60px]">
        <section className="grid gap-10 md:grid-cols-[1fr_280px] md:gap-14">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="font-bold text-brand-mint">{seasonLabel(episode)}</span>
              <span className="text-[#BCBCBC]">{formatDay(episode.date)}</span>
              <span className="rounded-sm border border-white/40 px-[5px] py-px font-mono text-xs text-[#E5E5E5]">{episodeDuration(episode)}</span>
              <span className="font-mono text-xs text-[#BCBCBC]">{formatViews(episodeViews(episode))}</span>
              <span className="rounded-sm border border-white/40 px-[5px] py-px text-xs text-[#E5E5E5]">Georgian</span>
              {/* Watched episodes count towards Dev Wrapped. */}
              <button
                type="button"
                onClick={() => markEpisodeCompleted(episode.id)}
                disabled={watched}
                className="flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-0.5 text-xs font-semibold text-[#E5E5E5] transition-transform duration-150 ease-out active:scale-[0.97] disabled:border-brand-mint/40 disabled:text-brand-mint"
              >
                <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                {watched ? 'Watched' : 'Mark as watched'}
              </button>
            </div>
            {lead.map((paragraph, index) => (
              <p key={index} className={cn('leading-7', index === 0 ? 'text-lg text-[#F0F0F0]' : 'text-base text-[#A3A3A3]')}>
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="flex flex-col gap-5 text-sm">
            {guests.length > 0 && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-[#777]">{guests.length > 1 ? 'Guests' : 'Guest'}</dt>
                <dd className="flex flex-col gap-0.5">
                  {guests.map((guest) => (
                    <Link key={guest.id} to={`/guests/${guest.id}`} className="text-[#E5E5E5] underline-offset-2 hover:underline">
                      {guest.name}, {guest.title}
                    </Link>
                  ))}
                </dd>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <dt className="text-xs text-[#777]">Hosts</dt>
              <dd className="text-[#E5E5E5]">{HOSTS}</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-xs text-[#777]">This episode is about</dt>
              <dd className="text-[#E5E5E5]">{episode.tags.map(formatTag).join(', ')}</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-xs text-[#777]">Uploaded</dt>
              <dd className="text-[#E5E5E5]">{formatDay(episode.date)} on YouTube</dd>
            </div>
          </dl>
        </section>

        {chapters.length > 0 && (
          <section className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-white">Chapters</h2>
              <span className="font-mono text-xs text-[#8C8C8C]">
                {chapters.length} chapters · {episodeDuration(episode)}
              </span>
            </div>
            <ol className="flex flex-col">
              {chapters.map((chapter, index) => (
                <li key={chapter.start} className="border-b border-white/10 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => handlePlay(chapter.start)}
                    className="grid w-full grid-cols-[22px_56px_1fr] items-center gap-2 rounded px-2 py-4 text-left transition-colors duration-150 hover:bg-white/[0.04] md:grid-cols-[32px_76px_1fr_56px_140px] md:gap-4 md:px-3"
                  >
                    <span className="text-xl font-semibold text-[#8C8C8C]">{index + 1}</span>
                    <span className="font-mono text-xs text-brand-mint">{formatTimestamp(chapter.start)}</span>
                    <span className="text-[15px] font-medium leading-5 text-[#E5E5E5]">{chapter.title}</span>
                    <span className="hidden text-right font-mono text-xs text-[#8C8C8C] md:block">{formatTimestamp(chapter.length)}</span>
                    <span aria-hidden className="relative hidden h-[3px] rounded-full bg-white/15 md:block">
                      <span
                        className="absolute inset-y-0 rounded-full bg-[#E5E5E5]"
                        style={{ left: `${(chapter.start / total) * 100}%`, width: `${Math.max((chapter.length / total) * 100, 2)}%` }}
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </section>
        )}

        {episode.quizzes?.length > 0 && (
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-white">Test what you heard</h2>
              <p className="text-sm text-[#8C8C8C]">Quizzes written from this episode.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {episode.quizzes.map((quiz) => (
                <article key={quiz.id} className="flex flex-col gap-3 rounded bg-[#181818] p-5">
                  <div className="flex items-center justify-between">
                    <span className={cn('rounded-sm border px-2 py-0.5 text-xs font-semibold capitalize', getDifficultyColor(quiz.difficulty))}>{quiz.difficulty}</span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-[#8C8C8C]">
                      <Clock className="h-3.5 w-3.5" />~{quiz.estimatedTime} min
                      <Trophy className="ml-2 h-3.5 w-3.5" />
                      {quiz.questions.length} questions
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-6 text-white">{quiz.title}</h3>
                  <p className="text-sm leading-5 text-[#A3A3A3]">{quiz.description}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentQuiz(quiz);
                      setShowResults(false);
                    }}
                    className="mt-1 flex h-10 w-fit items-center gap-2 rounded bg-brand-mint px-4 text-sm font-bold text-[#0A0A0A] transition-transform duration-150 ease-out active:scale-[0.97]"
                  >
                    <Play className="h-4 w-4 fill-[#0A0A0A]" />
                    Take the quiz
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-white">More like this</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreLikeThis(episode).map((other) => (
              <EpisodeCard key={other.slug} episode={other} />
            ))}
          </div>
        </section>

        <details className="group rounded bg-[#121212] px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#E5E5E5] [&::-webkit-details-marker]:hidden">
            Full description and links
            <ChevronDown className="h-4 w-4 transition-transform duration-200 ease-out group-open:rotate-180" />
          </summary>
          <div className="mt-4 flex flex-col gap-4 text-sm leading-6 text-[#A3A3A3]">
            {fullDescription.split(/\n\n+/).map((paragraph, index) => (
              <p key={index}>
                {paragraph.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex} className="block">
                    {renderLine(line)}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </details>
      </div>

      <YouTubeDialog episode={episode} start={playFrom} onClose={() => setPlayFrom(null)} />
      {currentQuiz && !showResults && <QuizRunner quiz={currentQuiz} onComplete={handleQuizComplete} onClose={handleCloseQuiz} />}
      {currentQuiz && showResults && (
        <QuizResults
          quiz={currentQuiz}
          score={quizScore}
          totalQuestions={currentQuiz.questions.length}
          timeSpent={quizTimeSpent}
          onRetry={() => setShowResults(false)}
          onClose={handleCloseQuiz}
        />
      )}
    </main>
  );
};

export default EpisodeDetail;
