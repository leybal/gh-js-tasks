'use strict';

/**
 * Слишком длинные слова
 *
 * Иногда некоторые слова вроде «localization» или «internationalization» настолько длинны,
 * что их весьма утомительно писать много раз в каком либо тексте.
 *
 * Будем считать слово слишком длинным, если его длина строго больше 10 символов.
 * Все слишком длинные слова можно заменить специальной аббревиатурой.
 *
 * Эта аббревиатура строится следующим образом: записывается первая и последняя буква слова,
 * а между ними — количество букв между первой и последней буквой (в десятичной системе счисления и без ведущих нулей).
 *
 * Таком образом, «localization» запишется как «l10n», а «internationalization» как «i18n».
 *
 * Вам предлагается автоматизировать процесс замены слов на аббревиатуры.
 * При этом все слишком длинные слова должны быть заменены аббревиатурой, а слова, не являющиеся слишком длинными,
 * должны остаться без изменений.
 */

var longWordTests = [
    {
        parameters: ["localization"],
        expectedResult: "l10n"
    },
    {
        parameters: ["internationalization"],
        expectedResult: "i18n"
    },
    {
        parameters: ["word"],
        expectedResult: "word"
    },
    //added
    {
        parameters: [""],
        expectedResult: ""
    },
    {
        parameters: ["1"],
        expectedResult: "1"
    }
];


function longWord(word) {
    if (typeof(word) == 'string') {
        if (word.length < 10) {
            return word
        } else {
            let res = word[0];
            res += word.length - 2;
            res += word[word.length-1];
            return res;
        }
    } else {
        return false;
    }
}


tasks.push({
    title: "Слишком длинные слова",
    solution: longWord,
    tests: longWordTests
});
