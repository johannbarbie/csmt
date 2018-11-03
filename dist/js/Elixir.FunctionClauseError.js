'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $FunctionClauseError$ from './Elixir.FunctionClauseError.js';

import $Enum$ from './Elixir.Enum.js';

import $Exception$ from './Elixir.Exception.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Macro$ from './Elixir.Macro.js';

import $Kernel$ from './Elixir.Kernel.js';

import $IO$ from './Elixir.IO.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('blame'), 2), new ElixirScript.Core.Tuple(Symbol.for('blame'), 3), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [167289761166371958271239023816287212764]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(125), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.integer(220))], [Symbol.for('module'), Symbol.for('Elixir.FunctionClauseError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $FunctionClauseError$], [Symbol.for('args'), null], [Symbol.for('arity'), null], [Symbol.for('clauses'), null], [Symbol.for('function'), null], [Symbol.for('kind'), null], [Symbol.for('module'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303242207')], __function_args__, (kv5764607523032422070) => {
            return true;
        })) !== null) {
            let [kv5764607523032422070] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032422070, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $FunctionClauseError$], [Symbol.for('args'), null], [Symbol.for('arity'), null], [Symbol.for('clauses'), null], [Symbol.for('function'), null], [Symbol.for('kind'), null], [Symbol.for('module'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303242207'), ElixirScript.Core.Patterns.variable('val576460752303242207')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303242207')], __function_args__, (key5764607523032422070, val5764607523032422070, map5764607523032422070) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032422070, val5764607523032422070, map5764607523032422070] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032422070, val5764607523032422070, map5764607523032422070);
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
    __MODULE__: Symbol.for('Elixir.FunctionClauseError'),
    __info__
};
