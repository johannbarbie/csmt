'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Macro$Env$ from './Elixir.Macro.Env.js';

import $Enum$ from './Elixir.Enum.js';

import $Path$ from './Elixir.Path.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('has_var?'), 2), new ElixirScript.Core.Tuple(Symbol.for('in_guard?'), 1), new ElixirScript.Core.Tuple(Symbol.for('in_match?'), 1), new ElixirScript.Core.Tuple(Symbol.for('location'), 1), new ElixirScript.Core.Tuple(Symbol.for('stacktrace'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_match'), 1), new ElixirScript.Core.Tuple(Symbol.for('vars'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [198950517140657522664466350536917668432])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/macro/env.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.integer(80))], [Symbol.for('module'), Symbol.for('Elixir.Macro.Env')]]);

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

            return new Map([[Symbol.for('__struct__'), $Macro$Env$], [Symbol.for('module'), null], [Symbol.for('file'), 'nofile'], [Symbol.for('line'), 0], [Symbol.for('function'), null], [Symbol.for('context'), null], [Symbol.for('requires'), []], [Symbol.for('aliases'), []], [Symbol.for('functions'), []], [Symbol.for('macros'), []], [Symbol.for('macro_aliases'), []], [Symbol.for('context_modules'), []], [Symbol.for('vars'), []], [Symbol.for('unused_vars'), new Map([])], [Symbol.for('current_vars'), new Map([])], [Symbol.for('prematch_vars'), Symbol.for('warn')], [Symbol.for('lexical_tracker'), null], [Symbol.for('contextual_vars'), []]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv')], __function_args__, (kv0) => {
            return true;
        })) !== null) {
            let [kv0] = __arg_matches__;

            return $Enum$.reduce(kv0, __struct__(), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (k0, v0, acc0) => {
                        return true;
                    })) !== null) {
                        let [k0, v0, acc0] = __arg_matches__;

                        return ElixirScript.Core.maps.update(k0, v0, acc0);
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
    __MODULE__: Symbol.for('Elixir.Macro.Env'),
    __info__
};
