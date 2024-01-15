/*
Exercice: Unit test (2 points)
Write unit tests in jest for the function below in typescript

import { expect, test } from '@jest/globals';

function getCapitalizeFirstWord(name: string): string {
  if (name == null) {
    throw new Error('Failed to capitalize first word with null');
  }
  if (!name) {
    return name;
  }
  return name.split(' ').map(
    n => n.length > 1 ? (n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()) : n
  ).join(' ');
}

test('1. test', async function () {
    ...
});
 */

import { expect, test } from '@jest/globals';

function getCapitalizeFirstWord(name: string): string {
    if (name == null) {
        throw new Error('Failed to capitalize first word with null');
    }
    if (!name) {
        return name;
    }
    return name.split(' ').map(
        n => n.length > 1 ? (n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()) : n
    ).join(' ');
}




test("Handling a null as parameter", () => {
    expect(() => getCapitalizeFirstWord(null)).toThrowError("Failed to capitalize first word with null");
});


test("Handling a empty string", () => {
    const test = getCapitalizeFirstWord("")
    expect(test).toBe("")
});

test("Capitalize first word of multiple words", () => {
    const test = getCapitalizeFirstWord("this is a test");
    expect(test).toBe("This Is A Test");
})


test("Capitalize first word when recives only one word", () => {
    const test = getCapitalizeFirstWord("linux");
    expect(test).toBe("Linux");
});



test("Capitalize single-letter words", () => {
    const test = getCapitalizeFirstWord('a E i O u');
    expect(test).toBe('A E I O U');
});

