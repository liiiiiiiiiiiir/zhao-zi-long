import { defineStore } from "pinia";

type IndexStateType = {
  lang: "en" | "zhCn"
}

const IndexStore = defineStore({
  id: "index-store",
  state: (): IndexStateType => ({
    lang: "en"
  }),
  getters: {
    trans: (state) => {
      const text = {
        zhCn: "世界",
        en: "World"
      };

      return text[state.lang];
    }
  },
  actions: {
    toggleLang() {
      this.lang = this.lang === "en" ? "zhCn" : "en";

    }
  }
});

export default IndexStore;
