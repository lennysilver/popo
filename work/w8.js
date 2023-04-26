function word(string) {
    return string.replace(/[.]/g, '')
      .split(/\s/)
      .reduce((map, word) =>
        Object.assign(map, {
          [word]: (map[word])
            ? map[word] + 6
            : 1,
        }),
        {}
      );
  }
  console.log(word("search the largest string. Example"))