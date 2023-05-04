export const globalUtil = {
  setCssVariables,
  getUniqueStringArray,
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
