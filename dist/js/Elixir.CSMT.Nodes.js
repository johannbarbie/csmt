'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Protobuf$Field$ from './Elixir.Protobuf.Field.js';

import $CSMT$Nodes$Node$ from './Elixir.CSMT.Nodes.Node.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('defs'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [193775569624759719931514488047362648425]), new ElixirScript.Core.Tuple(Symbol.for('external_resource'), ['/Users/johann/dev/csmt/lib/protos/node.proto'])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/lib/protos/node.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(145), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(209), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(155), ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(207), ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.integer(72), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(105))], [Symbol.for('module'), Symbol.for('Elixir.CSMT.Nodes')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function defs(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [new ElixirScript.Core.Tuple(new ElixirScript.Core.Tuple(Symbol.for('msg'), $CSMT$Nodes$Node$), [new Map([[Symbol.for('__struct__'), $Protobuf$Field$], [Symbol.for('fnum'), 1], [Symbol.for('name'), Symbol.for('treeId')], [Symbol.for('occurrence'), Symbol.for('required')], [Symbol.for('opts'), []], [Symbol.for('rnum'), 2], [Symbol.for('type'), Symbol.for('bytes')]]), new Map([[Symbol.for('__struct__'), $Protobuf$Field$], [Symbol.for('fnum'), 2], [Symbol.for('name'), Symbol.for('hash')], [Symbol.for('occurrence'), Symbol.for('required')], [Symbol.for('opts'), []], [Symbol.for('rnum'), 3], [Symbol.for('type'), Symbol.for('bytes')]]), new Map([[Symbol.for('__struct__'), $Protobuf$Field$], [Symbol.for('fnum'), 3], [Symbol.for('name'), Symbol.for('children')], [Symbol.for('occurrence'), Symbol.for('repeated')], [Symbol.for('opts'), []], [Symbol.for('rnum'), 4], [Symbol.for('type'), Symbol.for('bytes')]]), new Map([[Symbol.for('__struct__'), $Protobuf$Field$], [Symbol.for('fnum'), 4], [Symbol.for('name'), Symbol.for('size')], [Symbol.for('occurrence'), Symbol.for('required')], [Symbol.for('opts'), []], [Symbol.for('rnum'), 5], [Symbol.for('type'), Symbol.for('int64')]]), new Map([[Symbol.for('__struct__'), $Protobuf$Field$], [Symbol.for('fnum'), 5], [Symbol.for('name'), Symbol.for('metadata')], [Symbol.for('occurrence'), Symbol.for('optional')], [Symbol.for('opts'), []], [Symbol.for('rnum'), 6], [Symbol.for('type'), Symbol.for('bytes')]]), new Map([[Symbol.for('__struct__'), $Protobuf$Field$], [Symbol.for('fnum'), 6], [Symbol.for('name'), Symbol.for('key')], [Symbol.for('occurrence'), Symbol.for('optional')], [Symbol.for('opts'), []], [Symbol.for('rnum'), 7], [Symbol.for('type'), Symbol.for('bytes')]])])];
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    defs,
    __MODULE__: Symbol.for('Elixir.CSMT.Nodes'),
    __info__
};
