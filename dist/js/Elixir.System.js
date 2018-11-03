'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Version$ from './Elixir.Version.js';

import $Enum$ from './Elixir.Enum.js';

import $Collectable$ from './Elixir.Collectable.js';

import $Path$ from './Elixir.Path.js';

import $String$ from './Elixir.String.js';

import $IO$ from './Elixir.IO.js';

import $RuntimeError$ from './Elixir.RuntimeError.js';

import $List$ from './Elixir.List.js';

import $Map$ from './Elixir.Map.js';

import $File$ from './Elixir.File.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('argv'), 0), new ElixirScript.Core.Tuple(Symbol.for('argv'), 1), new ElixirScript.Core.Tuple(Symbol.for('at_exit'), 1), new ElixirScript.Core.Tuple(Symbol.for('build_info'), 0), new ElixirScript.Core.Tuple(Symbol.for('cmd'), 2), new ElixirScript.Core.Tuple(Symbol.for('cmd'), 3), new ElixirScript.Core.Tuple(Symbol.for('compiled_endianness'), 0), new ElixirScript.Core.Tuple(Symbol.for('convert_time_unit'), 3), new ElixirScript.Core.Tuple(Symbol.for('cwd'), 0), new ElixirScript.Core.Tuple(Symbol.for('cwd!'), 0), new ElixirScript.Core.Tuple(Symbol.for('delete_env'), 1), new ElixirScript.Core.Tuple(Symbol.for('endianness'), 0), new ElixirScript.Core.Tuple(Symbol.for('find_executable'), 1), new ElixirScript.Core.Tuple(Symbol.for('get_env'), 0), new ElixirScript.Core.Tuple(Symbol.for('get_env'), 1), new ElixirScript.Core.Tuple(Symbol.for('get_pid'), 0), new ElixirScript.Core.Tuple(Symbol.for('halt'), 0), new ElixirScript.Core.Tuple(Symbol.for('halt'), 1), new ElixirScript.Core.Tuple(Symbol.for('monotonic_time'), 0), new ElixirScript.Core.Tuple(Symbol.for('monotonic_time'), 1), new ElixirScript.Core.Tuple(Symbol.for('os_time'), 0), new ElixirScript.Core.Tuple(Symbol.for('os_time'), 1), new ElixirScript.Core.Tuple(Symbol.for('otp_release'), 0), new ElixirScript.Core.Tuple(Symbol.for('put_env'), 1), new ElixirScript.Core.Tuple(Symbol.for('put_env'), 2), new ElixirScript.Core.Tuple(Symbol.for('schedulers'), 0), new ElixirScript.Core.Tuple(Symbol.for('schedulers_online'), 0), new ElixirScript.Core.Tuple(Symbol.for('stacktrace'), 0), new ElixirScript.Core.Tuple(Symbol.for('stop'), 0), new ElixirScript.Core.Tuple(Symbol.for('stop'), 1), new ElixirScript.Core.Tuple(Symbol.for('system_time'), 0), new ElixirScript.Core.Tuple(Symbol.for('system_time'), 1), new ElixirScript.Core.Tuple(Symbol.for('time_offset'), 0), new ElixirScript.Core.Tuple(Symbol.for('time_offset'), 1), new ElixirScript.Core.Tuple(Symbol.for('tmp_dir'), 0), new ElixirScript.Core.Tuple(Symbol.for('tmp_dir!'), 0), new ElixirScript.Core.Tuple(Symbol.for('unique_integer'), 0), new ElixirScript.Core.Tuple(Symbol.for('unique_integer'), 1), new ElixirScript.Core.Tuple(Symbol.for('user_home'), 0), new ElixirScript.Core.Tuple(Symbol.for('user_home!'), 0), new ElixirScript.Core.Tuple(Symbol.for('version'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [322728747415063566663872086338431536177])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/system.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(75), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(86), ElixirScript.Core.BitString.integer(9), ElixirScript.Core.BitString.integer(38), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(49))], [Symbol.for('module'), Symbol.for('Elixir.System')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.System'),
    __info__
};
