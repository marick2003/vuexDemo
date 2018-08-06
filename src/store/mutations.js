export const mutationsMsg = (state, payload) => {
    state.msg = payload.msg;
  }
export const increment = state =>  state.count++;
export const decrement = state =>  state.count--;