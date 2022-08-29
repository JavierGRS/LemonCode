import { reactive } from "vue";

const state = reactive({
  keyword: "Lemoncode" as String,
});

const methods = {
  setKeyword(s: String) {
    state.keyword = s;
  },
};

export default {
  state,
  methods,
};
