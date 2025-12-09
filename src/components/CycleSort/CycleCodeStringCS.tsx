export const CycleCodeStringCS = () => {
  return (
    <>
      <span className="code-keyword">void </span>
      <span className="code-function">CycleSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">int[] arr</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />

      &nbsp;&nbsp;<span className="code-keyword">int </span>
      <span className="code-variable">n </span>
      <span className="code-operator">= </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">.</span>
      <span className="code-builtin">Length</span>
      <span className="code-punc">;</span>
      <br />

      &nbsp;&nbsp;<span className="code-keyword">for</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">cycleStart </span>
      <span className="code-operator">= </span>
      <span className="code-number">0</span>
      <span className="code-punc">; </span>
      <span className="code-variable">cycleStart </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">n - 1</span>
      <span className="code-punc">; </span>
      <span className="code-variable">cycleStart</span>
      <span className="code-operator">++</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">int </span>
      <span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">cycleStart</span>
      <span className="code-punc">];</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">int </span>
      <span className="code-variable">pos</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycleStart</span>
      <span className="code-punc">;</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// Find where to put the item</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">for</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycleStart + 1</span>
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>
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
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// If item is already in correct position</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">== </span>
      <span className="code-variable">cycleStart</span>
      <span className="code-punc">)</span>
      <span className="code-keyword">continue</span>
      <span className="code-punc">;</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// Skip duplicates</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">while</span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">n </span>
      <span className="code-operator">&amp;&amp; </span>
      <span className="code-variable">item </span>
      <span className="code-operator">== </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">])</span>
      <span className="code-variable">pos</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// Swap the item to its correct position</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">!= </span>
      <span className="code-variable">cycleStart</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">int </span>
      <span className="code-variable">temp</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-operator">] = </span>
      <span className="code-variable">item</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">temp</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />

      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// Rotate the rest of the cycle</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">while</span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">!= </span>
      <span className="code-variable">cycleStart</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">pos</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycleStart</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">for</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">cycleStart + 1</span>
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">while</span>
      <span className="code-punc">(</span>
      <span className="code-variable">pos </span>
      <span className="code-operator">&lt; </span>
      <span className="code-variable">n </span>
      <span className="code-operator">&amp;&amp; </span>
      <span className="code-variable">item </span>
      <span className="code-operator">== </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">])</span>
      <span className="code-variable">pos</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>
      <span className="code-punc">(</span>
      <span className="code-variable">item </span>
      <span className="code-operator">!= </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">])</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">int </span>
      <span className="code-variable">temp</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">pos</span>
      <span className="code-operator">] = </span>
      <span className="code-variable">item</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">item</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">temp</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      <span className="code-punc">&#125;</span>
    </>
  );
};
