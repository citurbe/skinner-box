export const addPellets = amount => {
  return { type: 'ADD', payload: amount };
};

export const spendPellets = amount => {
  return { type: 'SPEND', payload: amount };
};

export const buyMouse = () => {
  return { type: 'BUY_MOUSE' };
};

export const buyRat = () => {
  return { type: 'BUY_RAT' };
};

export const buyPigeon = () => {
  return { type: 'BUY_PIGEON' };
};

export const buyMonkey = () => {
  return { type: 'BUY_MONKEY' };
};

export const buyChimp = () => {
  return { type: 'BUY_CHIMP' };
};

export const buyUndergrad = () => {
  return { type: 'BUY_UNDERGRAD' };
};

export const buyGrad = () => {
  return { type: 'BUY_GRAD' };
};

export const buyVolunteer = () => {
  return { type: 'BUY_VOLUNTEER' };
};
