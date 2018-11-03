'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $RuntimeError$ from './Elixir.RuntimeError.js';

import $Enum$ from './Elixir.Enum.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Kernel$Utils$ from './Elixir.Kernel.Utils.js';

import $UndefinedFunctionError$ from './Elixir.UndefinedFunctionError.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('all'), 0), new ElixirScript.Core.Tuple(Symbol.for('at'), 1), new ElixirScript.Core.Tuple(Symbol.for('elem'), 1), new ElixirScript.Core.Tuple(Symbol.for('fetch'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter'), 1), new ElixirScript.Core.Tuple(Symbol.for('get'), 2), new ElixirScript.Core.Tuple(Symbol.for('get'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_and_update'), 3), new ElixirScript.Core.Tuple(Symbol.for('key'), 1), new ElixirScript.Core.Tuple(Symbol.for('key'), 2), new ElixirScript.Core.Tuple(Symbol.for('key!'), 1), new ElixirScript.Core.Tuple(Symbol.for('pop'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [68609038505059796667573095759316789431])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/access.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(183))], [Symbol.for('module'), Symbol.for('Elixir.Access')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function get(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x00, x10) => {
            return true;
        })) !== null) {
            let [x00, x10] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, x10, null));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('module')
        }]])), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('default')], __function_args__, (module0, container0, key0, __default__0) => {
            return true;
        })) !== null) {
            let [module0, container0, key0, __default__0] = __arg_matches__;

            return ElixirScript.Core.SpecialForms._try(() => {
                return module0.fetch(container0, key0);
            }, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('exception')], (exception0) => {
                const [exception5764607523034208620] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('exception576460752303420862'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.bound(module0), Symbol.for('fetch'), [ElixirScript.Core.Patterns.bound(container0), ElixirScript.Core.Patterns.bound(key0)], ElixirScript.Core.Patterns.variable('_')]
                }), ElixirScript.Core.Patterns.variable('_'))], () => {
                    const [reason5764607523034208620] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('reason576460752303420862'), $String$Chars$.to_string($Kernel$.inspect(module0)) + ' does not implement the Access behaviour');

                    return new Map([...exception0, [Symbol.for('reason'), reason5764607523034208620]]);
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    return exception0;
                }, () => {
                    return true;
                })).call(this, __STACKTRACE__576460752303420862));

                return ElixirScript.Core.erlang.raise(Symbol.for('error'), $Kernel$Utils$.raise(exception5764607523034208620), __STACKTRACE__576460752303420862);
            }, (exception0) => {
                return $Enum$.member__qmark__([ElixirScript.Core.Functions.call_property($UndefinedFunctionError$.__MODULE__)], ElixirScript.Core.Functions.call_property(ElixirScript.Core.Functions.call_property(ElixirScript.Core.Functions.call_property(exception0, '__reason'), '__struct__'), '__MODULE__'));
            })), null, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('ok'), ElixirScript.Core.Patterns.variable('value')]
                    })], __function_args__, (value0) => {
                        return true;
                    })) !== null) {
                        let [value0] = __arg_matches__;

                        return value0;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('error')], __function_args__, () => {
                        return true;
                    })) !== null) {
                        let [] = __arg_matches__;

                        return __default__0;
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }, null);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('default')], __function_args__, (map0, key0, __default__0) => {
            return ElixirScript.Core.erlang.is_map(map0);
        })) !== null) {
            let [map0, key0, __default__0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([new Map([[key0, ElixirScript.Core.Patterns.variable('value')]])], (value0) => {
                return value0;
            }, (value0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return __default__0;
            }, () => {
                return true;
            })).call(this, map0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('default')], __function_args__, (list0, key0, __default__0) => {
            return ElixirScript.Core.erlang.is_list(list0) && ElixirScript.Core.erlang.is_atom(key0);
        })) !== null) {
            let [list0, key0, __default__0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('value')]
            })], (value0) => {
                return value0;
            }, (value0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([false], () => {
                return __default__0;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.lists.keyfind(key0, 1, list0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('_default')], __function_args__, (list0, key0, _default0) => {
            return ElixirScript.Core.erlang.is_list(list0);
        })) !== null) {
            let [list0, key0, _default0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($ArgumentError$.exception('the Access calls for keywords expect the key to be an atom, got: ' + $Kernel$.inspect(key0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([null, ElixirScript.Core.Patterns.variable('_key'), ElixirScript.Core.Patterns.variable('default')], __function_args__, (_key0, __default__0) => {
            return true;
        })) !== null) {
            let [_key0, __default__0] = __arg_matches__;

            return __default__0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    get,
    __MODULE__: Symbol.for('Elixir.Access'),
    __info__
};
