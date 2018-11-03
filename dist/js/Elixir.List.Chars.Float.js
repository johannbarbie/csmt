'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $List$Chars$ from './Elixir.List.Chars.js';

import $List$Chars$Float$ from './Elixir.List.Chars.Float.js';

import $Float$ from './Elixir.Float.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [301371286600829283070186693839169801775]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$List$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $List$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Float$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/list/chars.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(47))], [Symbol.for('module'), Symbol.for('Elixir.List.Chars.Float')]]);

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

            return $Float$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $List$Chars$Float$;
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
            return true;
        })) !== null) {
            let [term0] = __arg_matches__;

            return io_lib_format.fwrite_g(term0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_charlist,
    __MODULE__: Symbol.for('Elixir.List.Chars.Float'),
    __info__
};
