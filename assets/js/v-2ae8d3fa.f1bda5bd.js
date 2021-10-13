"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[7860],{5718:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-2ae8d3fa",path:"/instrukcje-warunkowe/operator-nullowy/",title:"Operator nullowej koalescencji",lang:"pl-PL",frontmatter:{permalink:"/instrukcje-warunkowe/operator-nullowy/"},excerpt:"",headers:[{level:2,title:"Różnica do OR i teranry",slug:"roznica-do-or-i-teranry",children:[]},{level:2,title:"Czego nie robić z tym operatorem",slug:"czego-nie-robic-z-tym-operatorem",children:[]},{level:2,title:"Co warto zapamiętać:",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"instrukcje-warunkowe/04-operator-nullowy.md",git:{}}},5078:(a,n,s)=>{s.r(n),s.d(n,{default:()=>t});const e=(0,s(6252).uE)('<h1 id="operator-nullowej-koalescencji" tabindex="-1"><a class="header-anchor" href="#operator-nullowej-koalescencji" aria-hidden="true">#</a> Operator nullowej koalescencji</h1><p>Operator nullowej koalescencji albo też operator nullowego scalania albo jeszcze lepiej po angielsku Nullish Coalescing Operator jest reprezentowany przez dwa znaki zapytania <code>??</code>. Operator ten pochodzi ze specyfikacji ECMAScript 2020. Jeżeli chcecie z niego korzytać upewnijcie się, że ma wsparcie przeglądarki lub też posiadacie stosowane skrypty polyfills.</p><p>Przyjrzyjmy się pierwszemu przykładowi:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token operator">??</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span> <span class="token comment">// &#39;foo&#39;</span>\n\n<span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">??</span> <span class="token string">&#39;boo&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span> <span class="token comment">// &#39;boo&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Zadaniem operatora jest sprawdzanie wartości po lewej stronie. Tak długo jak nie jest ona <code>null</code> lub <code>undefined</code> wartość ta będzie zwracana przez operator. Jeżeli okaże się, że lewa strona ma wartość <code>null</code> lub <code>undefined</code> zwrócona zostanie wartość po prawej stronie.</p><p>Co się stanie gdy obie wartości będą <code>null</code> lub <code>undefined</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">??</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token operator">??</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// null</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Gdy lewa wartość jest <code>null</code> lub <code>undefinde</code> od razu zwraca jest wartość po prawej stronie bez jej sprawdzenia. Dlatego prawa strona tego operatora powinna nam najczęściej słuyżyć do stworzenia jakiejś domyślnej wartości:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token punctuation">{</span>\n    greetings<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>greetings <span class="token operator">??</span> <span class="token string">&#39;Have a nice day!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Takim przypadkiem może być praca z obiektem <code>message</code>, jeżeli nie będzie zawierał pozdrowień, zwrócimy domyślną wartość.</p><p>Operator ten jest świetną opcją do skrócenia naszego kodu i zwrócenia konkrentej wartości gdy jedna jest <code>null</code> lub <code>undefined</code>. Zastępuje on operator logiczny OR lub ternary operator, są jednak pewne różnice.</p><h2 id="roznica-do-or-i-teranry" tabindex="-1"><a class="header-anchor" href="#roznica-do-or-i-teranry" aria-hidden="true">#</a> Różnica do OR i teranry</h2><p>Wspomniałem, że operatora ten sprawdza czy lewa strona jest <code>null</code> lub <code>undefined</code>. Jest to bardzo ważne, bo operator ten jak wiele innych operatorów nie pracuje na wartościach fałszywych. Operator ten pracuje dokładnie tylko na wartościach nullowych czyli <code>null</code> oraz <code>undefined</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> greetings <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greetings <span class="token operator">??</span> <span class="token string">&#39;Have a nice day!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greetings <span class="token operator">?</span> greetings <span class="token operator">:</span> <span class="token string">&#39;Have a nice day!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Have a nice day!&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greetings <span class="token operator">||</span> <span class="token string">&#39;Have a nice day!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Have a nice day!&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Mamy zmiennną <code>greetings</code>, która jest pustym znakiem, czyli wartością fałszywą. Dla nullowego operatora jest to jakaś wartość i to ona zostanie zwrócona, z kolei dla operatora OR i ternary operatora zostaną zwrócone wartości domyślne, ponieważ te dwa operatory bazują na wartościach fałszywych.</p><p>Jest to bardzo istotne i różnica w działaniu jest bardzo duża. W końcu mamy w JavasScript operator, który dokładnie rozpoznaje wartości <code>null</code> i <code>undefined</code> i nie pracuje na wszystkich wartościach fałszywych.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(false ?? &#39;Have a nice day!&#39;); // false\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Dlatego musimy go używać z większą uwagą i spodziewać się, że przepuści inne wartości fałszywe oprócz <code>null</code> oraz <code>undefind</code>. Do tej pory za pomocą instrukcji warunkowych i innych operatorów, takie wartości także były odsiewane.</p><h2 id="czego-nie-robic-z-tym-operatorem" tabindex="-1"><a class="header-anchor" href="#czego-nie-robic-z-tym-operatorem" aria-hidden="true">#</a> Czego nie robić z tym operatorem</h2><p>Gdy będziemy tworzyć różne kombinacje z tym operatorem należy uważać:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">undefined</span> <span class="token operator">??</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span> <span class="token comment">// error</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Przy takim połączeniu JavaScript zgłosi nam błąd. Takie zestawienie operatorów jest przed wszystkim problematyczne jeśli chodzi o pierwszeństwo wykonania.</p><p>Dlatego zalcea się użycie dodatkowych nawiasów:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;foo&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;boo&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;foo&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Ujęcie dodatkowych operatorów w nawiasy okrągłe nie tylko poprawia zgłaszany błąd przez JavaScript, ale także zwiększa czytelność. Jeżeli oczywiście możemy mówić o czytelności przy łączeniu wielu operatorów.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać:</h2><ul><li>operator nullowego scalania jest reprezentowany przez dwa znaki zapytania</li><li>lewa strona jest zwracana gdy jest różna od <code>null</code> lub <code>undefined</code> w innym przypadku zwracana jest prawa strona</li><li>operator nullowy sprawdza tylko wartości <code>null</code> i <code>undefined</code>, nie sprawdza wartości fałszywych w porównaniu do operatorów logicznych OR i AND oraz ternary operatora</li><li>przy łączeniu z innymi operatorami stosujemy nawiasy</li></ul>',27),o={},t=(0,s(3744).Z)(o,[["render",function(a,n){return e}]])},3744:(a,n)=>{n.Z=(a,n)=>{for(const[s,e]of n)a[s]=e;return a}}}]);