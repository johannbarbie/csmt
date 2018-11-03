'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $MapSet$ from './Elixir.MapSet.js';

import $Enum$ from './Elixir.Enum.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('delete'), 2), new ElixirScript.Core.Tuple(Symbol.for('difference'), 2), new ElixirScript.Core.Tuple(Symbol.for('disjoint?'), 2), new ElixirScript.Core.Tuple(Symbol.for('equal?'), 2), new ElixirScript.Core.Tuple(Symbol.for('intersection'), 2), new ElixirScript.Core.Tuple(Symbol.for('member?'), 2), new ElixirScript.Core.Tuple(Symbol.for('new'), 0), new ElixirScript.Core.Tuple(Symbol.for('new'), 1), new ElixirScript.Core.Tuple(Symbol.for('new'), 2), new ElixirScript.Core.Tuple(Symbol.for('put'), 2), new ElixirScript.Core.Tuple(Symbol.for('size'), 1), new ElixirScript.Core.Tuple(Symbol.for('subset?'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('union'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [18984120587244983674553183160465758641])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/map_set.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(210), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(177))], [Symbol.for('module'), Symbol.for('Elixir.MapSet')]]);

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

            return new Map([[Symbol.for('__struct__'), $MapSet$], [Symbol.for('map'), new Map([])], [Symbol.for('version'), 2]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303292095')], __function_args__, (kv5764607523032920950) => {
            return true;
        })) !== null) {
            let [kv5764607523032920950] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032920950, new Map([[Symbol.for('__struct__'), $MapSet$], [Symbol.for('map'), new Map([])], [Symbol.for('version'), 2]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303292095'), ElixirScript.Core.Patterns.variable('val576460752303292095')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303292095')], __function_args__, (key5764607523032920950, val5764607523032920950, map5764607523032920950) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032920950, val5764607523032920950, map5764607523032920950] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032920950, val5764607523032920950, map5764607523032920950);
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

function member__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.MapSet')
        }], [Symbol.for('map'), ElixirScript.Core.Patterns.variable('map')]]), ElixirScript.Core.Patterns.variable('value')], __function_args__, (map0, value0) => {
            return true;
        })) !== null) {
            let [map0, value0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([new Map([[value0, ElixirScript.Core.Patterns.variable('_')]])], () => {
                return true;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return false;
            }, () => {
                return true;
            })).call(this, map0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function size(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.MapSet')
        }], [Symbol.for('map'), ElixirScript.Core.Patterns.variable('map')]])], __function_args__, (map0) => {
            return true;
        })) !== null) {
            let [map0] = __arg_matches__;

            return ElixirScript.Core.erlang.map_size(map0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_list(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.MapSet')
        }], [Symbol.for('map'), ElixirScript.Core.Patterns.variable('map')]])], __function_args__, (map0) => {
            return true;
        })) !== null) {
            let [map0] = __arg_matches__;

            return ElixirScript.Core.maps.keys(map0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    member__qmark__,
    size,
    to_list,
    __MODULE__: Symbol.for('Elixir.MapSet'),
    __info__
};
