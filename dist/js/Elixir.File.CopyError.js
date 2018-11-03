'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $File$CopyError$ from './Elixir.File.CopyError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [225993085748028688552828452355803528879]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(71), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(175))], [Symbol.for('module'), Symbol.for('Elixir.File.CopyError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $File$CopyError$], [Symbol.for('action'), ''], [Symbol.for('destination'), null], [Symbol.for('on'), ''], [Symbol.for('reason'), null], [Symbol.for('source'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303253950')], __function_args__, (kv5764607523032539500) => {
            return true;
        })) !== null) {
            let [kv5764607523032539500] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032539500, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $File$CopyError$], [Symbol.for('action'), ''], [Symbol.for('destination'), null], [Symbol.for('on'), ''], [Symbol.for('reason'), null], [Symbol.for('source'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303253950'), ElixirScript.Core.Patterns.variable('val576460752303253950')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303253950')], __function_args__, (key5764607523032539500, val5764607523032539500, map5764607523032539500) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032539500, val5764607523032539500, map5764607523032539500] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032539500, val5764607523032539500, map5764607523032539500);
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
    __MODULE__: Symbol.for('Elixir.File.CopyError'),
    __info__
};
