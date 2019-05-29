const base_url = "https://api.github.com/";
const all_users = "search/users?q=Dnipro";

export const getUsers = (amount=10) => {
  return fetch(`${base_url}${all_users}&per_page=${amount}`)
}
