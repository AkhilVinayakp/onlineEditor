From: <Saved by Blink>
Snapshot-Content-Location: https://code.jquery.com/jquery-3.3.1.js
Subject: 
Date: Sat, 10 Nov 2018 03:23:31 -0000
MIME-Version: 1.0
Content-Type: multipart/related;
	type="text/html";
	boundary="----MultipartBoundary--vISGBqwTuBMcqaR8Acyc2UoaWN2qZxQqskDNsh7Ptw----"


------MultipartBoundary--vISGBqwTuBMcqaR8Acyc2UoaWN2qZxQqskDNsh7Ptw----
Content-Type: text/html
Content-ID: <frame-C646278E73665819058B5619859C57B9@mhtml.blink>
Content-Transfer-Encoding: quoted-printable
Content-Location: https://code.jquery.com/jquery-3.3.1.js

<html><head><meta http-equiv=3D"Content-Type" content=3D"text/html; charset=
=3DUTF-8"></head><body><pre style=3D"word-wrap: break-word; white-space: pr=
e-wrap;">/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module =3D=3D=3D "object" &amp;&amp; typeof module.exports =3D=
=3D=3D "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery =3D require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports =3D global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !=3D=3D "undefined" ? window : this, function( window, n=
oGlobal ) {

// Edge &lt;=3D 12 - 13+, Firefox &lt;=3D18 - 45+, IE 10 - 11, Safari 5.1 -=
 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses stric=
t mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), stric=
t mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr =3D [];

var document =3D window.document;

var getProto =3D Object.getPrototypeOf;

var slice =3D arr.slice;

var concat =3D arr.concat;

var push =3D arr.push;

var indexOf =3D arr.indexOf;

var class2type =3D {};

var toString =3D class2type.toString;

var hasOwn =3D class2type.hasOwnProperty;

var fnToString =3D hasOwn.toString;

var ObjectFunctionString =3D fnToString.call( Object );

var support =3D {};

var isFunction =3D function isFunction( obj ) {

      // Support: Chrome &lt;=3D57, Firefox &lt;=3D52
      // In some browsers, typeof returns "function" for HTML &lt;object&gt=
; elements
      // (i.e., `typeof document.createElement( "object" ) =3D=3D=3D "funct=
ion"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj =3D=3D=3D "function" &amp;&amp; typeof obj.nodeType=
 !=3D=3D "number";
  };


var isWindow =3D function isWindow( obj ) {
		return obj !=3D null &amp;&amp; obj =3D=3D=3D obj.window;
	};




	var preservedScriptAttributes =3D {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc =3D doc || document;

		var i,
			script =3D doc.createElement( "script" );

		script.text =3D code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] =3D node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj =3D=3D null ) {
		return obj + "";
	}

	// Support: Android &lt;=3D2.3 only (functionish RegExp)
	return typeof obj =3D=3D=3D "object" || typeof obj =3D=3D=3D "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using th=
e global
// unguarded in another place, it seems safer to define global only for thi=
s module



var
	version =3D "3.3.1",

	// Define a local copy of jQuery
	jQuery =3D function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not in=
