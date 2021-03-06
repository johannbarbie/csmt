'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Atom$ from './Elixir.Inspect.Atom.js';

import $Atom$ from './Elixir.Atom.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [181396016039329125898002602525886031878]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Atom$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(225), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(6))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Atom')]]);

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

            return $Atom$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Atom$;
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

function color_key(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom')], __function_args__, (atom0) => {
            return ElixirScript.Core.erlang.is_boolean(atom0);
        })) !== null) {
            let [atom0] = __arg_matches__;

            return Symbol.for('boolean');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([null], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return null;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('atom');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('atom'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (atom0, opts0) => {
            return true;
        })) !== null) {
            let [atom0, opts0] = __arg_matches__;

            return $Inspect$Algebra$.color($Code$Identifier$.inspect_as_atom(atom0), color_key(atom0), opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Atom'),
    __info__
};
