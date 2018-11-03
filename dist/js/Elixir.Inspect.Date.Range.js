'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Date$Range$ from './Elixir.Inspect.Date.Range.js';

import $Date$Range$ from './Elixir.Date.Range.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [282926749982628268931223917077638880177]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Date$Range$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar/date_range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(251), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(26), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(251), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(177))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Date.Range')]]);

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

            return $Date$Range$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Date$Range$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Date.Range')
        }], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]]), ElixirScript.Core.Patterns.variable('_')], __function_args__, (first0, last0) => {
            return true;
        })) !== null) {
            let [first0, last0] = __arg_matches__;

            return '#DateRange<' + ($Kernel$.inspect(first0) + (', ' + ($Kernel$.inspect(last0) + '>')));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Date.Range'),
    __info__
};
