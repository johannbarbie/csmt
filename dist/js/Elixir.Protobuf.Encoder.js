'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Protobuf$Utils$ from './Elixir.Protobuf.Utils.js';

import $Protobuf$Field$ from './Elixir.Protobuf.Field.js';

import $Protobuf$OneOfField$ from './Elixir.Protobuf.OneOfField.js';

import $Enum$ from './Elixir.Enum.js';

import $Collectable$ from './Elixir.Collectable.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('encode'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [30456892242350694471272389709467098798])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/deps/exprotobuf/lib/exprotobuf/encoder.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(185), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(49), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(15), ElixirScript.Core.BitString.integer(126), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(174))], [Symbol.for('module'), Symbol.for('Elixir.Protobuf.Encoder')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function encode(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([])), ElixirScript.Core.Patterns.variable('defs')], __function_args__, (msg0, defs0) => {
            return true;
        })) !== null) {
            let [msg0, defs0] = __arg_matches__;

            const [fixed_defs0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('fixed_defs'), ElixirScript.Core.SpecialForms._for(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('type'), ElixirScript.Core.Patterns.variable('mod')]
                }), ElixirScript.Core.Patterns.variable('fields')]
            })], (type0, mod0, fields0) => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('msg')], () => {
                    return new ElixirScript.Core.Tuple(new ElixirScript.Core.Tuple(Symbol.for('msg'), mod), $Enum$.map(fields, (...__function_args__) => {
                        function recur(...__function_args__) {
                            let __arg_matches__ = null;

                            if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('field')], __function_args__, (field0) => {
                                return true;
                            })) !== null) {
                                let [field0] = __arg_matches__;

                                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([new Map([[Symbol.for('__struct__'), {
                                    __MODULE__: Symbol.for('Elixir.Protobuf.OneOfField')
                                }]])], () => {
                                    return $Protobuf$Utils$.convert_to_record(field0, $Protobuf$OneOfField$);
                                }, () => {
                                    return true;
                                }), ElixirScript.Core.Patterns.clause([new Map([[Symbol.for('__struct__'), {
                                    __MODULE__: Symbol.for('Elixir.Protobuf.Field')
                                }]])], () => {
                                    return $Protobuf$Utils$.convert_to_record(field0, $Protobuf$Field$);
                                }, () => {
                                    return true;
                                })).call(this, field0);
                            }

                            throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                        }

                        return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                    }));
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('type')], (type0) => {
                    return new ElixirScript.Core.Tuple(new ElixirScript.Core.Tuple(type0, mod), fields);
                }, (type0) => {
                    return type0 === Symbol.for('extensions') || (type0 === Symbol.for('service') || (type0 === Symbol.for('group') || type0 === Symbol.for('enum')));
                })).call(this, type);
            }, () => {
                return true;
            }), [ElixirScript.Core.Patterns.list_generator(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('type'), ElixirScript.Core.Patterns.variable('mod')]
                }), ElixirScript.Core.Patterns.variable('fields')]
            }), defs0)], Collectable, []));

            return gpb.encode_msg($Protobuf$Utils$.convert_to_record(fix_undefined(msg0), ElixirScript.Core.Functions.call_property(msg0, '__struct__')), fixed_defs0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function fix_undefined(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([]))], __function_args__, (msg0) => {
            return true;
        })) !== null) {
            let [msg0] = __arg_matches__;

            return $Enum$.reduce(ElixirScript.Core.maps.keys(msg0), msg0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('field'), ElixirScript.Core.Patterns.variable('msg')], __function_args__, (field0, msg1) => {
                        return true;
                    })) !== null) {
                        let [field0, msg1] = __arg_matches__;

                        const [original0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('original'), $Map$.get(msg1, field0));

                        const [fixed0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('fixed'), fix_value(original0));

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                            return msg1;
                        }, () => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([true], () => {
                            return ElixirScript.Core.maps.put(field0, fixed0, msg1);
                        }, () => {
                            return true;
                        })).call(this, original0 != fixed0);
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

function fix_value(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([null], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('undefined');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('values')], __function_args__, (values0) => {
            return ElixirScript.Core.erlang.is_list(values0);
        })) !== null) {
            let [values0] = __arg_matches__;

            return $Enum$.map(values0, fix_value);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('value')], __function_args__, (value0) => {
            return ElixirScript.Core.erlang.is_map(value0);
        })) !== null) {
            let [value0] = __arg_matches__;

            return $Protobuf$Utils$.convert_to_record(fix_undefined(value0), ElixirScript.Core.Functions.call_property(value0, '__struct__'));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('value')], __function_args__, (value0) => {
            return ElixirScript.Core.erlang.is_tuple(value0);
        })) !== null) {
            let [value0] = __arg_matches__;

            return ElixirScript.Core.erlang.list_to_tuple($Enum$.map(ElixirScript.Core.erlang.tuple_to_list(value0), fix_value));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('value')], __function_args__, (value0) => {
            return true;
        })) !== null) {
            let [value0] = __arg_matches__;

            return value0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    encode,
    __MODULE__: Symbol.for('Elixir.Protobuf.Encoder'),
    __info__
};
