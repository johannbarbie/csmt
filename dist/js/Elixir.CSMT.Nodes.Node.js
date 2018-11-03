'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $CSMT$Nodes$Node$ from './Elixir.CSMT.Nodes.Node.js';

import $Enum$ from './Elixir.Enum.js';

import $Protobuf$Decoder$ from './Elixir.Protobuf.Decoder.js';

import $Protobuf$Delimited$ from './Elixir.Protobuf.Delimited.js';

import $CSMT$Nodes$ from './Elixir.CSMT.Nodes.js';

import $Protobuf$Field$ from './Elixir.Protobuf.Field.js';

import $Protobuf$Encoder$ from './Elixir.Protobuf.Encoder.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode_delimited'), 1), new ElixirScript.Core.Tuple(Symbol.for('defs'), 0), new ElixirScript.Core.Tuple(Symbol.for('defs'), 2), new ElixirScript.Core.Tuple(Symbol.for('defs'), 3), new ElixirScript.Core.Tuple(Symbol.for('encode'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode_delimited'), 1), new ElixirScript.Core.Tuple(Symbol.for('new'), 0), new ElixirScript.Core.Tuple(Symbol.for('new'), 1), new ElixirScript.Core.Tuple(Symbol.for('record'), 0), new ElixirScript.Core.Tuple(Symbol.for('syntax'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [76205584208026665587165233901683571344])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/lib/protos/node.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(84), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(96), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(227), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(144))], [Symbol.for('module'), Symbol.for('Elixir.CSMT.Nodes.Node')]]);

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

            return new Map([[Symbol.for('__struct__'), $CSMT$Nodes$Node$], [Symbol.for('children'), []], [Symbol.for('hash'), null], [Symbol.for('key'), null], [Symbol.for('metadata'), null], [Symbol.for('size'), null], [Symbol.for('treeId'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303334591')], __function_args__, (kv5764607523033345910) => {
            return true;
        })) !== null) {
            let [kv5764607523033345910] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033345910, new Map([[Symbol.for('__struct__'), $CSMT$Nodes$Node$], [Symbol.for('children'), []], [Symbol.for('hash'), null], [Symbol.for('key'), null], [Symbol.for('metadata'), null], [Symbol.for('size'), null], [Symbol.for('treeId'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303334591'), ElixirScript.Core.Patterns.variable('val576460752303334591')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303334591')], __function_args__, (key5764607523033345910, val5764607523033345910, map5764607523033345910) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033345910, val5764607523033345910, map5764607523033345910] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033345910, val5764607523033345910, map5764607523033345910);
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

function decode(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('data')], __function_args__, (data0) => {
            return true;
        })) !== null) {
            let [data0] = __arg_matches__;

            return $Protobuf$Decoder$.decode(data0, $CSMT$Nodes$Node$);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function defs(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return ElixirScript.Core.Functions.call_property($CSMT$Nodes$.defs);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function encode(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([]))], __function_args__, (record0) => {
            return true;
        })) !== null) {
            let [record0] = __arg_matches__;

            return $Protobuf$Encoder$.encode(record0, defs());
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

            return $Kernel$.struct($CSMT$Nodes$Node$, values0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    decode,
    defs,
    encode,
    __new__,
    __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node'),
    __info__
};
