export class MotusService {
  async validateWord(word: string): Promise<string> {
    const wordToFound = await this.getWord();
    const letters = wordToFound.split('');
    if (wordToFound !== word) {
      return (
        letters[0] +
        letters
          .slice(1, letters.length)
          .map((val, i) => (word[i + 1] === val ? val : '_'))
          .join('')
      );
    }
    return word;
  }

  async getWord(): Promise<string> {
    return Promise.resolve('helloworld');
  }
}
