export const BubbleCodeStringPY: React.FC = () => {
  return (
    <>
      <span className="code-keyword">def </span>
      <span className="code-function">bubble_sort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">):</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-variable">i </span>
      <span className="code-keyword">in </span>
      <span className="code-builtin">range</span>
      <span className="code-punc">(</span>
      <span className="code-builtin">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>
      <span className="code-punc">):</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-variable">j </span>
      <span className="code-keyword">in </span>
      <span className="code-builtin">range</span>
      <span className="code-punc">(</span>
      <span className="code-builtin">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>
      <span className="code-operator"> - </span>
      <span className="code-variable">i </span>
      <span className="code-operator"> - </span>
      <span className="code-number">1</span>
      <span className="code-punc">):</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">] </span>
      <span className="code-operator">&gt; </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j </span>
      <span className="code-operator">+ </span>
      <span className="code-number">1</span>
      <span className="code-punc">]</span>
      <span className="code-punc">:</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">], </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-operator"> + </span>
      <span className="code-number">1</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j </span>
      <span className="code-operator">+ </span>
      <span className="code-number">1</span>
      <span className="code-punc">], </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">return </span>
      <span className="code-variable">arr</span>
    </>
  );
};
