import { atom } from "recoil";

export const apiKey = atom<string | null>({
    key: "apiKey",
    default: "",
  });