const spinnerFrame = [
  `\r|   `,
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];
const spinner2 = (spinnerFrame) => {
  let timer = 100;

  for (const element of spinnerFrame) {
    timer++;
    setTimeout(() => {
      process.stdout.write(element);
    }, (timer += 200));
  }
};

spinner2(spinnerFrame);
