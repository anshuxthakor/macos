import "./spotify.scss";

const SpotifyApp = () => {
  return (
    <div className="spotify">
      <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evNZVVBPG?utm_source=generator&theme=0"  height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
    </div>
  );
};

export default SpotifyApp;
