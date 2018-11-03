'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Reference$ from './Elixir.Inspect.Reference.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [248575550419893280391507973707823113522]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(196), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(50))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Reference')]]);

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

            return $Inspect$Reference$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('ref'), ElixirScript.Core.Patterns.variable('_opts')], __function_args__, (ref0, _opts0) => {
            return true;
        })) !== null) {
            let [ref0, _opts0] = __arg_matches__;

            const [rest0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.headTail([35, 82, 101, 102], ElixirScript.Core.Patterns.variable('rest')), ElixirScript.Core.erlang.ref_to_list(ref0));

            return '#Reference' + ElixirScript.Core.erlang.iolist_to_binary(rest0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Reference'),
    __info__
};
