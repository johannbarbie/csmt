'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $String$Chars$Date$ from './Elixir.String.Chars.Date.js';

import $Date$ from './Elixir.Date.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [257503781880604103758107847294576004575]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$String$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $String$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Date$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/date.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(167), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(223))], [Symbol.for('module'), Symbol.for('Elixir.String.Chars.Date')]]);

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

            return $String$Chars$Date$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('calendar'), ElixirScript.Core.Patterns.variable('calendar')], [Symbol.for('year'), ElixirScript.Core.Patterns.variable('year')], [Symbol.for('month'), ElixirScript.Core.Patterns.variable('month')], [Symbol.for('day'), ElixirScript.Core.Patterns.variable('day')]])], __function_args__, (calendar0, year0, month0, day0) => {
            return true;
        })) !== null) {
            let [calendar0, year0, month0, day0] = __arg_matches__;

            return calendar0.date_to_string(year0, month0, day0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_string,
    __MODULE__: Symbol.for('Elixir.String.Chars.Date'),
    __info__
};
