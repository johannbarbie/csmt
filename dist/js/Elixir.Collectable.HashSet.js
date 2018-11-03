'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $Collectable$HashSet$ from './Elixir.Collectable.HashSet.js';

import $HashSet$ from './Elixir.HashSet.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [167471207376284107056407384045951267426]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Collectable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Collectable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $HashSet$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/hash_set.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(125), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(245), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(50), ElixirScript.Core.BitString.integer(98))], [Symbol.for('module'), Symbol.for('Elixir.Collectable.HashSet')]]);

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

            return $HashSet$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$HashSet$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function into(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('original')], __function_args__, (original0) => {
            return true;
        })) !== null) {
            let [original0] = __arg_matches__;

            const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), $HashSet$);

            const [collector_fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('collector_fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('set'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('term')]
                    })], __function_args__, (set0, term0) => {
                        return true;
                    })) !== null) {
                        let [set0, term0] = __arg_matches__;

                        return module0.put(set0, term0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('set'), Symbol.for('done')], __function_args__, (set0) => {
                        return true;
                    })) !== null) {
                        let [set0] = __arg_matches__;

                        return set0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), Symbol.for('halt')], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        return Symbol.for('ok');
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });

            return new ElixirScript.Core.Tuple(original0, collector_fun0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    into,
    __MODULE__: Symbol.for('Elixir.Collectable.HashSet'),
    __info__
};
