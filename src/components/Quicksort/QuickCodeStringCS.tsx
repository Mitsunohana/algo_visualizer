export const QuickCodeStringCS = () => (
  <>
    <span className="code-keyword">int[] </span>
    <span className="code-function">QuickSort</span>
    <span className="code-punc">(</span>
    <span className="code-keyword">int[] </span>
    <span className="code-variable">arr</span>
    <span className="code-punc">)</span>
    <span className="code-punc">{" {"}</span>
    <br />
    &nbsp;&nbsp;
    <span className="code-keyword">if</span>
    <span className="code-punc">(</span>
    <span className="code-variable">arr</span>
    <span className="code-punc">.</span>
    <span className="code-variable">Length</span>
    <span className="code-operator">&lt;=</span>
    <span className="code-number">1</span>
    <span className="code-punc">)</span>
    <span className="code-keyword"> return</span>
    <span className="code-variable"> arr</span>
    <span className="code-punc">;</span>
    <br />
    <br />
    &nbsp;&nbsp;
    <span className="code-keyword">int </span>
    <span className="code-variable">pivot</span>
    <span className="code-operator"> = </span>
    <span className="code-variable">arr</span>
    <span className="code-punc">[</span>
    <span className="code-number">0</span>
    <span className="code-punc">];</span>
    <br />
    <br />
    &nbsp;&nbsp;
    <span className="code-keyword">var </span>
    <span className="code-variable">left</span>
    <span className="code-operator"> = </span>
    <span className="code-variable">arr</span>
    <span className="code-punc">.</span>
    <span className="code-builtin">Skip</span>
    <span className="code-punc">(</span>
    <span className="code-number">1</span>
    <span className="code-punc">).</span>
    <span className="code-builtin">Where</span>
    <span className="code-punc">(</span>
    <span className="code-variable">x</span>
    <span className="code-operator"> =&gt; </span>
    <span className="code-variable">x</span>
    <span className="code-operator">&lt;=</span>
    <span className="code-variable">pivot</span>
    <span className="code-punc">).</span>
    <span className="code-builtin">ToArray</span>
    <span className="code-punc">();</span>
    <br />
    &nbsp;&nbsp;
    <span className="code-keyword">var </span>
    <span className="code-variable">right</span>
    <span className="code-operator"> = </span>
    <span className="code-variable">arr</span>
    <span className="code-punc">.</span>
    <span className="code-builtin">Skip</span>
    <span className="code-punc">(</span>
    <span className="code-number">1</span>
    <span className="code-punc">).</span>
    <span className="code-builtin">Where</span>
    <span className="code-punc">(</span>
    <span className="code-variable">x</span>
    <span className="code-operator"> =&gt; </span>
    <span className="code-variable">x</span>
    <span className="code-operator">&gt;</span>
    <span className="code-variable">pivot</span>
    <span className="code-punc">).</span>
    <span className="code-builtin">ToArray</span>
    <span className="code-punc">();</span>
    <br />
    <br />
    &nbsp;&nbsp;
    <span className="code-keyword">var </span>
    <span className="code-variable">sortedLeft</span>
    <span className="code-operator"> = </span>
    <span className="code-function">QuickSort</span>
    <span className="code-punc">(</span>
    <span className="code-variable">left</span>
    <span className="code-punc">);</span>
    <br />
    &nbsp;&nbsp;
    <span className="code-keyword">var </span>
    <span className="code-variable">sortedRight</span>
    <span className="code-operator"> = </span>
    <span className="code-function">QuickSort</span>
    <span className="code-punc">(</span>
    <span className="code-variable">right</span>
    <span className="code-punc">);</span>
    <br />
    <br />
    &nbsp;&nbsp;
    <span className="code-keyword">return </span>
    <span className="code-variable">sortedLeft</span>
    <span className="code-punc">.</span>
    <span className="code-builtin">Concat</span>
    <span className="code-punc">(</span>
    <span className="code-keyword">new int</span>
    <span className="code-punc">[] {"{"} </span>
    <span className="code-variable">pivot</span>
    <span className="code-punc"> {"}"}).</span>
    <span className="code-builtin">Concat</span>
    <span className="code-punc">(</span>
    <span className="code-variable">sortedRight</span>
    <span className="code-punc">).</span>
    <span className="code-builtin">ToArray</span>
    <span className="code-punc">();</span>
    <br />
    <span className="code-punc">{"}"}</span>
  </>
);
