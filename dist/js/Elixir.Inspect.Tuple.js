'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Tuple$ from './Elixir.Inspect.Tuple.js';

import $Tuple$ from './Elixir.Tuple.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [152877502921434135919965649666119570816]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Tuple$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(182), ElixirScript.Core.BitString.integer(228), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(128))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Tuple')]]);

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

            return $Tuple$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Tuple$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tuple'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (tuple0, opts0) => {
            return true;
        })) !== null) {
            let [tuple0, opts0] = __arg_matches__;

            const [open0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('open'), $Inspect$Algebra$.color('{', Symbol.for('tuple'), opts0));

            const [sep0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('sep'), $Inspect$Algebra$.color(',', Symbol.for('tuple'), opts0));

            const [close0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('close'), $Inspect$Algebra$.color('}', Symbol.for('tuple'), opts0));

            const [container_opts0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('container_opts'), [new ElixirScript.Core.Tuple(Symbol.for('separator'), sep0), new ElixirScript.Core.Tuple(Symbol.for('break'), Symbol.for('flex'))]);

            return $Inspect$Algebra$.container_doc(open0, ElixirScript.Core.erlang.tuple_to_list(tuple0), close0, opts0, $Inspect$Algebra$.to_doc, container_opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Tuple'),
    __info__
};
