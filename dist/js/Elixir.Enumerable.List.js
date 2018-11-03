'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$List$ from './Elixir.Enumerable.List.js';

import $List$ from './Elixir.List.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1), new ElixirScript.Core.Tuple(Symbol.for('slice'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [106338476565307621517447814876101774644]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $List$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/enum.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(197), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(215), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(52))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.List')]]);

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

            return $List$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$List$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_list')], __function_args__, (_list0) => {
            return true;
        })) !== null) {
            let [_list0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$List$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_list'), ElixirScript.Core.Patterns.variable('_value')], __function_args__, (_list0, _value0) => {
            return true;
        })) !== null) {
            let [_list0, _value0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$List$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function reduce(...__function_args__) {
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

                        return reduce(list0, x10, fun0);
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_list')], __function_args__, (_list0) => {
            return true;
        })) !== null) {
            let [_list0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('error'), $Enumerable$List$);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.variable('_start'), ElixirScript.Core.Patterns.variable('_count')], __function_args__, (_start0, _count0) => {
            return true;
        })) !== null) {
            let [_start0, _count0] = __arg_matches__;

            return [];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_list'), ElixirScript.Core.Patterns.variable('_start'), 0], __function_args__, (_list0, _start0) => {
            return true;
        })) !== null) {
            let [_list0, _start0] = __arg_matches__;

            return [];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('head'), ElixirScript.Core.Patterns.variable('tail')), 0, ElixirScript.Core.Patterns.variable('count')], __function_args__, (head0, tail0, count0) => {
            return true;
        })) !== null) {
            let [head0, tail0, count0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(head0, slice(tail0, 0, count0 - 1));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('_head'), ElixirScript.Core.Patterns.variable('tail')), ElixirScript.Core.Patterns.variable('start'), ElixirScript.Core.Patterns.variable('count')], __function_args__, (_head0, tail0, start0, count0) => {
            return true;
        })) !== null) {
            let [_head0, tail0, start0, count0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, tail0, start0 - 1, count0));
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
    __MODULE__: Symbol.for('Elixir.Enumerable.List'),
    __info__
};
