const BASE = "https://api.github.com"

export const getUser = username =>
  fetch(`${BASE}/users/${username}`).then(res => res.json())

export const getRepos = username =>
  fetch(`${BASE}/users/${username}/repos?sort=updated`).then(res =>
    res.json()
  )
