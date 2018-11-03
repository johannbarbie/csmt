'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $CSMT$Trees$Tree$ from './Elixir.CSMT.Trees.Tree.js';

import $Enum$ from './Elixir.Enum.js';

import $Protobuf$Decoder$ from './Elixir.Protobuf.Decoder.js';

import $Protobuf$Delimited$ from './Elixir.Protobuf.Delimited.js';

import $CSMT$Trees$ from './Elixir.CSMT.Trees.js';

import $Protobuf$Field$ from './Elixir.Protobuf.Field.js';

import $CSMT$Trees$Tree$HashFunction$ from './Elixir.CSMT.Trees.Tree.HashFunction.js';

import $Protobuf$Encoder$ from './Elixir.Protobuf.Encoder.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode_delimited'), 1), new ElixirScript.Core.Tuple(Symbol.for('defs'), 0), new ElixirScript.Core.Tuple(Symbol.for('defs'), 2), new ElixirScript.Core.Tuple(Symbol.for('defs'), 3), new ElixirScript.Core.Tuple(Symbol.for('encode'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode_delimited'), 1), new ElixirScript.Core.Tuple(Symbol.for('new'), 0), new ElixirScript.Core.Tuple(Symbol.for('new'), 1), new ElixirScript.Core.Tuple(Symbol.for('record'), 0), new ElixirScript.Core.Tuple(Symbol.for('syntax'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [129450025984681068305648453698970079069])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/lib/protos/tree.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(97), ElixirScript.Core.BitString.integer(99), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(64), ElixirScript.Core.BitString.integer(18), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(93))], [Symbol.for('module'), Symbol.for('Elixir.CSMT.Trees.Tree')]]);

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

            return new Map([[Symbol.for('__struct__'), $CSMT$Trees$Tree$], [Symbol.for('backend'), []], [Symbol.for('hashFunction'), null], [Symbol.for('root'), null], [Symbol.for('size'), null], [Symbol.for('treeId'), null], [Symbol.for('treeName'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303351901')], __function_args__, (kv5764607523033519010) => {
            return true;
        })) !== null) {
            let [kv5764607523033519010] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033519010, new Map([[Symbol.for('__struct__'), $CSMT$Trees$Tree$], [Symbol.for('backend'), []], [Symbol.for('hashFunction'), null], [Symbol.for('root'), null], [Symbol.for('size'), null], [Symbol.for('treeId'), null], [Symbol.for('treeName'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303351901'), ElixirScript.Core.Patterns.variable('val576460752303351901')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303351901')], __function_args__, (key5764607523033519010, val5764607523033519010, map5764607523033519010) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033519010, val5764607523033519010, map5764607523033519010] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033519010, val5764607523033519010, map5764607523033519010);
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

function __new__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('values')], __function_args__, (values0) => {
            return true;
        })) !== null) {
            let [values0] = __arg_matches__;

            return $Kernel$.struct($CSMT$Trees$Tree$, values0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    __new__,
    __MODULE__: Symbol.for('Elixir.CSMT.Trees.Tree'),
    __info__
};
