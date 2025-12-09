export const QuickCodeStringPY = () => {
  return (
    <>
      <span className="code-keyword">def </span>
      <span className="code-function">quicksort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">):</span>
      <br />

      <span className="code-keyword"> if </span>
      <span className="code-builtin">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>
      <span className="code-operator"> &lt;= </span>
      <span className="code-number">1</span>
      <span className="code-punc">:</span>
      <br />

      <span className="code-keyword"> return </span>
      <span className="code-variable">arr</span>
      <br />
      <br />

      <span className="code-variable"> pivot </span>
      <span className="code-operator">= </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-builtin">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>
      <span className="code-operator"> // </span>
      <span className="code-number">2</span>
      <span className="code-punc">]</span>
      <br />
      <br />

      <span className="code-variable"> less </span>
      <span className="code-operator">= </span>
      <span className="code-punc">[</span>
      <span className="code-variable">x </span>
      <span className="code-keyword">for </span>
      <span className="code-variable">x </span>
      <span className="code-keyword">in </span>
      <span className="code-variable">arr </span>
      <span className="code-keyword">if </span>
      <span className="code-variable">x </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">pivot</span>
      <span className="code-punc">]</span>
      <br />

      <span className="code-variable"> equal </span>
      <span className="code-operator">= </span>
      <span className="code-punc">[</span>
      <span className="code-variable">x </span>
      <span className="code-keyword">for </span>
      <span className="code-variable">x </span>
      <span className="code-keyword">in </span>
      <span className="code-variable">arr </span>
      <span className="code-keyword">if </span>
      <span className="code-variable">x </span>
      <span className="code-operator">== </span>
      <span className="code-variable">pivot</span>
      <span className="code-punc">]</span>
      <br />

      <span className="code-variable"> greater </span>
      <span className="code-operator">= </span>
      <span className="code-punc">[</span>
      <span className="code-variable">x </span>
      <span className="code-keyword">for </span>
      <span className="code-variable">x </span>
      <span className="code-keyword">in </span>
      <span className="code-variable">arr </span>
      <span className="code-keyword">if </span>
      <span className="code-variable">x </span>
      <span className="code-operator">&gt; </span>
      <span className="code-variable">pivot</span>
      <span className="code-punc">]</span>
      <br />
      <br />

      <span className="code-keyword"> return </span>
      <span className="code-function">quicksort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">less</span>
      <span className="code-punc">)</span>
      <span className="code-operator"> + </span>
      <span className="code-variable">equal</span>
      <span className="code-operator"> + </span>
      <span className="code-function">quicksort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">greater</span>
      <span className="code-punc">)</span>
    </>
  );
};
