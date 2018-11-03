'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$List$ from './Elixir.Inspect.List.js';

import $List$ from './Elixir.List.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $IO$ from './Elixir.IO.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2), new ElixirScript.Core.Tuple(Symbol.for('keyword'), 2), new ElixirScript.Core.Tuple(Symbol.for('keyword?'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [291810044686555609800748703027991418661]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), $List$)])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(102), ElixirScript.Core.BitString.integer(75), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(23), ElixirScript.Core.BitString.integer(37))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.List')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __impl__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('for')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $List$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$List$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.variable('opts')], __function_args__, (opts0) => {
            return true;
        })) !== null) {
            let [opts0] = __arg_matches__;

            return $Inspect$Algebra$.color('[]', Symbol.for('list'), opts0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (term0, opts0) => {
            return true;
        })) !== null) {
            let [term0, opts0] = __arg_matches__;

            const [lists0, lists_deprecated0, printable_limit0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('__struct__'), {
                __MODULE__: Symbol.for('Elixir.Inspect.Opts')
            }], [Symbol.for('charlists'), ElixirScript.Core.Patterns.variable('lists')], [Symbol.for('char_lists'), ElixirScript.Core.Patterns.variable('lists_deprecated')], [Symbol.for('printable_limit'), ElixirScript.Core.Patterns.variable('printable_limit')]]), opts0);

            const [lists1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('lists'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return lists0;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([Symbol.for('as_char_lists')], () => {
                    $IO$.warn('the :char_lists inspect option and its :as_char_lists ' + ('value are deprecated, use the :charlists option and its ' + ':as_charlists value instead'))

                    return Symbol.for('as_charlists');
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    $IO$.warn('the :char_lists inspect option is deprecated, use :charlists instead')

                    return lists_deprecated0;
                }, () => {
                    return true;
                })).call(this, lists_deprecated0);
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return lists_deprecated0 != Symbol.for('infer');
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(lists0, Symbol.for('infer')))));

            const [open0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('open'), $Inspect$Algebra$.color('[', Symbol.for('list'), opts0));

            const [sep0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('sep'), $Inspect$Algebra$.color(',', Symbol.for('list'), opts0));

            const [close0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('close'), $Inspect$Algebra$.color(']', Symbol.for('list'), opts0));

            return ElixirScript.Core.SpecialForms.cond([ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return false;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return $List$.ascii_printable__qmark__(term0, printable_limit0);
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.equals(lists1, Symbol.for('infer')));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return true;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(lists1, Symbol.for('as_charlists'))), () => {
                const [inspected0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inspected'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('escaped'), '']
                })], (escaped0) => {
                    return [39, escaped0, 39];
                }, (escaped0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('escaped'), ElixirScript.Core.Patterns.variable('_')]
                })], (escaped0) => {
                    return [39, escaped0, 39, ' ++ ...'];
                }, (escaped0) => {
                    return true;
                })).call(this, $Code$Identifier$.escape($IO$.chardata_to_string(term0), 39, printable_limit0)));

                return ElixirScript.Core.erlang.iolist_to_binary(inspected0);
            }], [keyword__qmark__(term0), () => {
                return $Inspect$Algebra$.container_doc(open0, term0, close0, opts0, keyword, [new ElixirScript.Core.Tuple(Symbol.for('separator'), sep0), new ElixirScript.Core.Tuple(Symbol.for('break'), Symbol.for('strict'))]);
            }], [true, () => {
                return $Inspect$Algebra$.container_doc(open0, term0, close0, opts0, $Inspect$Algebra$.to_doc, [new ElixirScript.Core.Tuple(Symbol.for('separator'), sep0)]);
            }]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function keyword(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')]
        }), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (key0, value0, opts0) => {
            return true;
        })) !== null) {
            let [key0, value0, opts0] = __arg_matches__;

            const [key1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('key'), $Inspect$Algebra$.color($Code$Identifier$.inspect_as_key(key0), Symbol.for('atom'), opts0));

            return $Inspect$Algebra$.concat(key1, $Inspect$Algebra$.concat(' ', $Inspect$Algebra$.to_doc(value0, opts0)));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function keyword__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('_value')]
        }), ElixirScript.Core.Patterns.variable('rest'))], __function_args__, (key0, _value0, rest0) => {
            return ElixirScript.Core.erlang.is_atom(key0);
        })) !== null) {
            let [key0, _value0, rest0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.headTail([69, 108, 105, 120, 105, 114, 46], ElixirScript.Core.Patterns.variable('_'))], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, rest0));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.atom_to_list(key0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[]], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_other')], __function_args__, (_other0) => {
            return true;
        })) !== null) {
            let [_other0] = __arg_matches__;

            return false;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    keyword,
    keyword__qmark__,
    __MODULE__: Symbol.for('Elixir.Inspect.List'),
    __info__
};
