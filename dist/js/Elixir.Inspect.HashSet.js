'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$HashSet$ from './Elixir.Inspect.HashSet.js';

import $HashSet$ from './Elixir.HashSet.js';

import $Inspect$List$ from './Elixir.Inspect.List.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [16226861239521191994640650301981890925]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $HashSet$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/hash_set.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(93), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(109))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.HashSet')]]);

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

            return $HashSet$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$HashSet$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('set'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (set0, opts0) => {
            return true;
        })) !== null) {
            let [set0, opts0] = __arg_matches__;

            const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), $HashSet$);

            return $Inspect$Algebra$.concat(['#HashSet<', $Inspect$List$.inspect(module0.to_list(set0), opts0), '>']);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.HashSet'),
    __info__
};
