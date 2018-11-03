'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Enum$ from './Elixir.Enum.js';

import $UUID$ from './Elixir.UUID.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $String$ from './Elixir.String.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('binary_to_string!'), 1), new ElixirScript.Core.Tuple(Symbol.for('binary_to_string!'), 2), new ElixirScript.Core.Tuple(Symbol.for('info'), 1), new ElixirScript.Core.Tuple(Symbol.for('info!'), 1), new ElixirScript.Core.Tuple(Symbol.for('string_to_binary!'), 1), new ElixirScript.Core.Tuple(Symbol.for('uuid1'), 0), new ElixirScript.Core.Tuple(Symbol.for('uuid1'), 1), new ElixirScript.Core.Tuple(Symbol.for('uuid1'), 2), new ElixirScript.Core.Tuple(Symbol.for('uuid1'), 3), new ElixirScript.Core.Tuple(Symbol.for('uuid3'), 2), new ElixirScript.Core.Tuple(Symbol.for('uuid3'), 3), new ElixirScript.Core.Tuple(Symbol.for('uuid4'), 0), new ElixirScript.Core.Tuple(Symbol.for('uuid4'), 1), new ElixirScript.Core.Tuple(Symbol.for('uuid5'), 2), new ElixirScript.Core.Tuple(Symbol.for('uuid5'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [15359224065652191066269960676194643921])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/deps/elixir_uuid/lib/uuid.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(11), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.integer(21), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(209))], [Symbol.for('module'), Symbol.for('Elixir.UUID')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function binary_to_hex_list(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('binary')], __function_args__, (binary0) => {
            return true;
        })) !== null) {
            let [binary0] = __arg_matches__;

            return list_to_hex_str(ElixirScript.Core.binary.bin_to_list(binary0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function list_to_hex_str(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[]], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('head'), ElixirScript.Core.Patterns.variable('tail'))], __function_args__, (head0, tail0) => {
            return true;
        })) !== null) {
            let [head0, tail0] = __arg_matches__;

            return ElixirScript.Core.erlang.list_concatenation(to_hex_str(head0), list_to_hex_str(tail0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_hex(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('i')], __function_args__, (i0) => {
            return i0 < 10;
        })) !== null) {
            let [i0] = __arg_matches__;

            return 0 + i0 + 48;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('i')], __function_args__, (i0) => {
            return i0 >= 10 && i0 < 16;
        })) !== null) {
            let [i0] = __arg_matches__;

            return 97 + (i0 - 10);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_hex_str(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('n')], __function_args__, (n0) => {
            return n0 < 256;
        })) !== null) {
            let [n0] = __arg_matches__;

            return [to_hex(ElixirScript.Core.erlang.div(n0, 16)), to_hex(ElixirScript.Core.erlang.rem(n0, 16))];
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function uuid4(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('strong')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, Symbol.for('default')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('weak')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, Symbol.for('default')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('format')], __function_args__, (format0) => {
            return true;
        })) !== null) {
            let [format0] = __arg_matches__;

            const [u00, _0, u10, _1, u20] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 48), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 12), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 2), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), 62)), crypto.strong_rand_bytes(16));

            return uuid_to_string(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u00), 48), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(4), 4), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u10), 12), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(2), 2), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u20), 62)), format0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function uuid_to_string(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 32), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 16), ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 48)), Symbol.for('default')], __function_args__, (u00, u10, u20, u30, u40) => {
            return true;
        })) !== null) {
            let [u00, u10, u20, u30, u40] = __arg_matches__;

            return ElixirScript.Core.erlang.iolist_to_binary([binary_to_hex_list(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u00), 32))), 45, binary_to_hex_list(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u10), 16))), 45, binary_to_hex_list(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u20), 16))), 45, binary_to_hex_list(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u30), 16))), 45, binary_to_hex_list(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u40), 48)))]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 128)), Symbol.for('hex')], __function_args__, (u0) => {
            return true;
        })) !== null) {
            let [u0] = __arg_matches__;

            return ElixirScript.Core.erlang.iolist_to_binary(binary_to_hex_list(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u0), 128))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 128)), Symbol.for('urn')], __function_args__, (u0) => {
            return true;
        })) !== null) {
            let [u0] = __arg_matches__;

            return 'urn:uuid:' + uuid_to_string(new ElixirScript.Core.BitString(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer(u0), 128)), Symbol.for('default'));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_u'), ElixirScript.Core.Patterns.variable('format')], __function_args__, (_u0, format0) => {
            return format0 === Symbol.for('hex') || (format0 === Symbol.for('urn') || format0 === Symbol.for('default'));
        })) !== null) {
            let [_u0, format0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($ArgumentError$.exception([new ElixirScript.Core.Tuple(Symbol.for('message'), 'Invalid binary data; Expected: <<uuid::128>>')]));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_u'), ElixirScript.Core.Patterns.variable('format')], __function_args__, (_u0, format0) => {
            return true;
        })) !== null) {
            let [_u0, format0] = __arg_matches__;

            return ElixirScript.Core.erlang.error($ArgumentError$.exception([new ElixirScript.Core.Tuple(Symbol.for('message'), 'Invalid format ' + ($String$Chars$.to_string(format0) + '; Expected: :default|:hex|:urn'))]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    uuid4,
    __MODULE__: Symbol.for('Elixir.UUID'),
    __info__
};
