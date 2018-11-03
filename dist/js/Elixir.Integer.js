'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('digits'), 1), new ElixirScript.Core.Tuple(Symbol.for('digits'), 2), new ElixirScript.Core.Tuple(Symbol.for('floor_div'), 2), new ElixirScript.Core.Tuple(Symbol.for('gcd'), 2), new ElixirScript.Core.Tuple(Symbol.for('mod'), 2), new ElixirScript.Core.Tuple(Symbol.for('parse'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 2), new ElixirScript.Core.Tuple(Symbol.for('undigits'), 1), new ElixirScript.Core.Tuple(Symbol.for('undigits'), 2)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('is_even'), 1), new ElixirScript.Core.Tuple(Symbol.for('is_odd'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [78421195612536762866452109989173737290])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/integer.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(95), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(61), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(74))], [Symbol.for('module'), Symbol.for('Elixir.Integer')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function count_digits(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base')], __function_args__, (sign0, rest0, base0) => {
            return sign0 === 45 || sign0 === 43;
        })) !== null) {
            let [sign0, rest0, base0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([1], () => {
                return 0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('count')], (count0) => {
                return count0;
            }, (count0) => {
                return true;
            })).call(this, count_digits_nosign(rest0, base0, 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base')], __function_args__, (rest0, base0) => {
            return true;
        })) !== null) {
            let [rest0, base0] = __arg_matches__;

            return count_digits_nosign(rest0, base0, 0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function count_digits_nosign(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 0;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(49), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 1;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(50), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 2;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 3;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 4;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 5;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 6;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 7;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 8;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 9;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 10;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 11;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 12;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 13;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 14;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 15;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 16;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 17;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 18;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 19;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(75), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 20;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 21;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 22;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 23;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 24;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 25;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 26;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 27;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 28;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 29;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(85), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 30;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 31;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 32;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 33;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 34;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 35;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 10;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 11;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 12;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 13;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 14;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 15;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 16;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 17;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 18;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 19;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 20;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 21;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 22;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 23;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 24;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 25;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 26;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 27;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 28;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 29;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 30;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 31;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 32;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 33;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 34;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('base'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (rest0, base0, count0) => {
            return base0 > 35;
        })) !== null) {
            let [rest0, base0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0, base0, count0 + 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (_0, count0) => {
            return true;
        })) !== null) {
            let [_0, count0] = __arg_matches__;

            return count0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function floor_div(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dividend'), ElixirScript.Core.Patterns.variable('divisor')], __function_args__, (dividend0, divisor0) => {
            return true;
        })) !== null) {
            let [dividend0, divisor0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.erlang.div(dividend0, divisor0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.erlang.div(dividend0, divisor0) - 1;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.erlang.rem(dividend0, divisor0) != 0;
            }, () => {
                return true;
            })).call(this, dividend0 * divisor0 < 0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function parse(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_binary'), ElixirScript.Core.Patterns.variable('base')], __function_args__, (_binary0, base0) => {
            return ElixirScript.Core.erlang.not(ElixirScript.Core.erlang.is_integer(base0) && (base0 >= 2 && base0 <= 36));
        })) !== null) {
            let [_binary0, base0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($ArgumentError$.exception('invalid base ' + $String$Chars$.to_string($Kernel$.inspect(base0))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('binary'), ElixirScript.Core.Patterns.variable('base')], __function_args__, (binary0, base0) => {
            return true;
        })) !== null) {
            let [binary0, base0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([0], () => {
                return Symbol.for('error');
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('count')], (count0) => {
                const [digits0, rem0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('digits'), ElixirScript.Core.Patterns.variable('rem')]
                }), ElixirScript.Core.erlang.split_binary(binary0, count0));

                const _ref2525957 = new ElixirScript.Core.Tuple(digits0, rem0);

                return new ElixirScript.Core.Tuple(ElixirScript.Core.erlang.binary_to_integer(digits0, base0), rem0);
            }, (count0) => {
                return true;
            })).call(this, count_digits(binary0, base0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    floor_div,
    parse,
    __MODULE__: Symbol.for('Elixir.Integer'),
    __info__
};
