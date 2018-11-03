'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Range$ from './Elixir.Range.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Float$ from './Elixir.Float.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('ceil'), 1), new ElixirScript.Core.Tuple(Symbol.for('ceil'), 2), new ElixirScript.Core.Tuple(Symbol.for('floor'), 1), new ElixirScript.Core.Tuple(Symbol.for('floor'), 2), new ElixirScript.Core.Tuple(Symbol.for('parse'), 1), new ElixirScript.Core.Tuple(Symbol.for('ratio'), 1), new ElixirScript.Core.Tuple(Symbol.for('round'), 1), new ElixirScript.Core.Tuple(Symbol.for('round'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [199200135155321206399452694914007254366])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/float.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(140), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(5), ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(94))], [Symbol.for('module'), Symbol.for('Elixir.Float')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Float'),
    __info__
};
