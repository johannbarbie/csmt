'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Date$Range$ from './Elixir.Date.Range.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [49639271723415898326319830085616497340])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/date_range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(13), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(191), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(188))], [Symbol.for('module'), Symbol.for('Elixir.Date.Range')]]);

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

            return new Map([[Symbol.for('__struct__'), $Date$Range$], [Symbol.for('first'), null], [Symbol.for('first_in_iso_days'), null], [Symbol.for('last'), null], [Symbol.for('last_in_iso_days'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303414590')], __function_args__, (kv5764607523034145900) => {
            return true;
        })) !== null) {
            let [kv5764607523034145900] = __arg_matches__;

            return $Enum$.reduce(kv5764607523034145900, new Map([[Symbol.for('__struct__'), $Date$Range$], [Symbol.for('first'), null], [Symbol.for('first_in_iso_days'), null], [Symbol.for('last'), null], [Symbol.for('last_in_iso_days'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303414590'), ElixirScript.Core.Patterns.variable('val576460752303414590')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303414590')], __function_args__, (key5764607523034145900, val5764607523034145900, map5764607523034145900) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034145900, val5764607523034145900, map5764607523034145900] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523034145900, val5764607523034145900, map5764607523034145900);
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
    __MODULE__: Symbol.for('Elixir.Date.Range'),
    __info__
};
