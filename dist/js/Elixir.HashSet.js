'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $HashSet$ from './Elixir.HashSet.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('delete'), 2), new ElixirScript.Core.Tuple(Symbol.for('difference'), 2), new ElixirScript.Core.Tuple(Symbol.for('disjoint?'), 2), new ElixirScript.Core.Tuple(Symbol.for('equal?'), 2), new ElixirScript.Core.Tuple(Symbol.for('intersection'), 2), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('new'), 0), new ElixirScript.Core.Tuple(Symbol.for('put'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('size'), 1), new ElixirScript.Core.Tuple(Symbol.for('subset?'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('union'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [251967661790771286828636974863863025148])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/hash_set.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(188), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(252))], [Symbol.for('module'), Symbol.for('Elixir.HashSet')]]);

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

            return new Map([[Symbol.for('__struct__'), $HashSet$], [Symbol.for('root'), new ElixirScript.Core.Tuple([], [], [], [], [], [], [], [])], [Symbol.for('size'), 0]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303352447')], __function_args__, (kv5764607523033524470) => {
            return true;
        })) !== null) {
            let [kv5764607523033524470] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033524470, new Map([[Symbol.for('__struct__'), $HashSet$], [Symbol.for('root'), new ElixirScript.Core.Tuple([], [], [], [], [], [], [], [])], [Symbol.for('size'), 0]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303352447'), ElixirScript.Core.Patterns.variable('val576460752303352447')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303352447')], __function_args__, (key5764607523033524470, val5764607523033524470, map5764607523033524470) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033524470, val5764607523033524470, map5764607523033524470] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033524470, val5764607523033524470, map5764607523033524470);
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
    __MODULE__: Symbol.for('Elixir.HashSet'),
    __info__
};
