'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $GenEvent$Stream$ from './Elixir.GenEvent.Stream.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('code_change'), 3), new ElixirScript.Core.Tuple(Symbol.for('handle_call'), 2), new ElixirScript.Core.Tuple(Symbol.for('handle_event'), 2), new ElixirScript.Core.Tuple(Symbol.for('handle_info'), 2), new ElixirScript.Core.Tuple(Symbol.for('init'), 1), new ElixirScript.Core.Tuple(Symbol.for('terminate'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [153638540356181174246220318578781199727])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/gen_event/stream.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(224), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(251), ElixirScript.Core.BitString.integer(1), ElixirScript.Core.BitString.integer(166), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(111))], [Symbol.for('module'), Symbol.for('Elixir.GenEvent.Stream')]]);

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

            return new Map([[Symbol.for('__struct__'), $GenEvent$Stream$], [Symbol.for('manager'), null], [Symbol.for('timeout'), Symbol.for('infinity')]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303371166')], __function_args__, (kv5764607523033711660) => {
            return true;
        })) !== null) {
            let [kv5764607523033711660] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033711660, new Map([[Symbol.for('__struct__'), $GenEvent$Stream$], [Symbol.for('manager'), null], [Symbol.for('timeout'), Symbol.for('infinity')]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303371166'), ElixirScript.Core.Patterns.variable('val576460752303371166')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303371166')], __function_args__, (key5764607523033711660, val5764607523033711660, map5764607523033711660) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033711660, val5764607523033711660, map5764607523033711660] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033711660, val5764607523033711660, map5764607523033711660);
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
    __MODULE__: Symbol.for('Elixir.GenEvent.Stream'),
    __info__
};
