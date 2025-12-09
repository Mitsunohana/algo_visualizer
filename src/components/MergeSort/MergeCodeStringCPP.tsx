export const MergeCodeStringCPP = () => {
  return (
    <>
      <span className="code-keyword">#include </span>
      <span className="code-punc">&lt;</span>
      <span className="code-keyword">iostream</span>
      <span className="code-punc">&gt;</span>
      <br />
      <span className="code-keyword">using </span>
      <span className="code-keyword">namespace </span>
      <span className="code-variable">std</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      <span className="code-keyword">void </span>
      <span className="code-function">merge</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">[], </span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">mid</span>
      <span className="code-punc">, </span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">right</span>
      <span className="code-punc">) {"{"}</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">n1</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">mid</span>
      <span className="code-operator"> - </span>
      <span className="code-variable">left</span>
      <span className="code-operator"> + </span>
      <span className="code-number">1</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">n2</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">right</span>
      <span className="code-operator"> - </span>
      <span className="code-variable">mid</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">int</span>
      <span className="code-operator">* </span>
      <span className="code-variable">L</span>
      <span className="code-operator"> = </span>
      <span className="code-keyword">new </span>
      <span className="code-keyword">int</span>
      <span className="code-punc">[</span>
      <span className="code-variable">n1</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">int</span>
      <span className="code-operator">* </span>
      <span className="code-variable">R</span>
      <span className="code-operator"> = </span>
      <span className="code-keyword">new </span>
      <span className="code-keyword">int</span>
      <span className="code-punc">[</span>
      <span className="code-variable">n2</span>
      <span className="code-punc">];</span>
      <br />
      <br />
      {/* Copying Left Array */}
      &nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>
      <span className="code-variable"> i </span>
      <span className="code-operator">= </span>
      <span className="code-number">0</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">n1</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i</span>
      <span className="code-punc">++</span>
      <span className="code-punc">) {"{"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">L</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">left </span>
      <span className="code-operator">+ </span>
      <span className="code-variable">i</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;{"}"}
      <br />
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>
      <span className="code-variable"> j </span>
      <span className="code-operator">= </span>
      <span className="code-number">0</span>
      <span className="code-punc">; </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">n2</span>
      <span className="code-punc">; </span>
      <span className="code-variable">j</span>
      <span className="code-punc">++</span>
      <span className="code-punc">) {"{"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">R</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">mid </span>
      <span className="code-operator">+ </span>
      <span className="code-variable">1 </span>
      <span className="code-operator">+ </span>
      <span className="code-variable">j</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;{"}"}
      <br />
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">int </span>
      <span className="code-variable">i </span>
      <span className="code-operator">= </span>
      <span className="code-number">0</span>
      <span className="code-punc">, </span>
      <span className="code-variable">j </span>
      <span className="code-operator">= </span>
      <span className="code-number">0</span>
      <span className="code-punc">, </span>
      <span className="code-variable">k </span>
      <span className="code-operator">= </span>
      <span className="code-variable">left</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">i</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">n1</span>
      <span className="code-operator"> &amp;&amp; </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">n2</span>
      <span className="code-punc">) {"{"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">L</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">] </span>
      <span className="code-operator"> &lt;= </span>
      <span className="code-variable">R</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]</span>
      <span className="code-punc">) {"{"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">k</span>
      <span className="code-operator">++</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">L</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-operator">++]</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">{"}"}</span>
      <span className="code-keyword">else</span>
      <span className="code-punc">{"{"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">k</span>
      <span className="code-operator">++</span>
      <span className="code-punc">] </span>
      <span className="code-operator">=</span>
      <span className="code-variable"> R</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-operator">++</span>
      <span className="code-punc">]</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">{"}"}</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-punc">{"}"}</span>
      <br />
      <br />
      {/* Remaining Left */}
      &nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">i</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">n1</span>
      <span className="code-punc">) </span>
      <span className="code-punc">{" { "}</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">k</span>
      <span className="code-operator">++</span>
      <span className="code-punc">] </span>
      <span className="code-operator">=</span>
      <span className="code-variable"> L</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">]</span>
      <span className="code-punc">; &#125;</span>
      <br />
      {/* Remaining Right */}
      &nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">j</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">n2</span>
      <span className="code-punc">) </span>
      <span className="code-punc">{" { "}</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">k</span>
      <span className="code-operator">++</span>
      <span className="code-punc">] </span>
      <span className="code-operator">=</span>
      <span className="code-variable"> R</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-operator">++</span>
      <span className="code-punc">]</span>
      <span className="code-punc">; &#125;</span>
      <br />
      <br />
      &nbsp;&nbsp;
      <span className="code-builtin">delete</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">L</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-builtin">delete</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">R</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-punc">&#125;</span>
      <br />
      <br />
      {/* mergeSort function */}
      <span className="code-keyword">void </span>
      <span className="code-function">mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[]</span>
      <span className="code-punc">, </span>
      <span className="code-keyword">int </span>
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-keyword">int </span>
      <span className="code-variable">right</span>
      <span className="code-punc">) {"{"}</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-operator"> &gt;= </span>
      <span className="code-variable">right</span>
      <span className="code-punc">) </span>
      <span className="code-keyword"> return;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">int </span>
      <span className="code-variable">mid</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">left</span>
      <span className="code-operator"> + </span>
      <span className="code-punc">(</span>
      <span className="code-variable">right</span>
      <span className="code-operator"> - </span>
      <span className="code-variable">left</span>
      <span className="code-punc">)</span>
      <span className="code-operator">/ </span>
      <span className="code-number">2</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      &nbsp;&nbsp;
      <span className="code-function">mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr, left, mid</span>
      <span className="code-punc">);</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-function">mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr, mid + 1, right</span>
      <span className="code-punc">);</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-function">merge</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr, left, mid, right</span>
      <span className="code-punc">);</span>
      <br />
      <span className="code-punc">&#125;</span>
    </>
  );
};
