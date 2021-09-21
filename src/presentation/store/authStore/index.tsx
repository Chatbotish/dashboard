import { createStore, createHook, defaults } from "react-sweet-state";

import initialState from "./initialState";
import actions from "./actions";

defaults.devtools = true;

const ReviewFormStore = createStore({
  name: "Chatbotish-AuthStore",
  initialState,
  actions,
});

export const useReviewFormStore = createHook(ReviewFormStore, {
  selector: (state) => state,
});
