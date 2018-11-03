'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $String$Chars$Time$ from './Elixir.String.Chars.Time.js';

import $Time$ from './Elixir.Time.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [35924430832635315707956815531285286453]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$String$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $String$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Time$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/time.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(39), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(53))], [Symbol.for('module'), Symbol.for('Elixir.String.Chars.Time')]]);

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

            return $String$Chars$Time$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $String$Chars$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('time')], __function_args__, (time0) => {
            return true;
        })) !== null) {
            let [time0] = __arg_matches__;

            const [hour0, minute0, second0, microsecond0, calendar0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('hour'), ElixirScript.Core.Patterns.variable('hour')], [Symbol.for('minute'), ElixirScript.Core.Patterns.variable('minute')], [Symbol.for('second'), ElixirScript.Core.Patterns.variable('second')], [Symbol.for('microsecond'), ElixirScript.Core.Patterns.variable('microsecond')], [Symbol.for('calendar'), ElixirScript.Core.Patterns.variable('calendar')]]), time0);

            return calendar0.time_to_string(hour0, minute0, second0, microsecond0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_string,
    __MODULE__: Symbol.for('Elixir.String.Chars.Time'),
    __info__
};
