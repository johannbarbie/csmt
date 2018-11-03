'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $String$Chars$BitString$ from './Elixir.String.Chars.BitString.js';

import $Protocol$UndefinedError$ from './Elixir.Protocol.UndefinedError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [312523168598765825419239136462664328204]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$String$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $String$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/string/chars.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(197), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(12))], [Symbol.for('module'), Symbol.for('Elixir.String.Chars.BitString')]]);

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

            return $String$Chars$BitString$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term')], __function_args__, (term0) => {
            return ElixirScript.Core.erlang.is_binary(term0);
        })) !== null) {
            let [term0] = __arg_matches__;

            return term0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term')], __function_args__, (term0) => {
            return true;
        })) !== null) {
            let [term0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($Protocol$UndefinedError$.exception([new ElixirScript.Core.Tuple(Symbol.for('protocol'), $String$Chars$), new ElixirScript.Core.Tuple(Symbol.for('value'), term0), new ElixirScript.Core.Tuple(Symbol.for('description'), 'cannot convert a bitstring to a string')]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_string,
    __MODULE__: Symbol.for('Elixir.String.Chars.BitString'),
    __info__
};
