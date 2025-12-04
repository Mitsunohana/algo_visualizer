export const MergeCodeStringC = () => {
  return (
    <>
      <span className="code-keyword">#include </span>
      <span className="code-punc">&lt;stdio.h&gt;</span><br />
      <span className="code-keyword">#include </span>
      <span className="code-punc">&lt;stdlib.h&gt;</span><br /><br />

      <span className="code-keyword">void </span>
      <span className="code-function">merge</span>
      <span className="code-punc">(</span>
      <span className="code-variable">int arr[], int left, int mid, int right</span>
      <span className="code-punc">)</span> <span className="code-punc">{'{'}</span><br />

      &nbsp;&nbsp;<span className="code-variable">int n1</span> <span className="code-operator">=</span> <span className="code-variable">mid</span> <span className="code-operator">-</span> <span className="code-variable">left</span> <span className="code-operator">+</span> <span className="code-number">1</span><span className="code-punc">;</span><br />
      &nbsp;&nbsp;<span className="code-variable">int n2</span> <span className="code-operator">=</span> <span className="code-variable">right</span> <span className="code-operator">-</span> <span className="code-variable">mid</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-variable">int* L</span> <span className="code-operator">=</span> <span className="code-punc">(</span><span className="code-variable">int*</span><span className="code-punc">)</span>
      <span className="code-function">malloc</span><span className="code-punc">(</span><span className="code-variable">n1</span> <span className="code-operator">*</span> <span className="code-function">sizeof</span><span className="code-punc">(</span><span className="code-variable">int</span><span className="code-punc">))</span><span className="code-punc">;</span><br />

      &nbsp;&nbsp;<span className="code-variable">int* R</span> <span className="code-operator">=</span> <span className="code-punc">(</span><span className="code-variable">int*</span><span className="code-punc">)</span>
      <span className="code-function">malloc</span><span className="code-punc">(</span><span className="code-variable">n2</span> <span className="code-operator">*</span> <span className="code-function">sizeof</span><span className="code-punc">(</span><span className="code-variable">int</span><span className="code-punc">))</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-keyword">for </span>
      <span className="code-punc">(</span><span className="code-variable">int i</span> <span className="code-operator">=</span> <span className="code-number">0</span><span className="code-punc">; i</span> <span className="code-operator">&lt;</span> <span className="code-variable">n1</span><span className="code-punc">; i++</span><span className="code-punc">)</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">L[i]</span> <span className="code-operator">=</span> <span className="code-variable">arr[left + i]</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-keyword">for </span>
      <span className="code-punc">(</span><span className="code-variable">int j</span> <span className="code-operator">=</span> <span className="code-number">0</span><span className="code-punc">; j</span> <span className="code-operator">&lt;</span> <span className="code-variable">n2</span><span className="code-punc">; j++</span><span className="code-punc">)</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">R[j]</span> <span className="code-operator">=</span> <span className="code-variable">arr[mid + 1 + j]</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-variable">int i</span> <span className="code-operator">=</span> <span className="code-number">0</span><span className="code-punc">,</span> <span className="code-variable">j</span> <span className="code-operator">=</span> <span className="code-number">0</span><span className="code-punc">,</span> <span className="code-variable">k</span> <span className="code-operator">=</span> <span className="code-variable">left</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-keyword">while </span>
      <span className="code-punc">(</span><span className="code-variable">i</span> <span className="code-operator">&lt;</span> <span className="code-variable">n1</span> &amp;&amp; <span className="code-variable">j</span> <span className="code-operator">&lt;</span> <span className="code-variable">n2</span><span className="code-punc">)</span> <span className="code-punc">{'{'}</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">if </span>
      <span className="code-punc">(</span><span className="code-variable">L[i]</span> <span className="code-operator">&lt;=</span> <span className="code-variable">R[j]</span><span className="code-punc">)</span> <span className="code-punc">{'{'}</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr[k++]</span> <span className="code-operator">=</span> <span className="code-variable">L[i++]</span><span className="code-punc">;</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span> <span className="code-keyword">else</span> <span className="code-punc">{'{'}</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr[k++]</span> <span className="code-operator">=</span> <span className="code-variable">R[j++]</span><span className="code-punc">;</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-punc">&#125;</span><br />
      &nbsp;&nbsp;<span className="code-punc">&#125;</span><br /><br />

      &nbsp;&nbsp;<span className="code-keyword">while </span>(<span className="code-variable">i</span> <span className="code-operator">&lt;</span> <span className="code-variable">n1</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr[k++]</span> <span className="code-operator">=</span> <span className="code-variable">L[i++]</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-keyword">while </span>(<span className="code-variable">j</span> <span className="code-operator">&lt;</span> <span className="code-variable">n2</span>)<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-variable">arr[k++]</span> <span className="code-operator">=</span> <span className="code-variable">R[j++]</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-function">free</span><span className="code-punc">(</span><span className="code-variable">L</span><span className="code-punc">)</span><span className="code-punc">;</span><br />
      &nbsp;&nbsp;<span className="code-function">free</span><span className="code-punc">(</span><span className="code-variable">R</span><span className="code-punc">)</span><span className="code-punc">;</span><br />

      <span className="code-punc">{'}'}</span><br /><br />

      <span className="code-keyword">void </span>
      <span className="code-function">mergeSort</span>
      <span className="code-punc">(</span><span className="code-variable">int arr[], int left, int right</span><span className="code-punc">)</span> <span className="code-punc">{'{'}</span><br />

      &nbsp;&nbsp;<span className="code-keyword">if </span>
      <span className="code-punc">(</span><span className="code-variable">left</span> <span className="code-operator">&gt;=</span> <span className="code-variable">right</span><span className="code-punc">)</span> <span className="code-keyword">return</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-variable">int mid</span> <span className="code-operator">=</span> <span className="code-variable">left</span> <span className="code-operator">+</span> <span className="code-punc">(</span><span className="code-variable">right - left</span><span className="code-punc">)</span> <span className="code-operator">/</span> <span className="code-number">2</span><span className="code-punc">;</span><br /><br />

      &nbsp;&nbsp;<span className="code-function">mergeSort</span><span className="code-punc">(</span><span className="code-variable">arr</span><span className="code-punc">,</span> <span className="code-variable">left</span><span className="code-punc">,</span> <span className="code-variable">mid</span><span className="code-punc">)</span><span className="code-punc">;</span><br />
      &nbsp;&nbsp;<span className="code-function">mergeSort</span><span className="code-punc">(</span><span className="code-variable">arr</span><span className="code-punc">,</span> <span className="code-variable">mid + 1</span><span className="code-punc">,</span> <span className="code-variable">right</span><span className="code-punc">)</span><span className="code-punc">;</span><br />
      &nbsp;&nbsp;<span className="code-function">merge</span><span className="code-punc">(</span><span className="code-variable">arr</span><span className="code-punc">,</span> <span className="code-variable">left</span><span className="code-punc">,</span> <span className="code-variable">mid</span><span className="code-punc">,</span> <span className="code-variable">right</span><span className="code-punc">)</span><span className="code-punc">;</span><br />

      <span className="code-punc">{'}'}</span>
    </>
  );
};
