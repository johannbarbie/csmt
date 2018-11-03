'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$HashDict$ from './Elixir.Enumerable.HashDict.js';

import $HashDict$ from './Elixir.HashDict.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [56926536885645639151371729218394298857]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $HashDict$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/hash_dict.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(233))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.HashDict')]]);

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

            return $Enumerable$HashDict$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dict')], __function_args__, (dict0) => {
            return true;
        })) !== null) {
            let [dict0] = __arg_matches__;

            const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), $HashDict$);

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), module0.size(dict0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dict'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')]
        })], __function_args__, (dict0, key0, value0) => {
            return true;
        })) !== null) {
            let [dict0, key0, value0] = __arg_matches__;

            const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), $HashDict$);

            return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('ok'), ElixirScript.Core.Patterns.bound(value0)]
            })], () => {
                return true;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return false;
            }, () => {
                return true;
            })).call(this, module0.fetch(dict0, key0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_dict'), ElixirScript.Core.Patterns.variable('_')], __function_args__, (_dict0) => {
            return true;
        })) !== null) {
            let [_dict0] = __arg_matches__;

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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dict'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (dict0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [dict0, acc0, fun0] = __arg_matches__;

            const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), $HashDict$);

            return module0.reduce(dict0, acc0, fun0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_dict')], __function_args__, (_dict0) => {
            return true;
        })) !== null) {
            let [_dict0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$HashDict$);
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
    __MODULE__: Symbol.for('Elixir.Enumerable.HashDict'),
    __info__
};
