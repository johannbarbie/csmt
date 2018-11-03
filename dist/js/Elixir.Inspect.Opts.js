'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [36604211006696202472354407100611332810])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/inspect/algebra.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(137), ElixirScript.Core.BitString.integer(182), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(107), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(150), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(140), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(202))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Opts')]]);

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

            return new Map([[Symbol.for('__struct__'), $Inspect$Opts$], [Symbol.for('base'), Symbol.for('decimal')], [Symbol.for('binaries'), Symbol.for('infer')], [Symbol.for('char_lists'), Symbol.for('infer')], [Symbol.for('charlists'), Symbol.for('infer')], [Symbol.for('limit'), 50], [Symbol.for('pretty'), false], [Symbol.for('printable_limit'), 4096], [Symbol.for('safe'), true], [Symbol.for('structs'), true], [Symbol.for('syntax_colors'), []], [Symbol.for('width'), 80]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303363358')], __function_args__, (kv5764607523033633580) => {
            return true;
        })) !== null) {
            let [kv5764607523033633580] = __arg_matches__;

            return $Enum$.reduce(kv5764607523033633580, new Map([[Symbol.for('__struct__'), $Inspect$Opts$], [Symbol.for('base'), Symbol.for('decimal')], [Symbol.for('binaries'), Symbol.for('infer')], [Symbol.for('char_lists'), Symbol.for('infer')], [Symbol.for('charlists'), Symbol.for('infer')], [Symbol.for('limit'), 50], [Symbol.for('pretty'), false], [Symbol.for('printable_limit'), 4096], [Symbol.for('safe'), true], [Symbol.for('structs'), true], [Symbol.for('syntax_colors'), []], [Symbol.for('width'), 80]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303363358'), ElixirScript.Core.Patterns.variable('val576460752303363358')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303363358')], __function_args__, (key5764607523033633580, val5764607523033633580, map5764607523033633580) => {
                        return true;
                    })) !== null) {
                        let [key5764607523033633580, val5764607523033633580, map5764607523033633580] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523033633580, val5764607523033633580, map5764607523033633580);
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
    __MODULE__: Symbol.for('Elixir.Inspect.Opts'),
    __info__
};
