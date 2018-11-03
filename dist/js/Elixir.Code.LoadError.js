'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Code$LoadError$ from './Elixir.Code.LoadError.js';

import $Enum$ from './Elixir.Enum.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Keyword$ from './Elixir.Keyword.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [50470227279517086793745937661986567283]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(115))], [Symbol.for('module'), Symbol.for('Elixir.Code.LoadError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Code$LoadError$], [Symbol.for('file'), null], [Symbol.for('message'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303240543')], __function_args__, (kv5764607523032405430) => {
            return true;
        })) !== null) {
            let [kv5764607523032405430] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032405430, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Code$LoadError$], [Symbol.for('file'), null], [Symbol.for('message'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303240543'), ElixirScript.Core.Patterns.variable('val576460752303240543')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303240543')], __function_args__, (key5764607523032405430, val5764607523032405430, map5764607523032405430) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032405430, val5764607523032405430, map5764607523032405430] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032405430, val5764607523032405430, map5764607523032405430);
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
    __MODULE__: Symbol.for('Elixir.Code.LoadError'),
    __info__
};
