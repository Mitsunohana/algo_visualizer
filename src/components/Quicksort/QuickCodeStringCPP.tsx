export const QuickCodeStringCPP = () => {
  return (
    <>
      <span className="code-keyword">#include</span>
      <span className="code-punc">&lt;</span>
      <span className="code-keyword">vector</span>
      <span className="code-punc">&gt;</span>
      <br />
      <span className="code-keyword">using</span>{" "}
      <span className="code-keyword">namespace</span>{" "}
      <span className="code-variable">std</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      <span className="code-keyword">vector</span>
      <span className="code-punc">&lt;</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">&gt;</span>{" "}
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">const</span>{" "}
      <span className="code-keyword">vector</span>
      <span className="code-punc">&lt;</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">&gt;&amp;</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;<span className="code-keyword">if</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">.</span>
      <span className="code-function">size</span>
      <span className="code-punc">()</span>{" "}
      <span className="code-operator">&lt;=</span>
      <span className="code-number">1</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-keyword">return</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">int</span>{" "}
      <span className="code-variable">pivot</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-number">0</span>
      <span className="code-punc">];</span>
      <br />
      &nbsp;&nbsp;<span className="code-keyword">vector</span>
      <span className="code-punc">&lt;</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">&gt;</span>{" "}
      <span className="code-variable">left</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">right</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">for</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">size_t</span>{" "}
      <span className="code-variable">i</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-number">1</span>
      <span className="code-punc">;</span>{" "}
      <span className="code-variable">i</span>{" "}
      <span className="code-operator">&lt;</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">.</span>
      <span className="code-function">size</span>
      <span className="code-punc">()</span>
      <span className="code-punc">;</span>{" "}
      <span className="code-variable">i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>{" "}
      <span className="code-operator">&lt;=</span>{" "}
      <span className="code-variable">pivot</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-variable">left</span>
      <span className="code-punc">.</span>
      <span className="code-function">push_back</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>
      <span className="code-punc">);</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">else</span>{" "}
      <span className="code-variable">right</span>.
      <span className="code-function">push_back</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>
      <span className="code-punc">);</span>
      <br />
      &nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">auto</span>{" "}
      <span className="code-variable">sortedLeft</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">left</span>
      <span className="code-punc">);</span>
      <br />
      &nbsp;&nbsp;<span className="code-keyword">auto</span>{" "}
      <span className="code-variable">sortedRight</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">right</span>
      <span className="code-punc">);</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">vector</span>
      <span className="code-punc">&lt;</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">&gt;</span>{" "}
      <span className="code-variable">result</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-variable">result</span>.
      <span className="code-function">insert</span>
      <span className="code-punc">(</span>
      <span className="code-variable">result</span>.
      <span className="code-function">end</span>
      <span className="code-punc">()</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">sortedLeft</span>.
      <span className="code-function">begin</span>
      <span className="code-punc">()</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">sortedLeft</span>.
      <span className="code-function">end</span>
      <span className="code-punc">()</span>
      <span className="code-punc">);</span>
      <br />
      &nbsp;&nbsp;<span className="code-variable">result</span>.
      <span className="code-function">push_back</span>
      <span className="code-punc">(</span>
      <span className="code-variable">pivot</span>
      <span className="code-punc">);</span>
      <br />
      &nbsp;&nbsp;<span className="code-variable">result</span>.
      <span className="code-function">insert</span>
      <span className="code-punc">(</span>
      <span className="code-variable">result</span>.
      <span className="code-function">end</span>
      <span className="code-punc">()</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">sortedRight</span>.
      <span className="code-function">begin</span>
      <span className="code-punc">()</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">sortedRight</span>.
      <span className="code-function">end</span>
      <span className="code-punc">()</span>
      <span className="code-punc">);</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">return</span>{" "}
      <span className="code-variable">result</span>
      <span className="code-punc">;</span>
      <br />
      <span className="code-punc">&#125;</span>
    </>
  );
};
