'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $Collectable$HashDict$ from './Elixir.Collectable.HashDict.js';

import $HashDict$ from './Elixir.HashDict.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [133234435010623356917109365748185901264]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Collectable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Collectable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $HashDict$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/hash_dict.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(108), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(208))], [Symbol.for('module'), Symbol.for('Elixir.Collectable.HashDict')]]);

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

            return $HashDict$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$HashDict$;
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

            const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), $HashDict$);

            const [collector_fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('collector_fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dict'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')]
                        })]
                    })], __function_args__, (dict0, key0, value0) => {
                        return true;
                    })) !== null) {
                        let [dict0, key0, value0] = __arg_matches__;

                        return module0.put(dict0, key0, value0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dict'), Symbol.for('done')], __function_args__, (dict0) => {
                        return true;
                    })) !== null) {
                        let [dict0] = __arg_matches__;

                        return dict0;
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
    __MODULE__: Symbol.for('Elixir.Collectable.HashDict'),
    __info__
};
