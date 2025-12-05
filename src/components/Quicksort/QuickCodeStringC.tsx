export const QuickCodeStringC = () => {
  return (
    <>
      <span className="code-keyword">int</span>{" "}
      <span className="code-function">partition</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[], </span>
      <span className="code-keyword">int </span>
      <span className="code-variable">low</span>
      <span className="code-punc">, </span>
      <span className="code-keyword">int </span>
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>
      <span className="code-punc"> {"{ "}</span>
      <br />
      {"   "}
      <span className="code-keyword">int </span>
      <span className="code-variable">pivot</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">high</span>
      <span className="code-punc">]</span>
      <span className="code-punc">;</span>
      <br />
      {"   "}
      <span className="code-keyword">int </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">low</span>
      <span className="code-punc"> - </span>
      <span className="code-number">1</span>
      <span className="code-punc">;</span>
      <br />
      {"   "}
      <span className="code-keyword">for</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">low</span>
      <span className="code-punc">; </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">high</span>
      <span className="code-punc">; </span>
      <span className="code-variable">j++</span>
      <span className="code-punc">)</span>
      <span className="code-punc"> {"{ "}</span>
      <br />
      {"   "}
      <span className="code-keyword">if</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]</span>
      <span className="code-operator"> &lt;= </span>
      <span className="code-variable">pivot</span>
      <span className="code-punc">)</span>
      <span className="code-punc"> {"{ "}</span>
      <br />
      {"      "}
      <span className="code-variable">i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      {"      "}
      <span className="code-function">swap</span>
      <span className="code-punc">(</span>
      <span className="code-variable">&amp;arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">], </span>
      <span className="code-variable">&amp;arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      {"    "}
      <span className="code-punc">{"}"}</span>
      <br />
      {"  "}
      <span className="code-punc">{"}"}</span>
      <br />
      <br />
      {"  "}
      <span className="code-function">swap</span>
      <span className="code-punc">(</span>
      {/* &arr[i + 1], &arr[high] */}
      <span className="code-variable">&amp;arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i </span>
      <span className="code-operator">+ </span>
      <span className="code-number">1</span>
      <span className="code-punc">], </span>
      <span className="code-variable">&amp;arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">high</span>
      <span className="code-punc">]</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      {"  "}
      <span className="code-keyword">return</span>
      <span className="code-variable"> i </span>
      <span className="code-operator">+ </span>
      <span className="code-number">1</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-punc">{"}"}</span>
      <br />
      <br />
      <span className="code-keyword">void </span>
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[], </span>
      <span className="code-keyword">int </span>
      <span className="code-variable">low</span>
      <span className="code-punc">, </span>
      <span className="code-keyword">int </span>
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>
      <span className="code-punc"> {"{ "}</span>
      <br />
      {"  "}
      <span className="code-keyword">if</span>
      <span className="code-punc">(</span>
      <span className="code-variable">low</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>
      <span className="code-punc"> {"{ "}</span>
      <br />
      {"    "}
      <span className="code-keyword">int </span>
      <span className="code-variable">pi</span>
      <span className="code-operator"> = </span>
      <span className="code-function"> partition</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-variable">low</span>
      <span className="code-punc">, </span>
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      {"    "}
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-variable">low</span>
      <span className="code-punc">, </span>
      <span className="code-variable">pi </span>
      <span className="code-operator">- </span>
      <span className="code-number">1</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      {"    "}
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-variable">pi</span>
      <span className="code-operator"> + </span>
      <span className="code-number">1</span>
      <span className="code-punc">, </span>
      <span className="code-variable">high</span>
      <span className="code-punc">);</span>
      <br />
      {"  "}
      <span className="code-punc">{"}"}</span>
      <br />
      <span className="code-punc">{"}"}</span>
    </>
  );
};
