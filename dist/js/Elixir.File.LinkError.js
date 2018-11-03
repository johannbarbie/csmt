'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $File$LinkError$ from './Elixir.File.LinkError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [294539091770108000877411106446077505320]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(96), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(40))], [Symbol.for('module'), Symbol.for('Elixir.File.LinkError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $File$LinkError$], [Symbol.for('action'), ''], [Symbol.for('existing'), null], [Symbol.for('new'), null], [Symbol.for('reason'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303248797')], __function_args__, (kv5764607523032487970) => {
            return true;
        })) !== null) {
            let [kv5764607523032487970] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032487970, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $File$LinkError$], [Symbol.for('action'), ''], [Symbol.for('existing'), null], [Symbol.for('new'), null], [Symbol.for('reason'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303248797'), ElixirScript.Core.Patterns.variable('val576460752303248797')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303248797')], __function_args__, (key5764607523032487970, val5764607523032487970, map5764607523032487970) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032487970, val5764607523032487970, map5764607523032487970] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032487970, val5764607523032487970, map5764607523032487970);
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
    __MODULE__: Symbol.for('Elixir.File.LinkError'),
    __info__
};
