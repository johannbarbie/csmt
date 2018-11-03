'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$HashDict$ from './Elixir.Inspect.HashDict.js';

import $HashDict$ from './Elixir.HashDict.js';

import $Inspect$List$ from './Elixir.Inspect.List.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [57520399578299423415912294246031174770]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $HashDict$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/hash_dict.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(167), ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(114))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.HashDict')]]);

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

            return $HashDict$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$HashDict$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dict'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (dict0, opts0) => {
            return true;
        })) !== null) {
            let [dict0, opts0] = __arg_matches__;

            const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), $HashDict$);

            return $Inspect$Algebra$.concat(['#HashDict<', $Inspect$List$.inspect(module0.to_list(dict0), opts0), '>']);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.HashDict'),
    __info__
};
