'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Protobuf$Utils$ from './Elixir.Protobuf.Utils.js';

import $Protobuf$OneOfField$ from './Elixir.Protobuf.OneOfField.js';

import $Collectable$ from './Elixir.Collectable.js';

import $Protobuf$Field$ from './Elixir.Protobuf.Field.js';

import $Map$ from './Elixir.Map.js';

import $Enum$ from './Elixir.Enum.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('decode'), 2), new ElixirScript.Core.Tuple(Symbol.for('varint'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [327621047289245325688443329834069883759])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/deps/exprotobuf/lib/exprotobuf/decoder.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(132), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(101), ElixirScript.Core.BitString.integer(66), ElixirScript.Core.BitString.integer(68), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(241), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(111))], [Symbol.for('module'), Symbol.for('Elixir.Protobuf.Decoder')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function convert_field(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('value'), ElixirScript.Core.Patterns.variable('msg'), new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Protobuf.Field')
        }], [Symbol.for('name'), ElixirScript.Core.Patterns.variable('field')], [Symbol.for('type'), ElixirScript.Core.Patterns.variable('type')], [Symbol.for('occurrence'), ElixirScript.Core.Patterns.variable('occurrence')]])], __function_args__, (value0, msg0, field0, type0, occurrence0) => {
            return true;
        })) !== null) {
            let [value0, msg0, field0, type0, occurrence0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('repeated'), ElixirScript.Core.Patterns.variable('_')]
            })], () => {
                const [value1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('value'), ElixirScript.Core.SpecialForms._for(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('v')], (v0) => {
                    return convert_value(type0, v);
                }, () => {
                    return true;
                }), [ElixirScript.Core.Patterns.list_generator(ElixirScript.Core.Patterns.variable('v'), value0)], Collectable, []));

                return ElixirScript.Core.maps.put(field0, value1, msg0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_'), Symbol.for('string')]
            })], () => {
                return ElixirScript.Core.maps.put(field0, convert_value(type0, value0), msg0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [Symbol.for('msg'), ElixirScript.Core.Patterns.variable('_')]
                })]
            })], () => {
                return ElixirScript.Core.maps.put(field0, convert_value(type0, value0), msg0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return msg0;
            }, () => {
                return true;
            })).call(this, new ElixirScript.Core.Tuple(occurrence0, type0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('value'), ElixirScript.Core.Patterns.variable('msg'), new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Protobuf.OneOfField')
        }], [Symbol.for('name'), ElixirScript.Core.Patterns.variable('field')]])], __function_args__, (value0, msg0, field0) => {
            return true;
        })) !== null) {
            let [value0, msg0, field0] = __arg_matches__;

            const [key0, inner_value0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('inner_value')]
            }), value0);

            const _ref6120726 = new ElixirScript.Core.Tuple(key0, inner_value0);

            return ElixirScript.Core.SpecialForms.cond([ElixirScript.Core.erlang.is_tuple(inner_value0), () => {
                const [module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('module'), ElixirScript.Core.erlang.element(1, inner_value0));

                const [converted_value0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('converted_value'), new ElixirScript.Core.Tuple(key0, convert_fields($Protobuf$Utils$.convert_from_record(inner_value0, module0))));

                return ElixirScript.Core.maps.put(field0, converted_value0, msg0);
            }], [ElixirScript.Core.erlang.is_list(inner_value0), () => {
                return ElixirScript.Core.maps.put(field0, new ElixirScript.Core.Tuple(key0, convert_value(Symbol.for('string'), inner_value0)), msg0);
            }], [true, () => {
                return ElixirScript.Core.maps.put(field0, value0, msg0);
            }]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function convert_fields(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('msg')], __function_args__, (msg0) => {
            return true;
        })) !== null) {
            let [msg0] = __arg_matches__;

            return $Enum$.reduce(ElixirScript.Core.maps.keys(msg0), msg0, (...__function_args__) => {
                function recur(...__function_args__) {
                    let __arg_matches__ = null;

                    if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('__struct__'), ElixirScript.Core.Patterns.variable('msg')], __function_args__, (msg1) => {
                        return true;
                    })) !== null) {
                        let [msg1] = __arg_matches__;

                        return msg1;
                    } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('field'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), ElixirScript.Core.Patterns.variable('module')]]))], __function_args__, (field0, module0, msg1) => {
                        return true;
                    })) !== null) {
                        let [field0, module0, msg1] = __arg_matches__;

                        const [value0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('value'), $Map$.get(msg1, field0));

                        return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                            return convert_field(value0, msg1, module0.defs(Symbol.for('field'), field0));
                        }, () => {
                            return true;
                        }), ElixirScript.Core.Patterns.clause([true], () => {
                            return ElixirScript.Core.maps.put(field0, get_default(ElixirScript.Core.Functions.call_property(module0, 'syntax'), field0, module0), msg1);
                        }, () => {
                            return true;
                        })).call(this, ElixirScript.Core.erlang.equals(value0, Symbol.for('undefined')));
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

