'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $String$Chars$DateTime$ from './Elixir.String.Chars.DateTime.js';

import $DateTime$ from './Elixir.DateTime.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [83610786347719954247060583018355103707]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$String$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $String$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $DateTime$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/datetime.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(215), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(23), ElixirScript.Core.BitString.integer(219))], [Symbol.for('module'), Symbol.for('Elixir.String.Chars.DateTime')]]);

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

            return $DateTime$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $String$Chars$DateTime$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('datetime')], __function_args__, (datetime0) => {
            return true;
        })) !== null) {
            let [datetime0] = __arg_matches__;

            const [calendar0, year0, month0, day0, hour0, minute0, second0, microsecond0, time_zone0, zone_abbr0, utc_offset0, std_offset0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('calendar'), ElixirScript.Core.Patterns.variable('calendar')], [Symbol.for('year'), ElixirScript.Core.Patterns.variable('year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('day')], [Symbol.for('hour'), ElixirScript.Core.Patterns.variable('hour')], [Symbol.for('minute'), ElixirScript.Core.Patterns.variable('minute')], [Symbol.for('second'), ElixirScript.Core.Patterns.variable('second')], [Symbol.for('microsecond'), ElixirScript.Core.Patterns.variable('microsecond')], [Symbol.for('time_zone'), ElixirScript.Core.Patterns.variable('time_zone')], [Symbol.for('zone_abbr'), ElixirScript.Core.Patterns.variable('zone_abbr')], [Symbol.for('utc_offset'), ElixirScript.Core.Patterns.variable('utc_offset')], [Symbol.for('std_offset'), ElixirScript.Core.Patterns.variable('std_offset')]]), datetime0);

            return calendar0.datetime_to_string(year0, month0, day0, hour0, minute0, second0, microsecond0, time_zone0, zone_abbr0, utc_offset0, std_offset0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_string,
    __MODULE__: Symbol.for('Elixir.String.Chars.DateTime'),
    __info__
};
