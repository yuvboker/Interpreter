import * as assert from "assert";
import {evalParse4} from './L4-eval-box';

assert.deepEqual(evalParse4(`
(L4 (define loop (lambda (x) (loop x)))
    ((lambda ((f lazy)) 1) (loop 0)))`),
    1);
assert.deepEqual(evalParse4(`
    (L4 (if ((lambda ((x lazy)) (= x 10)) 10) #t #f))`),
        true);