'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Date$ from './Elixir.Inspect.Date.js';

import $Date$ from './Elixir.Date.js';

import $Inspect$Any$ from './Elixir.Inspect.Any.js';

import $Calendar$ISO$ from './Elixir.Calendar.ISO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [324394185399459442253264658101173503294]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Date$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/date.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(225), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(62))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Date')]]);

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

            return $Date$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Date$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('calendar'), $Calendar$ISO$], [Symbol.for('year'), ElixirScript.Core.Patterns.variable('year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('day')]]), ElixirScript.Core.Patterns.variable('_')], __function_args__, (year0, month0, day0) => {
            return true;
        })) !== null) {
            let [year0, month0, day0] = __arg_matches__;

            return '~D[' + ($Calendar$ISO$.date_to_string(year0, month0, day0) + ']');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('date'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (date0, opts0) => {
            return true;
        })) !== null) {
            let [date0, opts0] = __arg_matches__;

            return $Inspect$Any$.inspect(date0, opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Date'),
    __info__
};
