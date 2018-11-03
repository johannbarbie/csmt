'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $String$Chars$ from './Elixir.String.Chars.js';

import $String$Chars$Version$ from './Elixir.String.Chars.Version.js';

import $Version$ from './Elixir.Version.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [238569132015896971415156137543065590243]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$String$Chars$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $String$Chars$), new ElixirScript.Core.Tuple(Symbol.for('for'), $Version$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(96), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(227))], [Symbol.for('module'), Symbol.for('Elixir.String.Chars.Version')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __impl__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('for')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Version$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $String$Chars$Version$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $String$Chars$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function pre(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[]], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '';
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('pre')], __function_args__, (pre0) => {
            return true;
        })) !== null) {
            let [pre0] = __arg_matches__;

            return '-' + $Enum$.map_join(pre0, '.', (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('int')], __function_args__, (int0) => {
                        return ElixirScript.Core.erlang.is_integer(int0);
                    })) !== null) {
                        let [int0] = __arg_matches__;

                        return ElixirScript.Core.erlang.integer_to_binary(int0);
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('string')], __function_args__, (string0) => {
                        return ElixirScript.Core.erlang.is_binary(string0);
                    })) !== null) {
                        let [string0] = __arg_matches__;

                        return string0;
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

function to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('version')], __function_args__, (version0) => {
            return true;
        })) !== null) {
            let [version0] = __arg_matches__;

            const [pre0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('pre'), pre(ElixirScript.Core.Functions.call_property(version0, 'pre')));

            const [build0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('build'), ElixirScript.Core.Functions.call_property(version0, 'build'));

            const [build1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('build'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303224349')], (x5764607523032243490) => {
                return null;
            }, (x5764607523032243490) => {
                return x5764607523032243490 === null || x5764607523032243490 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return '+' + $String$Chars$.to_string(build0);
            }, () => {
                return true;
            })).call(this, build0));

            return $String$Chars$.to_string(ElixirScript.Core.Functions.call_property(version0, 'major')) + ('.' + ($String$Chars$.to_string(ElixirScript.Core.Functions.call_property(version0, 'minor')) + ('.' + ($String$Chars$.to_string(ElixirScript.Core.Functions.call_property(version0, 'patch')) + ($String$Chars$.to_string(pre0) + $String$Chars$.to_string(build1))))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    to_string,
    __MODULE__: Symbol.for('Elixir.String.Chars.Version'),
    __info__
};
