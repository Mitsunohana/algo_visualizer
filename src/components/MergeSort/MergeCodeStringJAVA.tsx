export const MergeCodeStringJAVA = () => {
  return (
    <>
      <span className="code-keyword">public class </span>
      <span className="code-variable">MergeSort </span>
      <span className="code-punc">{'{'} </span>
      <br />

      <span className="code-keyword">  public static void </span>
      <span className="code-function">mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">int</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">) {'{'}</span>
      <br />

      <span className="code-punc">    if (</span>
      <span className="code-variable">arr.length </span>
      <span className="code-operator">&lt;= </span>
      <span className="code-number">1</span>
      <span className="code-punc">) return;</span>
      <br />

      <span className="code-variable">    int </span>
      <span className="code-variable">mid </span>
      <span className="code-operator">= </span>
      <span className="code-variable">arr.length </span>
      <span className="code-operator">/ </span>
      <span className="code-number">2</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-variable">    int</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">left </span>
      <span className="code-operator">= </span>
      <span className="code-keyword">java.util.Arrays</span>
      <span className="code-punc">.</span>
      <span className="code-builtin">copyOfRange</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-number">0</span>
      <span className="code-punc">, </span>
      <span className="code-variable">mid</span>
      <span className="code-punc">);</span>
      <br />

      <span className="code-variable">    int</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">right </span>
      <span className="code-operator">= </span>
      <span className="code-keyword">java.util.Arrays</span>
      <span className="code-punc">.</span>
      <span className="code-builtin">copyOfRange</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-variable">mid</span>
      <span className="code-punc">, </span>
      <span className="code-variable">arr.length</span>
      <span className="code-punc">);</span>
      <br />

      <span className="code-function">    mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">);</span>
      <br />
      <span className="code-function">    mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">right</span>
      <span className="code-punc">);</span>
      <br />

      <span className="code-function">    merge</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-variable">right</span>
      <span className="code-punc">);</span>
      <br />

      <span className="code-punc">  {'}'}</span>
      <br /><br />

      <span className="code-keyword">  private static void </span>
      <span className="code-function">merge</span>
      <span className="code-punc">(</span>
      <span className="code-variable">int</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-variable">int</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-variable">int</span>
      <span className="code-punc">[] </span>
      <span className="code-variable">right</span>
      <span className="code-punc">) {'{'}</span>
      <br />

      <span className="code-variable">    int </span>
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
      <span className="code-number">0</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-keyword">    while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">i </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">left.length </span>
      <span className="code-operator">&amp;&amp; </span>
      <span className="code-variable">j </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">right.length</span>
      <span className="code-punc">) {'{'}</span>
      <br />

      <span className="code-keyword">      if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">left[i] </span>
      <span className="code-operator">&lt;= </span>
      <span className="code-variable">right[j]</span>
      <span className="code-punc">) {'{'}</span>
      <br />
      <span className="code-variable">        arr[k] </span>
      <span className="code-operator">= </span>
      <span className="code-variable">left[i]</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-variable">        i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-punc">      {'}'} </span>
      <span className="code-keyword">else</span>
      <span className="code-punc"> {'{'}</span>
      <br />
      <span className="code-variable">        arr[k] </span>
      <span className="code-operator">= </span>
      <span className="code-variable">right[j]</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-variable">        j</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-punc">      {'}'}</span>
      <br />

      <span className="code-variable">      k</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-punc">    {'}'}</span>
      <br /><br />

      {/* Copy remaining elements */}
      <span className="code-keyword">    while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">i </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">left.length</span>
      <span className="code-punc">) {'{'}</span>
      <br />
      <span className="code-variable">      arr[k] </span>
      <span className="code-operator">= </span>
      <span className="code-variable">left[i]</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-variable">      i</span>
      <span className="code-operator">++</span><span className="code-punc">;</span>
      <br />
      <span className="code-variable">      k</span>
      <span className="code-operator">++</span><span className="code-punc">;</span>
      <br />
      <span className="code-punc">    {'}'}</span>
      <br /><br />

      <span className="code-keyword">    while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">j </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">right.length</span>
      <span className="code-punc">) {'{'}</span>
      <br />
      <span className="code-variable">      arr[k] </span>
      <span className="code-operator">= </span>
      <span className="code-variable">right[j]</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-variable">      j</span>
      <span className="code-operator">++</span><span className="code-punc">;</span>
      <br />
      <span className="code-variable">      k</span>
      <span className="code-operator">++</span><span className="code-punc">;</span>
      <br />
      <span className="code-punc">    {'}'}</span>
      <br />

      <span className="code-punc">  {'}'}</span>
      <br />

      <span className="code-punc">{'}'}</span>
    </>
  );
};
