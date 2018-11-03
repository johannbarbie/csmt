'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $IO$Stream$ from './Elixir.IO.Stream.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__build__'), 3), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [295840061770058072179620320607193109397])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/io/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(46), ElixirScript.Core.BitString.integer(80), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(228), ElixirScript.Core.BitString.integer(75), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(133), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(149))], [Symbol.for('module'), Symbol.for('Elixir.IO.Stream')]]);

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

            return new Map([[Symbol.for('__struct__'), $IO$Stream$], [Symbol.for('device'), null], [Symbol.for('line_or_bytes'), Symbol.for('line')], [Symbol.for('raw'), true]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303259135')], __function_args__, (kv5764607523032591350) => {
            return true;
        })) !== null) {
            let [kv5764607523032591350] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032591350, new Map([[Symbol.for('__struct__'), $IO$Stream$], [Symbol.for('device'), null], [Symbol.for('line_or_bytes'), Symbol.for('line')], [Symbol.for('raw'), true]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303259135'), ElixirScript.Core.Patterns.variable('val576460752303259135')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303259135')], __function_args__, (key5764607523032591350, val5764607523032591350, map5764607523032591350) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032591350, val5764607523032591350, map5764607523032591350] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032591350, val5764607523032591350, map5764607523032591350);
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
    __MODULE__: Symbol.for('Elixir.IO.Stream'),
    __info__
};
