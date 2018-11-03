'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

import $Collectable$MapSet$ from './Elixir.Collectable.MapSet.js';

import $MapSet$ from './Elixir.MapSet.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('into'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [7067742822443095743778720337844093043]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Collectable$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Collectable$), new ElixirScript.Core.Tuple(Symbol.for('for'), $MapSet$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/map_set.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(81), ElixirScript.Core.BitString.integer(50), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.integer(167), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(115))], [Symbol.for('module'), Symbol.for('Elixir.Collectable.MapSet')]]);

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

            return $MapSet$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Collectable$MapSet$;
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

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map_set')], __function_args__, (map_set0) => {
            return true;
        })) !== null) {
            let [map_set0] = __arg_matches__;

            const [fun0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('fun'), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [Symbol.for('cont'), ElixirScript.Core.Patterns.variable('x')]
                    })], __function_args__, (list0, x0) => {
                        return true;
                    })) !== null) {
                        let [list0, x0] = __arg_matches__;

                        return ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(x0, []), list0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('list'), Symbol.for('done')], __function_args__, (list0) => {
                        return true;
                    })) !== null) {
                        let [list0] = __arg_matches__;

                        return new Map([...map_set0, [Symbol.for('map'), ElixirScript.Core.maps.merge(ElixirScript.Core.Functions.call_property(map_set0, 'map'), $Map$.__new__(list0))]]);
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

            return new ElixirScript.Core.Tuple([], fun0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    into,
    __MODULE__: Symbol.for('Elixir.Collectable.MapSet'),
    __info__
};
