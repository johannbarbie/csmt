'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$MapSet$ from './Elixir.Enumerable.MapSet.js';

import $MapSet$ from './Elixir.MapSet.js';

import $Enumerable$List$ from './Elixir.Enumerable.List.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [64477451383708476039374196537906887121]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $MapSet$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/map_set.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(249), ElixirScript.Core.BitString.integer(209))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.MapSet')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __impl__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('for')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $MapSet$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$MapSet$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function count(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map_set')], __function_args__, (map_set0) => {
            return true;
        })) !== null) {
            let [map_set0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), $MapSet$.size(map_set0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map_set'), ElixirScript.Core.Patterns.variable('val')], __function_args__, (map_set0, val0) => {
            return true;
        })) !== null) {
            let [map_set0, val0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), $MapSet$.member__qmark__(map_set0, val0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map_set'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (map_set0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [map_set0, acc0, fun0] = __arg_matches__;

            return $Enumerable$List$.reduce($MapSet$.to_list(map_set0), acc0, fun0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map_set')], __function_args__, (map_set0) => {
            return true;
        })) !== null) {
            let [map_set0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), $MapSet$.size(map_set0), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                        return true;
                    })) !== null) {
                        let [x10, x20] = __arg_matches__;

                        return $Enumerable$List$.slice($MapSet$.to_list(map_set0), x10, x20);
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
    __impl__,
    count,
    member__qmark__,
    reduce,
    slice,
    __MODULE__: Symbol.for('Elixir.Enumerable.MapSet'),
    __info__
};
