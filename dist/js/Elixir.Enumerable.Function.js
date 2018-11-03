'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$Function$ from './Elixir.Enumerable.Function.js';

import $Protocol$UndefinedError$ from './Elixir.Protocol.UndefinedError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [243238935488355125962231737886448680868]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/enum.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(182), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(249), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(245), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(164))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.Function')]]);

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

            return {};
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$Function$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_function')], __function_args__, (_function0) => {
            return true;
        })) !== null) {
            let [_function0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$Function$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_function'), ElixirScript.Core.Patterns.variable('_value')], __function_args__, (_function0, _value0) => {
            return true;
        })) !== null) {
            let [_function0, _value0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$Function$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('function'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (__function__0, acc0, fun0) => {
            return ElixirScript.Core.erlang.is_function(__function__0, 2);
        })) !== null) {
            let [__function__0, acc0, fun0] = __arg_matches__;

            return __function__0(acc0, fun0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('function'), ElixirScript.Core.Patterns.variable('_acc'), ElixirScript.Core.Patterns.variable('_fun')], __function_args__, (__function__0, _acc0, _fun0) => {
            return true;
        })) !== null) {
            let [__function__0, _acc0, _fun0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($Protocol$UndefinedError$.exception([new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('value'), __function__0), new ElixirScript.Core.Tuple(Symbol.for('description'), 'only anonymous functions of arity 2 are enumerable')]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_function')], __function_args__, (_function0) => {
            return true;
        })) !== null) {
            let [_function0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$Function$);
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
    __MODULE__: Symbol.for('Elixir.Enumerable.Function'),
    __info__
};
