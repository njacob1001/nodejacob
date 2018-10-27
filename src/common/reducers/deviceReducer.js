export default function deviceReducer(state = {}) {
  let isMobile = false;

  if (state.isMobile) {
    isMobile = state.isMobile === 'true';
  }

  return {
    ...state,
    isMobile
  };
}
