'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $TryClauseError$ from './Elixir.TryClauseError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [269978187005064628478172914233656184999]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(13), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(167))], [Symbol.for('module'), Symbol.for('Elixir.TryClauseError')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __struct__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $TryClauseError$], [Symbol.for('term'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303274558')], __function_args__, (kv5764607523032745580) => {
            return true;
        })) !== null) {
            let [kv5764607523032745580] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032745580, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $TryClauseError$], [Symbol.for('term'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303274558'), ElixirScript.Core.Patterns.variable('val576460752303274558')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303274558')], __function_args__, (key5764607523032745580, val5764607523032745580, map5764607523032745580) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032745580, val5764607523032745580, map5764607523032745580] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032745580, val5764607523032745580, map5764607523032745580);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    __MODULE__: Symbol.for('Elixir.TryClauseError'),
    __info__
};
