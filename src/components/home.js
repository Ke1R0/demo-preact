import { h } from 'preact';
import { route } from 'preact-router';

function search(query) {
  route(`/profile/${encodeURIComponent(query)}`);
}

export function Home() {
  return (
    <section>
      <p>Enter a Github Username</p>
      <input type="search"
        placeholder="eg: Artem Bozhko"
        onSearch={e => search(e.target.value)}
        />
    </section>
  );
}

export default Home;