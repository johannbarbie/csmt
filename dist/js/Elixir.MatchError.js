'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $MatchError$ from './Elixir.MatchError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [49007503117016896933215785365250357188]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(196))], [Symbol.for('module'), Symbol.for('Elixir.MatchError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $MatchError$], [Symbol.for('term'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303268637')], __function_args__, (kv5764607523032686370) => {
            return true;
        })) !== null) {
            let [kv5764607523032686370] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032686370, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $MatchError$], [Symbol.for('term'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303268637'), ElixirScript.Core.Patterns.variable('val576460752303268637')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303268637')], __function_args__, (key5764607523032686370, val5764607523032686370, map5764607523032686370) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032686370, val5764607523032686370, map5764607523032686370] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032686370, val5764607523032686370, map5764607523032686370);
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
    __MODULE__: Symbol.for('Elixir.MatchError'),
    __info__
};
