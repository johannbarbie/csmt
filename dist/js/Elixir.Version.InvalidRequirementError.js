'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Version$InvalidRequirementError$ from './Elixir.Version.InvalidRequirementError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [146423903590229201908345789260290722880]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(210), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(196), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(64))], [Symbol.for('module'), Symbol.for('Elixir.Version.InvalidRequirementError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Version$InvalidRequirementError$], [Symbol.for('requirement'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303204671')], __function_args__, (kv5764607523032046710) => {
            return true;
        })) !== null) {
            let [kv5764607523032046710] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032046710, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Version$InvalidRequirementError$], [Symbol.for('requirement'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303204671'), ElixirScript.Core.Patterns.variable('val576460752303204671')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303204671')], __function_args__, (key5764607523032046710, val5764607523032046710, map5764607523032046710) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032046710, val5764607523032046710, map5764607523032046710] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032046710, val5764607523032046710, map5764607523032046710);
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
    __MODULE__: Symbol.for('Elixir.Version.InvalidRequirementError'),
    __info__
};
