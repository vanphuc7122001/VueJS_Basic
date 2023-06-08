import { reactive, readonly } from "vue";

const state = reactive({
  count: 0,
});

const setCount = () => {
  state.count = 10;
};

export default {
  state: readonly(state),
  setCount,
};
