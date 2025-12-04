export const MergeCodeStringCS = () => {
  return (
    <>
      <span className="code-keyword">const </span>
      <span className="code-function">mergeSort</span>
      <span className="code-operator"> = </span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">) =&gt; </span>
      <span className="code-punc">{`{`}</span>
      <br />

      <span className="code-keyword">  if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">.</span>
      <span className="code-function">length</span>
      <span className="code-operator"> &lt;= </span>
      <span className="code-number">1</span>
      <span className="code-punc">)</span>
      <span className="code-keyword"> return </span>
      <span className="code-variable">arr</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-keyword">  const </span>
      <span className="code-variable">mid</span>
      <span className="code-operator"> = </span>
      <span className="code-variable">Math</span>
      <span className="code-punc">.</span>
      <span className="code-function">floor</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">.</span>
      <span className="code-function">length</span>
      <span className="code-operator"> / </span>
      <span className="code-number">2</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-keyword">  const </span>
      <span className="code-variable">left</span>
      <span className="code-operator"> = </span>
      <span className="code-function">mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">.</span>
      <span className="code-function">slice</span>
      <span className="code-punc">(</span>
      <span className="code-number">0</span>
      <span className="code-punc">, </span>
      <span className="code-variable">mid</span>
      <span className="code-punc">)</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-keyword">  const </span>
      <span className="code-variable">right</span>
      <span className="code-operator"> = </span>
      <span className="code-function">mergeSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">.</span>
      <span className="code-function">slice</span>
      <span className="code-punc">(</span>
      <span className="code-variable">mid</span>
      <span className="code-punc">)</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-keyword">  return </span>
      <span className="code-function">merge</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-variable">right</span>
      <span className="code-punc">);</span>
      <br />

      <span className="code-punc">&#125;</span>
      <span className="code-punc">;</span>
      <br /><br />

      <span className="code-keyword">const </span>
      <span className="code-function">merge</span>
      <span className="code-operator"> = </span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">, </span>
      <span className="code-variable">right</span>
      <span className="code-punc">) =&gt; {`{`}</span>
      <br />

      <span className="code-keyword">  let </span>
      <span className="code-variable">result</span>
      <span className="code-operator"> = </span>
      <span className="code-punc">[];</span>
      <br />

      <span className="code-keyword">  let </span>
      <span className="code-variable">i</span>
      <span className="code-operator"> = </span>
      <span className="code-number">0</span>
      <span className="code-punc">, </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> = </span>
      <span className="code-number">0</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-keyword">  while </span>
      <span className="code-punc">(</span>
      <span className="code-variable">i</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">left</span>
      <span className="code-punc">.</span>
      <span className="code-function">length</span>
      <span className="code-operator"> && </span>
      <span className="code-variable">j</span>
      <span className="code-operator"> &lt; </span>
      <span className="code-variable">right</span>
      <span className="code-punc">.</span>
      <span className="code-function">length</span>
      <span className="code-punc">)</span>
      <span className="code-punc"> {`{`}</span>
      <br />

      <span className="code-keyword">    if </span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>
      <span className="code-operator"> &lt;= </span>
      <span className="code-variable">right</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">])</span>
      <span className="code-punc"> {`{`}</span>
      <br />

      <span className="code-variable">      result</span>
      <span className="code-punc">.</span>
      <span className="code-function">push</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">])</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-variable">      i</span>
      <span className="code-operator">++;</span>
      <br />

      <span className="code-punc">    {`}`}</span>
      <span className="code-keyword"> else </span>
      <span className="code-punc">{`{`}</span>
      <br />

      <span className="code-variable">      result</span>
      <span className="code-punc">.</span>
      <span className="code-function">push</span>
      <span className="code-punc">(</span>
      <span className="code-variable">right</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">])</span>
      <span className="code-punc">;</span>
      <br />

      <span className="code-variable">      j</span>
      <span className="code-operator">++;</span>
      <br />

      <span className="code-punc">    {`}`}</span>
      <br />

      <span className="code-punc">  {`}`}</span>
      <br />

      <span className="code-keyword">  return </span>
      <span className="code-punc">[</span>
      <span className="code-operator">...</span>
      <span className="code-variable">result</span>
      <span className="code-punc">, ...</span>
      <span className="code-variable">left</span>
      <span className="code-punc">.</span>
      <span className="code-function">slice</span>
      <span className="code-punc">(</span>
      <span className="code-variable">i</span>
      <span className="code-punc">), ...</span>
      <span className="code-variable">right</span>
      <span className="code-punc">.</span>
      <span className="code-function">slice</span>
      <span className="code-punc">(</span>
      <span className="code-variable">j</span>
      <span className="code-punc">)</span>
      <span className="code-punc">];</span>
      <br />

      <span className="code-punc">{`}`}</span>
      <span className="code-punc">;</span>
    </>
  );
};
