const Season2Intro = () => (
  <section className="px-4 py-20" id="season-2">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="mb-3 font-fira text-sm uppercase tracking-widest text-brand-mint">Season 2</p>
        <h2 className="text-4xl font-bold md:text-5xl">
          Every conversation led <span className="text-brand-mint">here.</span>
        </h2>
      </div>
      <video
        className="aspect-video w-full rounded-xl border border-brand-mint/20 bg-black"
        src="/videos/season-2-intro.mp4"
        poster="/videos/season-2-intro.jpg"
        controls
        playsInline
        preload="metadata"
        aria-label="DevTherapy Season 2 intro"
      />
    </div>
  </section>
);

export default Season2Intro;
