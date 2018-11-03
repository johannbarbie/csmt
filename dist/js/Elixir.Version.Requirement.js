'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Version$Requirement$ from './Elixir.Version.Requirement.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [38131721104012412214782150954790370719])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(135), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(228), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(61), ElixirScript.Core.BitString.integer(159))], [Symbol.for('module'), Symbol.for('Elixir.Version.Requirement')]]);

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

            return new Map([[Symbol.for('__struct__'), $Version$Requirement$], [Symbol.for('compiled'), null], [Symbol.for('matchspec'), null], [Symbol.for('source'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303205183')], __function_args__, (kv5764607523032051830) => {
            return true;
        })) !== null) {
            let [kv5764607523032051830] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032051830, new Map([[Symbol.for('__struct__'), $Version$Requirement$], [Symbol.for('compiled'), null], [Symbol.for('matchspec'), null], [Symbol.for('source'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303205183'), ElixirScript.Core.Patterns.variable('val576460752303205183')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303205183')], __function_args__, (key5764607523032051830, val5764607523032051830, map5764607523032051830) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032051830, val5764607523032051830, map5764607523032051830] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032051830, val5764607523032051830, map5764607523032051830);
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
    __struct__,
    __MODULE__: Symbol.for('Elixir.Version.Requirement'),
    __info__
};
