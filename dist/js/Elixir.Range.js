'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Range$ from './Elixir.Range.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('new'), 2), new ElixirScript.Core.Tuple(Symbol.for('range?'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [77062288716282115923520991651574564836])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(249), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(228))], [Symbol.for('module'), Symbol.for('Elixir.Range')]]);

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

            return new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), null], [Symbol.for('last'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303298045')], __function_args__, (kv5764607523032980450) => {
            return true;
        })) !== null) {
            let [kv5764607523032980450] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032980450, new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), null], [Symbol.for('last'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303298045'), ElixirScript.Core.Patterns.variable('val576460752303298045')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303298045')], __function_args__, (key5764607523032980450, val5764607523032980450, map5764607523032980450) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032980450, val5764607523032980450, map5764607523032980450] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032980450, val5764607523032980450, map5764607523032980450);
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
    __MODULE__: Symbol.for('Elixir.Range'),
    __info__
};
