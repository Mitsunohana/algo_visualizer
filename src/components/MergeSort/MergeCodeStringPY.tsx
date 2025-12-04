export const MergeCodeStringPY = () => {
  return (
    <>
      <span className="code-keyword">def </span>
      <span className="code-function">merge_sort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">):</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-comment"># Base case</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-function">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>
      <span className="code-operator">&lt;=</span>
      <span className="code-number">1</span>
      <span className="code-punc">:</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">return </span>
      <span className="code-variable">arr</span>
      <br /><br />

      &nbsp;&nbsp;
      <span className="code-variable">mid</span>
      <span className="code-operator">=</span>
      <span className="code-function">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>
      <span className="code-operator">//</span>
      <span className="code-number">2</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-variable">left</span>
      <span className="code-operator">=</span>
      <span className="code-function">merge_sort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-number">0</span>
      <span className="code-punc">:</span>
      <span className="code-variable">mid</span>
      <span className="code-punc">])</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-variable">right</span>
      <span className="code-operator">=</span>
      <span className="code-function">merge_sort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">mid</span>
      <span className="code-punc">:])</span>
      <br /><br />

      &nbsp;&nbsp;
      <span className="code-keyword">return </span>
      <span className="code-function">merge</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-variable">right</span>
      <span className="code-punc">)</span>
      <br /><br />

      <span className="code-keyword">def </span>
      <span className="code-function">merge</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-variable">right</span>
      <span className="code-punc">):</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-variable">result</span>
      <span className="code-operator">=</span>
      <span className="code-punc">[]</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-variable">i</span>
      <span className="code-operator">=</span>
      <span className="code-number">0</span>
      <span className="code-punc">; </span>
      <span className="code-variable">j</span>
      <span className="code-operator">=</span>
      <span className="code-number">0</span>
      <br /><br />

      &nbsp;&nbsp;
      <span className="code-comment"># Merge two sorted lists</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-variable">i</span>
      <span className="code-operator">&lt;</span>
      <span className="code-function">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">)</span>
      <span className="code-operator"> and </span>
      <span className="code-variable">j</span>
      <span className="code-operator">&lt;</span>
      <span className="code-function">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">right</span>
      <span className="code-punc">):</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-variable">left</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>
      <span className="code-operator">&lt;=</span>
      <span className="code-variable">right</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]:</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">result</span>
      <span className="code-punc">.</span>
      <span className="code-function">append</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">])</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">i</span>
      <span className="code-operator">+=</span>
      <span className="code-number">1</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">else</span>
      <span className="code-punc">:</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">result</span>
      <span className="code-punc">.</span>
      <span className="code-function">append</span>
      <span className="code-punc">(</span>
      <span className="code-variable">right</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">])</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">j</span>
      <span className="code-operator">+=</span>
      <span className="code-number">1</span>
      <br /><br />

      &nbsp;&nbsp;
      <span className="code-comment"># Append remaining items</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-variable">result</span>
      <span className="code-punc">.</span>
      <span className="code-function">extend</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">:])</span>
      <br />

      &nbsp;&nbsp;
      <span className="code-variable">result</span>
      <span className="code-punc">.</span>
      <span className="code-function">extend</span>
      <span className="code-punc">(</span>
      <span className="code-variable">right</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">:])</span>
      <br /><br />

      &nbsp;&nbsp;
      <span className="code-keyword">return </span>
      <span className="code-variable">result</span>
    </>
  );
};
