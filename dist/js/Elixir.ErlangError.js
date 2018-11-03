'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $ErlangError$ from './Elixir.ErlangError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $FunctionClauseError$ from './Elixir.FunctionClauseError.js';

import $UndefinedFunctionError$ from './Elixir.UndefinedFunctionError.js';

import $TryClauseError$ from './Elixir.TryClauseError.js';

import $WithClauseError$ from './Elixir.WithClauseError.js';

import $CaseClauseError$ from './Elixir.CaseClauseError.js';

import $KeyError$ from './Elixir.KeyError.js';

import $Map$ from './Elixir.Map.js';

import $BadBooleanError$ from './Elixir.BadBooleanError.js';

import $BadMapError$ from './Elixir.BadMapError.js';

import $MatchError$ from './Elixir.MatchError.js';

import $BadStructError$ from './Elixir.BadStructError.js';

import $BadFunctionError$ from './Elixir.BadFunctionError.js';

import $BadArityError$ from './Elixir.BadArityError.js';

import $CondClauseError$ from './Elixir.CondClauseError.js';

import $SystemLimitError$ from './Elixir.SystemLimitError.js';

import $ArithmeticError$ from './Elixir.ArithmeticError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1), new ElixirScript.Core.Tuple(Symbol.for('normalize'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [198222354600297683281472899724712616898]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(32), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(194))], [Symbol.for('module'), Symbol.for('Elixir.ErlangError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $ErlangError$], [Symbol.for('original'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303252574')], __function_args__, (kv5764607523032525740) => {
            return true;
        })) !== null) {
            let [kv5764607523032525740] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032525740, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $ErlangError$], [Symbol.for('original'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303252574'), ElixirScript.Core.Patterns.variable('val576460752303252574')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303252574')], __function_args__, (key5764607523032525740, val5764607523032525740, map5764607523032525740) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032525740, val5764607523032525740, map5764607523032525740] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032525740, val5764607523032525740, map5764607523032525740);
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
    __MODULE__: Symbol.for('Elixir.ErlangError'),
    __info__
};
