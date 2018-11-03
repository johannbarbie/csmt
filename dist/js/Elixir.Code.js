'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Path$ from './Elixir.Path.js';

import $List$Chars$ from './Elixir.List.Chars.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $RuntimeError$ from './Elixir.RuntimeError.js';

import $Kernel$ErrorHandler$ from './Elixir.Kernel.ErrorHandler.js';

import $File$ from './Elixir.File.js';

import $Macro$Env$ from './Elixir.Macro.Env.js';

import $String$ from './Elixir.String.js';

import $Code$LoadError$ from './Elixir.Code.LoadError.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $Code$Formatter$ from './Elixir.Code.Formatter.js';

import $Keyword$ from './Elixir.Keyword.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Access$ from './Elixir.Access.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('append_path'), 1), new ElixirScript.Core.Tuple(Symbol.for('available_compiler_options'), 0), new ElixirScript.Core.Tuple(Symbol.for('compile_file'), 1), new ElixirScript.Core.Tuple(Symbol.for('compile_file'), 2), new ElixirScript.Core.Tuple(Symbol.for('compile_quoted'), 1), new ElixirScript.Core.Tuple(Symbol.for('compile_quoted'), 2), new ElixirScript.Core.Tuple(Symbol.for('compile_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('compile_string'), 2), new ElixirScript.Core.Tuple(Symbol.for('compiler_options'), 0), new ElixirScript.Core.Tuple(Symbol.for('compiler_options'), 1), new ElixirScript.Core.Tuple(Symbol.for('delete_path'), 1), new ElixirScript.Core.Tuple(Symbol.for('ensure_compiled'), 1), new ElixirScript.Core.Tuple(Symbol.for('ensure_compiled?'), 1), new ElixirScript.Core.Tuple(Symbol.for('ensure_loaded'), 1), new ElixirScript.Core.Tuple(Symbol.for('ensure_loaded?'), 1), new ElixirScript.Core.Tuple(Symbol.for('eval_file'), 1), new ElixirScript.Core.Tuple(Symbol.for('eval_file'), 2), new ElixirScript.Core.Tuple(Symbol.for('eval_quoted'), 1), new ElixirScript.Core.Tuple(Symbol.for('eval_quoted'), 2), new ElixirScript.Core.Tuple(Symbol.for('eval_quoted'), 3), new ElixirScript.Core.Tuple(Symbol.for('eval_string'), 1), new ElixirScript.Core.Tuple(Symbol.for('eval_string'), 2), new ElixirScript.Core.Tuple(Symbol.for('eval_string'), 3), new ElixirScript.Core.Tuple(Symbol.for('fetch_docs'), 1), new ElixirScript.Core.Tuple(Symbol.for('format_file!'), 1), new ElixirScript.Core.Tuple(Symbol.for('format_file!'), 2), new ElixirScript.Core.Tuple(Symbol.for('format_string!'), 1), new ElixirScript.Core.Tuple(Symbol.for('format_string!'), 2), new ElixirScript.Core.Tuple(Symbol.for('get_docs'), 2), new ElixirScript.Core.Tuple(Symbol.for('load_file'), 1), new ElixirScript.Core.Tuple(Symbol.for('load_file'), 2), new ElixirScript.Core.Tuple(Symbol.for('loaded_files'), 0), new ElixirScript.Core.Tuple(Symbol.for('prepend_path'), 1), new ElixirScript.Core.Tuple(Symbol.for('purge_compiler_modules'), 0), new ElixirScript.Core.Tuple(Symbol.for('require_file'), 1), new ElixirScript.Core.Tuple(Symbol.for('require_file'), 2), new ElixirScript.Core.Tuple(Symbol.for('required_files'), 0), new ElixirScript.Core.Tuple(Symbol.for('string_to_quoted'), 1), new ElixirScript.Core.Tuple(Symbol.for('string_to_quoted'), 2), new ElixirScript.Core.Tuple(Symbol.for('string_to_quoted!'), 1), new ElixirScript.Core.Tuple(Symbol.for('string_to_quoted!'), 2), new ElixirScript.Core.Tuple(Symbol.for('unload_files'), 1), new ElixirScript.Core.Tuple(Symbol.for('unrequire_files'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [324806596900645818656330919637633977154])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/code.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(140), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(223), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(66))], [Symbol.for('module'), Symbol.for('Elixir.Code')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Code'),
    __info__
};
