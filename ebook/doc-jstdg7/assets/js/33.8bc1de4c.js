(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{347:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"第-2-章-词法结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-2-章-词法结构"}},[e._v("#")]),e._v(" 第 2 章 词法结构")]),e._v(" "),t("blockquote",[t("p",[e._v("Chapter 2. Lexical Structure")])]),e._v(" "),t("p",[e._v("The lexical structure of a programming language is the set of elementary rules that specifies how you write programs in that language. It is the lowest-level syntax of a language: it specifies what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next, for example. This short chapter documents the lexical structure of JavaScript. It covers:")]),e._v(" "),t("blockquote",[t("p",[e._v("编程语言的词法结构是一组基本规则，用于指定如何用该语言编写程序。它是一种语言的最低层次语法：例如，它指定变量名的样子，注释的分隔符字符，以及一个程序语句如何与下一个程序语句分隔。这个简短的章节描述了 JavaScript 的词法结构。它涵盖了：")])]),e._v(" "),t("ul",[t("li",[e._v("Case sensitivity, spaces, and line breaks")]),e._v(" "),t("li",[e._v("Comments")]),e._v(" "),t("li",[e._v("Literals")]),e._v(" "),t("li",[e._v("Identifiers and reserved words")]),e._v(" "),t("li",[e._v("Unicode")]),e._v(" "),t("li",[e._v("Optional semicolons")])]),e._v(" "),t("h2",{attrs:{id:"_2-1-javascript-程序的文本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-javascript-程序的文本"}},[e._v("#")]),e._v(" 2.1 JavaScript 程序的文本")]),e._v(" "),t("blockquote",[t("p",[e._v("2.1 The Text of a JavaScript Program")])]),e._v(" "),t("p",[e._v("JavaScript is a case-sensitive language. This means that language keywords, variables, function names, and other identifiers must always be typed with a consistent capitalization of letters. The while keyword, for example, must be typed “while,” not “While” or “WHILE.” Similarly, online, Online, OnLine, and ONLINE are four distinct variable names.")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 是一种区分大小写的语言。这意味着语言关键字、变量、函数名和其他标识符必须始终以一致的大小写输入。例如，while 关键字必须输入“while”，而不是“While”或“WHILE”。同样，online, Online，OnLine 和 ONLINE 是四个不同的变量名。")])]),e._v(" "),t("p",[e._v("JavaScript ignores spaces that appear between tokens in programs. For the most part, JavaScript also ignores line breaks (but see §2.6 for an exception). Because you can use spaces and newlines freely in your programs, you can format and indent your programs in a neat and consistent way that makes the code easy to read and understand.")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 忽略程序中标记之间出现的空格。在大多数情况下，JavaScript 也会忽略换行符（但是，关于一个例外，请参阅 §2.6）。由于您可以在程序中自由地使用空格和换行符，因此您可以以一种整洁和一致的方式对程序进行格式化和缩进，从而使代码易于阅读和理解。")])]),e._v(" "),t("p",[e._v("In addition to the regular space character ("),t("code",[e._v("\\u0020")]),e._v("), JavaScript also recognizes tabs, assorted ASCII control characters, and various Unicode space characters as whitespace. JavaScript recognizes newlines, carriage returns, and a carriage return/line feed sequence as line terminators.")]),e._v(" "),t("blockquote",[t("p",[e._v("除了常规的空格字符（"),t("code",[e._v("\\u0020")]),e._v("）之外，JavaScript 还将制表符、各种 ASCII 控制字符和各种 Unicode 空格字符识别为空格。JavaScript 识别换行符、回车符和回车/换行序列作为行结束符。")])]),e._v(" "),t("h2",{attrs:{id:"_2-2-注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-注释"}},[e._v("#")]),e._v(" 2.2 注释")]),e._v(" "),t("blockquote",[t("p",[e._v("2.2 Comments")])]),e._v(" "),t("p",[e._v("JavaScript supports two styles of comments. Any text between a "),t("code",[e._v("//")]),e._v(" and the end of a line is treated as a comment and is ignored by JavaScript. Any text between the characters "),t("code",[e._v("/*")]),e._v(" and "),t("code",[e._v("*/")]),e._v(" is also treated as a comment; these comments may span multiple lines but may not be nested. The following lines of code are all legal JavaScript comments:")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 支持两种风格的注释。在 "),t("code",[e._v("//")]),e._v(" 和行尾之间的任何文本都被 JavaScript 视为注释并被忽略。字符 "),t("code",[e._v("/*")]),e._v(" 和 "),t("code",[e._v("*/")]),e._v(" 之间的任何文本也被视为注释；这些注释可能跨越多行，但可能不是嵌套的。下面几行代码都是合法的 JavaScript 注释：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This is a single-line comment.")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* This is also a comment */")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// and here is another comment.")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*\n * This is a multi-line comment. The extra * characters at the start of\n * each line are not a required part of the syntax; they just look cool!\n */")]),e._v("\n")])])]),t("h2",{attrs:{id:"_2-3-字面量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-字面量"}},[e._v("#")]),e._v(" 2.3 字面量")]),e._v(" "),t("blockquote",[t("p",[e._v("2.3 Literals")])]),e._v(" "),t("p",[e._v("A literal is a data value that appears directly in a program. The following are all literals:")]),e._v(" "),t("blockquote",[t("p",[e._v("字面量是直接出现在程序中的数据值。以下都是字面量：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The number twelve")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.2")]),e._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The number one point two")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello world"')]),e._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// A string of text")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hi'")]),e._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Another string")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// A Boolean value")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The other Boolean value")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Absence of an object")]),e._v("\n")])])]),t("p",[e._v("Complete details on numeric and string literals appear in Chapter 3.")]),e._v(" "),t("blockquote",[t("p",[e._v("数值和字符串字面量的完整细节出现在第 3 章。")])]),e._v(" "),t("h2",{attrs:{id:"_2-4-标识符和保留字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-标识符和保留字"}},[e._v("#")]),e._v(" 2.4 标识符和保留字")]),e._v(" "),t("blockquote",[t("p",[e._v("2.4 Identifiers and Reserved Words")])]),e._v(" "),t("p",[e._v("An identifier is simply a name. In JavaScript, identifiers are used to name constants, variables, properties, functions, and classes and to provide labels for certain loops in JavaScript code. A JavaScript identifier must begin with a letter, an underscore ("),t("code",[e._v("_")]),e._v("), or a dollar sign ("),t("code",[e._v("$")]),e._v("). Subsequent characters can be letters, digits, underscores, or dollar signs. (Digits are not allowed as the first character so that JavaScript can easily distinguish identifiers from numbers.) These are all legal identifiers:")]),e._v(" "),t("blockquote",[t("p",[e._v("标识符只是一个名称。在 JavaScript 中，标识符用于命名常量、变量、属性、函数和类，并为 JavaScript 代码中的某些循环提供标签。JavaScript 标识符必须以字母、下划线（"),t("code",[e._v("_")]),e._v("）或美元符号（"),t("code",[e._v("$")]),e._v("）开头。后面的字符可以是字母、数字、下划线或美元符号。（数字不允许作为第一个字符，这样 JavaScript 可以很容易地将标识符与数字区分开来。）这些都是合法的标识符：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("i\nmy_variable_name\nv13\n_dummy\n$str\n")])])]),t("p",[e._v("Like any language, JavaScript reserves certain identifiers for use by the language itself. These “reserved words” cannot be used as regular identifiers. They are listed in the next section.")]),e._v(" "),t("blockquote",[t("p",[e._v("与任何语言一样，JavaScript 保留某些标识符供语言本身使用。这些“保留字”不能用作常规标识符。它们将在下一节中列出。")])]),e._v(" "),t("h3",{attrs:{id:"_2-4-1-保留字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-保留字"}},[e._v("#")]),e._v(" 2.4.1 保留字")]),e._v(" "),t("blockquote",[t("p",[e._v("2.4.1 Reserved Words")])]),e._v(" "),t("p",[e._v("The following words are part of the JavaScript language. Many of these (such as if, while, and for) are reserved keywords that must not be used as the names of constants, variables, functions, or classes (though they can all be used as the names of properties within an object). Others (such as from, of, get, and set) are used in limited contexts with no syntactic ambiguity and are perfectly legal as identifiers. Still other keywords (such as let) can’t be fully reserved in order to retain backward compatibility with older programs, and so there are complex rules that govern when they can be used as identifiers and when they cannot. (let can be used as a variable name if declared with var outside of a class, for example, but not if declared inside a class or with const.) The simplest course is to avoid using any of these words as identifiers, except for from, set, and target, which are safe to use and are already in common use.")]),e._v(" "),t("blockquote",[t("p",[e._v("下面的单词是 JavaScript 语言的一部分。其中许多（如 if、while 和 for）是保留的关键字，不能用作常量、变量、函数或类的名称（尽管它们都可以用作对象中的属性名称）。其他的（如 from、of、get 和 set）则在有限的上下文中使用，没有语法歧义，作为标识符完全合法。还有一些关键字（比如let）不能被完全保留，以保持与旧程序的向后兼容性，因此有复杂的规则来管理何时可以将它们用作标识符，何时不能。（例如，如果在类外部用 var 声明，let 就可以用作变量名，但如果在类内部或用 const 声明，let 就不能用作变量名。）最简单的方法是避免使用这些词作为标识符，除了 from、set 和 target 之外，这些词使用起来很安全，而且已经很常用了。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("as      const      export     get         null     target   void\nasync   continue   extends    if          of       this     while\nawait   debugger   false      import      return   throw    with\nbreak   default    finally    in          set      true     yield\ncase    delete     for        instanceof  static   try\ncatch   do         from       let         super    typeof\nclass   else       function   new         switch   var\n")])])]),t("p",[e._v("JavaScript also reserves or restricts the use of certain keywords that are not currently used by the language but that might be used in future versions:")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 还保留或限制使用某些关键字，目前没有使用的语言，但可能会在未来的版本：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("enum  implements  interface  package  private  protected  public\n")])])]),t("p",[e._v("For historical reasons, arguments and eval are not allowed as identifiers in certain circumstances and are best avoided entirely.")]),e._v(" "),t("blockquote",[t("p",[e._v("由于历史原因，参数和 eval 在某些情况下不允许作为标识符，最好完全避免使用。")])]),e._v(" "),t("h2",{attrs:{id:"_2-5-unicode-字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-unicode-字符"}},[e._v("#")]),e._v(" 2.5 Unicode 字符")]),e._v(" "),t("blockquote",[t("p",[e._v("2.5 Unicode")])]),e._v(" "),t("p",[e._v("JavaScript programs are written using the Unicode character set, and you can use any Unicode characters in strings and comments. For portability and ease of editing, it is common to use only ASCII letters and digits in identifiers. But this is a programming convention only, and the language allows Unicode letters, digits, and ideographs (but not emojis) in identifiers. This means that programmers can use mathematical symbols and words from non-English languages as constants and variables:")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 程序是使用 Unicode 字符集编写的，您可以在字符串和注释中使用任何 Unicode 字符。为了便于移植和编辑，通常在标识符中只使用 ASCII 字母和数字。但这只是一种编程约定，该语言允许在标识符中使用 Unicode 字母、数字和表意文字（但不允许使用表情符号）。这意味着程序员可以使用来自非英语语言的数学符号和单词作为常量和变量：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" π "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.14")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" sí "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h3",{attrs:{id:"_2-5-1-unicode-转义序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-unicode-转义序列"}},[e._v("#")]),e._v(" 2.5.1 Unicode 转义序列")]),e._v(" "),t("blockquote",[t("p",[e._v("2.5.1 Unicode Escape Sequences")])]),e._v(" "),t("p",[e._v("Some computer hardware and software cannot display, input, or correctly process the full set of Unicode characters. To support programmers and systems using older technology, JavaScript defines escape sequences that allow us to write Unicode characters using only ASCII characters. These Unicode escapes begin with the characters "),t("code",[e._v("\\u")]),e._v(" and are either followed by exactly four hexadecimal digits (using uppercase or lowercase letters A–F) or by one to six hexadecimal digits enclosed within curly braces. These Unicode escapes may appear in JavaScript string literals, regular expression literals, and identifiers (but not in language keywords). The Unicode escape for the character “"),t("code",[e._v("é,")]),e._v("” for example, is "),t("code",[e._v("\\u00E9")]),e._v("; here are three different ways to write a variable name that includes this character:")]),e._v(" "),t("blockquote",[t("p",[e._v("一些计算机硬件和软件不能显示、输入或正确处理完整的 Unicode 字符集。为了支持使用较旧技术的程序员和系统，JavaScript 定义了转义序列，允许我们仅使用 ASCII 字符编写 Unicode 字符。这些 Unicode 转义以字符 "),t("code",[e._v("\\u")]),e._v(" 开始，后跟四个十六进制数字（使用大写或小写字母A-F），或者用大括号括起来的一到六个十六进制数字。这些 Unicode 转义可能以 JavaScript 字符串、正则表达式和标识符的形式出现（但不会以语言关键字的形式出现）。例如，Unicode 字符 “"),t("code",[e._v("é,")]),e._v("” 的转义是"),t("code",[e._v("\\u00E9")]),e._v("；这里有三种不同的方式来写一个变量名，包括这个字符：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" café "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Define a variable using a Unicode character")]),e._v("\ncaf\\u00e9     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// => 1; access the variable using an escape sequence")]),e._v("\ncaf\\u"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("E9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// => 1; another form of the same escape sequence")]),e._v("\n")])])]),t("p",[e._v("Early versions of JavaScript only supported the four-digit escape sequence. The version with curly braces was introduced in ES6 to better support Unicode codepoints that require more than 16 bits, such as emoji:")]),e._v(" "),t("blockquote",[t("p",[e._v("早期版本的 JavaScript 只支持四位数转义序列。带花括号的版本是在 ES6 中引入的，目的是为了更好地支持需要超过16位元的 Unicode 码点，比如表情符号:")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\u{1F600}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Prints a smiley face emoji")]),e._v("\n")])])]),t("p",[e._v("Unicode escapes may also appear in comments, but since comments are ignored, they are simply treated as ASCII characters in that context and not interpreted as Unicode.")]),e._v(" "),t("blockquote",[t("p",[e._v("Unicode 转义也可能出现在注释中，但是由于注释被忽略，因此它们在该上下文中只是作为 ASCII 字符处理，而不是解释为 Unicode。")])]),e._v(" "),t("h3",{attrs:{id:"_2-5-2-unicode-规范化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-unicode-规范化"}},[e._v("#")]),e._v(" 2.5.2 Unicode 规范化")]),e._v(" "),t("blockquote",[t("p",[e._v("2.5.2 Unicode Normalization")])]),e._v(" "),t("p",[e._v("If you use non-ASCII characters in your JavaScript programs, you must be aware that Unicode allows more than one way of encoding the same character. The string “"),t("code",[e._v("é,")]),e._v("” for example, can be encoded as the single Unicode character "),t("code",[e._v("\\u00E9")]),e._v(" or as a regular ASCII “"),t("code",[e._v("e")]),e._v("” followed by the acute accent combining mark "),t("code",[e._v("\\u0301")]),e._v(". These two encodings typically look exactly the same when displayed by a text editor, but they have different binary encodings, meaning that they are considered different by JavaScript, which can lead to very confusing programs:")]),e._v(" "),t("blockquote",[t("p",[e._v("如果在 JavaScript 程序中使用非 ASCII 字符，则必须知道 Unicode 允许对同一字符进行多种编码方式。例如，字符串 “"),t("code",[e._v("é,")]),e._v("” 可以编码为单个Unicode字符 "),t("code",[e._v("\\u00E9")]),e._v("，或编码为后面跟着急性重音组合标记 "),t("code",[e._v("\\u0301")]),e._v(" 的正则ASCII “"),t("code",[e._v("e")]),e._v("”。这两种编码在文本编辑器中显示时看起来是完全一样的，但是它们有不同的二进制编码，这意味着它们被 JavaScript  认为是不同的，这可能会导致非常混乱的程序:")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" café "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// This constant is named "caf\\u{e9}"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" café "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// This constant is different: "cafe\\u{301}"')]),e._v("\ncafé  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// => 1: this constant has one value")]),e._v("\ncafé  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// => 2: this indistinguishable constant has a different value")]),e._v("\n")])])]),t("p",[e._v("The Unicode standard defines the preferred encoding for all characters and specifies a normalization procedure to convert text to a canonical form suitable for comparisons. JavaScript assumes that the source code it is interpreting has already been normalized and does not do any normalization on its own. If you plan to use Unicode characters in your JavaScript programs, you should ensure that your editor or some other tool performs Unicode normalization of your source code to prevent you from ending up with different but visually indistinguishable identifiers.")]),e._v(" "),t("blockquote",[t("p",[e._v("Unicode 标准定义了所有字符的首选编码，并指定了将文本转换为适合于比较的规范形式的标准化过程。JavaScript 假设它要解释的源代码已经被规范化了，它自己不做任何规范化。如果您计划在 JavaScript 程序中使用 Unicode 字符，那么应该确保您的编辑器或其他工具对源代码执行 Unicode 规范化，以防止出现不同但视觉上无法区分的标识符。")])]),e._v(" "),t("h2",{attrs:{id:"_2-6-可选分号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-可选分号"}},[e._v("#")]),e._v(" 2.6 可选分号")]),e._v(" "),t("blockquote",[t("p",[e._v("2.6 Optional Semicolons")])]),e._v(" "),t("p",[e._v("Like many programming languages, JavaScript uses the semicolon (😉 to separate statements (see Chapter 5) from one another. This is important for making the meaning of your code clear: without a separator, the end of one statement might appear to be the beginning of the next, or vice versa. In JavaScript, you can usually omit the semicolon between two statements if those statements are written on separate lines. (You can also omit a semicolon at the end of a program or if the next token in the program is a closing curly brace: }.) Many JavaScript programmers (and the code in this book) use semicolons to explicitly mark the ends of statements, even where they are not required. Another style is to omit semicolons whenever possible, using them only in the few situations that require them. Whichever style you choose, there are a few details you should understand about optional semicolons in JavaScript.")]),e._v(" "),t("blockquote",[t("p",[e._v("像许多编程语言一样，JavaScript 使用分号（;）来分隔语句（参见第 5 章）。这对于明确代码的含义非常重要：如果没有分隔符，一条语句的结尾可能会是下一条语句的开始，反之亦然。在 JavaScript 中，如果两个语句写在不同的行上，通常可以省略这两个语句之间的分号。（如果程序的下一个标记是右花括号 }，也可以省略在程序末尾的分号。）许多 JavaScript 程序员（以及本书中的代码）使用分号来显式地标记语句的结束，即使在不需要分号的地方也是如此。另一种风格是尽可能省略分号，只在少数需要分号的情况下使用。无论您选择哪种样式，关于 JavaScript 中的可选分号，您都应该了解一些细节。")])]),e._v(" "),t("p",[e._v("Consider the following code. Since the two statements appear on separate lines, the first semicolon could be omitted:")]),e._v(" "),t("blockquote",[t("p",[e._v("考虑下面的代码。由于这两个语句出现在不同的行中，第一个分号可以省略：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nb "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Written as follows, however, the first semicolon is required:")]),e._v(" "),t("blockquote",[t("p",[e._v("但是，如写如下，第一个分号是必需的:")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Note that JavaScript does not treat every line break as a semicolon: it usually treats line breaks as semicolons only if it can’t parse the code without adding an implicit semicolon. More formally (and with three exceptions described a bit later), JavaScript treats a line break as a semicolon if the next nonspace character cannot be interpreted as a continuation of the current statement. Consider the following code:")]),e._v(" "),t("blockquote",[t("p",[e._v("请注意，JavaScript 并不把每个断行符都当作分号来处理：它通常只在不添加隐式分号而无法解析代码时才把断行符当作分号来处理。更正式的说法是，如果下一个非空格字符不能解释为当前语句的延续，JavaScript将换行符视为分号。考虑以下代码:")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" a\na\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("JavaScript interprets this code like this:")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 这样解释这段代码：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("JavaScript does treat the first line break as a semicolon because it cannot parse the code let a a without a semicolon. The second a could stand alone as the statement a;, but JavaScript does not treat the second line break as a semicolon because it can continue parsing the longer statement a = 3;.")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 确实把第一个换行符当作分号，因为它不能解析没有分号的代码。第二个 a 可以单独作为语句 a;，但 JavaScript 不会将第二个换行符作为分号处理，因为它可以继续解析较长的语句 a = 3;。")])]),e._v(" "),t("p",[e._v("These statement termination rules lead to some surprising cases. This code looks like two separate statements separated with a newline:")]),e._v(" "),t("blockquote",[t("p",[e._v("这些语句终止规则会导致一些奇怪的情况。这段代码看起来像用换行符分隔的两个单独的语句：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" y "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("f")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("But the parentheses on the second line of code can be interpreted as a function invocation of f from the first line, and JavaScript interprets the code like this:")]),e._v(" "),t("blockquote",[t("p",[e._v("但是第二行括号可以解释为第一行 f 的函数调用，JavaScript 是这样解释的：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" y "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("More likely than not, this is not the interpretation intended by the author of the code. In order to work as two separate statements, an explicit semicolon is required in this case.")]),e._v(" "),t("blockquote",[t("p",[e._v("很可能，这不是代码作者想要的解释。为了作为两个独立的语句工作，在这种情况下需要显式的分号。")])]),e._v(" "),t("p",[e._v("In general, if a statement begins with (, [, /, +, or -, there is a chance that it could be interpreted as a continuation of the statement before. Statements beginning with /, +, and - are quite rare in practice, but statements beginning with ( and [ are not uncommon at all, at least in some styles of JavaScript programming. Some programmers like to put a defensive semicolon at the beginning of any such statement so that it will continue to work correctly even if the statement before it is modified and a previously terminating semicolon removed:")]),e._v(" "),t("blockquote",[t("p",[e._v("通常，如果一个语句以 (、[、/、+ 或 - 开头，那么它有可能被解释为之前语句的延续。在实践中，以 /、+ 和 - 开头的语句非常少见，但是以 ( 和 [ 开头的语句并不少见，至少在某些 JavaScript 编程风格中是这样的。一些程序员喜欢在任何这样的语句的开头放一个防御分号，这样即使在修改之前的语句和删除之前的终止分号时，它也能继续正确工作:")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Semicolon omitted here")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Defensive ; keeps this statement separate")]),e._v("\n")])])]),t("p",[e._v("There are three exceptions to the general rule that JavaScript interprets line breaks as semicolons when it cannot parse the second line as a continuation of the statement on the first line. The first exception involves the return, throw, yield, break, and continue statements (see Chapter 5). These statements often stand alone, but they are sometimes followed by an identifier or expression. If a line break appears after any of these words (before any other tokens), JavaScript will always interpret that line break as a semicolon. For example, if you write:")]),e._v(" "),t("blockquote",[t("p",[e._v("当 JavaScript 不能将第二行解析为第一行语句的延续时，它会将换行符解释为分号。第一个异常涉及到 return、throw、yield、break 和 continue 语句（参见第 5 章），这些语句通常是独立的，但有时会后跟一个标识符或表达式。如果一个换行符出现在这些单词之后（在任何其他标记之前），JavaScript 总是将该换行符解释为分号。例如，如果你写：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("JavaScript assumes you meant:")]),e._v(" "),t("blockquote",[t("p",[e._v("JavaScript 假设您的意思是：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("However, you probably meant:")]),e._v(" "),t("blockquote",[t("p",[e._v("不过，你的意思可能是：")])]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("This means that you must not insert a line break between return, break, or continue and the expression that follows the keyword. If you do insert a line break, your code is likely to fail in a nonobvious way that is difficult to debug.")]),e._v(" "),t("blockquote",[t("p",[e._v("这意味着不能在 return、break 或 continue 和关键字后面的表达式之间插入换行符。如果您确实插入了一个换行符，那么您的代码很可能会以一种难以调试的不明显的方式失败。")])]),e._v(" "),t("p",[e._v("The second exception involves the ++ and −− operators (§4.8). These operators can be prefix operators that appear before an expression or postfix operators that appear after an expression. If you want to use either of these operators as postfix operators, they must appear on the same line as the expression they apply to. The third exception involves functions defined using concise “arrow” syntax: the => arrow itself must appear on the same line as the parameter list.")]),e._v(" "),t("blockquote",[t("p",[e._v("第二个例外涉及到 ++ 和 -- 运算符（§4.8）。这些运算符可以是出现在表达式之前的前缀运算符，也可以是出现在表达式之后的后缀运算符。如果要使用这些运算符中的任何一个作为后缀运算符，则它们必须与应用它们的表达式出现在同一行。第三个异常涉及使用简洁的“箭头”语法定义的函数：=> 箭头本身必须与参数列表出现在同一行。")])]),e._v(" "),t("h2",{attrs:{id:"_2-7-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-总结"}},[e._v("#")]),e._v(" 2.7 总结")]),e._v(" "),t("blockquote",[t("p",[e._v("2.7 Summary")])]),e._v(" "),t("p",[e._v("This chapter has shown how JavaScript programs are written at the lowest level. The next chapter takes us one step higher and introduces the primitive types and values (numbers, strings, and so on) that serve as the basic units of computation for JavaScript programs.")]),e._v(" "),t("blockquote",[t("p",[e._v("本章展示了 JavaScript 程序是如何在底层编写的。下一章将进一步介绍作为 JavaScript 程序基本计算单元的基本类型和值（数字、字符串等）。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);