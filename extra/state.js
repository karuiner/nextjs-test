import { atom } from "recoil";

const rootState = atom({
  key: "rootState",
  default: { login: false, role: "" },
});

export { rootState };
