'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $System$ from './Elixir.System.js';

import $IO$ from './Elixir.IO.js';

import $UnicodeConversionError$ from './Elixir.UnicodeConversionError.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Path$Wildcard$ from './Elixir.Path.Wildcard.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('absname'), 1), new ElixirScript.Core.Tuple(Symbol.for('absname'), 2), new ElixirScript.Core.Tuple(Symbol.for('basename'), 1), new ElixirScript.Core.Tuple(Symbol.for('basename'), 2), new ElixirScript.Core.Tuple(Symbol.for('dirname'), 1), new ElixirScript.Core.Tuple(Symbol.for('expand'), 1), new ElixirScript.Core.Tuple(Symbol.for('expand'), 2), new ElixirScript.Core.Tuple(Symbol.for('extname'), 1), new ElixirScript.Core.Tuple(Symbol.for('join'), 1), new ElixirScript.Core.Tuple(Symbol.for('join'), 2), new ElixirScript.Core.Tuple(Symbol.for('relative'), 1), new ElixirScript.Core.Tuple(Symbol.for('relative_to'), 2), new ElixirScript.Core.Tuple(Symbol.for('relative_to_cwd'), 1), new ElixirScript.Core.Tuple(Symbol.for('rootname'), 1), new ElixirScript.Core.Tuple(Symbol.for('rootname'), 2), new ElixirScript.Core.Tuple(Symbol.for('split'), 1), new ElixirScript.Core.Tuple(Symbol.for('type'), 1), new ElixirScript.Core.Tuple(Symbol.for('wildcard'), 1), new ElixirScript.Core.Tuple(Symbol.for('wildcard'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [337365207469812751758781312583484071574])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/path.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(206), ElixirScript.Core.BitString.integer(44), ElixirScript.Core.BitString.integer(239), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(250), ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.integer(150))], [Symbol.for('module'), Symbol.for('Elixir.Path')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Path'),
    __info__
};
