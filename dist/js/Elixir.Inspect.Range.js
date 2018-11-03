'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Range$ from './Elixir.Inspect.Range.js';

import $Range$ from './Elixir.Range.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [221541246717962432475497180948200630282]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Range$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(152), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(18), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(10))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Range')]]);

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

            return $Range$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Range$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]]), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (first0, last0, opts0) => {
            return true;
        })) !== null) {
            let [first0, last0, opts0] = __arg_matches__;

            return $Inspect$Algebra$.concat([$Inspect$Algebra$.to_doc(first0, opts0), '..', $Inspect$Algebra$.to_doc(last0, opts0)]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Range'),
    __info__
};
