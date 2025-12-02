export const InsertionCodeStringCPP = () => {
  return (
    <>
      <span className="code-keyword">void </span>
      <span className="code-function">insertionSort</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[], </span>
      <span className="code-keyword">int </span>
      <span className="code-variable">n</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-keyword">for</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-number">1</span>
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
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">int </span>
      <span className="code-variable">key</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">int </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">i </span>
      <span className="code-operator">- </span>
      <span className="code-number">1</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">while</span>
      <span className="code-punc">(</span>
      <span className="code-variable">j </span>
      <span className="code-operator">&gt;= </span>
      <span className="code-number">0</span>
      <span className="code-punc"> && </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">] </span>
      <span className="code-operator">&gt; </span>
      <span className="code-variable">key</span>
      <span className="code-punc">)</span>
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j </span>
      <span className="code-operator">+ </span>
      <span className="code-number">1</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">j</span>
      <span className="code-operator">--</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j </span>
      <span className="code-operator">+ </span>
      <span className="code-number">1</span>
      <span className="code-punc">] = </span>
      <span className="code-variable">key</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      <span className="code-punc">&#125;</span>
    </>
  );
};
