'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enumerable$ from './Elixir.Enumerable.js';

import $Enumerable$Range$ from './Elixir.Enumerable.Range.js';

import $Range$ from './Elixir.Range.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('count'), 1), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('reduce'), 3), new ElixirScript.Core.Tuple(Symbol.for('slice'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [205695260901568041783422713311025391291]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Enumerable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Enumerable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Range$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/range.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(191), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(155), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(251), ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.integer(187))], [Symbol.for('module'), Symbol.for('Elixir.Enumerable.Range')]]);

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

            return $Range$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Enumerable$Range$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]])], __function_args__, (first0, last0) => {
            return true;
        })) !== null) {
            let [first0, last0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), first0 - last0 + 1);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), last0 - first0 + 1);
            }, () => {
                return true;
            })).call(this, first0 <= last0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]]), ElixirScript.Core.Patterns.variable('value')], __function_args__, (first0, last0, value0) => {
            return ElixirScript.Core.erlang.is_integer(value0);
        })) !== null) {
            let [first0, last0, value0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return false;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return value0 <= first0;
                }, () => {
                    return true;
                })).call(this, last0 <= value0));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return false;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return value0 <= last0;
                }, () => {
                    return true;
                })).call(this, first0 <= value0));
            }, () => {
                return true;
            })).call(this, first0 <= last0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('_')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('_')]]), ElixirScript.Core.Patterns.variable('_value')], __function_args__, (_value0) => {
            return true;
        })) !== null) {
            let [_value0] = __arg_matches__;

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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]]), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('fun')], __function_args__, (first0, last0, acc0, fun0) => {
            return true;
        })) !== null) {
            let [first0, last0, acc0, fun0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, first0, last0, acc0, fun0, last0 >= first0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_first'), ElixirScript.Core.Patterns.variable('_last'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('halt'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('_fun'), ElixirScript.Core.Patterns.variable('_up?')], __function_args__, (_first0, _last0, acc0, _fun0, _up__qmark__0) => {
            return true;
        })) !== null) {
            let [_first0, _last0, acc0, _fun0, _up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('halted'), acc0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('last'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('suspend'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('up?')], __function_args__, (first0, last0, acc0, fun0, up__qmark__0) => {
            return true;
        })) !== null) {
            let [first0, last0, acc0, fun0, up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('suspended'), acc0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return reduce(first0, last0, x10, fun0, up__qmark__0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('last'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.capture(true)], __function_args__, (first0, last0, acc0, fun0, _up__qmark__0) => {
            return first0 <= last0;
        })) !== null) {
            let [first0, last0, acc0, fun0, _up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, first0 + 1, last0, fun0(first0, acc0), fun0, true));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('first'), ElixirScript.Core.Patterns.variable('last'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.capture(false)], __function_args__, (first0, last0, acc0, fun0, _up__qmark__0) => {
            return first0 >= last0;
        })) !== null) {
            let [first0, last0, acc0, fun0, _up__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, first0 - 1, last0, fun0(first0, acc0), fun0, false));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('acc')]
        }), ElixirScript.Core.Patterns.variable('_fun'), ElixirScript.Core.Patterns.variable('_up')], __function_args__, (acc0, _fun0, _up0) => {
            return true;
        })) !== null) {
            let [acc0, _fun0, _up0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('done'), acc0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), $Range$], [Symbol.for('first'), ElixirScript.Core.Patterns.variable('first')], [Symbol.for('last'), ElixirScript.Core.Patterns.variable('last')]])], __function_args__, (first0, last0) => {
            return true;
        })) !== null) {
            let [first0, last0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), first0 - last0 + 1, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                            return true;
                        })) !== null) {
                            let [x10, x20] = __arg_matches__;

                            return slice_desc(first0 - x10, x20);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                });
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return new ElixirScript.Core.Tuple(Symbol.for('ok'), last0 - first0 + 1, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                            return true;
                        })) !== null) {
                            let [x10, x20] = __arg_matches__;

                            return slice_asc(first0 + x10, x20);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                });
            }, () => {
                return true;
            })).call(this, first0 <= last0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice_asc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), 1], __function_args__, (current0) => {
            return true;
        })) !== null) {
            let [current0] = __arg_matches__;

            return [current0];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), ElixirScript.Core.Patterns.variable('remaining')], __function_args__, (current0, remaining0) => {
            return true;
        })) !== null) {
            let [current0, remaining0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(current0, slice_asc(current0 + 1, remaining0 - 1));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function slice_desc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), 1], __function_args__, (current0) => {
            return true;
        })) !== null) {
            let [current0] = __arg_matches__;

            return [current0];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('current'), ElixirScript.Core.Patterns.variable('remaining')], __function_args__, (current0, remaining0) => {
            return true;
        })) !== null) {
            let [current0, remaining0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(current0, slice_desc(current0 - 1, remaining0 - 1));
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
    __MODULE__: Symbol.for('Elixir.Enumerable.Range'),
    __info__
};
