'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $UndefinedFunctionError$ from './Elixir.UndefinedFunctionError.js';

import $Enum$ from './Elixir.Enum.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Collectable$ from './Elixir.Collectable.js';

import $String$ from './Elixir.String.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $Exception$ from './Elixir.Exception.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('blame'), 2), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('hint_for_loaded_module'), 4), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [48230722848056857665288347203334998934]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(82), ElixirScript.Core.BitString.integer(250), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.integer(139), ElixirScript.Core.BitString.integer(150))], [Symbol.for('module'), Symbol.for('Elixir.UndefinedFunctionError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $UndefinedFunctionError$], [Symbol.for('arity'), null], [Symbol.for('function'), null], [Symbol.for('message'), null], [Symbol.for('module'), null], [Symbol.for('reason'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303273534')], __function_args__, (kv5764607523032735340) => {
            return true;
        })) !== null) {
            let [kv5764607523032735340] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032735340, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $UndefinedFunctionError$], [Symbol.for('arity'), null], [Symbol.for('function'), null], [Symbol.for('message'), null], [Symbol.for('module'), null], [Symbol.for('reason'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303273534'), ElixirScript.Core.Patterns.variable('val576460752303273534')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303273534')], __function_args__, (key5764607523032735340, val5764607523032735340, map5764607523032735340) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032735340, val5764607523032735340, map5764607523032735340] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032735340, val5764607523032735340, map5764607523032735340);
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
    __MODULE__: Symbol.for('Elixir.UndefinedFunctionError'),
    __info__
};
