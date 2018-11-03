'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Base$ from './Elixir.Base.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Enum$ from './Elixir.Enum.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Access$ from './Elixir.Access.js';

import $Stream$ from './Elixir.Stream.js';

import $Collectable$ from './Elixir.Collectable.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('decode16'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode16'), 2), new ElixirScript.Core.Tuple(Symbol.for('decode16!'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode16!'), 2), new ElixirScript.Core.Tuple(Symbol.for('decode32'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode32'), 2), new ElixirScript.Core.Tuple(Symbol.for('decode32!'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode32!'), 2), new ElixirScript.Core.Tuple(Symbol.for('decode64'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode64'), 2), new ElixirScript.Core.Tuple(Symbol.for('decode64!'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode64!'), 2), new ElixirScript.Core.Tuple(Symbol.for('encode16'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode16'), 2), new ElixirScript.Core.Tuple(Symbol.for('encode32'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode32'), 2), new ElixirScript.Core.Tuple(Symbol.for('encode64'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode64'), 2), new ElixirScript.Core.Tuple(Symbol.for('hex_decode32'), 1), new ElixirScript.Core.Tuple(Symbol.for('hex_decode32'), 2), new ElixirScript.Core.Tuple(Symbol.for('hex_decode32!'), 1), new ElixirScript.Core.Tuple(Symbol.for('hex_decode32!'), 2), new ElixirScript.Core.Tuple(Symbol.for('hex_encode32'), 1), new ElixirScript.Core.Tuple(Symbol.for('hex_encode32'), 2), new ElixirScript.Core.Tuple(Symbol.for('url_decode64'), 1), new ElixirScript.Core.Tuple(Symbol.for('url_decode64'), 2), new ElixirScript.Core.Tuple(Symbol.for('url_decode64!'), 1), new ElixirScript.Core.Tuple(Symbol.for('url_decode64!'), 2), new ElixirScript.Core.Tuple(Symbol.for('url_encode64'), 1), new ElixirScript.Core.Tuple(Symbol.for('url_encode64'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [249684645661169306870446463089276845078])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/base.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(215), ElixirScript.Core.BitString.integer(131), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(137), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(225), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(251), ElixirScript.Core.BitString.integer(195), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(22))], [Symbol.for('module'), Symbol.for('Elixir.Base')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function do_encode16(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.bitStringMatch()], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return new ElixirScript.Core.BitString();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('upper'), ElixirScript.Core.Patterns.variable('data')], __function_args__, (data0) => {
            return true;
        })) !== null) {
            let [data0] = __arg_matches__;

            const [split0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('split'), 8 * ElixirScript.Core.erlang.div(ElixirScript.Core.erlang.byte_size(data0), 8));

            const [main0, rest0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.binary({
                'value': ElixirScript.Core.Patterns.variable()
            }), split0), ElixirScript.Core.BitString.binary({
                'value': ElixirScript.Core.Patterns.variable()
            })), data0);

            const [main1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('main'), ElixirScript.Core.SpecialForms._for(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c1), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c2), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c3), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c4), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c5), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c6), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c7), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c8), 8)))], () => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c1)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c2)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c3)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c4)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c5)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c6)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c7)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c8)), 16));
            }, () => {
                return true;
            }), [ElixirScript.Core.Patterns.bitstring_generator(ElixirScript.Core.Patterns.bitStringMatch(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c1), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c2), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c3), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c4), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c5), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c6), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c7), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c8), 8))), main0)], Collectable, new ElixirScript.Core.BitString()));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40, c50, c60, c70) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c40)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c50)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c60)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c70)), 16));
            }, (c10, c20, c30, c40, c50, c60, c70) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40, c50, c60) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c40)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c50)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c60)), 16));
            }, (c10, c20, c30, c40, c50, c60) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40, c50) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c40)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c50)), 16));
            }, (c10, c20, c30, c40, c50) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c40)), 16));
            }, (c10, c20, c30, c40) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c30)), 16));
            }, (c10, c20, c30) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c20)), 16));
            }, (c10, c20) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_upper(c10)), 16));
            }, (c10) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch()], () => {
                return main1;
            }, () => {
                return true;
            })).call(this, rest0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('lower'), ElixirScript.Core.Patterns.variable('data')], __function_args__, (data0) => {
            return true;
        })) !== null) {
            let [data0] = __arg_matches__;

            const [split0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('split'), 8 * ElixirScript.Core.erlang.div(ElixirScript.Core.erlang.byte_size(data0), 8));

            const [main0, rest0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.binary({
                'value': ElixirScript.Core.Patterns.variable()
            }), split0), ElixirScript.Core.BitString.binary({
                'value': ElixirScript.Core.Patterns.variable()
            })), data0);

            const [main1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('main'), ElixirScript.Core.SpecialForms._for(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c1), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c2), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c3), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c4), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c5), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c6), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c7), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c8), 8)))], () => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c1)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c2)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c3)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c4)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c5)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c6)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c7)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c8)), 16));
            }, () => {
                return true;
            }), [ElixirScript.Core.Patterns.bitstring_generator(ElixirScript.Core.Patterns.bitStringMatch(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c1), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c2), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c3), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c4), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c5), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c6), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c7), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(c8), 8))), main0)], Collectable, new ElixirScript.Core.BitString()));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40, c50, c60, c70) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c40)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c50)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c60)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c70)), 16));
            }, (c10, c20, c30, c40, c50, c60, c70) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40, c50, c60) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c40)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c50)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c60)), 16));
            }, (c10, c20, c30, c40, c50, c60) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40, c50) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c40)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c50)), 16));
            }, (c10, c20, c30, c40, c50) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30, c40) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c30)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c40)), 16));
            }, (c10, c20, c30, c40) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20, c30) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c20)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c30)), 16));
            }, (c10, c20, c30) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10, c20) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c10)), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c20)), 16));
            }, (c10, c20) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 8))], (c10) => {
                return new ElixirScript.Core.BitString(ElixirScript.Core.BitString.binary(main1), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(enc16_lower(c10)), 16));
            }, (c10) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.bitStringMatch()], () => {
                return main1;
            }, () => {
                return true;
            })).call(this, rest0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function enc16_lower(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('char')], __function_args__, (char0) => {
            return true;
        })) !== null) {
            let [char0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([0], () => {
                return 12336;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([1], () => {
                return 12337;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([2], () => {
                return 12338;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([3], () => {
                return 12339;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([4], () => {
                return 12340;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([5], () => {
                return 12341;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([6], () => {
                return 12342;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([7], () => {
                return 12343;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([8], () => {
                return 12344;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([9], () => {
                return 12345;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([10], () => {
                return 12385;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([11], () => {
                return 12386;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([12], () => {
                return 12387;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([13], () => {
                return 12388;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([14], () => {
                return 12389;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([15], () => {
                return 12390;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([16], () => {
                return 12592;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([17], () => {
                return 12593;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([18], () => {
                return 12594;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([19], () => {
                return 12595;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([20], () => {
                return 12596;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([21], () => {
                return 12597;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([22], () => {
                return 12598;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([23], () => {
                return 12599;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([24], () => {
                return 12600;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([25], () => {
                return 12601;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([26], () => {
                return 12641;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([27], () => {
                return 12642;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([28], () => {
                return 12643;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([29], () => {
                return 12644;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([30], () => {
                return 12645;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([31], () => {
                return 12646;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([32], () => {
                return 12848;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([33], () => {
                return 12849;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([34], () => {
                return 12850;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([35], () => {
                return 12851;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([36], () => {
                return 12852;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([37], () => {
                return 12853;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([38], () => {
                return 12854;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([39], () => {
                return 12855;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([40], () => {
                return 12856;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([41], () => {
                return 12857;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([42], () => {
                return 12897;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([43], () => {
                return 12898;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([44], () => {
                return 12899;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([45], () => {
                return 12900;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([46], () => {
                return 12901;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([47], () => {
                return 12902;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([48], () => {
                return 13104;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([49], () => {
                return 13105;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([50], () => {
                return 13106;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([51], () => {
                return 13107;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([52], () => {
                return 13108;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([53], () => {
                return 13109;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([54], () => {
                return 13110;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([55], () => {
                return 13111;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([56], () => {
                return 13112;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([57], () => {
                return 13113;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([58], () => {
                return 13153;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([59], () => {
                return 13154;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([60], () => {
                return 13155;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([61], () => {
                return 13156;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([62], () => {
                return 13157;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([63], () => {
                return 13158;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([64], () => {
                return 13360;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([65], () => {
                return 13361;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([66], () => {
                return 13362;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([67], () => {
                return 13363;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([68], () => {
                return 13364;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([69], () => {
                return 13365;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([70], () => {
                return 13366;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([71], () => {
                return 13367;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([72], () => {
                return 13368;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([73], () => {
                return 13369;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([74], () => {
                return 13409;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([75], () => {
                return 13410;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([76], () => {
                return 13411;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([77], () => {
                return 13412;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([78], () => {
                return 13413;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([79], () => {
                return 13414;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([80], () => {
                return 13616;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([81], () => {
                return 13617;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([82], () => {
                return 13618;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([83], () => {
                return 13619;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([84], () => {
                return 13620;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([85], () => {
                return 13621;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([86], () => {
                return 13622;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([87], () => {
                return 13623;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([88], () => {
                return 13624;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([89], () => {
                return 13625;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([90], () => {
                return 13665;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([91], () => {
                return 13666;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([92], () => {
                return 13667;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([93], () => {
                return 13668;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([94], () => {
                return 13669;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([95], () => {
                return 13670;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([96], () => {
                return 13872;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([97], () => {
                return 13873;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([98], () => {
                return 13874;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([99], () => {
                return 13875;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([100], () => {
                return 13876;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([101], () => {
                return 13877;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([102], () => {
                return 13878;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([103], () => {
                return 13879;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([104], () => {
                return 13880;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([105], () => {
                return 13881;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([106], () => {
                return 13921;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([107], () => {
                return 13922;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([108], () => {
                return 13923;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([109], () => {
                return 13924;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([110], () => {
                return 13925;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([111], () => {
                return 13926;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([112], () => {
                return 14128;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([113], () => {
                return 14129;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([114], () => {
                return 14130;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([115], () => {
                return 14131;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([116], () => {
                return 14132;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([117], () => {
                return 14133;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([118], () => {
                return 14134;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([119], () => {
                return 14135;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([120], () => {
                return 14136;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([121], () => {
                return 14137;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([122], () => {
                return 14177;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([123], () => {
                return 14178;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([124], () => {
                return 14179;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([125], () => {
                return 14180;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([126], () => {
                return 14181;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([127], () => {
                return 14182;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([128], () => {
                return 14384;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([129], () => {
                return 14385;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([130], () => {
                return 14386;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([131], () => {
                return 14387;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([132], () => {
                return 14388;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([133], () => {
                return 14389;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([134], () => {
                return 14390;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([135], () => {
                return 14391;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([136], () => {
                return 14392;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([137], () => {
                return 14393;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([138], () => {
                return 14433;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([139], () => {
                return 14434;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([140], () => {
                return 14435;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([141], () => {
                return 14436;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([142], () => {
                return 14437;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([143], () => {
                return 14438;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([144], () => {
                return 14640;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([145], () => {
                return 14641;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([146], () => {
                return 14642;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([147], () => {
                return 14643;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([148], () => {
                return 14644;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([149], () => {
                return 14645;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([150], () => {
                return 14646;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([151], () => {
                return 14647;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([152], () => {
                return 14648;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([153], () => {
                return 14649;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([154], () => {
                return 14689;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([155], () => {
                return 14690;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([156], () => {
                return 14691;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([157], () => {
                return 14692;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([158], () => {
                return 14693;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([159], () => {
                return 14694;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([160], () => {
                return 24880;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([161], () => {
                return 24881;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([162], () => {
                return 24882;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([163], () => {
                return 24883;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([164], () => {
                return 24884;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([165], () => {
                return 24885;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([166], () => {
                return 24886;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([167], () => {
                return 24887;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([168], () => {
                return 24888;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([169], () => {
                return 24889;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([170], () => {
                return 24929;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([171], () => {
                return 24930;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([172], () => {
                return 24931;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([173], () => {
                return 24932;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([174], () => {
                return 24933;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([175], () => {
                return 24934;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([176], () => {
                return 25136;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([177], () => {
                return 25137;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([178], () => {
                return 25138;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([179], () => {
                return 25139;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([180], () => {
                return 25140;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([181], () => {
                return 25141;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([182], () => {
                return 25142;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([183], () => {
                return 25143;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([184], () => {
                return 25144;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([185], () => {
                return 25145;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([186], () => {
                return 25185;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([187], () => {
                return 25186;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([188], () => {
                return 25187;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([189], () => {
                return 25188;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([190], () => {
                return 25189;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([191], () => {
                return 25190;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([192], () => {
                return 25392;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([193], () => {
                return 25393;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([194], () => {
                return 25394;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([195], () => {
                return 25395;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([196], () => {
                return 25396;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([197], () => {
                return 25397;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([198], () => {
                return 25398;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([199], () => {
                return 25399;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([200], () => {
                return 25400;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([201], () => {
                return 25401;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([202], () => {
                return 25441;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([203], () => {
                return 25442;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([204], () => {
                return 25443;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([205], () => {
                return 25444;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([206], () => {
                return 25445;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([207], () => {
                return 25446;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([208], () => {
                return 25648;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([209], () => {
                return 25649;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([210], () => {
                return 25650;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([211], () => {
                return 25651;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([212], () => {
                return 25652;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([213], () => {
                return 25653;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([214], () => {
                return 25654;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([215], () => {
                return 25655;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([216], () => {
                return 25656;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([217], () => {
                return 25657;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([218], () => {
                return 25697;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([219], () => {
                return 25698;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([220], () => {
                return 25699;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([221], () => {
                return 25700;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([222], () => {
                return 25701;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([223], () => {
                return 25702;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([224], () => {
                return 25904;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([225], () => {
                return 25905;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([226], () => {
                return 25906;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([227], () => {
                return 25907;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([228], () => {
                return 25908;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([229], () => {
                return 25909;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([230], () => {
                return 25910;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([231], () => {
                return 25911;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([232], () => {
                return 25912;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([233], () => {
                return 25913;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([234], () => {
                return 25953;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([235], () => {
                return 25954;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([236], () => {
                return 25955;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([237], () => {
                return 25956;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([238], () => {
                return 25957;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([239], () => {
                return 25958;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([240], () => {
                return 26160;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([241], () => {
                return 26161;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([242], () => {
                return 26162;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([243], () => {
                return 26163;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([244], () => {
                return 26164;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([245], () => {
                return 26165;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([246], () => {
                return 26166;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([247], () => {
                return 26167;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([248], () => {
                return 26168;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([249], () => {
                return 26169;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([250], () => {
                return 26209;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([251], () => {
                return 26210;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([252], () => {
                return 26211;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([253], () => {
                return 26212;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([254], () => {
                return 26213;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([255], () => {
                return 26214;
            }, () => {
                return true;
            })).call(this, char0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function enc16_upper(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('char')], __function_args__, (char0) => {
            return true;
        })) !== null) {
            let [char0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([0], () => {
                return 12336;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([1], () => {
                return 12337;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([2], () => {
                return 12338;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([3], () => {
                return 12339;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([4], () => {
                return 12340;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([5], () => {
                return 12341;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([6], () => {
                return 12342;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([7], () => {
                return 12343;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([8], () => {
                return 12344;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([9], () => {
                return 12345;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([10], () => {
                return 12353;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([11], () => {
                return 12354;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([12], () => {
                return 12355;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([13], () => {
                return 12356;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([14], () => {
                return 12357;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([15], () => {
                return 12358;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([16], () => {
                return 12592;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([17], () => {
                return 12593;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([18], () => {
                return 12594;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([19], () => {
                return 12595;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([20], () => {
                return 12596;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([21], () => {
                return 12597;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([22], () => {
                return 12598;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([23], () => {
                return 12599;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([24], () => {
                return 12600;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([25], () => {
                return 12601;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([26], () => {
                return 12609;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([27], () => {
                return 12610;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([28], () => {
                return 12611;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([29], () => {
                return 12612;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([30], () => {
                return 12613;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([31], () => {
                return 12614;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([32], () => {
                return 12848;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([33], () => {
                return 12849;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([34], () => {
                return 12850;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([35], () => {
                return 12851;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([36], () => {
                return 12852;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([37], () => {
                return 12853;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([38], () => {
                return 12854;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([39], () => {
                return 12855;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([40], () => {
                return 12856;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([41], () => {
                return 12857;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([42], () => {
                return 12865;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([43], () => {
                return 12866;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([44], () => {
                return 12867;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([45], () => {
                return 12868;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([46], () => {
                return 12869;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([47], () => {
                return 12870;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([48], () => {
                return 13104;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([49], () => {
                return 13105;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([50], () => {
                return 13106;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([51], () => {
                return 13107;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([52], () => {
                return 13108;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([53], () => {
                return 13109;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([54], () => {
                return 13110;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([55], () => {
                return 13111;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([56], () => {
                return 13112;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([57], () => {
                return 13113;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([58], () => {
                return 13121;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([59], () => {
                return 13122;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([60], () => {
                return 13123;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([61], () => {
                return 13124;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([62], () => {
                return 13125;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([63], () => {
                return 13126;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([64], () => {
                return 13360;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([65], () => {
                return 13361;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([66], () => {
                return 13362;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([67], () => {
                return 13363;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([68], () => {
                return 13364;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([69], () => {
                return 13365;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([70], () => {
                return 13366;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([71], () => {
                return 13367;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([72], () => {
                return 13368;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([73], () => {
                return 13369;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([74], () => {
                return 13377;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([75], () => {
                return 13378;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([76], () => {
                return 13379;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([77], () => {
                return 13380;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([78], () => {
                return 13381;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([79], () => {
                return 13382;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([80], () => {
                return 13616;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([81], () => {
                return 13617;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([82], () => {
                return 13618;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([83], () => {
                return 13619;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([84], () => {
                return 13620;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([85], () => {
                return 13621;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([86], () => {
                return 13622;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([87], () => {
                return 13623;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([88], () => {
                return 13624;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([89], () => {
                return 13625;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([90], () => {
                return 13633;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([91], () => {
                return 13634;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([92], () => {
                return 13635;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([93], () => {
                return 13636;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([94], () => {
                return 13637;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([95], () => {
                return 13638;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([96], () => {
                return 13872;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([97], () => {
                return 13873;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([98], () => {
                return 13874;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([99], () => {
                return 13875;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([100], () => {
                return 13876;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([101], () => {
                return 13877;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([102], () => {
                return 13878;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([103], () => {
                return 13879;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([104], () => {
                return 13880;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([105], () => {
                return 13881;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([106], () => {
                return 13889;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([107], () => {
                return 13890;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([108], () => {
                return 13891;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([109], () => {
                return 13892;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([110], () => {
                return 13893;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([111], () => {
                return 13894;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([112], () => {
                return 14128;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([113], () => {
                return 14129;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([114], () => {
                return 14130;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([115], () => {
                return 14131;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([116], () => {
                return 14132;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([117], () => {
                return 14133;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([118], () => {
                return 14134;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([119], () => {
                return 14135;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([120], () => {
                return 14136;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([121], () => {
                return 14137;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([122], () => {
                return 14145;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([123], () => {
                return 14146;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([124], () => {
                return 14147;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([125], () => {
                return 14148;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([126], () => {
                return 14149;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([127], () => {
                return 14150;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([128], () => {
                return 14384;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([129], () => {
                return 14385;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([130], () => {
                return 14386;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([131], () => {
                return 14387;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([132], () => {
                return 14388;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([133], () => {
                return 14389;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([134], () => {
                return 14390;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([135], () => {
                return 14391;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([136], () => {
                return 14392;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([137], () => {
                return 14393;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([138], () => {
                return 14401;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([139], () => {
                return 14402;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([140], () => {
                return 14403;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([141], () => {
                return 14404;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([142], () => {
                return 14405;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([143], () => {
                return 14406;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([144], () => {
                return 14640;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([145], () => {
                return 14641;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([146], () => {
                return 14642;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([147], () => {
                return 14643;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([148], () => {
                return 14644;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([149], () => {
                return 14645;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([150], () => {
                return 14646;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([151], () => {
                return 14647;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([152], () => {
                return 14648;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([153], () => {
                return 14649;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([154], () => {
                return 14657;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([155], () => {
                return 14658;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([156], () => {
                return 14659;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([157], () => {
                return 14660;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([158], () => {
                return 14661;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([159], () => {
                return 14662;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([160], () => {
                return 16688;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([161], () => {
                return 16689;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([162], () => {
                return 16690;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([163], () => {
                return 16691;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([164], () => {
                return 16692;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([165], () => {
                return 16693;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([166], () => {
                return 16694;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([167], () => {
                return 16695;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([168], () => {
                return 16696;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([169], () => {
                return 16697;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([170], () => {
                return 16705;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([171], () => {
                return 16706;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([172], () => {
                return 16707;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([173], () => {
                return 16708;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([174], () => {
                return 16709;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([175], () => {
                return 16710;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([176], () => {
                return 16944;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([177], () => {
                return 16945;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([178], () => {
                return 16946;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([179], () => {
                return 16947;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([180], () => {
                return 16948;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([181], () => {
                return 16949;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([182], () => {
                return 16950;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([183], () => {
                return 16951;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([184], () => {
                return 16952;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([185], () => {
                return 16953;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([186], () => {
                return 16961;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([187], () => {
                return 16962;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([188], () => {
                return 16963;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([189], () => {
                return 16964;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([190], () => {
                return 16965;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([191], () => {
                return 16966;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([192], () => {
                return 17200;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([193], () => {
                return 17201;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([194], () => {
                return 17202;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([195], () => {
                return 17203;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([196], () => {
                return 17204;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([197], () => {
                return 17205;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([198], () => {
                return 17206;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([199], () => {
                return 17207;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([200], () => {
                return 17208;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([201], () => {
                return 17209;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([202], () => {
                return 17217;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([203], () => {
                return 17218;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([204], () => {
                return 17219;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([205], () => {
                return 17220;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([206], () => {
                return 17221;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([207], () => {
                return 17222;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([208], () => {
                return 17456;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([209], () => {
                return 17457;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([210], () => {
                return 17458;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([211], () => {
                return 17459;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([212], () => {
                return 17460;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([213], () => {
                return 17461;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([214], () => {
                return 17462;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([215], () => {
                return 17463;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([216], () => {
                return 17464;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([217], () => {
                return 17465;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([218], () => {
                return 17473;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([219], () => {
                return 17474;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([220], () => {
                return 17475;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([221], () => {
                return 17476;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([222], () => {
                return 17477;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([223], () => {
                return 17478;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([224], () => {
                return 17712;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([225], () => {
                return 17713;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([226], () => {
                return 17714;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([227], () => {
                return 17715;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([228], () => {
                return 17716;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([229], () => {
                return 17717;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([230], () => {
                return 17718;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([231], () => {
                return 17719;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([232], () => {
                return 17720;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([233], () => {
                return 17721;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([234], () => {
                return 17729;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([235], () => {
                return 17730;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([236], () => {
                return 17731;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([237], () => {
                return 17732;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([238], () => {
                return 17733;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([239], () => {
                return 17734;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([240], () => {
                return 17968;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([241], () => {
                return 17969;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([242], () => {
                return 17970;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([243], () => {
                return 17971;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([244], () => {
                return 17972;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([245], () => {
                return 17973;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([246], () => {
                return 17974;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([247], () => {
                return 17975;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([248], () => {
                return 17976;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([249], () => {
                return 17977;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([250], () => {
                return 17985;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([251], () => {
                return 17986;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([252], () => {
                return 17987;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([253], () => {
                return 17988;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([254], () => {
                return 17989;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([255], () => {
                return 17990;
            }, () => {
                return true;
            })).call(this, char0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function encode16(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0')], __function_args__, (x00) => {
            return true;
        })) !== null) {
            let [x00] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, []));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('data'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (data0, opts0) => {
            return ElixirScript.Core.erlang.is_binary(data0);
        })) !== null) {
            let [data0, opts0] = __arg_matches__;

            const [__case__0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('case'), $Keyword$.get(opts0, Symbol.for('case'), Symbol.for('upper')));

            return do_encode16(__case__0, data0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    encode16,
    __MODULE__: Symbol.for('Elixir.Base'),
    __info__
};
