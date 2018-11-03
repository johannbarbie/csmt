'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $IO$ from './Elixir.IO.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('blame'), 2), new ElixirScript.Core.Tuple(Symbol.for('exception'), 1), new ElixirScript.Core.Tuple(Symbol.for('message'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [62421532512439286421778443111491809178]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Exception$])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/exception.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(245), ElixirScript.Core.BitString.integer(243), ElixirScript.Core.BitString.integer(42), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(175), ElixirScript.Core.BitString.integer(154))], [Symbol.for('module'), Symbol.for('Elixir.ArgumentError')]]);

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

            return new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $ArgumentError$], [Symbol.for('message'), 'argument error']]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303280861')], __function_args__, (kv5764607523032808610) => {
            return true;
        })) !== null) {
            let [kv5764607523032808610] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032808610, new Map([[Symbol.for('__exception__'), true], [Symbol.for('__struct__'), $ArgumentError$], [Symbol.for('message'), 'argument error']]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303280861'), ElixirScript.Core.Patterns.variable('val576460752303280861')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303280861')], __function_args__, (key5764607523032808610, val5764607523032808610, map5764607523032808610) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032808610, val5764607523032808610, map5764607523032808610] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032808610, val5764607523032808610, map5764607523032808610);
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

function exception(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('msg576460752303280925')], __function_args__, (msg5764607523032809250) => {
            return ElixirScript.Core.erlang.is_binary(msg5764607523032809250);
        })) !== null) {
            let [msg5764607523032809250] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, [new ElixirScript.Core.Tuple(Symbol.for('message'), msg5764607523032809250)]));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('args576460752303280925')], __function_args__, (args5764607523032809250) => {
            return ElixirScript.Core.erlang.is_list(args5764607523032809250);
        })) !== null) {
            let [args5764607523032809250] = __arg_matches__;

            const [struct5764607523032809250] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('struct576460752303280925'), __struct__());

            const [valid5764607523032809250, invalid5764607523032809250] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('valid576460752303280925'), ElixirScript.Core.Patterns.variable('invalid576460752303280925')]
            }), $Enum$.split_with(args5764607523032809250, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('k576460752303280925'), ElixirScript.Core.Patterns.variable('_')]
                    })], __function_args__, (k5764607523032809250) => {
                        return true;
                    })) !== null) {
                        let [k5764607523032809250] = __arg_matches__;

                        return ElixirScript.Core.maps.is_key(k5764607523032809250, struct5764607523032809250);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            }));

            const _ref5090830 = new ElixirScript.Core.Tuple(valid5764607523032809250, invalid5764607523032809250);

            ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([[]], () => {
                return Symbol.for('ok');
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return $IO$.warn('the following fields are unknown when raising ' + ($String$Chars$.to_string($Kernel$.inspect($ArgumentError$)) + (': ' + ($String$Chars$.to_string($Kernel$.inspect(invalid5764607523032809250)) + ('. ' + ('Please make sure to only give known fields when raising ' + ('or redefine ' + ($String$Chars$.to_string($Kernel$.inspect($ArgumentError$)) + ('.exception/1 to ' + ('discard unknown fields. Future Elixir versions will raise on ' + 'unknown fields given to raise/2'))))))))));
            }, () => {
                return true;
            })).call(this, invalid5764607523032809250)

            return $Kernel$.struct__emark__(struct5764607523032809250, valid5764607523032809250);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    exception,
    __MODULE__: Symbol.for('Elixir.ArgumentError'),
    __info__
};
