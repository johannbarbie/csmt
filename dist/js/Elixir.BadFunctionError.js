'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $BadFunctionError$ from './Elixir.BadFunctionError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [104501387053381847265995976169483325101]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(193), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(164), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(178), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(173))], [Symbol.for('module'), Symbol.for('Elixir.BadFunctionError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $BadFunctionError$], [Symbol.for('term'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303272349')], __function_args__, (kv5764607523032723490) => {
            return true;
        })) !== null) {
            let [kv5764607523032723490] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032723490, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $BadFunctionError$], [Symbol.for('term'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303272349'), ElixirScript.Core.Patterns.variable('val576460752303272349')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303272349')], __function_args__, (key5764607523032723490, val5764607523032723490, map5764607523032723490) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032723490, val5764607523032723490, map5764607523032723490] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032723490, val5764607523032723490, map5764607523032723490);
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
    __MODULE__: Symbol.for('Elixir.BadFunctionError'),
    __info__
};
