'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$Version$Requirement$ from './Elixir.Inspect.Version.Requirement.js';

import $Version$Requirement$ from './Elixir.Version.Requirement.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [74768218700045565974501320969970670615]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Version$Requirement$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(23))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Version.Requirement')]]);

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

            return $Version$Requirement$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$Version$Requirement$;
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
            __MODULE__: Symbol.for('Elixir.Version.Requirement')
        }], [Symbol.for('source'), ElixirScript.Core.Patterns.variable('source')]]), ElixirScript.Core.Patterns.variable('_opts')], __function_args__, (source0, _opts0) => {
            return true;
        })) !== null) {
            let [source0, _opts0] = __arg_matches__;

            return '#Version.Requirement<' + (source0 + '>');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.Version.Requirement'),
    __info__
};
