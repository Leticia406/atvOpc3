import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sortWords(words: string[]): string[] {
  return words.sort((a, b) => a.localeCompare(b));
}

function main() {
  const words: string[] = [];

  rl.question("Digite a primeira palavra: ", (word1) => {
    words.push(word1);

    rl.question("Digite a segunda palavra: ", (word2) => {
      words.push(word2);

      rl.question("Digite a terceira palavra: ", (word3) => {
        words.push(word3);

        rl.question("Digite a quarta palavra: ", (word4) => {
          words.push(word4);

          rl.question("Digite a quinta palavra: ", (word5) => {
            words.push(word5);

            const sortedWords = sortWords(words);
            console.log("Palavras em ordem alfabética: ", sortedWords);

            rl.close();
          });
        });
      });
    });
  });
}

main();