export const CycleCodeStringPY = () => {
  return (
    <>
      <span className="code-keyword">def </span>
      <span className="code-function">cycle_sort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">):</span>
      <br />
      &nbsp;&nbsp;<span className="code-keyword">for </span>
      <span className="code-variable">cycle_start </span>
      <span className="code-keyword">in </span>
      <span className="code-function">range</span>
      <span className="code-punc">(</span>
      <span className="code-number">0</span>
      <span className="code-punc">, </span>
      <span className="code-function">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>
      <span className="code-operator"> - </span>
      <span className="code-number">1</span>
      <span className="code-punc">):</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">]</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">pos</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycle_start</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">for </span>
      <span className="code-variable">i </span>
      <span className="code-keyword">in </span>
      <span className="code-function">range</span>
      <span className="code-punc">(</span>
      <span className="code-variable">cycle_start</span>
      <span className="code-operator"> + </span>
      <span className="code-number">1</span>
      <span className="code-punc">, </span>
      <span className="code-function">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)):</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">] </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">item</span>
      <span className="code-punc">:</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">pos</span>
      <span className="code-operator"> += </span>
      <span className="code-number">1</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if </span>
      <span className="code-variable">pos </span>
      <span className="code-operator">== </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">:</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">continue</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">while </span>
      <span className="code-variable">item </span>
      <span className="code-operator">== </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">]:</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">pos</span>
      <span className="code-operator"> += </span>
      <span className="code-number">1</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">], </span>
      <span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">item</span>
      <span className="code-punc">, </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">]</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">while </span>
      <span className="code-variable">pos </span>
      <span className="code-operator">!= </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">:</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">pos</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycle_start</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-variable">i </span>
      <span className="code-keyword">in </span>
      <span className="code-function">range</span>
      <span className="code-punc">(</span>
      <span className="code-variable">cycle_start</span>
      <span className="code-operator"> + </span>
      <span className="code-number">1</span>
      <span className="code-punc">, </span>
      <span className="code-function">len</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">)):</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">] </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">item</span>
      <span className="code-punc">:</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">pos</span>
      <span className="code-operator"> += </span>
      <span className="code-number">1</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-variable">item </span>
      <span className="code-operator">== </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">]:</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">pos</span>
      <span className="code-operator"> += </span>
      <span className="code-number">1</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">], </span>
      <span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">item</span>
      <span className="code-punc">, </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">]</span>
      <br />
    </>
  );
};
