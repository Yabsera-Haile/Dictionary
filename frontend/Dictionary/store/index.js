import { proxy } from "valtio";

export let state = proxy({
  login: true,
});
