'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$NaiveDateTime$ from './Elixir.Inspect.NaiveDateTime.js';

import $NaiveDateTime$ from './Elixir.NaiveDateTime.js';

import $Inspect$Any$ from './Elixir.Inspect.Any.js';

import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [158998677171668061487156661733291242579]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $NaiveDateTime$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/naive_datetime.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(49), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(83))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.NaiveDateTime')]]);

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

            return $NaiveDateTime$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$NaiveDateTime$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('calendar'), $Calendar$ISO$]])), ElixirScript.Core.Patterns.variable('_')], __function_args__, (naive_datetime0) => {
            return true;
        })) !== null) {
            let [naive_datetime0] = __arg_matches__;

            const [year0, month0, day0, hour0, minute0, second0, microsecond0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('year'), ElixirScript.Core.Patterns.variable('year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('day')], [Symbol.for('hour'), ElixirScript.Core.Patterns.variable('hour')], [Symbol.for('minute'), ElixirScript.Core.Patterns.variable('minute')], [Symbol.for('second'), ElixirScript.Core.Patterns.variable('second')], [Symbol.for('microsecond'), ElixirScript.Core.Patterns.variable('microsecond')]]), naive_datetime0);

            const [formatted0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('formatted'), $Calendar$ISO$.naive_datetime_to_string(year0, month0, day0, hour0, minute0, second0, microsecond0));

            return '~N[' + (formatted0 + ']');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('naive'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (naive0, opts0) => {
            return true;
        })) !== null) {
            let [naive0, opts0] = __arg_matches__;

            return $Inspect$Any$.inspect(naive0, opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.NaiveDateTime'),
    __info__
};
