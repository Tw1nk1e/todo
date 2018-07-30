export const loadState = () => {
  try {
    const serializedState = localStorage.getItem ('state');
    if (serializedState ===null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);
    state.forEach(item => {
        item.time = new Date(item.time);
    })
    return state;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState= JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (err) {
    //ignore
  }
}