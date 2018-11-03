'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Map$ from './Elixir.Map.js';

import $Protobuf$Field$ from './Elixir.Protobuf.Field.js';

import $Protobuf$OneOfField$ from './Elixir.Protobuf.OneOfField.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('convert_from_record'), 2), new ElixirScript.Core.Tuple(Symbol.for('convert_to_record'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [331640358945086447580477915532943285248])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/deps/exprotobuf/lib/exprotobuf/utils.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(249), ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(110), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(37), ElixirScript.Core.BitString.integer(232), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(26), ElixirScript.Core.BitString.integer(27), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(0))], [Symbol.for('module'), Symbol.for('Elixir.Protobuf.Utils')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function convert_from_record(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('rec'), ElixirScript.Core.Patterns.variable('module')], __function_args__, (rec0, module0) => {
            return true;
        })) !== null) {
            let [rec0, module0] = __arg_matches__;

            const [map0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('map'), $Kernel$.struct(module0));

            return $Enum$.reduce($Enum$.with_index(ElixirScript.Core.Functions.call_property(module0, 'record')), map0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('_default')]
                        }), ElixirScript.Core.Patterns.variable('idx')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (key0, _default0, idx0, acc0) => {
                        return true;
                    })) !== null) {
                        let [key0, _default0, idx0, acc0] = __arg_matches__;

                        const [value0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('value'), ElixirScript.Core.erlang.element(idx0 + 1 + 1, rec0));

                        return ElixirScript.Core.maps.put(key0, value0, acc0);
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

function convert_to_record(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('map'), ElixirScript.Core.Patterns.variable('module')], __function_args__, (map0, module0) => {
            return true;
        })) !== null) {
            let [map0, module0] = __arg_matches__;

            return ElixirScript.Core.erlang.list_to_tuple($Enum$.reverse($Enum$.reduce(ElixirScript.Core.Functions.call_property(module0, 'record'), [record_name(module0)], (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('default')]
                    }), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (key0, __default__0, acc0) => {
                        return true;
                    })) !== null) {
                        let [key0, __default__0, acc0] = __arg_matches__;

                        const [value0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('value'), $Map$.get(map0, key0, __default__0));

                        return ElixirScript.Core.Functions.concat(value_transform(module0, value0), acc0);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            })));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function record_name(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([$Protobuf$OneOfField$], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('gpb_oneof');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([$Protobuf$Field$], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('field');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('type')], __function_args__, (type0) => {
            return true;
        })) !== null) {
            let [type0] = __arg_matches__;

            return type0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function value_transform(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_module'), null], __function_args__, (_module0) => {
            return true;
        })) !== null) {
            let [_module0] = __arg_matches__;

            return Symbol.for('undefined');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([$Protobuf$OneOfField$, ElixirScript.Core.Patterns.variable('value')], __function_args__, (value0) => {
            return ElixirScript.Core.erlang.is_list(value0);
        })) !== null) {
            let [value0] = __arg_matches__;

            return $Enum$.map(value0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x10) => {
                        return true;
                    })) !== null) {
                        let [x10] = __arg_matches__;

                        return convert_to_record(x10, $Protobuf$Field$);
                    }

                    throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                }

                return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
            });
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_module'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (_module0, value0) => {
            return true;
        })) !== null) {
            let [_module0, value0] = __arg_matches__;

            return value0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    convert_from_record,
    convert_to_record,
    __MODULE__: Symbol.for('Elixir.Protobuf.Utils'),
    __info__
};
