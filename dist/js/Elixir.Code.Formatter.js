'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Enum$ from './Elixir.Enum.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $String$ from './Elixir.String.js';

import $Keyword$ from './Elixir.Keyword.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Code$ from './Elixir.Code.js';

import $Access$ from './Elixir.Access.js';

import $Collectable$ from './Elixir.Collectable.js';

import $List$Chars$ from './Elixir.List.Chars.js';

import $List$ from './Elixir.List.js';

import $MapSet$ from './Elixir.MapSet.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Process$ from './Elixir.Process.js';

import $Version$ from './Elixir.Version.js';

import $Map$ from './Elixir.Map.js';

import $Module$ from './Elixir.Module.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('equivalent'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_algebra'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_algebra'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_algebra!'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_algebra!'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [3476409290702039131255725416969039293])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/code/formatter.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(20), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(253), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(194), ElixirScript.Core.BitString.integer(243), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(189))], [Symbol.for('module'), Symbol.for('Elixir.Code.Formatter')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Code.Formatter'),
    __info__
};
