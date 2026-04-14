import './Home.css';

const songs = [
  { title: 'Toto - Africa', image: '/images/toto.jpg' },
  { title: 'Synchronicity II - The Police', image: '/images/police.jpg' },
  { title: 'Dust in the Wind - Kansas', image: '/images/kansas.jpg' },
  { title: 'Into the Night - Dakota', image: '/images/dakota.jpg' },
  { title: 'The Stranger - Billy Joel', image: '/images/stranger.jpg' },
  { title: 'Suite: Clouds, Rain - David Gates', image: '/images/clouds.jpg' },
];

function Home() {
  return (
    <div className="home-page">
      <div className="home-header">Grant&apos;s Favorite Songs</div>

      <div className="song-gallery">
        {songs.map((song) => (
          <div className="song-card" key={song.title}>
            <img src={song.image} alt={song.title} className="album-cover" />
            <div className="song-title">{song.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
