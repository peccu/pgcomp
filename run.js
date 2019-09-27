const assert = require('assert');
const AssertionError = require('assert').AssertionError;
const exec = require('child_process').exec;

const testOne = (testfile, cb) => {
  return (infile) => {
    const cmd = `cat ${infile} | node ${testfile}`;
    const out = require("fs").readFileSync(infile.replace(/in/, 'out'), 'utf8');
    exec(cmd, function (error, stdout, stderr) {
      // console.log('target input', infile);
      try{
        assert.equal(stdout, out, `your output '${stdout}' is not equal '${out}'`);
        process.stdout.write('.');
        return cb({test: testfile, input: infile, state: '.'});
      }catch(e){
        if (e instanceof AssertionError){
          process.stdout.write(`${testfile}, ${infile}\n`);
          console.log('AssertionError: ', e.message);
          // process.stdout.write('F');
          return cb({test: testfile, input: infile, state: 'F', error: e.message});
        }
      }
      return cb({test: testfile, input: infile, state: '-'});
    });
  };
};

var result = [];
const testAll = (cb) => {
  return (testfile) => {
    const dir = path.dirname(testfile);
    glob(`${dir}/*_in.t`, function (er, files) {
      files.map(testOne(testfile, (result) => cb(result)));
    });
  };
};
const path = require('path');
const glob = require('glob');
glob("lib/**/test.js", function (er, files) {
  files.map(testAll((result)=>{
    // console.log(result);
  }));
});
