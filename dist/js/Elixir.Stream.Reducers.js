'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('chunk_by'), 3), new ElixirScript.Core.Tuple(Symbol.for('chunk_every'), 5)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('dedup'), 1), new ElixirScript.Core.Tuple(Symbol.for('dedup'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop'), 0), new ElixirScript.Core.Tuple(Symbol.for('drop'), 1), new ElixirScript.Core.Tuple(Symbol.for('drop_every'), 1), new ElixirScript.Core.Tuple(Symbol.for('drop_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop_while'), 1), new ElixirScript.Core.Tuple(Symbol.for('drop_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter'), 1), new ElixirScript.Core.Tuple(Symbol.for('filter'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter_map'), 2), new ElixirScript.Core.Tuple(Symbol.for('filter_map'), 3), new ElixirScript.Core.Tuple(Symbol.for('map'), 1), new ElixirScript.Core.Tuple(Symbol.for('map'), 2), new ElixirScript.Core.Tuple(Symbol.for('map_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('map_every'), 3), new ElixirScript.Core.Tuple(Symbol.for('reject'), 1), new ElixirScript.Core.Tuple(Symbol.for('reject'), 2), new ElixirScript.Core.Tuple(Symbol.for('scan2'), 1), new ElixirScript.Core.Tuple(Symbol.for('scan2'), 2), new ElixirScript.Core.Tuple(Symbol.for('scan3'), 1), new ElixirScript.Core.Tuple(Symbol.for('scan3'), 2), new ElixirScript.Core.Tuple(Symbol.for('take'), 0), new ElixirScript.Core.Tuple(Symbol.for('take'), 1), new ElixirScript.Core.Tuple(Symbol.for('take_every'), 1), new ElixirScript.Core.Tuple(Symbol.for('take_every'), 2), new ElixirScript.Core.Tuple(Symbol.for('take_while'), 1), new ElixirScript.Core.Tuple(Symbol.for('take_while'), 2), new ElixirScript.Core.Tuple(Symbol.for('uniq_by'), 1), new ElixirScript.Core.Tuple(Symbol.for('uniq_by'), 2), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 0), new ElixirScript.Core.Tuple(Symbol.for('with_index'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [270713123382396694856865418256177746958])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/stream/reducers.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(250), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(188), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(14))], [Symbol.for('module'), Symbol.for('Elixir.Stream.Reducers')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Stream.Reducers'),
    __info__
};
