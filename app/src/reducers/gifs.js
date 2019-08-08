const loadGifs = (state = {data: '', type: ''}, action) => {
  switch (action.type) {
    case 'initial_load':
      return { data: action.payload };
    default:
      return state;
  }
}

export default loadGifs;
