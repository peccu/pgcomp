const debug = true;
// const debug = false;
const out = (() => {
  if(debug)return console.log;
  return ()=>{};
})();

const uniq = (array) => {
  return array.filter((elem, index, self) => {
    return self.indexOf(elem) === index;
  });
};
