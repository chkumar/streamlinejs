/*** Generated by streamline 0.1.36-stack - DO NOT EDIT ***/
var __global = typeof global !== 'undefined' ? global : window;var __srcName='./examples/misc/require_error_.js';function __Frame(line, name){ this.line = line; this.name = name; this.prev = __global.__frame; __global.__frame = this; };__Frame.prototype.file = __srcName;__Frame.prototype.err = function(_, e){e.__frame = e.__frame || this.prev;__propagate(_, e);};
function __cb(_, frame, offset, col, fn){ var ctx = __global.__context; frame.offset = offset; frame.col = col; return function ___(err, result){ var oldFrame = __global.__frame; __global.__frame = frame; __global.__context = ctx; try { if (err) { err.__frame = err.__frame || frame; return _(err); } return fn(null, result); } catch (ex) { ex.__frame = ex.__frame || frame; return __propagate(_, ex); } finally { __global.__frame = oldFrame; } } }
function __propagate(_, err){ try { _(err); } catch (ex) { __trap(ex); } }
function __trap(err){ if (err) { if (__global.__context && __global.__context.errorHandler) __global.__context.errorHandler(err); else console.error("UNCAUGHT EXCEPTION: " + err.message + "\n" + err.stack); } }
            (function __$main(_wait) {
/*    16 */   return setTimeout(__cb(_wait, __frame, 14, 0, function __$__$main() {
/*    24 */     console.log("the next error should be reported from line 25!");
/*    25 */     undefined.true;
                _wait();
/*    16 */   }), 1000);
            }).call(this, __trap);
