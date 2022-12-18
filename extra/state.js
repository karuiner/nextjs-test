import { atom } from "recoil";

const rootState = atom({
  key: "rootState",
  default: { login: false, role: "" },
});

const listState = atom({
  key: "listState",
  default: { boardName: "", list: [] },
});

export { rootState };
