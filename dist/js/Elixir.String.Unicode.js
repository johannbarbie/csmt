'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('codepoints'), 1), new ElixirScript.Core.Tuple(Symbol.for('graphemes'), 1), new ElixirScript.Core.Tuple(Symbol.for('length'), 1), new ElixirScript.Core.Tuple(Symbol.for('next_codepoint'), 1), new ElixirScript.Core.Tuple(Symbol.for('next_grapheme_size'), 1), new ElixirScript.Core.Tuple(Symbol.for('split_at'), 2), new ElixirScript.Core.Tuple(Symbol.for('version'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [145552253815618854031624603649446841383])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/unicode/unicode.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(59), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(93), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(141), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(39))], [Symbol.for('module'), Symbol.for('Elixir.String.Unicode')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Unicode'),
    __info__
};
