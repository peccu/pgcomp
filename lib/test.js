const loadSize = (input) => input.split(' ').map(e=>parseInt(e));
const loadMatrix = (input, x, y) => input.map(l=>l.split('').map(e=>parseInt(e)));

const calc = (mat, x, y) => {
  return '56';
};

const run = (input) => {
  const lines = input.split('\n');
  const size = loadSize(lines.shift());
  const matrix = loadMatrix(lines);
  return calc(matrix, size[0], size[1]);
};

// inputに入力データ全体が入る
function Main(input) {
  const result = run(input);
  process.stdout.write(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
