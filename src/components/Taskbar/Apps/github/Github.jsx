import { useEffect, useState } from "react";
import { getUser, getRepos } from "./githubApi.js";
import "./github.scss";

const USERNAME = "anshuxthakor";

const SOCIALS = [
  { name: "LinkedIn", url: "https://linkedin.com/in/thakor-daksh-kumar" },
  { name: "X (Twitter)", url: "https://x.com/anshuxthakor" },
  { name: "Instagram", url: "https://instagram.com/anshuxthakor" },
  { name: "Chess.com", url: "https://www.chess.com/member/anshuxthakor" },
];

const Github = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getUser(USERNAME), getRepos(USERNAME)]).then(([u, r]) => {
      setUser(u);
      setRepos(r);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="github-loading">Loading GitHub…</div>;
  }

  return (
    <div className="github-app">
      {/* PROFILE CARD (CLICKABLE) */}
      {user && (
        <div
          className="card profile-card clickable"
          onClick={() =>
            window.open(`https://github.com/${user.login}`, "_blank")
          }
        >
          <img src={user.avatar_url} alt="avatar" />
          <div className="profile-info">
            <h2>{user.name || user.login}</h2>
            <span className="handle">@{user.login}</span>
            {user.bio && <p className="bio">{user.bio}</p>}
          </div>
        </div>
      )}

      {/* SCROLLABLE AREA (SOCIALS + REPOS) */}
      <div className="content-scroll">
        {/* SOCIALS CARD */}
        <div className="card socials-card">
          {SOCIALS.map((s) => (
            <div
              key={s.name}
              className="social-row"
              onClick={() => window.open(s.url, "_blank")}
            >
              {s.name}
            </div>
          ))}
        </div>

        {/* REPOS */}
        <div className="repos">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="repo-row"
              onClick={() => window.open(repo.html_url, "_blank")}
            >
              <span className="repo-name">
                repo : <strong>{repo.name}</strong>
              </span>

              <span className="repo-date">
                {new Date(repo.created_at).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Github;
