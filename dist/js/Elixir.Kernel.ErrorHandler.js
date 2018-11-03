'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('ensure_compiled'), 2), new ElixirScript.Core.Tuple(Symbol.for('ensure_loaded'), 1), new ElixirScript.Core.Tuple(Symbol.for('undefined_function'), 3), new ElixirScript.Core.Tuple(Symbol.for('undefined_lambda'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [205557109589974220061373394671222858315])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/kernel/error_handler.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(164), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(182), ElixirScript.Core.BitString.integer(252), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(236), ElixirScript.Core.BitString.integer(223), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(151), ElixirScript.Core.BitString.integer(34), ElixirScript.Core.BitString.integer(75))], [Symbol.for('module'), Symbol.for('Elixir.Kernel.ErrorHandler')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Kernel.ErrorHandler'),
    __info__
};
