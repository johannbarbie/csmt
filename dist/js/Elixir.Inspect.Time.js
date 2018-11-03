'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Time$ from './Elixir.Inspect.Time.js';

import $Time$ from './Elixir.Time.js';

import $Inspect$Any$ from './Elixir.Inspect.Any.js';

import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [165681234214553072982405587681014181801]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Time$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/time.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(169))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Time')]]);

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

            return $Time$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Time$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('calendar'), $Calendar$ISO$]])), ElixirScript.Core.Patterns.variable('_')], __function_args__, (time0) => {
            return true;
        })) !== null) {
            let [time0] = __arg_matches__;

            const [hour0, minute0, second0, microsecond0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('hour'), ElixirScript.Core.Patterns.variable('hour')], [Symbol.for('minute'), ElixirScript.Core.Patterns.variable('minute')], [Symbol.for('second'), ElixirScript.Core.Patterns.variable('second')], [Symbol.for('microsecond'), ElixirScript.Core.Patterns.variable('microsecond')], [Symbol.for('calendar'), $Calendar$ISO$]]), time0);

            return '~T[' + ($Calendar$ISO$.time_to_string(hour0, minute0, second0, microsecond0) + ']');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('time'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (time0, opts0) => {
            return true;
        })) !== null) {
            let [time0, opts0] = __arg_matches__;

            return $Inspect$Any$.inspect(time0, opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Time'),
    __info__
};
