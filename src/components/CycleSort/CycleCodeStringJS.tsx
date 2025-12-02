export const CycleCodeStringJS = () => {
  return (
    <>
      <span className="code-keyword">function </span>
      <span className="code-function">cycleSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">, </span>
      <span className="code-variable">n</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-punc">(</span>
      <span className="code-keyword">let </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-operator"> = </span>
      <span className="code-number">0</span>
      <span className="code-punc">; </span>
      <span className="code-variable">cycle_start </span>
      <span className="code-operator">&lt;= </span>
      <span className="code-variable">n</span>
      <span className="code-operator"> - </span>
      <span className="code-number">2</span>
      <span className="code-punc">; </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-operator">++</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">let </span>
      <span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">let </span>
      <span className="code-variable">pos</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-punc">(</span>
      <span className="code-keyword">let </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycle_start + 1</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">n</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">] </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">item</span>
      <span className="code-punc">)</span>
      <span className="code-variable">pos</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">== </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">)</span>
      <span className="code-keyword">continue</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">item </span>
      <span className="code-operator">== </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">]) </span>
      <span className="code-variable">pos</span>
      <span className="code-operator"> += </span>
      <span className="code-number">1</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">!= </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">let </span>
      <span className="code-variable">temp</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">item</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">temp</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">writes</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">!= </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">pos</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycle_start</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-punc">(</span>
      <span className="code-keyword">let </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycle_start + 1</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">n</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">] </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">item</span>
      <span className="code-punc">)</span>
      <span className="code-variable">pos</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">item </span>
      <span className="code-operator">== </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">]) </span>
      <span className="code-variable">pos</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">item </span>
      <span className="code-operator">!= </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">])</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">let </span>
      <span className="code-variable">temp</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">item</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">temp</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      <span className="code-punc">&#125;</span>
    </>
  );
};
