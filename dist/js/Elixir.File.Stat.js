'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $File$Stat$ from './Elixir.File.Stat.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 0), new ElixirScript.Core.Tuple(Symbol.for('__struct__'), 1), new ElixirScript.Core.Tuple(Symbol.for('from_record'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_record'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [5554628403641561367396431227113269314])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/file/stat.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(45), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.integer(12), ElixirScript.Core.BitString.integer(244), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(73), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(226), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(243), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(66))], [Symbol.for('module'), Symbol.for('Elixir.File.Stat')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __struct__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return new Map([[Symbol.for('__struct__'), $File$Stat$], [Symbol.for('access'), null], [Symbol.for('atime'), null], [Symbol.for('ctime'), null], [Symbol.for('gid'), null], [Symbol.for('inode'), null], [Symbol.for('links'), null], [Symbol.for('major_device'), null], [Symbol.for('minor_device'), null], [Symbol.for('mode'), null], [Symbol.for('mtime'), null], [Symbol.for('size'), null], [Symbol.for('type'), null], [Symbol.for('uid'), null]]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('kv576460752303259743')], __function_args__, (kv5764607523032597430) => {
            return true;
        })) !== null) {
            let [kv5764607523032597430] = __arg_matches__;

            return $Enum$.reduce(kv5764607523032597430, new Map([[Symbol.for('__struct__'), $File$Stat$], [Symbol.for('access'), null], [Symbol.for('atime'), null], [Symbol.for('ctime'), null], [Symbol.for('gid'), null], [Symbol.for('inode'), null], [Symbol.for('links'), null], [Symbol.for('major_device'), null], [Symbol.for('minor_device'), null], [Symbol.for('mode'), null], [Symbol.for('mtime'), null], [Symbol.for('size'), null], [Symbol.for('type'), null], [Symbol.for('uid'), null]]), (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key576460752303259743'), ElixirScript.Core.Patterns.variable('val576460752303259743')]
                    }), ElixirScript.Core.Patterns.variable('map576460752303259743')], __function_args__, (key5764607523032597430, val5764607523032597430, map5764607523032597430) => {
                        return true;
                    })) !== null) {
                        let [key5764607523032597430, val5764607523032597430, map5764607523032597430] = __arg_matches__;

                        return ElixirScript.Core.maps.update(key5764607523032597430, val5764607523032597430, map5764607523032597430);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function from_record(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('file_info'), ElixirScript.Core.Patterns.variable('size'), ElixirScript.Core.Patterns.variable('type'), ElixirScript.Core.Patterns.variable('access'), ElixirScript.Core.Patterns.variable('atime'), ElixirScript.Core.Patterns.variable('mtime'), ElixirScript.Core.Patterns.variable('ctime'), ElixirScript.Core.Patterns.variable('mode'), ElixirScript.Core.Patterns.variable('links'), ElixirScript.Core.Patterns.variable('major_device'), ElixirScript.Core.Patterns.variable('minor_device'), ElixirScript.Core.Patterns.variable('inode'), ElixirScript.Core.Patterns.variable('uid'), ElixirScript.Core.Patterns.variable('gid')]
        })], __function_args__, (size0, type0, access0, atime0, mtime0, ctime0, mode0, links0, major_device0, minor_device0, inode0, uid0, gid0) => {
            return true;
        })) !== null) {
            let [size0, type0, access0, atime0, mtime0, ctime0, mode0, links0, major_device0, minor_device0, inode0, uid0, gid0] = __arg_matches__;

            return $File$Stat$.__struct__(new Map([[Symbol.for('size'), size0], [Symbol.for('type'), type0], [Symbol.for('access'), access0], [Symbol.for('atime'), atime0], [Symbol.for('mtime'), mtime0], [Symbol.for('ctime'), ctime0], [Symbol.for('mode'), mode0], [Symbol.for('links'), links0], [Symbol.for('major_device'), major_device0], [Symbol.for('minor_device'), minor_device0], [Symbol.for('inode'), inode0], [Symbol.for('uid'), uid0], [Symbol.for('gid'), gid0]]));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __struct__,
    from_record,
    __MODULE__: Symbol.for('Elixir.File.Stat'),
    __info__
};
