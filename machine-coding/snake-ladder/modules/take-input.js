import { createInterface } from 'readline';
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function takeInput (_question) {
  let ans;
  readline.question(_question, (answer) => {
    ans = answer;
    readline.close();
  });
  console.log(ans);
  return ans;
};
