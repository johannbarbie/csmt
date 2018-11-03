'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$DateTime$ from './Elixir.Inspect.DateTime.js';

import $DateTime$ from './Elixir.DateTime.js';

import $Inspect$Any$ from './Elixir.Inspect.Any.js';

import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [198893824353806287905279062681176035033]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $DateTime$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/datetime.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(217))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.DateTime')]]);

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

            return $Inspect$DateTime$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('calendar'), $Calendar$ISO$]])), ElixirScript.Core.Patterns.variable('_')], __function_args__, (datetime0) => {
            return true;
        })) !== null) {
            let [datetime0] = __arg_matches__;

            const [year0, month0, day0, hour0, minute0, second0, microsecond0, time_zone0, zone_abbr0, utc_offset0, std_offset0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('year'), ElixirScript.Core.Patterns.variable('year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('day')], [Symbol.for('hour'), ElixirScript.Core.Patterns.variable('hour')], [Symbol.for('minute'), ElixirScript.Core.Patterns.variable('minute')], [Symbol.for('second'), ElixirScript.Core.Patterns.variable('second')], [Symbol.for('microsecond'), ElixirScript.Core.Patterns.variable('microsecond')], [Symbol.for('time_zone'), ElixirScript.Core.Patterns.variable('time_zone')], [Symbol.for('zone_abbr'), ElixirScript.Core.Patterns.variable('zone_abbr')], [Symbol.for('utc_offset'), ElixirScript.Core.Patterns.variable('utc_offset')], [Symbol.for('std_offset'), ElixirScript.Core.Patterns.variable('std_offset')]]), datetime0);

            return '#DateTime<' + ($Calendar$ISO$.datetime_to_string(year0, month0, day0, hour0, minute0, second0, microsecond0, time_zone0, zone_abbr0, utc_offset0, std_offset0) + '>');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('datetime'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (datetime0, opts0) => {
            return true;
        })) !== null) {
            let [datetime0, opts0] = __arg_matches__;

            return $Inspect$Any$.inspect(datetime0, opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.DateTime'),
    __info__
};
