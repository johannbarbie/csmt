'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $Collectable$BitString$ from './Elixir.Collectable.BitString.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [80725910943810157003987394737343493850]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Collectable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Collectable$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/collectable.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(178), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(218))], [Symbol.for('module'), Symbol.for('Elixir.Collectable.BitString')]]);

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

            return $Collectable$BitString$;
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
            return ElixirScript.Core.erlang.is_binary(original0);
        })) !== null) {
            let [original0] = __arg_matches__;

            const [fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('x')]
                    })], __function_args__, (acc0, x0) => {
                        return ElixirScript.Core.erlang.is_binary(x0) && ElixirScript.Core.erlang.is_list(acc0);
                    })) !== null) {
                        let [acc0, x0] = __arg_matches__;

                        return ElixirScript.Core.Functions.concat(acc0, x0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('x')]
                    })], __function_args__, (acc0, x0) => {
                        return ElixirScript.Core.erlang.is_bitstring(x0) && ElixirScript.Core.erlang.is_bitstring(acc0);
                    })) !== null) {
                        let [acc0, x0] = __arg_matches__;

                        return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.bitstring(acc0), ElixirScript.Core.BitString.bitstring(x0));
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('x')]
                    })], __function_args__, (acc0, x0) => {
                        return ElixirScript.Core.erlang.is_bitstring(x0);
                    })) !== null) {
                        let [acc0, x0] = __arg_matches__;

                        return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.bitstring(ElixirScript.Core.erlang.iolist_to_binary(acc0)), ElixirScript.Core.BitString.bitstring(x0));
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('acc'), Symbol.for('done')], __function_args__, (acc0) => {
                        return ElixirScript.Core.erlang.is_bitstring(acc0);
                    })) !== null) {
                        let [acc0] = __arg_matches__;

                        return acc0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('acc'), Symbol.for('done')], __function_args__, (acc0) => {
                        return true;
                    })) !== null) {
                        let [acc0] = __arg_matches__;

                        return ElixirScript.Core.erlang.iolist_to_binary(acc0);
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

            return new ElixirScript.Core.Tuple([original0], fun0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('original')], __function_args__, (original0) => {
            return ElixirScript.Core.erlang.is_bitstring(original0);
        })) !== null) {
            let [original0] = __arg_matches__;

            const [fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('x')]
                    })], __function_args__, (acc0, x0) => {
                        return ElixirScript.Core.erlang.is_bitstring(x0);
                    })) !== null) {
                        let [acc0, x0] = __arg_matches__;

                        return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.bitstring(acc0), ElixirScript.Core.BitString.bitstring(x0));
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('acc'), Symbol.for('done')], __function_args__, (acc0) => {
                        return true;
                    })) !== null) {
                        let [acc0] = __arg_matches__;

                        return acc0;
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
    __MODULE__: Symbol.for('Elixir.Collectable.BitString'),
    __info__
};
