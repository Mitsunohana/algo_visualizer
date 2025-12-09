export const QuickCodeStringJava = () => {
  return (
    <>
      <span className="code-keyword">import</span>{" "}
      <span className="code-variable">java.util.Arrays</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      <span className="code-keyword">public class</span>{" "}
      <span className="code-function">QuickSort</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;<span className="code-keyword">public void</span>{" "}
      <span className="code-function">sort</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">[]</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>{" "}
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>{" "}
      <span className="code-operator">==</span>{" "}
      <span className="code-keyword">null</span>{" "}
      <span className="code-operator">||</span>{" "}
      <span className="code-variable">arr.length</span>{" "}
      <span className="code-operator">==</span>{" "}
      <span className="code-number">0</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-keyword">return</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-number">0</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">arr.length</span>{" "}
      <span className="code-operator">-</span>{" "}
      <span className="code-number">1</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">private void</span>{" "}
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">[]</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">low</span>
      <span className="code-punc">,</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if</span>{" "}
      <span className="code-punc">(</span>
      <span className="code-variable">low</span>{" "}
      <span className="code-operator">&lt;</span>{" "}
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">pi</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-function">partition</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">low</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">low</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">pi</span>{" "}
      <span className="code-operator">-</span>{" "}
      <span className="code-number">1</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-function">quickSort</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">pi</span>{" "}
      <span className="code-operator">+</span>{" "}
      <span className="code-number">1</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">private int</span>{" "}
      <span className="code-function">partition</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">[]</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">low</span>
      <span className="code-punc">,</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">int</span>{" "}
      <span className="code-variable">pivot</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">high</span>
      <span className="code-punc">]</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">int</span>{" "}
      <span className="code-variable">i</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-punc">(</span>
      <span className="code-variable">low</span>{" "}
      <span className="code-operator">-</span>{" "}
      <span className="code-number">1</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">for</span>{" "}
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">j</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-variable">low</span>
      <span className="code-punc">;</span>
      <span className="code-variable">j</span>{" "}
      <span className="code-operator">&lt;</span>{" "}
      <span className="code-variable">high</span>
      <span className="code-punc">;</span>
      <span className="code-variable">j</span>
      <span className="code-operator">++</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-keyword">if</span>{" "}
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]</span>{" "}
      <span className="code-operator">&lt;</span>{" "}
      <span className="code-variable">pivot</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-variable">i</span>
      <span className="code-operator">++</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-function">swap</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">i</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">j</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="code-punc">&#125;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-function">swap</span>
      <span className="code-punc">(</span>
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">i</span>{" "}
      <span className="code-operator">+</span>{" "}
      <span className="code-number">1</span>
      <span className="code-punc">,</span>{" "}
      <span className="code-variable">high</span>
      <span className="code-punc">)</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span>{" "}
      <span className="code-variable">i</span>{" "}
      <span className="code-operator">+</span>{" "}
      <span className="code-number">1</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      <br />
      &nbsp;&nbsp;<span className="code-keyword">private void</span>{" "}
      <span className="code-function">swap</span>
      <span className="code-punc">(</span>
      <span className="code-keyword">int</span>
      <span className="code-punc">[]</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">,</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">i</span>
      <span className="code-punc">,</span>
      <span className="code-keyword">int</span>{" "}
      <span className="code-variable">j</span>
      <span className="code-punc">)</span>{" "}
      <span className="code-punc">&#123;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">int</span>{" "}
      <span className="code-variable">temp</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">i</span>
      <span className="code-punc">]</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr</span>
      <span className="code-punc">[</span>
      <span className="code-variable">j</span>
      <span className="code-punc">]</span>{" "}
      <span className="code-operator">=</span>{" "}
      <span className="code-variable">temp</span>
      <span className="code-punc">;</span>
      <br />
      &nbsp;&nbsp;<span className="code-punc">&#125;</span>
      <br />
      <br />
      <span className="code-punc">&#125;</span>
    </>
  );
};
