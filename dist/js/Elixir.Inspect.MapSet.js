'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$MapSet$ from './Elixir.Inspect.MapSet.js';

import $MapSet$ from './Elixir.MapSet.js';

import $Inspect$List$ from './Elixir.Inspect.List.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [308459877341038513107653678671998407033]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $MapSet$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/map_set.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(205), ElixirScript.Core.BitString.integer(205), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(121))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.MapSet')]]);

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

            return $Inspect$MapSet$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map_set'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (map_set0, opts0) => {
            return true;
        })) !== null) {
            let [map_set0, opts0] = __arg_matches__;

            return $Inspect$Algebra$.concat(['#MapSet<', $Inspect$List$.inspect($MapSet$.to_list(map_set0), opts0), '>']);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.MapSet'),
    __info__
};
