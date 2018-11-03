'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $UnicodeConversionError$ from './Elixir.UnicodeConversionError.js';

import $Enum$ from './Elixir.Enum.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Keyword$ from './Elixir.Keyword.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [164354877684302737699618723195083941657]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(25), ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(231), ElixirScript.Core.BitString.integer(25))], [Symbol.for('module'), Symbol.for('Elixir.UnicodeConversionError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $UnicodeConversionError$], [Symbol.for('encoded'), null], [Symbol.for('message'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303250845')], __function_args__, (kv5764607523032508450) => {
            return true;
        })) !== null) {
            let [kv5764607523032508450] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032508450, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $UnicodeConversionError$], [Symbol.for('encoded'), null], [Symbol.for('message'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303250845'), ElixirScript.Core.Patterns.variable('val576460752303250845')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303250845')], __function_args__, (key5764607523032508450, val5764607523032508450, map5764607523032508450) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032508450, val5764607523032508450, map5764607523032508450] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032508450, val5764607523032508450, map5764607523032508450);
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

function detail(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('rest')], __function_args__, (rest0) => {
            return ElixirScript.Core.erlang.is_binary(rest0);
        })) !== null) {
            let [rest0] = __arg_matches__;

            return 'encoding starting at ' + $String$Chars$.to_string($Kernel$.inspect(rest0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('h'), ElixirScript.Core.Patterns.variable('_'))], __function_args__, (h0) => {
            return ElixirScript.Core.erlang.is_integer(h0);
        })) !== null) {
            let [h0] = __arg_matches__;

            return 'code point ' + $String$Chars$.to_string(h0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('h'), ElixirScript.Core.Patterns.variable('_'))], __function_args__, (h0) => {
            return true;
        })) !== null) {
            let [h0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, h0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function exception(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('opts')], __function_args__, (opts0) => {
            return true;
        })) !== null) {
            let [opts0] = __arg_matches__;

            return $UnicodeConversionError$.__struct__(new Map([[Symbol.for('__exception__'), true], [Symbol.for('encoded'), $Keyword$.fetch__emark__(opts0, Symbol.for('encoded'))], [Symbol.for('message'), $String$Chars$.to_string($Keyword$.fetch__emark__(opts0, Symbol.for('kind'))) + (' ' + $String$Chars$.to_string(detail($Keyword$.fetch__emark__(opts0, Symbol.for('rest')))))]]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    exception,
    __MODULE__: Symbol.for('Elixir.UnicodeConversionError'),
    __info__
};
