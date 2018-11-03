'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Protobuf$OneOfField$ from './Elixir.Protobuf.OneOfField.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('record'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [239851443154705201975338225103834150428])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/deps/exprotobuf/lib/exprotobuf/one_of_field.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(113), ElixirScript.Core.BitString.integer(181), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(164), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(205), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.integer(28))], [Symbol.for('module'), Symbol.for('Elixir.Protobuf.OneOfField')]]);

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

            return new Map([[Symbol.for('__struct__'), $Protobuf$OneOfField$], [Symbol.for('fields'), Symbol.for('undefined')], [Symbol.for('name'), Symbol.for('undefined')], [Symbol.for('rnum'), Symbol.for('undefined')]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303416191')], __function_args__, (kv5764607523034161910) => {
            return true;
        })) !== null) {
            let [kv5764607523034161910] = __arg_matches__;

            return $Enum$.reduce(kv5764607523034161910, new Map([[Symbol.for('__struct__'), $Protobuf$OneOfField$], [Symbol.for('fields'), Symbol.for('undefined')], [Symbol.for('name'), Symbol.for('undefined')], [Symbol.for('rnum'), Symbol.for('undefined')]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303416191'), ElixirScript.Core.Patterns.variable('val576460752303416191')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303416191')], __function_args__, (key5764607523034161910, val5764607523034161910, map5764607523034161910) => {
                        return true;
                    })) !== null) {
                        let [key5764607523034161910, val5764607523034161910, map5764607523034161910] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523034161910, val5764607523034161910, map5764607523034161910);
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
    __MODULE__: Symbol.for('Elixir.Protobuf.OneOfField'),
    __info__
};
