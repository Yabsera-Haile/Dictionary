import { proxy } from "valtio";
import { url } from "./../config";
export let state = proxy({
  login: true,
});

// console.log(url);
