'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Collectable$ from './Elixir.Collectable.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('list_dir'), 1), new ElixirScript.Core.Tuple(Symbol.for('read_link_info'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [167612093925105828074207697578524842474])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/path.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(165), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(23), ElixirScript.Core.BitString.integer(98), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(234))], [Symbol.for('module'), Symbol.for('Elixir.Path.Wildcard')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Path.Wildcard'),
    __info__
};
