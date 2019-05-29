const base_url = "https://api.github.com/";
const city = "Dnipro";

export const getUsers = (amount=50) => {
  return fetch(`${base_url}search/users?q=${city}&per_page=10`).then(result=>result.json());
}
