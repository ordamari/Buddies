export const globalUtil = {
  setCssVariables,
  getUniqueStringArray,
  findSpaceIndexesBetweenPoints,
  callFnsInSequence,
};

function setCssVariables(data: Record<string, string>) {
  for (const [key, value] of Object.entries(data)) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}

function getUniqueStringArray(stringArray: string[]) {
  return stringArray.filter(function (string, idx) {
    return stringArray.indexOf(string) == idx;
  });
}

// eslint-disable-next-line @typescript-eslint/ban-types
function callFnsInSequence(...fns: Function[]) {
  return (...args: any[]) => {
    fns.forEach((fn) => fn && fn(...args));
  };
}

function findSpaceIndexesBetweenPoints(
  input: string,
  startIndex?: number,
  endIndex?: number,
) {
  startIndex = startIndex || 0;
  endIndex = endIndex || input.length;
  const spaceIndexes: number[] = [];
  let currentIndex = input.indexOf(' ', startIndex);

  while (currentIndex !== -1 && currentIndex < endIndex) {
    spaceIndexes.push(currentIndex);
    currentIndex = input.indexOf(' ', currentIndex + 1);
  }

  return spaceIndexes;
}
