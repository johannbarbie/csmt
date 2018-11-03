'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$Map$ from './Elixir.Enumerable.Map.js';

import $Map$ from './Elixir.Map.js';

import $Enumerable$List$ from './Elixir.Enumerable.List.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [129452904093598308575951854445253445420]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Map$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/enum.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.integer(44))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.Map')]]);

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

            return $Enumerable$Map$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function count(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map')], __function_args__, (map0) => {
            return true;
        })) !== null) {
            let [map0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.erlang.map_size(map0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')]
        })], __function_args__, (map0, key0, value0) => {
            return true;
        })) !== null) {
            let [map0, key0, value0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([new Map([[key0, ElixirScript.Core.Patterns.bound(value0)]])], () => {
                return true;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return false;
            }, () => {
                return true;
            })).call(this, map0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_map'), ElixirScript.Core.Patterns.variable('_other')], __function_args__, (_map0, _other0) => {
            return true;
        })) !== null) {
            let [_map0, _other0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), false);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (map0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [map0, acc0, fun0] = __arg_matches__;

            return reduce_list(ElixirScript.Core.maps.to_list(map0), acc0, fun0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce_list(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_list'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('halt'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('_fun')], __function_args__, (_list0, acc0, _fun0) => {
            return true;
        })) !== null) {
            let [_list0, acc0, _fun0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('halted'), acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('suspend'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (list0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [list0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return reduce_list(list0, x10, fun0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('_fun')], __function_args__, (acc0, _fun0) => {
            return true;
        })) !== null) {
            let [acc0, _fun0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('done'), acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('head'), ElixirScript.Core.Patterns.variable('tail')), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (head0, tail0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [head0, tail0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, tail0, fun0(head0, acc0), fun0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map')], __function_args__, (map0) => {
            return true;
        })) !== null) {
            let [map0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.erlang.map_size(map0), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                        return true;
                    })) !== null) {
                        let [x10, x20] = __arg_matches__;

                        return $Enumerable$List$.slice(ElixirScript.Core.maps.to_list(map0), x10, x20);
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
    __impl__,
    count,
    member__qmark__,
    reduce,
    slice,
    __MODULE__: Symbol.for('Elixir.Enumerable.Map'),
    __info__
};
