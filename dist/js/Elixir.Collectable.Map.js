'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $Collectable$Map$ from './Elixir.Collectable.Map.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [26352331825296507701623673240006842991]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Collectable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Collectable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Map$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/collectable.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(19), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(111))], [Symbol.for('module'), Symbol.for('Elixir.Collectable.Map')]]);

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

            return $Map$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$Map$;
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

            const [fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')]
                        })]
                    })], __function_args__, (map0, k0, v0) => {
                        return true;
                    })) !== null) {
                        let [map0, k0, v0] = __arg_matches__;

                        return ElixirScript.Core.maps.put(k0, v0, map0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), Symbol.for('done')], __function_args__, (map0) => {
                        return true;
                    })) !== null) {
                        let [map0] = __arg_matches__;

                        return map0;
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

            return new ElixirScript.Core.Tuple(original0, fun0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    into,
    __MODULE__: Symbol.for('Elixir.Collectable.Map'),
    __info__
};
