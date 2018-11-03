'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('decompose'), 2), new ElixirScript.Core.Tuple(Symbol.for('do_trim_leading'), 1), new ElixirScript.Core.Tuple(Symbol.for('split'), 1), new ElixirScript.Core.Tuple(Symbol.for('trim_leading'), 1), new ElixirScript.Core.Tuple(Symbol.for('trim_trailing'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [40827323426566029442042120249208247045])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/unicode/properties.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(188), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(188), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(5))], [Symbol.for('module'), Symbol.for('Elixir.String.Break')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Break'),
    __info__
};