cluded)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android &lt;=3D4.0 only
	// Make sure we trim BOM and NBSP
	rtrim =3D /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn =3D jQuery.prototype =3D {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num =3D=3D null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num &lt; 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret =3D jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject =3D this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len =3D this.length,
			j =3D +i + ( i &lt; 0 ? len : 0 );
		return this.pushStack( j &gt;=3D 0 &amp;&amp; j &lt; len ? [ this[ j ] ] =
: [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend =3D jQuery.fn.extend =3D function() {
	var options, name, src, copy, copyIsArray, clone,
		target =3D arguments[ 0 ] || {},
		i =3D 1,
		length =3D arguments.length,
		deep =3D false;

	// Handle a deep copy situation
	if ( typeof target =3D=3D=3D "boolean" ) {
		deep =3D target;

		// Skip the boolean and the target
		target =3D arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy=
)
	if ( typeof target !=3D=3D "object" &amp;&amp; !isFunction( target ) ) {
		target =3D {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i =3D=3D=3D length ) {
		target =3D this;
		i--;
	}

	for ( ; i &lt; length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options =3D arguments[ i ] ) !=3D null ) {

			// Extend the base object
			for ( name in options ) {
				src =3D target[ name ];
				copy =3D options[ name ];

				// Prevent never-ending loop
				if ( target =3D=3D=3D copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep &amp;&amp; copy &amp;&amp; ( jQuery.isPlainObject( copy ) ||
					( copyIsArray =3D Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray =3D false;
						clone =3D src &amp;&amp; Array.isArray( src ) ? src : [];

					} else {
						clone =3D src &amp;&amp; jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] =3D jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !=3D=3D undefined ) {
					target[ name ] =3D copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !=3D=3D "[object Object]" ) {
			return false;
		}

		proto =3D getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global=
 Object function
		Ctor =3D hasOwn.call( proto, "constructor" ) &amp;&amp; proto.constructor=
;
		return typeof Ctor =3D=3D=3D "function" &amp;&amp; fnToString.call( Ctor =
) =3D=3D=3D ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i =3D 0;

		if ( isArrayLike( obj ) ) {
			length =3D obj.length;
			for ( ; i &lt; length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) =3D=3D=3D false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) =3D=3D=3D false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android &lt;=3D4.0 only
	trim: function( text ) {
		return text =3D=3D null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret =3D results || [];

		if ( arr !=3D null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr =3D=3D=3D "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr =3D=3D null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android &lt;=3D4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len =3D +second.length,
			j =3D 0,
			i =3D first.length;

		for ( ; j &lt; len; j++ ) {
			first[ i++ ] =3D second[ j ];
		}

		first.length =3D i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches =3D [],
			i =3D 0,
			length =3D elems.length,
			callbackExpect =3D !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i &lt; length; i++ ) {
			callbackInverse =3D !callback( elems[ i ], i );
			if ( callbackInverse !=3D=3D callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i =3D 0,
			ret =3D [];

		// Go through the array, translating each of the items to their new value=
s
		if ( isArrayLike( elems ) ) {
			length =3D elems.length;
			for ( ; i &lt; length; i++ ) {
				value =3D callback( elems[ i ], i, arg );

				if ( value !=3D null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value =3D callback( elems[ i ], i, arg );

				if ( value !=3D null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol =3D=3D=3D "function" ) {
	jQuery.fn[ Symbol.iterator ] =3D arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error=
 Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] =3D name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length =3D !!obj &amp;&amp; "length" in obj &amp;&amp; obj.length,
		type =3D toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type =3D=3D=3D "array" || length =3D=3D=3D 0 ||
		typeof length =3D=3D=3D "number" &amp;&amp; length &gt; 0 &amp;&amp; ( le=
ngth - 1 ) in obj;
}
var Sizzle =3D
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando =3D "sizzle" + 1 * new Date(),
	preferredDoc =3D window.document,
	dirruns =3D 0,
	done =3D 0,
	classCache =3D createCache(),
	tokenCache =3D createCache(),
	compilerCache =3D createCache(),
	sortOrder =3D function( a, b ) {
		if ( a =3D=3D=3D b ) {
			hasDuplicate =3D true;
		}
		return 0;
	},

	// Instance methods
	hasOwn =3D ({}).hasOwnProperty,
	arr =3D [],
	pop =3D arr.pop,
	push_native =3D arr.push,
	push =3D arr.push,
	slice =3D arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf =3D function( list, elem ) {
		var i =3D 0,
			len =3D list.length;
		for ( ; i &lt; len; i++ ) {
			if ( list[i] =3D=3D=3D elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans =3D "checked|selected|async|autofocus|autoplay|controls|defer|dis=
abled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace =3D "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier =3D "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selector=
s
	attributes =3D "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespac=
e +
		// Operator (capture 2)
		"*([*^$|!~]?=3D)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capt=
ure 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier +=
 "))|)" + whitespace +
		"*\\]",

	pseudos =3D ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, p=
refer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitesp=
ace characters preceding the latter
	rwhitespace =3D new RegExp( whitespace + "+", "g" ),
	rtrim =3D new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + w=
hitespace + "+$", "g" ),

	rcomma =3D new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators =3D new RegExp( "^" + whitespace + "*([&gt;+~]|" + whitespace=
 + ")" + whitespace + "*" ),

	rattributeQuotes =3D new RegExp( "=3D" + whitespace + "*([^\\]'\"]*?)" + w=
hitespace + "*\\]", "g" ),

	rpseudo =3D new RegExp( pseudos ),
	ridentifier =3D new RegExp( "^" + identifier + "$" ),

	matchExpr =3D {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:=
\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace=
 +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[&gt;+~]|:(even|odd|eq|g=
t|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=3D[^-]|$)", "i"=
 )
	},

	rinputs =3D /^(?:input|select|textarea|button)$/i,
	rheader =3D /^h\d$/i,

	rnative =3D /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr =3D /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling =3D /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape =3D new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whit=
espace + ")|.)", "ig" ),
	funescape =3D function( _, escaped, escapedWhitespace ) {
		var high =3D "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox&lt;24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !=3D=3D high || escapedWhitespace ?
			escaped :
			high &lt; 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high &gt;&gt; 10 | 0xD800, high &amp; 0x3FF | 0xDC=
00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape =3D /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape =3D function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch =3D=3D=3D "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped =
as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toStrin=
g( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler =3D function() {
		setDocument();
	},

	disabledAncestor =3D addCombinator(
		function( elem ) {
			return elem.disabled =3D=3D=3D true &amp;&amp; ("form" in elem || "label=
" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr =3D slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android&lt;4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push =3D { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE&lt;9
		// Otherwise append directly
		function( target, els ) {
			var j =3D target.length,
				i =3D 0;
			// Can't trust NodeList.length
			while ( (target[j++] =3D els[i++]) ) {}
			target.length =3D j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext =3D context &amp;&amp; context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType =3D context ? context.nodeType : 9;

	results =3D results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !=3D=3D "string" || !selector ||
		nodeType !=3D=3D 1 &amp;&amp; nodeType !=3D=3D 9 &amp;&amp; nodeType !=3D=
=3D 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documen=
ts
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !=3D=
=3D document ) {
			setDocument( context );
		}
		context =3D context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM met=
hod
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !=3D=3D 11 &amp;&amp; (match =3D rquickExpr.exec( selector=
 )) ) {

				// ID selector
				if ( (m =3D match[1]) ) {

					// Document context
					if ( nodeType =3D=3D=3D 9 ) {
						if ( (elem =3D context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id =3D=3D=3D m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext &amp;&amp; (elem =3D newContext.getElementById( m )) =
&amp;&amp;
							contains( context, elem ) &amp;&amp;
							elem.id =3D=3D=3D m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m =3D match[3]) &amp;&amp; support.getElementsByClassName =
&amp;&amp;
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &amp;&amp;
				!compilerCache[ selector + " " ] &amp;&amp;
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !=3D=3D 1 ) {
					newContext =3D context;
					newSelector =3D selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE &lt;=3D8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !=3D=3D "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid =3D context.getAttribute( "id" )) ) {
						nid =3D nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid =3D expando) );
					}

					// Prefix every selector in the list
					groups =3D tokenize( selector );
					i =3D groups.length;
					while ( i-- ) {
						groups[i] =3D "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector =3D groups.join( "," );

					// Expand context for sibling selectors
					newContext =3D rsibling.test( selector ) &amp;&amp; testContext( conte=
xt.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid =3D=3D=3D expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storin=
g it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger th=
an Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys =3D [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (s=
ee Issue #157)
		if ( keys.push( key + " " ) &gt; Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] =3D value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] =3D true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean re=
sult
 */
function assert( fn ) {
	var el =3D document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el =3D null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr =3D attrs.split("|"),
		i =3D arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] =3D handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if=
 a follows b
 */
function siblingCheck( a, b ) {
	var cur =3D b &amp;&amp; a,
		diff =3D cur &amp;&amp; a.nodeType =3D=3D=3D 1 &amp;&amp; b.nodeType =3D=
=3D=3D 1 &amp;&amp;
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur =3D cur.nextSibling) ) {
			if ( cur =3D=3D=3D b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name =3D elem.nodeName.toLowerCase();
		return name =3D=3D=3D "input" &amp;&amp; elem.type =3D=3D=3D type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name =3D elem.nodeName.toLowerCase();
		return (name =3D=3D=3D "input" || name =3D=3D=3D "button") &amp;&amp; ele=
m.type =3D=3D=3D type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] &gt; legend:nth-of-=
type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disable=
d
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabl=
ed
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-di=
sabled
			// All such elements have a "form" property.
			if ( elem.parentNode &amp;&amp; elem.disabled =3D=3D=3D false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled =3D=3D=3D disabled;
					} else {
						return elem.disabled =3D=3D=3D disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset =
ancestors
				return elem.isDisabled =3D=3D=3D disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !=3D=3D !disabled &amp;&amp;
						disabledAncestor( elem ) =3D=3D=3D disabled;
			}

			return elem.disabled =3D=3D=3D disabled;

		// Try to winnow out elements that can't be disabled before trusting the =
disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but i=
t shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled =3D=3D=3D disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument =3D +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes =3D fn( [], seed.length, argument ),
				i =3D matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j =3D matchIndexes[i]) ] ) {
					seed[j] =3D !(matches[j] =3D seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=3D} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwis=
e a falsy value
 */
function testContext( context ) {
	return context &amp;&amp; typeof context.getElementsByTagName !=3D=3D "und=
efined" &amp;&amp; context;
}

// Expose support vars for convenience
support =3D Sizzle.support =3D {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML =3D Sizzle.isXML =3D function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement =3D elem &amp;&amp; (elem.ownerDocument || elem).docum=
entElement;
	return documentElement ? documentElement.nodeName !=3D=3D "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to se=
t the document
 * @returns {Object} Returns the current document
 */
setDocument =3D Sizzle.setDocument =3D function( node ) {
	var hasCompare, subWindow,
		doc =3D node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc =3D=3D=3D document || doc.nodeType !=3D=3D 9 || !doc.documentElem=
ent ) {
		return document;
	}

	// Update global variables
	document =3D doc;
	docElem =3D document.documentElement;
	documentIsHTML =3D !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" erro=
rs (jQuery #13936)
	if ( preferredDoc !=3D=3D document &amp;&amp;
		(subWindow =3D document.defaultView) &amp;&amp; subWindow.top !=3D=3D sub=
Window ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE&lt;8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes =3D assert(function( el ) {
		el.className =3D "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName =3D assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE&lt;9
	support.getElementsByClassName =3D rnative.test( document.getElementsByCla=
ssName );

	// Support: IE&lt;10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set na=
mes,
	// so use a roundabout getElementsByName test
	support.getById =3D assert(function( el ) {
		docElem.appendChild( el ).id =3D expando;
		return !document.getElementsByName || !document.getElementsByName( expand=
o ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] =3D function( id ) {
			var attrId =3D id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") =3D=3D=3D attrId;
			};
		};
		Expr.find["ID"] =3D function( id, context ) {
			if ( typeof context.getElementById !=3D=3D "undefined" &amp;&amp; docume=
ntIsHTML ) {
				var elem =3D context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =3D  function( id ) {
			var attrId =3D id.replace( runescape, funescape );
			return function( elem ) {
				var node =3D typeof elem.getAttributeNode !=3D=3D "undefined" &amp;&amp=
;
					elem.getAttributeNode("id");
				return node &amp;&amp; node.value =3D=3D=3D attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] =3D function( id, context ) {
			if ( typeof context.getElementById !=3D=3D "undefined" &amp;&amp; docume=
ntIsHTML ) {
				var node, i, elems,
					elem =3D context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node =3D elem.getAttributeNode("id");
					if ( node &amp;&amp; node.value =3D=3D=3D id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems =3D context.getElementsByName( id );
					i =3D 0;
					while ( (elem =3D elems[i++]) ) {
						node =3D elem.getAttributeNode("id");
						if ( node &amp;&amp; node.value =3D=3D=3D id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] =3D support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !=3D=3D "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp =3D [],
				i =3D 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment n=
odes too
				results =3D context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag =3D=3D=3D "*" ) {
				while ( (elem =3D results[i++]) ) {
					if ( elem.nodeType =3D=3D=3D 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] =3D support.getElementsByClassName &amp;&amp; function(=
 className, context ) {
		if ( typeof context.getElementsByClassName !=3D=3D "undefined" &amp;&amp;=
 documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches =3D [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE er=
ror
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA =3D [];

	if ( (support.qsa =3D rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML =3D "&lt;a id=3D'" + expando + "'&gt=
;&lt;/a&gt;" +
				"&lt;select id=3D'" + expando + "-\r\\' msallowcapture=3D''&gt;" +
				"&lt;option selected=3D''&gt;&lt;/option&gt;&lt;/select&gt;";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^=3D or $=3D or =
*=3D
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_s=
ection
			if ( el.querySelectorAll("[msallowcapture^=3D'']").length ) {
				rbuggyQSA.push( "[*^$]=3D" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome&lt;29, Android&lt;4.4, Safari&lt;7.0+, iOS&lt;7.0+, P=
hantomJS&lt;1.9.8+
			if ( !el.querySelectorAll( "[id~=3D" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=3D");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=3D136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML =3D "&lt;a href=3D'' disabled=3D'disabled'&gt;&lt;/a&gt;" +
				"&lt;select disabled=3D'disabled'&gt;&lt;option/&gt;&lt;/select&gt;";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignm=
ent
			var input =3D document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=3Dd]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=3D" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are =
still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !=3D=3D 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fie=
ldsets
			docElem.appendChild( el ).disabled =3D true;
			if ( el.querySelectorAll(":disabled").length !=3D=3D 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector =3D rnative.test( (matches =3D docElem.match=
es ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch =3D matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!=3D'']:x" );
			rbuggyMatches.push( "!=3D", pseudos );
		});
	}

	rbuggyQSA =3D rbuggyQSA.length &amp;&amp; new RegExp( rbuggyQSA.join("|") =
);
	rbuggyMatches =3D rbuggyMatches.length &amp;&amp; new RegExp( rbuggyMatche=
s.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare =3D rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains =3D hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown =3D a.nodeType =3D=3D=3D 9 ? a.documentElement : a,
				bup =3D b &amp;&amp; b.parentNode;
			return a =3D=3D=3D bup || !!( bup &amp;&amp; bup.nodeType =3D=3D=3D 1 &a=
mp;&amp; (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition &amp;&amp; a.compareDocumentPosition( bup ) =
&amp; 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b =3D b.parentNode) ) {
					if ( b =3D=3D=3D a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder =3D hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a =3D=3D=3D b ) {
			hasDuplicate =3D true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare =3D !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare =3D ( a.ownerDocument || a ) =3D=3D=3D ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare &amp; 1 ||
			(!support.sortDetached &amp;&amp; b.compareDocumentPosition( a ) =3D=3D=
=3D compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a =3D=3D=3D document || a.ownerDocument =3D=3D=3D preferredDoc &amp=
;&amp; contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b =3D=3D=3D document || b.ownerDocument =3D=3D=3D preferredDoc &amp=
;&amp; contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare &amp; 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a =3D=3D=3D b ) {
			hasDuplicate =3D true;
			return 0;
		}

		var cur,
			i =3D 0,
			aup =3D a.parentNode,
			bup =3D b.parentNode,
			ap =3D [ a ],
			bp =3D [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a =3D=3D=3D document ? -1 :
				b =3D=3D=3D document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup =3D=3D=3D bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur =3D a;
		while ( (cur =3D cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur =3D b;
		while ( (cur =3D cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] =3D=3D=3D bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] =3D=3D=3D preferredDoc ? -1 :
			bp[i] =3D=3D=3D preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches =3D function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector =3D function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !=3D=3D document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr =3D expr.replace( rattributeQuotes, "=3D'$1']" );

	if ( support.matchesSelector &amp;&amp; documentIsHTML &amp;&amp;
		!compilerCache[ expr + " " ] &amp;&amp;
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &amp;&amp;
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret =3D matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document &amp;&amp; elem.document.nodeType !=3D=3D 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length &gt; 0;
};

Sizzle.contains =3D function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !=3D=3D document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr =3D function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !=3D=3D document ) {
		setDocument( elem );
	}

	var fn =3D Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val =3D fn &amp;&amp; hasOwn.call( Expr.attrHandle, name.toLowerCase() ) =
?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !=3D=3D undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val =3D elem.getAttributeNode(name)) &amp;&amp; val.specified ?
				val.value :
				null;
};

Sizzle.escape =3D function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error =3D function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort =3D function( results ) {
	var elem,
		duplicates =3D [],
		j =3D 0,
		i =3D 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate =3D !support.detectDuplicates;
	sortInput =3D !support.sortStable &amp;&amp; results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem =3D results[i++]) ) {
			if ( elem =3D=3D=3D results[ i ] ) {
				j =3D duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput =3D null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText =3D Sizzle.getText =3D function( elem ) {
	var node,
		ret =3D "",
		i =3D 0,
		nodeType =3D elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node =3D elem[i++]) ) {
			// Do not traverse comment nodes
			ret +=3D getText( node );
		}
	} else if ( nodeType =3D=3D=3D 1 || nodeType =3D=3D=3D 9 || nodeType =3D=
=3D=3D 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent =3D=3D=3D "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem =3D elem.firstChild; elem; elem =3D elem.nextSibling ) {
				ret +=3D getText( elem );
			}
		}
	} else if ( nodeType =3D=3D=3D 3 || nodeType =3D=3D=3D 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr =3D Sizzle.selectors =3D {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		"&gt;": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] =3D match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] =3D ( match[3] || match[4] || match[5] || "" ).replace( runesca=
pe, funescape );

			if ( match[2] =3D=3D=3D "~=3D" ) {
				match[3] =3D " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] =3D match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) =3D=3D=3D "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] =3D +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] =
=3D=3D=3D "even" || match[3] =3D=3D=3D "odd" ) );
				match[5] =3D +( ( match[7] + match[8] ) || match[3] =3D=3D=3D "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted =3D !match[6] &amp;&amp; match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] =3D match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted &amp;&amp; rpseudo.test( unquoted ) &amp;&amp;
				// Get excess from tokenize (recursively)
				(excess =3D tokenize( unquoted, true )) &amp;&amp;
				// advance to the next closing parenthesis
				(excess =3D unquoted.indexOf( ")", unquoted.length - excess ) - unquote=
d.length) ) {

				// excess is a negative index
				match[0] =3D match[0].slice( 0, excess );
				match[2] =3D unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and arg=
ument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName =3D nodeNameSelector.replace( runescape, funescape ).toLowe=
rCase();
			return nodeNameSelector =3D=3D=3D "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName &amp;&amp; elem.nodeName.toLowerCase() =3D=3D=3D =
nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern =3D classCache[ className + " " ];

			return pattern ||
				(pattern =3D new RegExp( "(^|" + whitespace + ")" + className + "(" + w=
hitespace + "|$)" )) &amp;&amp;
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className =3D=3D=3D "string" &amp;&am=
p; elem.className || typeof elem.getAttribute !=3D=3D "undefined" &amp;&amp=
; elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result =3D Sizzle.attr( elem, name );

				if ( result =3D=3D null ) {
					return operator =3D=3D=3D "!=3D";
				}
				if ( !operator ) {
					return true;
				}

				result +=3D "";

				return operator =3D=3D=3D "=3D" ? result =3D=3D=3D check :
					operator =3D=3D=3D "!=3D" ? result !=3D=3D check :
					operator =3D=3D=3D "^=3D" ? check &amp;&amp; result.indexOf( check ) =
=3D=3D=3D 0 :
					operator =3D=3D=3D "*=3D" ? check &amp;&amp; result.indexOf( check ) &=
gt; -1 :
					operator =3D=3D=3D "$=3D" ? check &amp;&amp; result.slice( -check.leng=
th ) =3D=3D=3D check :
					operator =3D=3D=3D "~=3D" ? ( " " + result.replace( rwhitespace, " " )=
 + " " ).indexOf( check ) &gt; -1 :
					operator =3D=3D=3D "|=3D" ? result =3D=3D=3D check || result.slice( 0,=
 check.length + 1 ) =3D=3D=3D check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple =3D type.slice( 0, 3 ) !=3D=3D "nth",
				forward =3D type.slice( -4 ) !=3D=3D "last",
				ofType =3D what =3D=3D=3D "of-type";

			return first =3D=3D=3D 1 &amp;&amp; last =3D=3D=3D 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir =3D simple !=3D=3D forward ? "nextSibling" : "previousSibling",
						parent =3D elem.parentNode,
						name =3D ofType &amp;&amp; elem.nodeName.toLowerCase(),
						useCache =3D !xml &amp;&amp; !ofType,
						diff =3D false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node =3D elem;
								while ( (node =3D node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() =3D=3D=3D name :
										node.nodeType =3D=3D=3D 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start =3D dir =3D type =3D=3D=3D "only" &amp;&amp; !start &amp;&amp=
; "nextSibling";
							}
							return true;
						}

						start =3D [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward &amp;&amp; useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node =3D parent;
							outerCache =3D node[ expando ] || (node[ expando ] =3D {});

							// Support: IE &lt;9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache =3D outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] =3D {});

							cache =3D uniqueCache[ type ] || [];
							nodeIndex =3D cache[ 0 ] =3D=3D=3D dirruns &amp;&amp; cache[ 1 ];
							diff =3D nodeIndex &amp;&amp; cache[ 2 ];
							node =3D nodeIndex &amp;&amp; parent.childNodes[ nodeIndex ];

							while ( (node =3D ++nodeIndex &amp;&amp; node &amp;&amp; node[ dir ]=
 ||

								// Fallback to seeking `elem` from the start
								(diff =3D nodeIndex =3D 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType =3D=3D=3D 1 &amp;&amp; ++diff &amp;&amp; node =
=3D=3D=3D elem ) {
									uniqueCache[ type ] =3D [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node =3D elem;
								outerCache =3D node[ expando ] || (node[ expando ] =3D {});

								// Support: IE &lt;9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache =3D outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] =3D {});

								cache =3D uniqueCache[ type ] || [];
								nodeIndex =3D cache[ 0 ] =3D=3D=3D dirruns &amp;&amp; cache[ 1 ];
								diff =3D nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff =3D=3D=3D false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node =3D ++nodeIndex &amp;&amp; node &amp;&amp; node[ dir =
] ||
									(diff =3D nodeIndex =3D 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() =3D=3D=3D name :
										node.nodeType =3D=3D=3D 1 ) &amp;&amp;
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache =3D node[ expando ] || (node[ expando ] =3D {});

											// Support: IE &lt;9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache =3D outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] =3D {});

											uniqueCache[ type ] =3D [ dirruns, diff ];
										}

										if ( node =3D=3D=3D elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -=3D last;
						return diff =3D=3D=3D first || ( diff % first =3D=3D=3D 0 &amp;&amp; =
diff / first &gt;=3D 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with =
uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn =3D Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() =
] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length &gt; 1 ) {
				args =3D [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched =3D fn( seed, argument ),
							i =3D matched.length;
						while ( i-- ) {
							idx =3D indexOf( seed, matched[i] );
							seed[ idx ] =3D !( matches[ idx ] =3D matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input =3D [],
				results =3D [],
				matcher =3D compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched =3D matcher( seed, null, xml, [] ),
						i =3D seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem =3D unmatched[i]) ) {
							seed[i] =3D !(matches[i] =3D elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] =3D elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] =3D null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length &gt; 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text =3D text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexO=
f( text ) &gt; -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed ca=
se-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang =3D lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang =3D documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang =3D elemLang.toLowerCase();
						return elemLang =3D=3D=3D lang || elemLang.indexOf( lang + "-" ) =3D=
=3D=3D 0;
					}
				} while ( (elem =3D elem.parentNode) &amp;&amp; elem.nodeType =3D=3D=3D=
 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash =3D window.location &amp;&amp; window.location.hash;
			return hash &amp;&amp; hash.slice( 1 ) =3D=3D=3D elem.id;
		},

		"root": function( elem ) {
			return elem =3D=3D=3D docElem;
		},

		"focus": function( elem ) {
			return elem =3D=3D=3D document.activeElement &amp;&amp; (!document.hasFo=
cus || document.hasFocus()) &amp;&amp; !!(elem.type || elem.href || ~elem.t=
abIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName =3D elem.nodeName.toLowerCase();
			return (nodeName =3D=3D=3D "input" &amp;&amp; !!elem.checked) || (nodeNa=
me =3D=3D=3D "option" &amp;&amp; !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected =3D=3D=3D true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4;=
 entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType &lt; 6 works because attributes (2) do not appear as childre=
n
			for ( elem =3D elem.firstChild; elem; elem =3D elem.nextSibling ) {
				if ( elem.nodeType &lt; 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name =3D elem.nodeName.toLowerCase();
			return name =3D=3D=3D "input" &amp;&amp; elem.type =3D=3D=3D "button" ||=
 name =3D=3D=3D "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() =3D=3D=3D "input" &amp;&amp;
				elem.type =3D=3D=3D "text" &amp;&amp;

				// Support: IE&lt;8
				// New HTML5 attribute values (e.g., "search") appear with elem.type =
=3D=3D=3D "text"
				( (attr =3D elem.getAttribute("type")) =3D=3D null || attr.toLowerCase(=
) =3D=3D=3D "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument &lt; 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i =3D 0;
			for ( ; i &lt; length; i +=3D 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i =3D 1;
			for ( ; i &lt; length; i +=3D 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i =3D argument &lt; 0 ? argument + length : argument;
			for ( ; --i &gt;=3D 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i =3D argument &lt; 0 ? argument + length : argument;
			for ( ; ++i &lt; length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] =3D Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image=
: true } ) {
	Expr.pseudos[ i ] =3D createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] =3D createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype =3D Expr.filters =3D Expr.pseudos;
Expr.setFilters =3D new setFilters();

tokenize =3D Sizzle.tokenize =3D function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached =3D tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar =3D selector;
	groups =3D [];
	preFilters =3D Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match =3D rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar =3D soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens =3D []) );
		}

		matched =3D false;

		// Combinators
		if ( (match =3D rcombinators.exec( soFar )) ) {
			matched =3D match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar =3D soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match =3D matchExpr[ type ].exec( soFar )) &amp;&amp; (!preFilters=
[ type ] ||
				(match =3D preFilters[ type ]( match ))) ) {
				matched =3D match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar =3D soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i =3D 0,
		len =3D tokens.length,
		selector =3D "";
	for ( ; i &lt; len; i++ ) {
		selector +=3D tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir =3D combinator.dir,
		skip =3D combinator.next,
		key =3D skip || dir,
		checkNonElements =3D base &amp;&amp; key =3D=3D=3D "parentNode",
		doneName =3D done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem =3D elem[ dir ]) ) {
				if ( elem.nodeType =3D=3D=3D 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache =3D [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from =
combinator caching
			if ( xml ) {
				while ( (elem =3D elem[ dir ]) ) {
					if ( elem.nodeType =3D=3D=3D 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem =3D elem[ dir ]) ) {
					if ( elem.nodeType =3D=3D=3D 1 || checkNonElements ) {
						outerCache =3D elem[ expando ] || (elem[ expando ] =3D {});

						// Support: IE &lt;9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache =3D outerCache[ elem.uniqueID ] || (outerCache[ elem.uniq=
ueID ] =3D {});

						if ( skip &amp;&amp; skip =3D=3D=3D elem.nodeName.toLowerCase() ) {
							elem =3D elem[ dir ] || elem;
						} else if ( (oldCache =3D uniqueCache[ key ]) &amp;&amp;
							oldCache[ 0 ] =3D=3D=3D dirruns &amp;&amp; oldCache[ 1 ] =3D=3D=3D d=
oneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] =3D oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] =3D newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] =3D matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length &gt; 1 ?
		function( elem, context, xml ) {
			var i =3D matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i =3D 0,
		len =3D contexts.length;
	for ( ; i &lt; len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched =3D [],
		i =3D 0,
		len =3D unmatched.length,
		mapped =3D map !=3D null;

	for ( ; i &lt; len; i++ ) {
		if ( (elem =3D unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, =
postSelector ) {
	if ( postFilter &amp;&amp; !postFilter[ expando ] ) {
		postFilter =3D setMatcher( postFilter );
	}
	if ( postFinder &amp;&amp; !postFinder[ expando ] ) {
		postFinder =3D setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap =3D [],
			postMap =3D [],
			preexisting =3D results.length,

			// Get initial elements from seed or context
			elems =3D seed || multipleContexts( selector || "*", context.nodeType ? =
[ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results syn=
chronization
			matcherIn =3D preFilter &amp;&amp; ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut =3D matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or=
 preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp =3D condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i =3D temp.length;
			while ( i-- ) {
				if ( (elem =3D temp[i]) ) {
					matcherOut[ postMap[i] ] =3D !(matcherIn[ postMap[i] ] =3D elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postF=
inder contexts
					temp =3D [];
					i =3D matcherOut.length;
					while ( i-- ) {
						if ( (elem =3D matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] =3D elem) );
						}
					}
					postFinder( null, (matcherOut =3D []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i =3D matcherOut.length;
				while ( i-- ) {
					if ( (elem =3D matcherOut[i]) &amp;&amp;
						(temp =3D postFinder ? indexOf( seed, elem ) : preMap[i]) &gt; -1 ) {

						seed[temp] =3D !(results[temp] =3D elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut =3D condense(
				matcherOut =3D=3D=3D results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len =3D tokens.length,
		leadingRelative =3D Expr.relative[ tokens[0].type ],
		implicitRelative =3D leadingRelative || Expr.relative[" "],
		i =3D leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-=
level context(s)
		matchContext =3D addCombinator( function( elem ) {
			return elem =3D=3D=3D checkContext;
		}, implicitRelative, true ),
		matchAnyContext =3D addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) &gt; -1;
		}, implicitRelative, true ),
		matchers =3D [ function( elem, context, xml ) {
			var ret =3D ( !leadingRelative &amp;&amp; ( xml || context !=3D=3D outer=
mostContext ) ) || (
				(checkContext =3D context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext =3D null;
			return ret;
		} ];

	for ( ; i &lt; len; i++ ) {
		if ( (matcher =3D Expr.relative[ tokens[i].type ]) ) {
			matchers =3D [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher =3D Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches=
 );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j =3D ++i;
				for ( ; j &lt; len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i &gt; 1 &amp;&amp; elementMatcher( matchers ),
					i &gt; 1 &amp;&amp; toSelector(
						// If the preceding token was a descendant combinator, insert an impl=
icit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type =3D=3D=
=3D " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i &lt; j &amp;&amp; matcherFromTokens( tokens.slice( i, j ) ),
					j &lt; len &amp;&amp; matcherFromTokens( (tokens =3D tokens.slice( j )=
) ),
					j &lt; len &amp;&amp; toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet =3D setMatchers.length &gt; 0,
		byElement =3D elementMatchers.length &gt; 0,
		superMatcher =3D function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount =3D 0,
				i =3D "0",
				unmatched =3D seed &amp;&amp; [],
				setMatched =3D [],
				contextBackup =3D outermostContext,
				// We must always have either seed elements or outermost context
				elems =3D seed || byElement &amp;&amp; Expr.find["TAG"]( "*", outermost=
 ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique =3D (dirruns +=3D contextBackup =3D=3D null ? 1 : Math.ra=
ndom() || 0.1),
				len =3D elems.length;

			if ( outermost ) {
				outermostContext =3D context =3D=3D=3D document || context || outermost=
;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE&lt;9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: &lt;number&gt;) m=
atching elements by id
			for ( ; i !=3D=3D len &amp;&amp; (elem =3D elems[i]) !=3D null; i++ ) {
				if ( byElement &amp;&amp; elem ) {
					j =3D 0;
					if ( !context &amp;&amp; elem.ownerDocument !=3D=3D document ) {
						setDocument( elem );
						xml =3D !documentIsHTML;
					}
					while ( (matcher =3D elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns =3D dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem =3D !matcher &amp;&amp; elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `mat=
chedCount`
			// makes the latter nonnegative.
			matchedCount +=3D i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `=
matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop =
because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a strin=
g only in that
			// case, which will result in a "00" `matchedCount` that differs from `i=
` but is also
			// numerically zero.
			if ( bySet &amp;&amp; i !=3D=3D matchedCount ) {
				j =3D 0;
				while ( (matcher =3D setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount &gt; 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] =3D pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched =3D condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipula=
te sorting
				if ( outermost &amp;&amp; !seed &amp;&amp; setMatched.length &gt; 0 &am=
p;&amp;
					( matchedCount + setMatchers.length ) &gt; 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns =3D dirrunsUnique;
				outermostContext =3D contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile =3D Sizzle.compile =3D function( selector, match /* Internal Use On=
ly */ ) {
	var i,
		setMatchers =3D [],
		elementMatchers =3D [],
		cached =3D compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check e=
ach element
		if ( !match ) {
			match =3D tokenize( selector );
		}
		i =3D match.length;
		while ( i-- ) {
			cached =3D matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached =3D compilerCache( selector, matcherFromGroupMatchers( elementMatc=
hers, setMatchers ) );

		// Save selector and tokenization
		cached.selector =3D selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select =3D Sizzle.select =3D function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled =3D typeof selector =3D=3D=3D "function" &amp;&amp; selector,
		match =3D !seed &amp;&amp; tokenize( (selector =3D compiled.selector || s=
elector) );

	results =3D results || [];

	// Try to minimize operations if there is only one selector in the list an=
d no seed
	// (the latter of which guarantees us context)
	if ( match.length =3D=3D=3D 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens =3D match[0] =3D match[0].slice( 0 );
		if ( tokens.length &gt; 2 &amp;&amp; (token =3D tokens[0]).type =3D=3D=3D=
 "ID" &amp;&amp;
				context.nodeType =3D=3D=3D 9 &amp;&amp; documentIsHTML &amp;&amp; Expr.=
relative[ tokens[1].type ] ) {

			context =3D ( Expr.find["ID"]( token.matches[0].replace(runescape, funes=
cape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context =3D context.parentNode;
			}

			selector =3D selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i =3D matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token =3D tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type =3D token.type) ] ) {
				break;
			}
			if ( (find =3D Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed =3D find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) &amp;&amp; testContext( context.parent=
Node ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector =3D seed.length &amp;&amp; toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector abo=
ve
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) &amp;&amp; testContext( context.par=
entNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable =3D expando.split("").sort( sortOrder ).join("") =3D=3D=
=3D expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison functio=
n
support.detectDuplicates =3D !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit&lt;537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached =3D assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) &a=
mp; 1;
});

// Support: IE&lt;8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML =3D "&lt;a href=3D'#'&gt;&lt;/a&gt;";
	return el.firstChild.getAttribute("href") =3D=3D=3D "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() =3D=3D=3D "type" ? 1 =
: 2 );
		}
	});
}

// Support: IE&lt;9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML =3D "&lt;input/&gt;";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) =3D=3D=3D "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML &amp;&amp; elem.nodeName.toLowerCase() =3D=3D=3D "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE&lt;9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") =3D=3D null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] =3D=3D=3D true ? name.toLowerCase() :
					(val =3D elem.getAttributeNode( name )) &amp;&amp; val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find =3D Sizzle;
jQuery.expr =3D Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] =3D jQuery.expr.pseudos;
jQuery.uniqueSort =3D jQuery.unique =3D Sizzle.uniqueSort;
jQuery.text =3D Sizzle.getText;
jQuery.isXMLDoc =3D Sizzle.isXML;
jQuery.contains =3D Sizzle.contains;
jQuery.escapeSelector =3D Sizzle.escape;




var dir =3D function( elem, dir, until ) {
	var matched =3D [],
		truncate =3D until !=3D=3D undefined;

	while ( ( elem =3D elem[ dir ] ) &amp;&amp; elem.nodeType !=3D=3D 9 ) {
		if ( elem.nodeType =3D=3D=3D 1 ) {
			if ( truncate &amp;&amp; jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings =3D function( n, elem ) {
	var matched =3D [];

	for ( ; n; n =3D n.nextSibling ) {
		if ( n.nodeType =3D=3D=3D 1 &amp;&amp; n !=3D=3D elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext =3D jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName &amp;&amp; elem.nodeName.toLowerCase() =3D=3D=3D nam=
e.toLowerCase();

};
var rsingleTag =3D ( /^&lt;([a-z][^\/\0&gt;:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\=
/?&gt;(?:&lt;\/\1&gt;|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !=3D=3D not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem =3D=3D=3D qualifier ) !=3D=3D not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !=3D=3D "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) &gt; -1 ) !=3D=3D not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter =3D function( expr, elems, not ) {
	var elem =3D elems[ 0 ];

	if ( not ) {
		expr =3D ":not(" + expr + ")";
	}

	if ( elems.length =3D=3D=3D 1 &amp;&amp; elem.nodeType =3D=3D=3D 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType =3D=3D=3D 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len =3D this.length,
			self =3D this;

		if ( typeof selector !=3D=3D "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i =3D 0; i &lt; len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret =3D this.pushStack( [] );

		for ( i =3D 0; i &lt; len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len &gt; 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the re=
turned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p"=
.
			typeof selector =3D=3D=3D "string" &amp;&amp; rneedsContext.test( select=
or ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over &lt;tag&gt; to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with &lt;)
	// Shortcut simple #id case for speed
	rquickExpr =3D /^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]+))$/,

	init =3D jQuery.fn.init =3D function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root =3D root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector =3D=3D=3D "string" ) {
			if ( selector[ 0 ] =3D=3D=3D "&lt;" &amp;&amp;
				selector[ selector.length - 1 ] =3D=3D=3D "&gt;" &amp;&amp;
				selector.length &gt;=3D 3 ) {

				// Assume that strings that start and end with &lt;&gt; are HTML and sk=
ip the regex check
				match =3D [ null, selector, null ];

			} else {
				match =3D rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match &amp;&amp; ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -&gt; $(array)
				if ( match[ 1 ] ) {
					context =3D context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context &amp;&amp; context.nodeType ? context.ownerDocument || contex=
t : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) &amp;&amp; jQuery.isPlainObject( co=
ntext ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem =3D document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] =3D elem;
						this.length =3D 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] =3D selector;
			this.length =3D 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !=3D=3D undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype =3D jQuery.fn;

// Initialize central reference
rootjQuery =3D jQuery( document );


var rparentsprev =3D /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique =
set
	guaranteedUnique =3D {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets =3D jQuery( target, this ),
			l =3D targets.length;

		return this.filter( function() {
			var i =3D 0;
			for ( ; i &lt; l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i =3D 0,
			l =3D this.length,
			matched =3D [],
			targets =3D typeof selectors !=3D=3D "string" &amp;&amp; jQuery( selecto=
rs );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i &lt; l; i++ ) {
				for ( cur =3D this[ i ]; cur &amp;&amp; cur !=3D=3D context; cur =3D cu=
r.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType &lt; 11 &amp;&amp; ( targets ?
						targets.index( cur ) &gt; -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType =3D=3D=3D 1 &amp;&amp;
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length &gt; 1 ? jQuery.uniqueSort( matched=
 ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] &amp;&amp; this[ 0 ].parentNode ) ? this.first().prev=
All().length : -1;
		}

		// Index in selector
		if ( typeof elem =3D=3D=3D "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector =3D=3D null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur =3D cur[ dir ] ) &amp;&amp; cur.nodeType !=3D=3D 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent =3D elem.parentNode;
		return parent &amp;&amp; parent.nodeType !=3D=3D 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser &lt;=3D4.3 =
only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem =3D elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] =3D function( until, selector ) {
		var matched =3D jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !=3D=3D "Until" ) {
			selector =3D until;
		}

		if ( selector &amp;&amp; typeof selector =3D=3D=3D "string" ) {
			matched =3D jQuery.filter( selector, matched );
		}

		if ( this.length &gt; 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite =3D ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object =3D {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] =3D true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change ho=
w
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can =
be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Def=
erred)
 *
 *	memory:			will keep track of previous values and will call any callback =
added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in=
 the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks =3D function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options =3D typeof options =3D=3D=3D "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list =3D [],

		// Queue of execution data for repeatable lists
		queue =3D [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex =3D -1,

		// Fire callbacks
		fire =3D function() {

			// Enforce single-firing
			locked =3D locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired =3D firing =3D true;
			for ( ; queue.length; firingIndex =3D -1 ) {
				memory =3D queue.shift();
				while ( ++firingIndex &lt; list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) =3D=3D=3D f=
alse &amp;&amp;
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex =3D list.length;
						memory =3D false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory =3D false;
			}

			firing =3D false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list =3D [];

				// Otherwise, this object is spent
				} else {
					list =3D "";
				}
			}
		},

		// Actual Callbacks object
		self =3D {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory &amp;&amp; !firing ) {
						firingIndex =3D list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg &amp;&amp; arg.length &amp;&amp; toType( arg ) !=3D=
=3D "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory &amp;&amp; !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index =3D jQuery.inArray( arg, list, index ) ) &gt; -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index &lt;=3D firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks att=
ached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) &gt; -1 :
					list.length &gt; 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list =3D [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked =3D queue =3D [];
				list =3D memory =3D "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effec=
t)
			// Abort any pending executions
			lock: function() {
				locked =3D queue =3D [];
				if ( !memory &amp;&amp; !firing ) {
					list =3D memory =3D "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args =3D args || [];
					args =3D [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value &amp;&amp; isFunction( ( method =3D value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value &amp;&amp; isFunction( ( method =3D value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noVa=
lue` to integer:
			// * false: [ value ].slice( 0 ) =3D&gt; resolve( value )
			// * true: [ value ].slice( 1 ) =3D&gt; resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra check=
s appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object c=
ontext
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples =3D [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state =3D "pending",
			promise =3D {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns =3D arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progr=
ess)
							var fn =3D isFunction( fns[ tuple[ 4 ] ] ) &amp;&amp; fns[ tuple[ 4 =
] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notif=
y })
							// deferred.done(function() { bind to newDefer or newDefer.resolve }=
)
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned =3D fn &amp;&amp; fn.apply( this, arguments );
								if ( returned &amp;&amp; isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns =3D null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth =3D 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that =3D this,
								args =3D arguments,
								mightThrow =3D function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth &lt; maxDepth ) {
										return;
									}

									returned =3D handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned =3D=3D=3D deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then =3D returned &amp;&amp;

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned =3D=3D=3D "object" ||
											typeof returned =3D=3D=3D "function" ) &amp;&amp;
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !=3D=3D Identity ) {
											that =3D undefined;
											args =3D [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process =3D special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 &gt;=3D maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !=3D=3D Thrower ) {
													that =3D undefined;
													args =3D [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace =3D jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj !=3D null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred =3D {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list =3D tuple[ 2 ],
				stateString =3D tuple[ 5 ];

			// promise.progress =3D list.add
			// promise.done =3D list.add
			// promise.fail =3D list.add
			promise[ tuple[ 1 ] ] =3D list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state =3D "resolved" (i.e., fulfilled)
						// state =3D "rejected"
						state =3D stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify =3D function() { deferred.notifyWith(...) }
			// deferred.resolve =3D function() { deferred.resolveWith(...) }
			// deferred.reject =3D function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] =3D function() {
				deferred[ tuple[ 0 ] + "With" ]( this =3D=3D=3D deferred ? undefined : =
this, arguments );
				return this;
			};

			// deferred.notifyWith =3D list.fireWith
			// deferred.resolveWith =3D list.fireWith
			// deferred.rejectWith =3D list.fireWith
			deferred[ tuple[ 0 ] + "With" ] =3D list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining =3D arguments.length,

			// count of unprocessed arguments
			i =3D remaining,

			// subordinate fulfillment data
			resolveContexts =3D Array( i ),
			resolveValues =3D slice.call( arguments ),

			// the master Deferred
			master =3D jQuery.Deferred(),

			// subordinate callback factory
			updateFunc =3D function( i ) {
				return function( value ) {
					resolveContexts[ i ] =3D this;
					resolveValues[ i ] =3D arguments.length &gt; 1 ? slice.call( arguments=
 ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining &lt;=3D 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.=
reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() =3D=3D=3D "pending" ||
				isFunction( resolveValues[ i ] &amp;&amp; resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames =3D /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$=
/;

jQuery.Deferred.exceptionHook =3D function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console &amp;&amp; window.console.warn &amp;&amp; error &amp;&=
amp; rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error=
.stack, stack );
	}
};




jQuery.readyException =3D function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList =3D jQuery.Deferred();

jQuery.fn.ready =3D function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait =3D=3D=3D true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady =3D true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !=3D=3D true &amp;&amp; --jQuery.readyWait &gt; 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then =3D readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE &lt;=3D9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState =3D=3D=3D "complete" ||
	( document.readyState !=3D=3D "loading" &amp;&amp; !document.documentEleme=
nt.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay read=
y
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access =3D function( elems, fn, key, value, chainable, emptyGet, raw ) =
{
	var i =3D 0,
		len =3D elems.length,
		bulk =3D key =3D=3D null;

	// Sets many values
	if ( toType( key ) =3D=3D=3D "object" ) {
		chainable =3D true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !=3D=3D undefined ) {
		chainable =3D true;

		if ( !isFunction( value ) ) {
			raw =3D true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn =3D null;

			// ...except when executing function values
			} else {
				bulk =3D fn;
				fn =3D function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i &lt; len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix =3D /^-ms-/,
	rdashAlpha =3D /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE &lt;=3D9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase =
);
}
var acceptData =3D function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType =3D=3D=3D 1 || owner.nodeType =3D=3D=3D 9 || !( +own=
er.nodeType );
};




function Data() {
	this.expando =3D jQuery.expando + Data.uid++;
}

Data.uid =3D 1;

Data.prototype =3D {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value =3D owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value =3D {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] =3D value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache =3D this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data =3D=3D=3D "string" ) {
			cache[ camelCase( data ) ] =3D value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] =3D data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key =3D=3D=3D undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] &amp;&amp; owner[ this.expando ][ camelCase( key )=
 ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key =3D=3D=3D undefined ||
				( ( key &amp;&amp; typeof key =3D=3D=3D "string" ) &amp;&amp; value =3D=
=3D=3D undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !=3D=3D undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache =3D owner[ this.expando ];

		if ( cache =3D=3D=3D undefined ) {
			return;
		}

		if ( key !=3D=3D undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key =3D key.map( camelCase );
			} else {
				key =3D camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key =3D key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i =3D key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key =3D=3D=3D undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome &lt;=3D35 - 45
			// Webkit &amp; Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=3D378607 (bug r=
estricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] =3D undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache =3D owner[ this.expando ];
		return cache !=3D=3D undefined &amp;&amp; !jQuery.isEmptyObject( cache );
	}
};
var dataPriv =3D new Data();

var dataUser =3D new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _remove=
Data)
//	5. Avoid exposing implementation details on user objects (eg. expando pr=
operties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace =3D /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash =3D /[A-Z]/g;

function getData( data ) {
	if ( data =3D=3D=3D "true" ) {
		return true;
	}

	if ( data =3D=3D=3D "false" ) {
		return false;
	}

	if ( data =3D=3D=3D "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data =3D=3D=3D +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data =3D=3D=3D undefined &amp;&amp; elem.nodeType =3D=3D=3D 1 ) {
		name =3D "data-" + key.replace( rmultiDash, "-$&amp;" ).toLowerCase();
		data =3D elem.getAttribute( name );

		if ( typeof data =3D=3D=3D "string" ) {
			try {
				data =3D getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data =3D undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem =3D this[ 0 ],
			attrs =3D elem &amp;&amp; elem.attributes;

		// Gets all values
		if ( key =3D=3D=3D undefined ) {
			if ( this.length ) {
				data =3D dataUser.get( elem );

				if ( elem.nodeType =3D=3D=3D 1 &amp;&amp; !dataPriv.get( elem, "hasData=
Attrs" ) ) {
					i =3D attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name =3D attrs[ i ].name;
							if ( name.indexOf( "data-" ) =3D=3D=3D 0 ) {
								name =3D camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key =3D=3D=3D "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem =3D this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem &amp;&amp; value =3D=3D=3D undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data =3D dataUser.get( elem, key );
				if ( data !=3D=3D undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data =3D dataAttr( elem, key );
				if ( data !=3D=3D undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length &gt; 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type =3D ( type || "fx" ) + "queue";
			queue =3D dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue =3D dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type =3D type || "fx";

		var queue =3D jQuery.queue( elem, type ),
			startLength =3D queue.length,
			fn =3D queue.shift(),
			hooks =3D jQuery._queueHooks( elem, type ),
			next =3D function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn =3D=3D=3D "inprogress" ) {
			fn =3D queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type =3D=3D=3D "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength &amp;&amp; hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key =3D type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter =3D 2;

		if ( typeof type !=3D=3D "string" ) {
			data =3D type;
			type =3D "fx";
			setter--;
		}

		if ( arguments.length &lt; setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data =3D=3D=3D undefined ?
			this :
			this.each( function() {
				var queue =3D jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type =3D=3D=3D "fx" &amp;&amp; queue[ 0 ] !=3D=3D "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count =3D 1,
			defer =3D jQuery.Deferred(),
			elements =3D this,
			i =3D this.length,
			resolve =3D function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !=3D=3D "string" ) {
			obj =3D type;
			type =3D undefined;
		}
		type =3D type || "fx";

		while ( i-- ) {
			tmp =3D dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp &amp;&amp; tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum =3D ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum =3D new RegExp( "^(?:([+-])=3D|)(" + pnum + ")([a-z%]*)$", "i" =
);


var cssExpand =3D [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree =3D function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem =3D el || elem;

		// Inline style trumps all
		return elem.style.display =3D=3D=3D "none" ||
			elem.style.display =3D=3D=3D "" &amp;&amp;

			// Otherwise, check computed style
			// Support: Firefox &lt;=3D43 - 45
			// Disconnected elements can have computed display: none, so first confi=
rm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &amp;&amp;

			jQuery.css( elem, "display" ) =3D=3D=3D "none";
	};

var swap =3D function( elem, options, callback, args ) {
	var ret, name,
		old =3D {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] =3D elem.style[ name ];
		elem.style[ name ] =3D options[ name ];
	}

	ret =3D callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] =3D old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations =3D 20,
		currentValue =3D tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial =3D currentValue(),
		unit =3D valueParts &amp;&amp; valueParts[ 3 ] || ( jQuery.cssNumber[ pro=
p ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit =3D ( jQuery.cssNumber[ prop ] || unit !=3D=3D "px" &amp;&a=
mp; +initial ) &amp;&amp;
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit &amp;&amp; initialInUnit[ 3 ] !=3D=3D unit ) {

		// Support: Firefox &lt;=3D54
		// Halve the iteration target value to prevent interference from CSS uppe=
r bounds (gh-2144)
		initial =3D initial / 2;

		// Trust units reported by jQuery.css
		unit =3D unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit =3D +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product n=
on-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale =3D currentValue() / initial || 0.5 )=
 ) &lt;=3D 0 ) {
				maxIterations =3D 0;
			}
			initialInUnit =3D initialInUnit / scale;

		}

		initialInUnit =3D initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts =3D valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit =3D +initialInUnit || +initial || 0;

		// Apply relative offset (+=3D/-=3D) if specified
		adjusted =3D valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit =3D unit;
			tween.start =3D initialInUnit;
			tween.end =3D adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap =3D {};

function getDefaultDisplay( elem ) {
	var temp,
		doc =3D elem.ownerDocument,
		nodeName =3D elem.nodeName,
		display =3D defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp =3D doc.body.appendChild( doc.createElement( nodeName ) );
	display =3D jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display =3D=3D=3D "none" ) {
		display =3D "block";
	}
	defaultDisplayMap[ nodeName ] =3D display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values =3D [],
		index =3D 0,
		length =3D elements.length;

	// Determine new display value for elements that need to change
	for ( ; index &lt; length; index++ ) {
		elem =3D elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display =3D elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate =
(and slow)
			// check is required in this first loop unless we have a nonempty displa=
y value (either
			// inline or about-to-be-restored)
			if ( display =3D=3D=3D "none" ) {
				values[ index ] =3D dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display =3D "";
				}
			}
			if ( elem.style.display =3D=3D=3D "" &amp;&amp; isHiddenWithinTree( elem=
 ) ) {
				values[ index ] =3D getDefaultDisplay( elem );
			}
		} else {
			if ( display !=3D=3D "none" ) {
				values[ index ] =3D "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant refl=
ow
	for ( index =3D 0; index &lt; length; index++ ) {
		if ( values[ index ] !=3D null ) {
			elements[ index ].style.display =3D values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state =3D=3D=3D "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType =3D ( /^(?:checkbox|radio)$/i );

var rtagName =3D ( /&lt;([a-z][^\/\0&gt;\x20\t\r\n\f]+)/i );

var rscriptType =3D ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap =3D {

	// Support: IE &lt;=3D9 only
	option: [ 1, "&lt;select multiple=3D'multiple'&gt;", "&lt;/select&gt;" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting &lt;tbody&gt; or other required elements.
	thead: [ 1, "&lt;table&gt;", "&lt;/table&gt;" ],
	col: [ 2, "&lt;table&gt;&lt;colgroup&gt;", "&lt;/colgroup&gt;&lt;/table&gt=
;" ],
	tr: [ 2, "&lt;table&gt;&lt;tbody&gt;", "&lt;/tbody&gt;&lt;/table&gt;" ],
	td: [ 3, "&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;", "&lt;/tr&gt;&lt;/tbody&gt=
;&lt;/table&gt;" ],

	_default: [ 0, "", "" ]
};

// Support: IE &lt;=3D9 only
wrapMap.optgroup =3D wrapMap.option;

wrapMap.tbody =3D wrapMap.tfoot =3D wrapMap.colgroup =3D wrapMap.caption =
=3D wrapMap.thead;
wrapMap.th =3D wrapMap.td;


function getAll( context, tag ) {

	// Support: IE &lt;=3D9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#1=
5151)
	var ret;

	if ( typeof context.getElementsByTagName !=3D=3D "undefined" ) {
		ret =3D context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !=3D=3D "undefined" ) {
		ret =3D context.querySelectorAll( tag || "*" );

	} else {
		ret =3D [];
	}

	if ( tag =3D=3D=3D undefined || tag &amp;&amp; nodeName( context, tag ) ) =
{
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i =3D 0,
		l =3D elems.length;

	for ( ; i &lt; l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml =3D /&lt;|&amp;#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment =3D context.createDocumentFragment(),
		nodes =3D [],
		i =3D 0,
		l =3D elems.length;

	for ( ; i &lt; l; i++ ) {
		elem =3D elems[ i ];

		if ( elem || elem =3D=3D=3D 0 ) {

			// Add nodes directly
			if ( toType( elem ) =3D=3D=3D "object" ) {

				// Support: Android &lt;=3D4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp =3D tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag =3D ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap =3D wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML =3D wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j =3D wrap[ 0 ];
				while ( j-- ) {
					tmp =3D tmp.lastChild;
				}

				// Support: Android &lt;=3D4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp =3D fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent =3D "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent =3D "";

	i =3D 0;
	while ( ( elem =3D nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection &amp;&amp; jQuery.inArray( elem, selection ) &gt; -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains =3D jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp =3D getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j =3D 0;
			while ( ( elem =3D tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment =3D document.createDocumentFragment(),
		div =3D fragment.appendChild( document.createElement( "div" ) ),
		input =3D document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android &lt;=3D4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone =3D div.cloneNode( true ).cloneNode( true ).lastChild.c=
hecked;

	// Support: IE &lt;=3D11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML =3D "&lt;textarea&gt;x&lt;/textarea&gt;";
	support.noCloneChecked =3D !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement =3D document.documentElement;



var
	rkeyEvent =3D /^key/,
	rmouseEvent =3D /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace =3D /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE &lt;=3D9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types =3D=3D=3D "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !=3D=3D "string" ) {

			// ( types-Object, data )
			data =3D data || selector;
			selector =3D undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data =3D=3D null &amp;&amp; fn =3D=3D null ) {

		// ( types, fn )
		fn =3D selector;
		data =3D selector =3D undefined;
	} else if ( fn =3D=3D null ) {
		if ( typeof selector =3D=3D=3D "string" ) {

			// ( types, selector, fn )
			fn =3D data;
			data =3D undefined;
		} else {

			// ( types, data, fn )
			fn =3D data;
			data =3D selector;
			selector =3D undefined;
		}
	}
	if ( fn =3D=3D=3D false ) {
		fn =3D returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one =3D=3D=3D 1 ) {
		origFn =3D fn;
		fn =3D function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid =3D origFn.guid || ( origFn.guid =3D jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface=
.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event =3D {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData =3D dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain o=
bjects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn =3D handler;
			handler =3D handleObjIn.handler;
			selector =3D handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e=
.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it lat=
er
		if ( !handler.guid ) {
			handler.guid =3D jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the fi=
rst
		if ( !( events =3D elemData.events ) ) {
			events =3D elemData.events =3D {};
		}
		if ( !( eventHandle =3D elemData.handle ) ) {
			eventHandle =3D elemData.handle =3D function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !=3D=3D "undefined" &amp;&amp; jQuery.event.trigge=
red !=3D=3D e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types =3D ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t =3D types.length;
		while ( t-- ) {
			tmp =3D rtypenamespace.exec( types[ t ] ) || [];
			type =3D origType =3D tmp[ 1 ];
			namespaces =3D ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the cha=
nged type
			special =3D jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise give=
n type
			type =3D ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special =3D jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj =3D jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector &amp;&amp; jQuery.expr.match.needsContext.test( =
selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers =3D events[ type ] ) ) {
				handlers =3D events[ type ] =3D [];
				handlers.delegateCount =3D 0;

				// Only use addEventListener if the special events handler returns fals=
e
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) =3D=3D=3D fa=
lse ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid =3D handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimizatio=
n
			jQuery.event.global[ type ] =3D true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData =3D dataPriv.hasData( elem ) &amp;&amp; dataPriv.get( elem );

		if ( !elemData || !( events =3D elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types =3D ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t =3D types.length;
		while ( t-- ) {
			tmp =3D rtypenamespace.exec( types[ t ] ) || [];
			type =3D origType =3D tmp[ 1 ];
			namespaces =3D ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true =
);
				}
				continue;
			}

			special =3D jQuery.event.special[ type ] || {};
			type =3D ( selector ? special.delegateType : special.bindType ) || type;
			handlers =3D events[ type ] || [];
			tmp =3D tmp[ 2 ] &amp;&amp;
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" =
);

			// Remove matching events
			origCount =3D j =3D handlers.length;
			while ( j-- ) {
				handleObj =3D handlers[ j ];

				if ( ( mappedTypes || origType =3D=3D=3D handleObj.origType ) &amp;&amp=
;
					( !handler || handler.guid =3D=3D=3D handleObj.guid ) &amp;&amp;
					( !tmp || tmp.test( handleObj.namespace ) ) &amp;&amp;
					( !selector || selector =3D=3D=3D handleObj.selector ||
						selector =3D=3D=3D "**" &amp;&amp; handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more hand=
lers exist
			// (avoids potential for endless recursion during removal of special eve=
nt handlers)
			if ( origCount &amp;&amp; !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) =3D=3D=3D f=
alse ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event =3D jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args =3D new Array( arguments.length ),
			handlers =3D ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [=
],
			special =3D jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] =3D event;

		for ( i =3D 1; i &lt; arguments.length; i++ ) {
			args[ i ] =3D arguments[ i ];
		}

		event.delegateTarget =3D this;

		// Call the preDispatch hook for the mapped type, and let it bail if desi=
red
		if ( special.preDispatch &amp;&amp; special.preDispatch.call( this, event=
 ) =3D=3D=3D false ) {
			return;
		}

		// Determine handlers
		handlerQueue =3D jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i =3D 0;
		while ( ( matched =3D handlerQueue[ i++ ] ) &amp;&amp; !event.isPropagati=
onStopped() ) {
			event.currentTarget =3D matched.elem;

			j =3D 0;
			while ( ( handleObj =3D matched.handlers[ j++ ] ) &amp;&amp;
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespa=
ce(s)
				// a subset or equal to those in the bound event (both can have no name=
space).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) =
) {

					event.handleObj =3D handleObj;
					event.data =3D handleObj.data;

					ret =3D ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle =
||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !=3D=3D undefined ) {
						if ( ( event.result =3D ret ) =3D=3D=3D false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue =3D [],
			delegateCount =3D handlers.delegateCount,
			cur =3D event.target;

		// Find delegate handlers
		if ( delegateCount &amp;&amp;

			// Support: IE &lt;=3D9
			// Black-hole SVG &lt;use&gt; instance trees (trac-13180)
			cur.nodeType &amp;&amp;

			// Support: Firefox &lt;=3D42
			// Suppress spec-violating clicks indicating a non-primary pointer butto=
n (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button=
` -1 (gh-2343)
			!( event.type =3D=3D=3D "click" &amp;&amp; event.button &gt;=3D 1 ) ) {

			for ( ; cur !=3D=3D this; cur =3D cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11=
764)
				if ( cur.nodeType =3D=3D=3D 1 &amp;&amp; !( event.type =3D=3D=3D "click=
" &amp;&amp; cur.disabled =3D=3D=3D true ) ) {
					matchedHandlers =3D [];
					matchedSelectors =3D {};
					for ( i =3D 0; i &lt; delegateCount; i++ ) {
						handleObj =3D handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel =3D handleObj.selector + " ";

						if ( matchedSelectors[ sel ] =3D=3D=3D undefined ) {
							matchedSelectors[ sel ] =3D handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) &gt; -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur =3D this;
		if ( delegateCount &lt; handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount =
) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !=3D=3D safeActiveElement() &amp;&amp; this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this =3D=3D=3D safeActiveElement() &amp;&amp; this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type =3D=3D=3D "checkbox" &amp;&amp; this.click &amp;&amp; no=
deName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !=3D=3D undefined &amp;&amp; event.originalEvent ) {
					event.originalEvent.returnValue =3D event.result;
				}
			}
		}
	}
};

jQuery.removeEvent =3D function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event =3D function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src &amp;&amp; src.type ) {
		this.originalEvent =3D src;
		this.type =3D src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented =3D src.defaultPrevented ||
				src.defaultPrevented =3D=3D=3D undefined &amp;&amp;

				// Support: Android &lt;=3D2.3 only
				src.returnValue =3D=3D=3D false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari &lt;=3D6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target =3D ( src.target &amp;&amp; src.target.nodeType =3D=3D=3D 3 )=
 ?
			src.target.parentNode :
			src.target;

		this.currentTarget =3D src.currentTarget;
		this.relatedTarget =3D src.relatedTarget;

	// Event type
	} else {
		this.type =3D src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp =3D src &amp;&amp; src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] =3D true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Lang=
uage Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-bi=
nding.html
jQuery.Event.prototype =3D {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e =3D this.originalEvent;

		this.isDefaultPrevented =3D returnTrue;

		if ( e &amp;&amp; !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e =3D this.originalEvent;

		this.isPropagationStopped =3D returnTrue;

		if ( e &amp;&amp; !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e =3D this.originalEvent;

		this.isImmediatePropagationStopped =3D returnTrue;

		if ( e &amp;&amp; !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specif=
ic props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button =3D event.button;

		// Add which for key events
		if ( event.which =3D=3D null &amp;&amp; rkeyEvent.test( event.type ) ) {
			return event.charCode !=3D null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 =3D=3D=3D left; 2 =3D=3D=3D middle; 3 =3D=3D=3D=
 right
		if ( !event.which &amp;&amp; button !=3D=3D undefined &amp;&amp; rmouseEv=
ent.test( event.type ) ) {
			if ( button &amp; 1 ) {
				return 1;
			}

			if ( button &amp; 2 ) {
				return 3;
			}

			if ( button &amp; 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=3D470258
// for the description of the bug (it existed in older Chrome versions as w=
ell).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] =3D {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target =3D this,
				related =3D event.relatedTarget,
				handleObj =3D event.handleObj;

			// For mouseenter/leave call the handler if related is outside the targe=
t.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !=3D=3D target &amp;&amp; !jQuery.contains( t=
arget, related ) ) ) {
				event.type =3D handleObj.origType;
				ret =3D handleObj.handler.apply( this, arguments );
				event.type =3D fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types &amp;&amp; types.preventDefault &amp;&amp; types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj =3D types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types =3D=3D=3D "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector =3D=3D=3D false || typeof selector =3D=3D=3D "function" ) {

			// ( types [, fn] )
			fn =3D selector;
			selector =3D undefined;
		}
		if ( fn =3D=3D=3D false ) {
			fn =3D returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag =3D /&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-=
z][^\/\0&gt;\x20\t\r\n\f]*)[^&gt;]*)\/&gt;/gi,

	/* eslint-enable */

	// Support: IE &lt;=3D10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml =3D /&lt;script|&lt;style|&lt;link/i,

	// checked=3D"checked" or checked
	rchecked =3D /checked\s*(?:[^=3D]|=3D\s*.checked.)/i,
	rcleanScript =3D /^\s*&lt;!(?:\[CDATA\[|--)|(?:\]\]|--)&gt;\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &amp;&amp;
		nodeName( content.nodeType !=3D=3D 11 ? content : content.firstChild, "tr=
" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manip=
ulation
function disableScript( elem ) {
	elem.type =3D ( elem.getAttribute( "type" ) !=3D=3D null ) + "/" + elem.ty=
pe;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) =3D=3D=3D "true/" ) {
		elem.type =3D elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !=3D=3D 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld =3D dataPriv.access( src );
		pdataCur =3D dataPriv.set( dest, pdataOld );
		events =3D pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events =3D {};

			for ( type in events ) {
				for ( i =3D 0, l =3D events[ type ].length; i &lt; l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld =3D dataUser.access( src );
		udataCur =3D jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName =3D dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button=
.
	if ( nodeName =3D=3D=3D "input" &amp;&amp; rcheckableType.test( src.type )=
 ) {
		dest.checked =3D src.checked;

	// Fails to return the selected option to the default selected state when =
cloning options
	} else if ( nodeName =3D=3D=3D "input" || nodeName =3D=3D=3D "textarea" ) =
{
		dest.defaultValue =3D src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args =3D concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i =3D 0,
		l =3D collection.length,
		iNoClone =3D l - 1,
		value =3D args[ 0 ],
		valueIsFunction =3D isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l &gt; 1 &amp;&amp; typeof value =3D=3D=3D "string" &amp;&amp;
				!support.checkClone &amp;&amp; rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self =3D collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] =3D value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment =3D buildFragment( args, collection[ 0 ].ownerDocument, false, c=
ollection, ignored );
		first =3D fragment.firstChild;

		if ( fragment.childNodes.length =3D=3D=3D 1 ) {
			fragment =3D first;
		}

		// Require either new content or an interest in ignored elements to invok=
e the callback
		if ( first || ignored ) {
			scripts =3D jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts =3D scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i &lt; l; i++ ) {
				node =3D fragment;

				if ( i !=3D=3D iNoClone ) {
					node =3D jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android &lt;=3D4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc =3D scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i =3D 0; i &lt; hasScripts; i++ ) {
					node =3D scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &amp;&amp;
						!dataPriv.access( node, "globalEval" ) &amp;&amp;
						jQuery.contains( doc, node ) ) {

						if ( node.src &amp;&amp; ( node.type || "" ).toLowerCase()  !=3D=3D "=
module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes =3D selector ? jQuery.filter( selector, elem ) : elem,
		i =3D 0;

	for ( ; ( node =3D nodes[ i ] ) !=3D null; i++ ) {
		if ( !keepData &amp;&amp; node.nodeType =3D=3D=3D 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData &amp;&amp; jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "&lt;$1&gt;&lt;/$2&gt;" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone =3D elem.cloneNode( true ),
			inPage =3D jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked &amp;&amp; ( elem.nodeType =3D=3D=3D 1 || el=
em.nodeType =3D=3D=3D 11 ) &amp;&amp;
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/get=
all-vs-sizzle/2
			destElements =3D getAll( clone );
			srcElements =3D getAll( elem );

			for ( i =3D 0, l =3D srcElements.length; i &lt; l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements =3D srcElements || getAll( elem );
				destElements =3D destElements || getAll( clone );

				for ( i =3D 0, l =3D srcElements.length; i &lt; l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements =3D getAll( clone, "script" );
		if ( destElements.length &gt; 0 ) {
			setGlobalEval( destElements, !inPage &amp;&amp; getAll( elem, "script" )=
 );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special =3D jQuery.event.special,
			i =3D 0;

		for ( ; ( elem =3D elems[ i ] ) !=3D=3D undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data =3D elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome &lt;=3D35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] =3D undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome &lt;=3D35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] =3D undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value =3D=3D=3D undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType =3D=3D=3D 1 || this.nodeType =3D=3D=3D 11 || this.n=
odeType =3D=3D=3D 9 ) {
						this.textContent =3D value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType =3D=3D=3D 1 || this.nodeType =3D=3D=3D 11 || this.nod=
eType =3D=3D=3D 9 ) {
				var target =3D manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType =3D=3D=3D 1 || this.nodeType =3D=3D=3D 11 || this.nod=
eType =3D=3D=3D 9 ) {
				var target =3D manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i =3D 0;

		for ( ; ( elem =3D this[ i ] ) !=3D null; i++ ) {
			if ( elem.nodeType =3D=3D=3D 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent =3D "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents =3D dataAndEvents =3D=3D null ? false : dataAndEvents;
		deepDataAndEvents =3D deepDataAndEvents =3D=3D null ? dataAndEvents : dee=
pDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem =3D this[ 0 ] || {},
				i =3D 0,
				l =3D this.length;

			if ( value =3D=3D=3D undefined &amp;&amp; elem.nodeType =3D=3D=3D 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value =3D=3D=3D "string" &amp;&amp; !rnoInnerhtml.test( valu=
e ) &amp;&amp;
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ]=
 ) {

				value =3D jQuery.htmlPrefilter( value );

				try {
					for ( ; i &lt; l; i++ ) {
						elem =3D this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType =3D=3D=3D 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML =3D value;
						}
					}

					elem =3D 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored =3D [];

		// Make the changes, replacing each non-ignored context element with the =
new content
		return domManip( this, arguments, function( elem ) {
			var parent =3D this.parentNode;

			if ( jQuery.inArray( this, ignored ) &lt; 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] =3D function( selector ) {
		var elems,
			ret =3D [],
			insert =3D jQuery( selector ),
			last =3D insert.length - 1,
			i =3D 0;

		for ( ; i &lt;=3D last; i++ ) {
			elems =3D i =3D=3D=3D last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android &lt;=3D4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx =3D new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles =3D function( elem ) {

		// Support: IE &lt;=3D11 only, Firefox &lt;=3D30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputed=
Style"
		var view =3D elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view =3D window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle =3D new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition &amp; boxSizingReliable tests require only=
 one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText =3D "position:absolute;left:-11111px;width:60px;"=
 +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =3D
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;"=
 +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle =3D window.getComputedStyle( div );
		pixelPositionVal =3D divStyle.top !=3D=3D "1%";

		// Support: Android 4.0 - 4.3 only, Firefox &lt;=3D3 - 44
		reliableMarginLeftVal =3D roundPixelMeasures( divStyle.marginLeft ) =3D=
=3D=3D 12;

		// Support: Android 4.0 - 4.3 only, Safari &lt;=3D9.1 - 10.1, iOS &lt;=3D=
7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn=
't
		div.style.right =3D "60%";
		pixelBoxStylesVal =3D roundPixelMeasures( divStyle.right ) =3D=3D=3D 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box el=
ements
		boxSizingReliableVal =3D roundPixelMeasures( divStyle.width ) =3D=3D=3D 3=
6;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position =3D "absolute";
		scrollboxSizeVal =3D div.offsetWidth =3D=3D=3D 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div =3D null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStyl=
esVal,
		reliableMarginLeftVal,
		container =3D document.createElement( "div" ),
		div =3D document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE &lt;=3D9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip =3D "content-box";
	div.cloneNode( true ).style.backgroundClip =3D "";
	support.clearCloneStyle =3D div.style.backgroundClip =3D=3D=3D "content-bo=
x";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style =3D elem.style;

	computed =3D computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret =3D computed.getPropertyValue( name ) || computed[ name ];

		if ( ret =3D=3D=3D "" &amp;&amp; !jQuery.contains( elem.ownerDocument, el=
em ) ) {
			ret =3D jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() &amp;&amp; rnumnonpx.test( ret ) &amp;&amp=
; rboxStyle.test( name ) ) {

			// Remember the original values
			width =3D style.width;
			minWidth =3D style.minWidth;
			maxWidth =3D style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth =3D style.maxWidth =3D style.width =3D ret;
			ret =3D computed.width;

			// Revert the changed values
			style.width =3D width;
			style.minWidth =3D minWidth;
			style.maxWidth =3D maxWidth;
		}
	}

	return ret !=3D=3D undefined ?

		// Support: IE &lt;=3D9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed aga=
in.
			return ( this.get =3D hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/C=
SS/display
	rdisplayswap =3D /^(none|table(?!-c[ea]).+)/,
	rcustomProp =3D /^--/,
	cssShow =3D { position: "absolute", visibility: "hidden", display: "block"=
 },
	cssNormalTransform =3D {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes =3D [ "Webkit", "Moz", "ms" ],
	emptyStyle =3D document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName =3D name[ 0 ].toUpperCase() + name.slice( 1 ),
		i =3D cssPrefixes.length;

	while ( i-- ) {
		name =3D cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret =3D jQuery.cssProps[ name ];
	if ( !ret ) {
		ret =3D jQuery.cssProps[ name ] =3D vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches =3D rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" =
) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, com=
putedVal ) {
	var i =3D dimension =3D=3D=3D "width" ? 1 : 0,
		extra =3D 0,
		delta =3D 0;

	// Adjustment may not be necessary
	if ( box =3D=3D=3D ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i &lt; 4; i +=3D 2 ) {

		// Both box models exclude margin
		if ( box =3D=3D=3D "margin" ) {
			delta +=3D jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border"=
 or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta +=3D jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !=3D=3D "padding" ) {
				delta +=3D jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true,=
 styles );

			// But still keep track of it otherwise
			} else {
				extra +=3D jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true,=
 styles );
			}

		// If we get here with a border-box (content + padding + border), we're s=
eeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box =3D=3D=3D "content" ) {
				delta -=3D jQuery.css( elem, "padding" + cssExpand[ i ], true, styles )=
;
			}

			// For "content" or "padding", subtract border
			if ( box !=3D=3D "margin" ) {
				delta -=3D jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true,=
 styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by provid=
ing computedVal
	if ( !isBorderBox &amp;&amp; computedVal &gt;=3D 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll =
gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta +=3D Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles =3D getStyles( elem ),
		val =3D curCSS( elem, dimension, styles ),
		isBorderBox =3D jQuery.css( elem, "boxSizing", false, styles ) =3D=3D=3D =
"border-box",
		valueIsBorderBox =3D isBorderBox;

	// Support: Firefox &lt;=3D54
	// Return a confounding non-pixel value or feign ignorance, as appropriate=
.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val =3D "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox =3D valueIsBorderBox &amp;&amp;
		( support.boxSizingReliable() || val =3D=3D=3D elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android &lt;=3D4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh=
-3602)
	if ( val =3D=3D=3D "auto" ||
		!parseFloat( val ) &amp;&amp; jQuery.css( elem, "display", false, styles =
) =3D=3D=3D "inline" ) {

		val =3D elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( =
1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox =3D true;
	}

	// Normalize "" and auto
	val =3D parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculatio=
n (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret =3D curCSS( elem, "opacity" );
					return ret =3D=3D=3D "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType =3D=3D=3D 3 || elem.nodeType =3D=3D=3D 8 || !=
elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName =3D camelCase( name ),
			isCustomProp =3D rcustomProp.test( name ),
			style =3D elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name =3D finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks =3D jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !=3D=3D undefined ) {
			type =3D typeof value;

			// Convert "+=3D" or "-=3D" to relative numbers (#7345)
			if ( type =3D=3D=3D "string" &amp;&amp; ( ret =3D rcssNum.exec( value ) =
) &amp;&amp; ret[ 1 ] ) {
				value =3D adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type =3D "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value =3D=3D null || value !=3D=3D value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS prope=
rties)
			if ( type =3D=3D=3D "number" ) {
				value +=3D ret &amp;&amp; ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? =
"" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle &amp;&amp; value =3D=3D=3D "" &amp;&amp; n=
ame.indexOf( "background" ) =3D=3D=3D 0 ) {
				style[ name ] =3D "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specif=
ied value
			if ( !hooks || !( "set" in hooks ) ||
				( value =3D hooks.set( elem, value, extra ) ) !=3D=3D undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] =3D value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks &amp;&amp; "get" in hooks &amp;&amp;
				( ret =3D hooks.get( elem, false, extra ) ) !=3D=3D undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName =3D camelCase( name ),
			isCustomProp =3D rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name =3D finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks =3D jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks &amp;&amp; "get" in hooks ) {
			val =3D hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val =3D=3D=3D undefined ) {
			val =3D curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val =3D=3D=3D "normal" &amp;&amp; name in cssNormalTransform ) {
			val =3D cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numer=
ic
		if ( extra =3D=3D=3D "" || extra ) {
			num =3D parseFloat( val );
			return extra =3D=3D=3D true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] =3D {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &amp;&amp;

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth &amp; zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE &lt;=3D11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width=
 ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles =3D getStyles( elem ),
				isBorderBox =3D jQuery.css( elem, "boxSizing", false, styles ) =3D=3D=
=3D "border-box",
				subtract =3D extra &amp;&amp; boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to =
computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox &amp;&amp; support.scrollboxSize() =3D=3D=3D styles.pos=
ition ) {
				subtract -=3D Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ]=
 -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract &amp;&amp; ( matches =3D rcssNum.exec( value ) ) &amp;&amp=
;
				( matches[ 3 ] || "px" ) !=3D=3D "px" ) {

				elem.style[ dimension ] =3D value;
				value =3D jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft =3D addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] =3D {
		expand: function( value ) {
			var i =3D 0,
				expanded =3D {},

				// Assumes a single number if not a string
				parts =3D typeof value =3D=3D=3D "string" ? value.split( " " ) : [ valu=
e ];

			for ( ; i &lt; 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =3D
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !=3D=3D "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set =3D setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map =3D {},
				i =3D 0;

			if ( Array.isArray( name ) ) {
				styles =3D getStyles( elem );
				len =3D name.length;

				for ( ; i &lt; len; i++ ) {
					map[ name[ i ] ] =3D jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !=3D=3D undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length &gt; 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween =3D Tween;

Tween.prototype =3D {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem =3D elem;
		this.prop =3D prop;
		this.easing =3D easing || jQuery.easing._default;
		this.options =3D options;
		this.start =3D this.now =3D this.cur();
		this.end =3D end;
		this.unit =3D unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks =3D Tween.propHooks[ this.prop ];

		return hooks &amp;&amp; hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks =3D Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos =3D eased =3D jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos =3D eased =3D percent;
		}
		this.now =3D ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks &amp;&amp; hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype =3D Tween.prototype;

Tween.propHooks =3D {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !=3D=3D 1 ||
				tween.elem[ tween.prop ] !=3D null &amp;&amp; tween.elem.style[ tween.p=
rop ] =3D=3D null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result =3D jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result =3D=3D=3D "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType =3D=3D=3D 1 &amp;&amp;
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] !=3D null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] =3D tween.now;
			}
		}
	}
};

// Support: IE &lt;=3D9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop =3D Tween.propHooks.scrollLeft =3D {
	set: function( tween ) {
		if ( tween.elem.nodeType &amp;&amp; tween.elem.parentNode ) {
			tween.elem[ tween.prop ] =3D tween.now;
		}
	}
};

jQuery.easing =3D {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx =3D Tween.prototype.init;

// Back compat &lt;1.8 extension point
jQuery.fx.step =3D {};




var
	fxNow, inProgress,
	rfxtypes =3D /^(?:toggle|show|hide)$/,
	rrun =3D /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden =3D=3D=3D false &amp;&amp; window.requestAnimationFr=
ame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow =3D undefined;
	} );
	return ( fxNow =3D Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i =3D 0,
		attrs =3D { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth =3D includeWidth ? 1 : 0;
	for ( ; i &lt; 4; i +=3D 2 - includeWidth ) {
		which =3D cssExpand[ i ];
		attrs[ "margin" + which ] =3D attrs[ "padding" + which ] =3D type;
	}

	if ( includeWidth ) {
		attrs.opacity =3D attrs.width =3D type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection =3D ( Animation.tweeners[ prop ] || [] ).concat( Animation.twe=
eners[ "*" ] ),
		index =3D 0,
		length =3D collection.length;
	for ( ; index &lt; length; index++ ) {
		if ( ( tween =3D collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, displa=
y,
		isBox =3D "width" in props || "height" in props,
		anim =3D this,
		orig =3D {},
		style =3D elem.style,
		hidden =3D elem.nodeType &amp;&amp; isHiddenWithinTree( elem ),
		dataShow =3D dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks =3D jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued =3D=3D null ) {
			hooks.unqueued =3D 0;
			oldfire =3D hooks.empty.fire;
			hooks.empty.fire =3D function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value =3D props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle =3D toggle || value =3D=3D=3D "toggle";
			if ( value =3D=3D=3D ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value =3D=3D=3D "show" &amp;&amp; dataShow &amp;&amp; dataShow[ pr=
op ] !=3D=3D undefined ) {
					hidden =3D true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] =3D dataShow &amp;&amp; dataShow[ prop ] || jQuery.style( e=
lem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween =3D !jQuery.isEmptyObject( props );
	if ( !propTween &amp;&amp; jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox &amp;&amp; elem.nodeType =3D=3D=3D 1 ) {

		// Support: IE &lt;=3D9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shortha=
nd
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow =3D [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS ca=
scade
		restoreDisplay =3D dataShow &amp;&amp; dataShow.display;
		if ( restoreDisplay =3D=3D null ) {
			restoreDisplay =3D dataPriv.get( elem, "display" );
		}
		display =3D jQuery.css( elem, "display" );
		if ( display =3D=3D=3D "none" ) {
			if ( restoreDisplay ) {
				display =3D restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay =3D elem.style.display || restoreDisplay;
				display =3D jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display =3D=3D=3D "inline" || display =3D=3D=3D "inline-block" &amp;=
&amp; restoreDisplay !=3D null ) {
			if ( jQuery.css( elem, "float" ) =3D=3D=3D "none" ) {

				// Restore the original display value at the end of pure show/hide anim=
ations
				if ( !propTween ) {
					anim.done( function() {
						style.display =3D restoreDisplay;
					} );
					if ( restoreDisplay =3D=3D null ) {
						display =3D style.display;
						restoreDisplay =3D display =3D=3D=3D "none" ? "" : display;
					}
				}
				style.display =3D "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow =3D "hidden";
		anim.always( function() {
			style.overflow =3D opts.overflow[ 0 ];
			style.overflowX =3D opts.overflow[ 1 ];
			style.overflowY =3D opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween =3D false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden =3D dataShow.hidden;
				}
			} else {
				dataShow =3D dataPriv.access( elem, "fxshow", { display: restoreDisplay=
 } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden =3D !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween =3D createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] =3D propTween.start;
			if ( hidden ) {
				propTween.end =3D propTween.start;
				propTween.start =3D 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name =3D camelCase( index );
		easing =3D specialEasing[ name ];
		value =3D props[ index ];
		if ( Array.isArray( value ) ) {
			easing =3D value[ 1 ];
			value =3D props[ index ] =3D value[ 0 ];
		}

		if ( index !=3D=3D name ) {
			props[ name ] =3D value;
			delete props[ index ];
		}

		hooks =3D jQuery.cssHooks[ name ];
		if ( hooks &amp;&amp; "expand" in hooks ) {
			value =3D hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] =3D value[ index ];
					specialEasing[ index ] =3D easing;
				}
			}
		} else {
			specialEasing[ name ] =3D easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index =3D 0,
		length =3D Animation.prefilters.length,
		deferred =3D jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick =3D function() {
			if ( stopped ) {
				return false;
			}
			var currentTime =3D fxNow || createFxNow(),
				remaining =3D Math.max( 0, animation.startTime + animation.duration - c=
urrentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp =3D remaining / animation.duration || 0,
				percent =3D 1 - temp,
				index =3D 0,
				length =3D animation.tweens.length;

			for ( ; index &lt; length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent &lt; 1 &amp;&amp; length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notificat=
ion
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation =3D deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween =3D jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index =3D 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length =3D gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped =3D true;
				for ( ; index &lt; length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props =3D animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index &lt; length; index++ ) {
		result =3D Animation.prefilters[ index ].call( animation, elem, props, an=
imation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =3D
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation =3D jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween =3D this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback =3D props;
			props =3D [ "*" ];
		} else {
			props =3D props.match( rnothtmlwhite );
		}

		var prop,
			index =3D 0,
			length =3D props.length;

		for ( ; index &lt; length; index++ ) {
			prop =3D props[ index ];
			Animation.tweeners[ prop ] =3D Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed =3D function( speed, easing, fn ) {
	var opt =3D speed &amp;&amp; typeof speed =3D=3D=3D "object" ? jQuery.exte=
nd( {}, speed ) : {
		complete: fn || !fn &amp;&amp; easing ||
			isFunction( speed ) &amp;&amp; speed,
		duration: speed,
		easing: fn &amp;&amp; easing || easing &amp;&amp; !isFunction( easing ) &=
amp;&amp; easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration =3D 0;

	} else {
		if ( typeof opt.duration !=3D=3D "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration =3D jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration =3D jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -&gt; "fx"
	if ( opt.queue =3D=3D null || opt.queue =3D=3D=3D true ) {
		opt.queue =3D "fx";
	}

	// Queueing
	opt.old =3D opt.complete;

	opt.complete =3D function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty =3D jQuery.isEmptyObject( prop ),
			optall =3D jQuery.speed( speed, easing, callback ),
			doAnimation =3D function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim =3D Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish =3D doAnimation;

		return empty || optall.queue =3D=3D=3D false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue =3D function( hooks ) {
			var stop =3D hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !=3D=3D "string" ) {
			gotoEnd =3D clearQueue;
			clearQueue =3D type;
			type =3D undefined;
		}
		if ( clearQueue &amp;&amp; type !=3D=3D false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue =3D true,
				index =3D type !=3D null &amp;&amp; type + "queueHooks",
				timers =3D jQuery.timers,
				data =3D dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] &amp;&amp; data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] &amp;&amp; data[ index ].stop &amp;&amp; rrun.test(=
 index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index =3D timers.length; index--; ) {
				if ( timers[ index ].elem =3D=3D=3D this &amp;&amp;
					( type =3D=3D null || timers[ index ].queue =3D=3D=3D type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue =3D false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !=3D=3D false ) {
			type =3D type || "fx";
		}
		return this.each( function() {
			var index,
				data =3D dataPriv.get( this ),
				queue =3D data[ type + "queue" ],
				hooks =3D data[ type + "queueHooks" ],
				timers =3D jQuery.timers,
				length =3D queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish =3D true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks &amp;&amp; hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index =3D timers.length; index--; ) {
				if ( timers[ index ].elem =3D=3D=3D this &amp;&amp; timers[ index ].que=
ue =3D=3D=3D type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index =3D 0; index &lt; length; index++ ) {
				if ( queue[ index ] &amp;&amp; queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn =3D jQuery.fn[ name ];
	jQuery.fn[ name ] =3D function( speed, easing, callback ) {
		return speed =3D=3D null || typeof speed =3D=3D=3D "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] =3D function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers =3D [];
jQuery.fx.tick =3D function() {
	var timer,
		i =3D 0,
		timers =3D jQuery.timers;

	fxNow =3D Date.now();

	for ( ; i &lt; timers.length; i++ ) {
		timer =3D timers[ i ];

		// Run the timer and safely remove it when done (allowing for external re=
moval)
		if ( !timer() &amp;&amp; timers[ i ] =3D=3D=3D timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow =3D undefined;
};

jQuery.fx.timer =3D function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval =3D 13;
jQuery.fx.start =3D function() {
	if ( inProgress ) {
		return;
	}

	inProgress =3D true;
	schedule();
};

jQuery.fx.stop =3D function() {
	inProgress =3D null;
};

jQuery.fx.speeds =3D {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index=
.php/2009/07/jquery-delay/
jQuery.fn.delay =3D function( time, type ) {
	time =3D jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type =3D type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout =3D window.setTimeout( next, time );
		hooks.stop =3D function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input =3D document.createElement( "input" ),
		select =3D document.createElement( "select" ),
		opt =3D select.appendChild( document.createElement( "option" ) );

	input.type =3D "checkbox";

	// Support: Android &lt;=3D4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn =3D input.value !=3D=3D "";

	// Support: IE &lt;=3D11 only
	// Must access selectedIndex to make default options select
	support.optSelected =3D opt.selected;

	// Support: IE &lt;=3D11 only
	// An input loses its value after becoming a radio
	input =3D document.createElement( "input" );
	input.value =3D "t";
	input.type =3D "radio";
	support.radioValue =3D input.value =3D=3D=3D "t";
} )();


var boolHook,
	attrHandle =3D jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length &gt; 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType =3D elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType =3D=3D=3D 3 || nType =3D=3D=3D 8 || nType =3D=3D=3D 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute =3D=3D=3D "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !=3D=3D 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks =3D jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !=3D=3D undefined ) {
			if ( value =3D=3D=3D null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks &amp;&amp; "set" in hooks &amp;&amp;
				( ret =3D hooks.set( elem, value, name ) ) !=3D=3D undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks &amp;&amp; "get" in hooks &amp;&amp; ( ret =3D hooks.get( elem=
, name ) ) !=3D=3D null ) {
			return ret;
		}

		ret =3D jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret =3D=3D null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue &amp;&amp; value =3D=3D=3D "radio" &amp;&amp;
					nodeName( elem, "input" ) ) {
					var val =3D elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value =3D val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i =3D 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames =3D value &amp;&amp; value.match( rnothtmlwhite );

		if ( attrNames &amp;&amp; elem.nodeType =3D=3D=3D 1 ) {
			while ( ( name =3D attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook =3D {
	set: function( elem, value, name ) {
		if ( value =3D=3D=3D false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, na=
me ) {
	var getter =3D attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] =3D function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName =3D name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the=
 getter
			handle =3D attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] =3D ret;
			ret =3D getter( elem, name, isXML ) !=3D null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] =3D handle;
		}
		return ret;
	};
} );




var rfocusable =3D /^(?:input|select|textarea|button)$/i,
	rclickable =3D /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length &gt; 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType =3D elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType =3D=3D=3D 3 || nType =3D=3D=3D 8 || nType =3D=3D=3D 2 ) {
			return;
		}

		if ( nType !=3D=3D 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name =3D jQuery.propFix[ name ] || name;
			hooks =3D jQuery.propHooks[ name ];
		}

		if ( value !=3D=3D undefined ) {
			if ( hooks &amp;&amp; "set" in hooks &amp;&amp;
				( ret =3D hooks.set( elem, value, name ) ) !=3D=3D undefined ) {
				return ret;
			}

			return ( elem[ name ] =3D value );
		}

		if ( hooks &amp;&amp; "get" in hooks &amp;&amp; ( ret =3D hooks.get( elem=
, name ) ) !=3D=3D null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE &lt;=3D9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/b=
log/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript=
/
				// Use proper attribute retrieval(#12072)
				var tabindex =3D jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &amp;&amp;
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE &lt;=3D11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected =3D {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent =3D elem.parentNode;
			if ( parent &amp;&amp; parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent =3D elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] =3D this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens =3D value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute &amp;&amp; elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value =3D=3D=3D "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i =3D 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes =3D classesToArray( value );

		if ( classes.length ) {
			while ( ( elem =3D this[ i++ ] ) ) {
				curValue =3D getClass( elem );
				cur =3D elem.nodeType =3D=3D=3D 1 &amp;&amp; ( " " + stripAndCollapse( =
curValue ) + " " );

				if ( cur ) {
					j =3D 0;
					while ( ( clazz =3D classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) &lt; 0 ) {
							cur +=3D clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue =3D stripAndCollapse( cur );
					if ( curValue !=3D=3D finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i =3D 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes =3D classesToArray( value );

		if ( classes.length ) {
			while ( ( elem =3D this[ i++ ] ) ) {
				curValue =3D getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur =3D elem.nodeType =3D=3D=3D 1 &amp;&amp; ( " " + stripAndCollapse( =
curValue ) + " " );

				if ( cur ) {
					j =3D 0;
					while ( ( clazz =3D classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) &gt; -1 ) {
							cur =3D cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue =3D stripAndCollapse( cur );
					if ( curValue !=3D=3D finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type =3D typeof value,
			isValidValue =3D type =3D=3D=3D "string" || Array.isArray( value );

		if ( typeof stateVal =3D=3D=3D "boolean" &amp;&amp; isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i =3D 0;
				self =3D jQuery( this );
				classNames =3D classesToArray( value );

				while ( ( className =3D classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value =3D=3D=3D undefined || type =3D=3D=3D "boolean" ) {
				className =3D getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved i=
t).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value =3D=3D=3D false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i =3D 0;

		className =3D " " + selector + " ";
		while ( ( elem =3D this[ i++ ] ) ) {
			if ( elem.nodeType =3D=3D=3D 1 &amp;&amp;
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className=
 ) &gt; -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn =3D /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem =3D this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks =3D jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &amp;&amp;
					"get" in hooks &amp;&amp;
					( ret =3D hooks.get( elem, "value" ) ) !=3D=3D undefined
				) {
					return ret;
				}

				ret =3D elem.value;

				// Handle most common string cases
				if ( typeof ret =3D=3D=3D "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret =3D=3D null ? "" : ret;
			}

			return;
		}

		valueIsFunction =3D isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !=3D=3D 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val =3D value.call( this, i, jQuery( this ).val() );
			} else {
				val =3D value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val =3D=3D null ) {
				val =3D "";

			} else if ( typeof val =3D=3D=3D "number" ) {
				val +=3D "";

			} else if ( Array.isArray( val ) ) {
				val =3D jQuery.map( val, function( value ) {
					return value =3D=3D null ? "" : value + "";
				} );
			}

			hooks =3D jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName=
.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) =
=3D=3D=3D undefined ) {
				this.value =3D val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val =3D jQuery.find.attr( elem, "value" );
				return val !=3D null ?
					val :

					// Support: IE &lt;=3D10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options =3D elem.options,
					index =3D elem.selectedIndex,
					one =3D elem.type =3D=3D=3D "select-one",
					values =3D one ? null : [],
					max =3D one ? index + 1 : options.length;

				if ( index &lt; 0 ) {
					i =3D max;

				} else {
					i =3D one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i &lt; max; i++ ) {
					option =3D options[ i ];

					// Support: IE &lt;=3D9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i =3D=3D=3D index ) &amp;&amp;

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &amp;&amp;
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value =3D jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options =3D elem.options,
					values =3D jQuery.makeArray( value ),
					i =3D options.length;

				while ( i-- ) {
					option =3D options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =3D
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) &gt; -=
1
					) {
						optionSet =3D true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex =3D -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] =3D {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked =3D jQuery.inArray( jQuery( elem ).val(), value )=
 &gt; -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get =3D function( elem ) {
			return elem.getAttribute( "value" ) =3D=3D=3D null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin =3D "onfocusin" in window;


var rfocusMorph =3D /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback =3D function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath =3D [ elem || document ],
			type =3D hasOwn.call( event, "type" ) ? event.type : event,
			namespaces =3D hasOwn.call( event, "namespace" ) ? event.namespace.split=
( "." ) : [];

		cur =3D lastElement =3D tmp =3D elem =3D elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType =3D=3D=3D 3 || elem.nodeType =3D=3D=3D 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right n=
ow
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) &gt; -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces =3D type.split( "." );
			type =3D namespaces.shift();
			namespaces.sort();
		}
		ontype =3D type.indexOf( ":" ) &lt; 0 &amp;&amp; "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event typ=
e string
		event =3D event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event =3D=3D=3D "object" &amp;&amp; event=
 );

		// Trigger bitmask: &amp; 1 for native handlers; &amp; 2 for jQuery (alwa=
ys true)
		event.isTrigger =3D onlyHandlers ? 2 : 3;
		event.namespace =3D namespaces.join( "." );
		event.rnamespace =3D event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" )=
 :
			null;

		// Clean up the event in case it is being reused
		event.result =3D undefined;
		if ( !event.target ) {
			event.target =3D elem;
		}

		// Clone any incoming data and prepend the event, creating the handler ar=
g list
		data =3D data =3D=3D null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special =3D jQuery.event.special[ type ] || {};
		if ( !onlyHandlers &amp;&amp; special.trigger &amp;&amp; special.trigger.=
apply( elem, data ) =3D=3D=3D false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#995=
1)
		// Bubble up to document, then to window; watch for a global ownerDocumen=
t var (#9724)
		if ( !onlyHandlers &amp;&amp; !special.noBubble &amp;&amp; !isWindow( ele=
m ) ) {

			bubbleType =3D special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur =3D cur.parentNode;
			}
			for ( ; cur; cur =3D cur.parentNode ) {
				eventPath.push( cur );
				tmp =3D cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detache=
d DOM)
			if ( tmp =3D=3D=3D ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i =3D 0;
		while ( ( cur =3D eventPath[ i++ ] ) &amp;&amp; !event.isPropagationStopp=
ed() ) {
			lastElement =3D cur;
			event.type =3D i &gt; 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle =3D ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &amp;&a=
mp;
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle =3D ontype &amp;&amp; cur[ ontype ];
			if ( handle &amp;&amp; handle.apply &amp;&amp; acceptData( cur ) ) {
				event.result =3D handle.apply( cur, data );
				if ( event.result =3D=3D=3D false ) {
					event.preventDefault();
				}
			}
		}
		event.type =3D type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers &amp;&amp; !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) =3D=3D=3D false ) &amp;=
&amp;
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the eve=
nt.
				// Don't do default actions on window, that's where global variables be=
 (#6170)
				if ( ontype &amp;&amp; isFunction( elem[ type ] ) &amp;&amp; !isWindow(=
 elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp =3D elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] =3D null;
					}

					// Prevent re-triggering of the same event, since we already bubbled i=
t above
					jQuery.event.triggered =3D type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered =3D undefined;

					if ( tmp ) {
						elem[ ontype ] =3D tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e =3D jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem =3D this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox &lt;=3D44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=3D687787
//
// Support: Chrome &lt;=3D48 - 49, Safari &lt;=3D9.0 - 9.1
// focus(in | out) events fire after focus &amp; blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#event=
s-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=
=3D449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix )=
 {

		// Attach a single capturing handler on the document while someone wants =
focusin/focusout
		var handler =3D function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] =3D {
			setup: function() {
				var doc =3D this.ownerDocument || this,
					attaches =3D dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc =3D this.ownerDocument || this,
					attaches =3D dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location =3D window.location;

var nonce =3D Date.now();

var rquery =3D ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML =3D function( data ) {
	var xml;
	if ( !data || typeof data !=3D=3D "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml =3D ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml =3D undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket =3D /\[\]$/,
	rCRLF =3D /\r?\n/g,
	rsubmitterTypes =3D /^(?:submit|button|image|reset|file)$/i,
	rsubmittable =3D /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v =3D=3D=3D "object" &amp;&amp; v !=3D null ? =
i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional &amp;&amp; toType( obj ) =3D=3D=3D "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param =3D function( a, traditional ) {
	var prefix,
		s =3D [],
		add =3D function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value =3D isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] =3D encodeURIComponent( key ) + "=3D" +
				encodeURIComponent( value =3D=3D null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery &amp;&amp; !jQuery.isPlainObject( a =
) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&amp;" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements =3D jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type =3D this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name &amp;&amp; !jQuery( this ).is( ":disabled" ) &amp;&amp;
				rsubmittable.test( this.nodeName ) &amp;&amp; !rsubmitterTypes.test( ty=
pe ) &amp;&amp;
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val =3D jQuery( this ).val();

			if ( val =3D=3D null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 =3D /%20/g,
	rhash =3D /#.*$/,
	rantiCache =3D /([?&amp;])_=3D[^&amp;]*/,
	rheaders =3D /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol =3D /^(?:about|app|app-storage|.+-extension|file|res|widget=
):$/,
	rnoContent =3D /^(?:GET|HEAD)$/,
	rprotocol =3D /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for=
 an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is =
true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down =
to "*" if needed
	 */
	prefilters =3D {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if n=
eeded
	 */
	transports =3D {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evad=
e compression
	allTypes =3D "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor =3D document.createElement( "a" );
	originAnchor.href =3D location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !=3D=3D "string" ) {
			func =3D dataTypeExpression;
			dataTypeExpression =3D "*";
		}

		var dataType,
			i =3D 0,
			dataTypes =3D dataTypeExpression.toLowerCase().match( rnothtmlwhite ) ||=
 [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType =3D dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] =3D=3D=3D "+" ) {
					dataType =3D dataType.slice( 1 ) || "*";
					( structure[ dataType ] =3D structure[ dataType ] || [] ).unshift( fun=
c );

				// Otherwise append
				} else {
					( structure[ dataType ] =3D structure[ dataType ] || [] ).push( func )=
;
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions=
, jqXHR ) {

	var inspected =3D {},
		seekingTransport =3D ( structure =3D=3D=3D transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] =3D true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory=
 ) {
			var dataTypeOrTransport =3D prefilterOrFactory( options, originalOptions=
, jqXHR );
			if ( typeof dataTypeOrTransport =3D=3D=3D "string" &amp;&amp;
				!seekingTransport &amp;&amp; !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected =3D dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] &amp;&amp; i=
nspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions =3D jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !=3D=3D undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep =3D {} ) ) )[ key ] =3D=
 src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected d=
ataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents =3D s.contents,
		dataTypes =3D s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] =3D=3D=3D "*" ) {
		dataTypes.shift();
		if ( ct =3D=3D=3D undefined ) {
			ct =3D s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] &amp;&amp; contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType =3D dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType =3D type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType =3D type;
			}
		}

		// Or just use first one
		finalDataType =3D finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !=3D=3D dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters =3D {},

		// Work with a copy of dataTypes in case we need to modify it for convers=
ion
		dataTypes =3D s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] =3D s.converters[ conv ];
		}
	}

	current =3D dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] =3D response;
		}

		// Apply the dataFilter if provided
		if ( !prev &amp;&amp; isSuccess &amp;&amp; s.dataFilter ) {
			response =3D s.dataFilter( response, s.dataType );
		}

		prev =3D current;
		current =3D dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current =3D=3D=3D "*" ) {

				current =3D prev;

			// Convert response if prev dataType is non-auto and differs from curren=
t
			} else if ( prev !=3D=3D "*" &amp;&amp; prev !=3D=3D current ) {

				// Seek a direct converter
				conv =3D converters[ prev + " " + current ] || converters[ "* " + curre=
nt ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp =3D conv2.split( " " );
						if ( tmp[ 1 ] =3D=3D=3D current ) {

							// If prev can be converted to accepted input
							conv =3D converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv =3D=3D=3D true ) {
									conv =3D converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !=3D=3D true ) {
									current =3D tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !=3D=3D true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv &amp;&amp; s.throws ) {
						response =3D conv( response );
					} else {
						try {
							response =3D conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=3DUTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a si=
ngle space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true =3D no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url =3D=3D=3D "object" ) {
			options =3D url;
			url =3D undefined;
		}

		// Force options to be an object
		options =3D options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s =3D jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext =3D s.context || s,

			// Context for global events is callbackContext if it is a DOM node or j=
Query collection
			globalEventContext =3D s.context &amp;&amp;
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred =3D jQuery.Deferred(),
			completeDeferred =3D jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode =3D s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders =3D {},
			requestHeadersNames =3D {},

			// Default abort message
			strAbort =3D "canceled",

			// Fake xhr
			jqXHR =3D {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders =3D {};
							while ( ( match =3D rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] =3D match[ 2 ];
							}
						}
						match =3D responseHeaders[ key.toLowerCase() ];
					}
					return match =3D=3D null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed =3D=3D null ) {
						name =3D requestHeadersNames[ name.toLowerCase() ] =3D
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] =3D value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed =3D=3D null ) {
						s.mimeType =3D type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] =3D [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText =3D statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old =
signature)
		// We also use the url parameter if available
		s.url =3D ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type =3D options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes =3D ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite =
) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the c=
urrent origin.
		if ( s.crossDomain =3D=3D null ) {
			urlAnchor =3D document.createElement( "a" );

			// Support: IE &lt;=3D8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malforme=
d,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href =3D s.url;

				// Support: IE &lt;=3D8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href =3D urlAnchor.href;
				s.crossDomain =3D originAnchor.protocol + "//" + originAnchor.host !=3D=
=3D
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain =3D true;
			}
		}

		// Convert data if not already a string
		if ( s.data &amp;&amp; s.processData &amp;&amp; typeof s.data !=3D=3D "st=
ring" ) {
			s.data =3D jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenari=
o (#15118)
		fireGlobals =3D jQuery.event &amp;&amp; s.global;

		// Watch for a new set of requests
		if ( fireGlobals &amp;&amp; jQuery.active++ =3D=3D=3D 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type =3D s.type.toUpperCase();

		// Determine if request has content
		s.hasContent =3D !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL =3D s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached =3D s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data &amp;&amp; ( s.processData || typeof s.data =3D=3D=3D "strin=
g" ) ) {
				cacheURL +=3D ( rquery.test( cacheURL ) ? "&amp;" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache =3D=3D=3D false ) {
				cacheURL =3D cacheURL.replace( rantiCache, "$1" );
				uncached =3D ( rquery.test( cacheURL ) ? "&amp;" : "?" ) + "_=3D" + ( n=
once++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url =3D cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data &amp;&amp; s.processData &amp;&amp;
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) =
=3D=3D=3D 0 ) {
			s.data =3D s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModifie=
d mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cache=
URL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data &amp;&amp; s.hasContent &amp;&amp; s.contentType !=3D=3D fals=
e || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] &amp;&amp; s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !=3D=3D "*" ? ", " + allTypes + "; q=3D0.01" : "" )=
 :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &amp;&amp;
			( s.beforeSend.call( callbackContext, jqXHR, s ) =3D=3D=3D false || comp=
leted ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort =3D "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport =3D inspectPrefiltersOrTransports( transports, s, options, jqXH=
R );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState =3D 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async &amp;&amp; s.timeout &gt; 0 ) {
				timeoutTimer =3D window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed =3D false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText =3D nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed =3D true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport =3D undefined;

			// Cache response headers
			responseHeadersString =3D headers || "";

			// Set readyState
			jqXHR.readyState =3D status &gt; 0 ? 4 : 0;

			// Determine if successful
			isSuccess =3D status &gt;=3D 200 &amp;&amp; status &lt; 300 || status =
=3D=3D=3D 304;

			// Get response data
			if ( responses ) {
				response =3D ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response =3D ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModif=
ied mode.
				if ( s.ifModified ) {
					modified =3D jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] =3D modified;
					}
					modified =3D jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] =3D modified;
					}
				}

				// if no content
				if ( status =3D=3D=3D 204 || s.type =3D=3D=3D "HEAD" ) {
					statusText =3D "nocontent";

				// if not modified
				} else if ( status =3D=3D=3D 304 ) {
					statusText =3D "notmodified";

				// If we have data, let's convert it
				} else {
					statusText =3D response.state;
					success =3D response.data;
					error =3D response.error;
					isSuccess =3D !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error =3D statusText;
				if ( status || !statusText ) {
					statusText =3D "error";
					if ( status &lt; 0 ) {
						status =3D 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status =3D status;
			jqXHR.statusText =3D ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] )=
;
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode =3D undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] =3D function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type =3D type || callback;
			callback =3D data;
			data =3D undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) &amp;&amp; url ) );
	};
} );


jQuery._evalUrl =3D function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#1=
1264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html =3D html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap =3D jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem =3D this;

				while ( elem.firstElementChild ) {
					elem =3D elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self =3D jQuery( this ),
				contents =3D self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction =3D isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden =3D function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible =3D function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().=
length );
};




jQuery.ajaxSettings.xhr =3D function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus =3D {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE &lt;=3D9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported =3D jQuery.ajaxSettings.xhr();

support.cors =3D !!xhrSupported &amp;&amp; ( "withCredentials" in xhrSuppor=
ted );
support.ajax =3D xhrSupported =3D !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported &amp;&amp; !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr =3D options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] =3D options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType &amp;&amp; xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup=
)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain &amp;&amp; !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] =3D "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback =3D function( type ) {
					return function() {
						if ( callback ) {
							callback =3D errorCallback =3D xhr.onload =3D
								xhr.onerror =3D xhr.onabort =3D xhr.ontimeout =3D
									xhr.onreadystatechange =3D null;

							if ( type =3D=3D=3D "abort" ) {
								xhr.abort();
							} else if ( type =3D=3D=3D "error" ) {

								// Support: IE &lt;=3D9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !=3D=3D "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE &lt;=3D9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !=3D=3D "text"  ||
									typeof xhr.responseText !=3D=3D "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload =3D callback();
				errorCallback =3D xhr.onerror =3D xhr.ontimeout =3D callback( "error" )=
;

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !=3D=3D undefined ) {
					xhr.onabort =3D errorCallback;
				} else {
					xhr.onreadystatechange =3D function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState =3D=3D=3D 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback =3D callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent &amp;&amp; options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided=
 (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script =3D false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache =3D=3D=3D undefined ) {
		s.cache =3D false;
	}
	if ( s.crossDomain ) {
		s.type =3D "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script =3D jQuery( "&lt;script&gt;" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback =3D function( evt ) {
						script.remove();
						callback =3D null;
						if ( evt ) {
							complete( evt.type =3D=3D=3D "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks =3D [],
	rjsonp =3D /(=3D)\?(?=3D&amp;|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback =3D oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++=
 ) );
		this[ callback ] =3D true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) =
{

	var callbackName, overwritten, responseContainer,
		jsonProp =3D s.jsonp !=3D=3D false &amp;&amp; ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data =3D=3D=3D "string" &amp;&amp;
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) =3D=3D=3D 0 &amp;&amp;
				rjsonp.test( s.data ) &amp;&amp; "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to =
set
	if ( jsonProp || s.dataTypes[ 0 ] =3D=3D=3D "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName =3D s.jsonpCallback =3D isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] =3D s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !=3D=3D false ) {
			s.url +=3D ( rquery.test( s.url ) ? "&amp;" : "?" ) + s.jsonp + "=3D" + =
callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] =3D function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] =3D "json";

		// Install callback
		overwritten =3D window[ callbackName ];
		window[ callbackName ] =3D function() {
			responseContainer =3D arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten =3D=3D=3D undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] =3D overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback =3D originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer &amp;&amp; isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer =3D overwritten =3D undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocu=
ment
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=3D137337
support.createHTMLDocument =3D ( function() {
	var body =3D document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML =3D "&lt;form&gt;&lt;/form&gt;&lt;form&gt;&lt;/form&gt;";
	return body.childNodes.length =3D=3D=3D 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this c=
ontext,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html=
 string
jQuery.parseHTML =3D function( data, context, keepScripts ) {
	if ( typeof data !=3D=3D "string" ) {
		return [];
	}
	if ( typeof context =3D=3D=3D "boolean" ) {
		keepScripts =3D context;
		context =3D false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context =3D document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base =3D context.createElement( "base" );
			base.href =3D document.location.href;
			context.head.appendChild( base );
		} else {
			context =3D document;
		}
	}

	parsed =3D rsingleTag.exec( data );
	scripts =3D !keepScripts &amp;&amp; [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed =3D buildFragment( [ data ], context, scripts );

	if ( scripts &amp;&amp; scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load =3D function( url, params, callback ) {
	var selector, type, response,
		self =3D this,
		off =3D url.indexOf( " " );

	if ( off &gt; -1 ) {
		selector =3D stripAndCollapse( url.slice( off ) );
		url =3D url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback =3D params;
		params =3D undefined;

	// Otherwise, build a param string
	} else if ( params &amp;&amp; typeof params =3D=3D=3D "object" ) {
		type =3D "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length &gt; 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response =3D arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy di=
v
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "&lt;div&gt;" ).append( jQuery.parseHTML( responseText ) ).find=
( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback &amp;&amp; function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ]=
 );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] =3D function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated =3D function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem =3D=3D=3D fn.elem;
	} ).length;
};




jQuery.offset =3D {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calcu=
latePosition,
			position =3D jQuery.css( elem, "position" ),
			curElem =3D jQuery( elem ),
			props =3D {};

		// Set position first, in-case top/left are set even on static elem
		if ( position =3D=3D=3D "static" ) {
			elem.style.position =3D "relative";
		}

		curOffset =3D curElem.offset();
		curCSSTop =3D jQuery.css( elem, "top" );
		curCSSLeft =3D jQuery.css( elem, "left" );
		calculatePosition =3D ( position =3D=3D=3D "absolute" || position =3D=3D=
=3D "fixed" ) &amp;&amp;
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) &gt; -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition =3D curElem.position();
			curTop =3D curPosition.top;
			curLeft =3D curPosition.left;

		} else {
			curTop =3D parseFloat( curCSSTop ) || 0;
			curLeft =3D parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument =
(gh-1848)
			options =3D options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top !=3D null ) {
			props.top =3D ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left !=3D null ) {
			props.left =3D ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options =3D=3D=3D undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem =3D this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-=
2310)
		// Support: IE &lt;=3D11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-r=
elative gBCR
		rect =3D elem.getBoundingClientRect();
		win =3D elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's paddi=
ng box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem =3D this[ 0 ],
			parentOffset =3D { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself alw=
ays has zero offset
		if ( jQuery.css( elem, "position" ) =3D=3D=3D "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset =3D elem.getBoundingClientRect();

		} else {
			offset =3D this.offset();

			// Account for the *real* offset parent, which can be the document or it=
s root element
			// when a statically positioned element is identified
			doc =3D elem.ownerDocument;
			offsetParent =3D elem.offsetParent || doc.documentElement;
			while ( offsetParent &amp;&amp;
				( offsetParent =3D=3D=3D doc.body || offsetParent =3D=3D=3D doc.documen=
tElement ) &amp;&amp;
				jQuery.css( offsetParent, "position" ) =3D=3D=3D "static" ) {

				offsetParent =3D offsetParent.parentNode;
			}
			if ( offsetParent &amp;&amp; offsetParent !=3D=3D elem &amp;&amp; offset=
Parent.nodeType =3D=3D=3D 1 ) {

				// Incorporate borders into its offset, since they are outside its cont=
ent origin
				parentOffset =3D jQuery( offsetParent ).offset();
				parentOffset.top +=3D jQuery.css( offsetParent, "borderTopWidth", true =
);
				parentOffset.left +=3D jQuery.css( offsetParent, "borderLeftWidth", tru=
e );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true=
 ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", =
true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method =
will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will re=
turn itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in t=
he future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent =3D this.offsetParent;

			while ( offsetParent &amp;&amp; jQuery.css( offsetParent, "position" ) =
=3D=3D=3D "static" ) {
				offsetParent =3D offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, funct=
ion( method, prop ) {
	var top =3D "pageYOffset" =3D=3D=3D prop;

	jQuery.fn[ method ] =3D function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win =3D elem;
			} else if ( elem.nodeType =3D=3D=3D 9 ) {
				win =3D elem.defaultView;
			}

			if ( val =3D=3D=3D undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] =3D val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari &lt;=3D7 - 9.1, Chrome &lt;=3D37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=3D29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=3D58934=
7
// getComputedStyle returns percent when specified for top/left/bottom/righ=
t;
// rather than make the css module depend on the offset module, just check =
for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] =3D addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed =3D curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidt=
h methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name =
},
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] =3D function( margin, value ) {
			var chainable =3D arguments.length &amp;&amp; ( defaultExtra || typeof m=
argin !=3D=3D "boolean" ),
				extra =3D defaultExtra || ( margin =3D=3D=3D true || value =3D=3D=3D tr=
ue ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1=
729)
					return funcName.indexOf( "outer" ) =3D=3D=3D 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType =3D=3D=3D 9 ) {
					doc =3D elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width=
/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value =3D=3D=3D undefined ?

					// Get width or height on the element, requesting but not forcing pars=
eFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " =
+
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] =3D function( data, fn ) {
		return arguments.length &gt; 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length =3D=3D=3D 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#b=
ind)
// However, it is not slated for removal any time soon
jQuery.proxy =3D function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context =3D=3D=3D "string" ) {
		tmp =3D fn[ context ];
		context =3D fn;
		fn =3D tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args =3D slice.call( arguments, 2 );
	proxy =3D function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) =
);
	};

	// Set the guid of unique handler to the same of original handler, so it c=
an be removed
	proxy.guid =3D fn.guid =3D fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady =3D function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray =3D Array.isArray;
jQuery.parseJSON =3D JSON.parse;
jQuery.nodeName =3D nodeName;
jQuery.isFunction =3D isFunction;
jQuery.isWindow =3D isWindow;
jQuery.camelCase =3D camelCase;
jQuery.type =3D toType;

jQuery.now =3D Date.now;

jQuery.isNumeric =3D function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type =3D jQuery.type( obj );
	return ( type =3D=3D=3D "number" || type =3D=3D=3D "string" ) &amp;&amp;

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals=
 ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with ot=
her
// files that may use define, but not via a proper concatenation script tha=
t
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wa=
nts
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if a=
n
// AMD loader is present. jQuery is a special case. For more information, s=
ee
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wi=
ki-anon

if ( typeof define =3D=3D=3D "function" &amp;&amp; define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery =3D window.jQuery,

	// Map over the $ in case of overwrite
	_$ =3D window.$;

jQuery.noConflict =3D function( deep ) {
	if ( window.$ =3D=3D=3D jQuery ) {
		window.$ =3D _$;
	}

	if ( deep &amp;&amp; window.jQuery =3D=3D=3D jQuery ) {
		window.jQuery =3D _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery =3D window.$ =3D jQuery;
}




return jQuery;
} );
</pre></body></html>
------MultipartBoundary--vISGBqwTuBMcqaR8Acyc2UoaWN2qZxQqskDNsh7Ptw------
