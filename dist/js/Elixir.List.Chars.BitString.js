'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $List$Chars$ from './Elixir.List.Chars.js';

import $List$Chars$BitString$ from './Elixir.List.Chars.BitString.js';

import $Protocol$UndefinedError$ from './Elixir.Protocol.UndefinedError.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [101965343606079820281176807172384293723]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$List$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $List$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/list/chars.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(249), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(91))], [Symbol.for('module'), Symbol.for('Elixir.List.Chars.BitString')]]);

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

            return $List$Chars$BitString$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $List$Chars$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_charlist(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term')], __function_args__, (term0) => {
            return ElixirScript.Core.erlang.is_binary(term0);
        })) !== null) {
            let [term0] = __arg_matches__;

            return $String$.to_charlist(term0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term')], __function_args__, (term0) => {
            return true;
        })) !== null) {
            let [term0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($Protocol$UndefinedError$.exception([new ElixirScript.Core.Tuple(Symbol.for('protocol'), $List$Chars$), new ElixirScript.Core.Tuple(Symbol.for('value'), term0), new ElixirScript.Core.Tuple(Symbol.for('description'), 'cannot convert a bitstring to a charlist')]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_charlist,
    __MODULE__: Symbol.for('Elixir.List.Chars.BitString'),
    __info__
};
