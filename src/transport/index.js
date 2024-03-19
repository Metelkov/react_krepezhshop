import axios from "axios";

const baseTransport = axios.create({
  baseURL: "https://6e4058f6f7746d76.mokky.dev/",
  timeout: 8000,
});

export const get = baseTransport.get;
// .then(({ data }) => data);
export const post = baseTransport.post;
