"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[3240],{8609:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-2133b23d",path:"/tablice/foreach-for-of/",title:"Pętla for-of i forEach",lang:"pl-PL",frontmatter:{permalink:"/tablice/foreach-for-of"},excerpt:"",headers:[{level:2,title:"Pętla for-of",slug:"petla-for-of",children:[]},{level:2,title:"Metoda forEach",slug:"metoda-foreach",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"tablice/04-foreach-for-of.md",git:{}}},4151:(a,n,s)=>{s.r(n),s.d(n,{default:()=>c});var e=s(6252);const o=(0,e.uE)('<h1 id="petla-for-of-i-foreach" tabindex="-1"><a class="header-anchor" href="#petla-for-of-i-foreach" aria-hidden="true">#</a> Pętla for-of i forEach</h1><p>O dostępnych pętlach w JavaScript jest oddzielny dział w tym kursie. Jednak same obiekty <code>Array</code> mają w swoim prototypie kilka metod, które również służą do iterowania po tablicach. Mamy zawsze wybór użycia normalnej pętli lub też wbudowanej metody w obiekty <code>Array</code>.</p><p>W tym przypadku sprawdzimy, jaka jest różnica między nowszą pętlą <code>for-of</code> , a metodą<code>forEach</code>.</p><h2 id="petla-for-of" tabindex="-1"><a class="header-anchor" href="#petla-for-of" aria-hidden="true">#</a> Pętla for-of</h2><p>Konstrukcję <code>for-of</code> już powinniśmy znać:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39;, &#39;b&#39;, &#39;c&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Ma bardzo czytelny zapis i świetnie może nam zastąpić starą i wysłużoną pętlę <code>for</code> o ile nie potrzebujemy na przykład indeksu tablicy. Ta pętla pobiera tylko i wyłącznie wartości. Dlatego, jeżeli oprócz wartości potrzebujemy indeksu, albo użyjemy innej pętli, albo metody <code>indexOf</code>.</p><p>Pętla <code>for-of</code> pozwala także na wykonanie instrukcji <code>break</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Instrukcja <code>break</code> może być bardzo przydatna. Gdy stwierdzimy, że chcemy zakończyć pętlę, to mamy tą instrukcję do dyspozycji w pętli <code>for-of</code> i innych pętlach w JavaScript.</p><p>Jest także instrukcja <code>continue</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">continue</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39;, &#39;c&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Również przydatna instrukcja, gdy chcemy pominąć jakaś wartość i jej nie procesować. Ta instrukcja także dostępna jest w pętlach JavaScript.</p><h2 id="metoda-foreach" tabindex="-1"><a class="header-anchor" href="#metoda-foreach" aria-hidden="true">#</a> Metoda forEach</h2><p>Tablice w JavaScript mają dodatkowo do dyspozycji swoją metodę <code>forEach</code>, która jest w pewnym sensie odpowiednikiem pętli:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a&#39;, &#39;b&#39;, &#39;c&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Pamiętajmy jednak, że jest to metoda, która wywoływana jest na tablicach. Metoda ta przyjmuje funkcję <code>callback</code>, która przekazana do <code>forEach</code> otrzymuje każdy element z tablicy.</p><p>W metodzie <code>forEach</code> nie możemy wykonać instrukcji <code>break</code>, <code>continue</code>, ani <code>return</code>. Te instrukcje są pomijane i nie są wykonywane, nawet jeżeli użyjemy ich w pętli <code>forEach</code>. I to jest główna różnica w porównaniu do zwykłych pętli, metody <code>forEach</code> nie możemy przerwać.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0 &#39;a&#39;, 1 &#39;b&#39;, 2 &#39;c&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Metoda <code>forEach</code> w przekazanej funkcji <code>callBack</code> może przyjąć dodatkowe parametry, z metody <code>forEach</code> możemy otrzymać <code>index</code> tablicy, a także całą tablicę, po której aktualnie iterujemy. Indeks jak najbardziej może się przydać, tablica jako parametr jest rzadko używana.</p><p>Mamy więc pewne różnice w działaniu, jeśli chodzi o tradycyjne pętle i metodę <code>forEach</code>. Wspomnę jeszcze, że metoda <code>foreEach</code> jest dużo wolniejsza od <code>for-of</code> jeżeli komuś zależy na optymalizacjach.</p><p>Często też porównuje się metodę <code>forEach</code> do metody <code>map</code>. Metoda <code>forEach</code> powinna być używana do przetwarzania elementów, które otrzymujemy w trakcie iteracji. Element taki możemy na przykład wysłać do bazy danych, zalogować w systemie. Wykorzystujmy metodę <code>forEach</code> gdy chcemy zrobić coś konkretnego ze wszystkimi elementami listy. Pamiętajmy, że metoda ta zawsze iteruje po wszystkich elementach i nie da się jej przerwać. Pobieramy więc każdy element i procesujemy go w jakiś sposób.</p><p>Nie należy używać metody do zmiany danych w liście czy też zmiany samej listy. Do tego są lepsze metody jak <code>map</code>. Stawiając takie rozgraniczenie, nasz kod będzie czytelniejszy.</p><p>Niewątpliwie pętla <code>forEach</code> jest bardzo czytelną pętlą i często używaną w kodzie JavaScript. Świetnie sprawdza się przy wykonywaniu podstawowych operacji z elementami tablicy.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li>do iterowania po tablicach mamy metody z obiektu <code>Array</code> i pętle jak <code>for-of</code></li><li>metoda <code>forEach</code> jest podobna do pętli, ale posiada swoje braki, nie ma instrukcji <code>break</code> oraz <code>continue</code></li><li>metodę <code>forEach</code> najlepiej używać do procesowania elementów z tablicy</li><li>pętli <code>forEach</code> nie używamy do zmiany elementów czy zmiany tablicy</li><li>pętla <code>forEach</code> jest wolniejsza niż pętla <code>for-of</code></li></ul>',26),t={},c=(0,s(3744).Z)(t,[["render",function(a,n){const s=(0,e.up)("Comments");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e.Wm)(s)],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{for(const[s,e]of n)a[s]=e;return a}}}]);