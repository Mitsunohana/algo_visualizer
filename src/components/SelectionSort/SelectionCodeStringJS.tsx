export const SelectionCodeStringJS = () => {
  return (
    <>
      <span className="code-keyword">const </span>
      <span className="code-function">selectionSort</span>
      <span className="code-operator"> = </span>
      <span className="code-punc">(</span>
      <span className="code-variable">array</span>
      <span className="code-punc">) =&gt; &#123;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-punc">(</span>
      <span className="code-keyword">let </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-number">0</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">array</span>
      <span className="code-punc">.</span>
      <span className="code-builtin">length</span>
      <span className="code-operator"> - </span>
      <span className="code-number">1</span>
      <span className="code-punc">; </span>
      <span className="code-variable">i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">) &#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">let </span>
      <span className="code-variable">minIndex</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">i</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">for </span>
      <span className="code-punc">(</span>
      <span className="code-keyword">let </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> + </span>
      <span className="code-number">1</span>
      <span className="code-punc">; </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">array</span>
      <span className="code-punc">.</span>
      <span className="code-builtin">length</span>
      <span className="code-punc">; </span>
      <span className="code-variable">j</span>
      <span className="code-operator">++</span>
      <span className="code-punc">) &#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">array</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">] &lt; </span>
      <span className="code-variable">array</span>
      <span className="code-punc">[</span>
      <span className="code-variable">minIndex</span>
      <span className="code-punc">]) &#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">minIndex</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">j</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&#125;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">[</span>
      <span className="code-variable">array</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">], </span>
      <span className="code-variable">array</span>
      <span className="code-punc">[</span>
      <span className="code-variable">minIndex</span>
      <span className="code-punc">]</span>
      <span className="code-punc">] = [</span>
      <span className="code-variable">array</span>
      <span className="code-punc">[</span>
      <span className="code-variable">minIndex</span>
      <span className="code-punc">], </span>
      <span className="code-variable">array</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&#125;
      <br />
      <span className="code-keyword">return </span>
      <span className="code-variable">array</span>
      <span className="code-punc">;</span>
      <br />
      &#125;
    </>
  );
};