function convert_value(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('string'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (value0) => {
            return true;
        })) !== null) {
            let [value0] = __arg_matches__;

            return ElixirScript.Core.unicode.characters_to_binary(value0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('msg'), ElixirScript.Core.Patterns.variable('_')]
        }), ElixirScript.Core.Patterns.variable('value')], __function_args__, (value0) => {
            return true;
        })) !== null) {
            let [value0] = __arg_matches__;

            return convert_fields($Protobuf$Utils$.convert_from_record(value0, ElixirScript.Core.erlang.element(1, value0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('map'), ElixirScript.Core.Patterns.variable('key_type'), ElixirScript.Core.Patterns.variable('value_type')]
        }), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')]
        })], __function_args__, (key_type0, value_type0, key0, value0) => {
            return true;
        })) !== null) {
            let [key_type0, value_type0, key0, value0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(convert_value(key_type0, key0), convert_value(value_type0, value0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (value0) => {
            return true;
        })) !== null) {
            let [value0] = __arg_matches__;

            return value0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function decode(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('bytes'), ElixirScript.Core.Patterns.variable('module')], __function_args__, (bytes0, module0) => {
            return true;
        })) !== null) {
            let [bytes0, module0] = __arg_matches__;

            const [defs0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('defs'), ElixirScript.Core.SpecialForms._for(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
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
                                    __MODULE__: Symbol.for('Elixir.Protobuf.Field')
                                }]])], () => {
                                    return $Protobuf$Utils$.convert_to_record(field0, $Protobuf$Field$);
                                }, () => {
                                    return true;
                                }), ElixirScript.Core.Patterns.clause([new Map([[Symbol.for('__struct__'), {
                                    __MODULE__: Symbol.for('Elixir.Protobuf.OneOfField')
                                }]])], () => {
                                    return $Protobuf$Utils$.convert_to_record(field0, $Protobuf$OneOfField$);
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
            }), ElixirScript.Core.Functions.call_property(module0, 'defs'))], Collectable, []));

            return convert_fields($Protobuf$Utils$.convert_from_record(gpb.decode_msg(bytes0, module0, defs0), module0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get_default(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('proto2'), ElixirScript.Core.Patterns.variable('field'), ElixirScript.Core.Patterns.variable('module')], __function_args__, (field0, module0) => {
            return true;
        })) !== null) {
            let [field0, module0] = __arg_matches__;

            return $Map$.get($Kernel$.struct(module0), field0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('proto3'), ElixirScript.Core.Patterns.variable('field'), ElixirScript.Core.Patterns.variable('module')], __function_args__, (field0, module0) => {
            return true;
        })) !== null) {
            let [field0, module0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([new Map([[Symbol.for('__struct__'), {
                __MODULE__: Symbol.for('Elixir.Protobuf.OneOfField')
            }]])], () => {
                return null;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x')], (x0) => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('string')], () => {
                    return '';
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('ty')], (ty0) => {
                    return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('undefined')], () => {
                        return null;
                    }, () => {
                        return true;
                    }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('default')], (__default__0) => {
                        return __default__0;
                    }, (__default__0) => {
                        return true;
                    })).call(this, gpb.proto3_type_default(ty0, ElixirScript.Core.Functions.call_property(module0, 'defs')));
                }, (ty0) => {
                    return true;
                })).call(this, ElixirScript.Core.Functions.call_property(x0, 'type'));
            }, (x0) => {
                return true;
            })).call(this, module0.defs(Symbol.for('field'), field0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    decode,
    __MODULE__: Symbol.for('Elixir.Protobuf.Decoder'),
    __info__
};
