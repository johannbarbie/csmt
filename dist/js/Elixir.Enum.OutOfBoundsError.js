'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$OutOfBoundsError$ from './Elixir.Enum.OutOfBoundsError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [275693628438643577902689996690398977079]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(55))], [Symbol.for('module'), Symbol.for('Elixir.Enum.OutOfBoundsError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Enum$OutOfBoundsError$], [Symbol.for('message'), 'out of bounds error']]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303249757')], __function_args__, (kv5764607523032497570) => {
            return true;
        })) !== null) {
            let [kv5764607523032497570] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032497570, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $Enum$OutOfBoundsError$], [Symbol.for('message'), 'out of bounds error']]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303249757'), ElixirScript.Core.Patterns.variable('val576460752303249757')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303249757')], __function_args__, (key5764607523032497570, val5764607523032497570, map5764607523032497570) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032497570, val5764607523032497570, map5764607523032497570] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032497570, val5764607523032497570, map5764607523032497570);
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
    __MODULE__: Symbol.for('Elixir.Enum.OutOfBoundsError'),
    __info__
};
