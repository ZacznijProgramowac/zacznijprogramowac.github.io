"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[5170],{2783:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-10f5ac4e",path:"/instrukcje-warunkowe/instrukcje-warunkowe/",title:"Instrukcje warunkowe",lang:"pl-PL",frontmatter:{permalink:"/instrukcje-warunkowe/instrukcje-warunkowe"},excerpt:"",headers:[{level:2,title:"Instrukcja if",slug:"instrukcja-if",children:[]},{level:2,title:"Operatory logiczne",slug:"operatory-logiczne",children:[]},{level:2,title:"Inne przypadki",slug:"inne-przypadki",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"instrukcje-warunkowe/01-instrukcje-warunkowe.md",git:{}}},4511:(n,a,s)=>{s.r(a),s.d(a,{default:()=>o});const e=(0,s(6252).uE)('<h1 id="instrukcje-warunkowe" tabindex="-1"><a class="header-anchor" href="#instrukcje-warunkowe" aria-hidden="true">#</a> Instrukcje warunkowe</h1><p>W JavaScript jest wiele sposobów na sprawdzenie warunków. Służą do tego różnego rodzaju instrukcje warunkowe. Poznaliśmy też operatory logiczne jak AND i OR, a także poznamy kolejne operatory. Ten dział będzie o sposobach na sterowanie programem.</p><h2 id="instrukcja-if" tabindex="-1"><a class="header-anchor" href="#instrukcja-if" aria-hidden="true">#</a> Instrukcja <code>if</code></h2><p>Podstawową instrukcją warunkową w JavaScript jest instrukcja <code>if</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;it works!&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Taka sama lub podobna instrukcja warunkowa występuje w prawie każdym języku programowania. Do instrukcji <code>if</code> możemy wstawić każdą wartość, jeżeli nie jest ona typu <code>boolean</code> zostanie przekonwertowana na typ <code>boolean</code> zgodnie z tabelą wartości fałszywych. Jeżeli wstawiona wartość okaże się <code>true</code> instrukcja w środku bloku zostanie wykonana.</p><p>Możemy także w instrukcji warunkowej wykonać warunek <code>else</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;not printed&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;printend&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Warunek <code>else</code> zostanie wykonany gdy wartość w instrukcji okaże się <code>false</code>. Wtedy oczywiście pierwsza instrukcja <code>if</code> nie jest wykonywana.</p><p>Możemy także zbudować instrukcję <code>if</code> w zwiększą ilością warunków:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;First condition:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Second condition:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Third condition:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Last condition:&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>W tym przypadku w zależności od wylosowanej liczby wykona się blok <code>if</code>, <code>else if</code> lub <code>else</code> po wykonaniu się któregoś bloku od razu wykonywanie dalszej instrukcji <code>if</code> zostaje zakończone.</p><h2 id="operatory-logiczne" tabindex="-1"><a class="header-anchor" href="#operatory-logiczne" aria-hidden="true">#</a> Operatory logiczne</h2><p>Warunki wstawiane w instrukcję <code>if</code> mogą być bardziej skomplikowane niż zwykłe sprawdzenie pojedynczej wartości:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>random <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> random <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Random is 1 or 2: &#39;</span><span class="token punctuation">,</span> random<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Możemy używać wszelkich operatorów porównania czy logicznych. Również wywołać funkcję, która zwróci jakaś wartość.</p><p>Warunki mogą być też bardzo skomplikowane:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>random <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> random <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> random <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> random <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;It works?&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Taki kod niestety nie jest czytelny, również nie do końca jasna jest kolejność wykonywania operatorów. Starajmy się raczej unikać takich wyrażeń.</p><p>Jeżeli już musimy użyć takiego wyrażenia, najlepiej grupować warunki w okrągłe nawiasy:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>random <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> random <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>random <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> random <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;It works?&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>lub nawet wydzielić poszczególne logiczne porównania do funkcji i wywołać jako czytelne nazwy funkcji.</p><h2 id="inne-przypadki" tabindex="-1"><a class="header-anchor" href="#inne-przypadki" aria-hidden="true">#</a> Inne przypadki</h2><p>Samo wyrażenie <code>if</code> jest bardzo proste w działaniu. Można jednak spotkać wiele różnych zapisów tego wyrażenia:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;works&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Możemy pozbyć się nawiasów klamrowych. Jest to bardzo atrakcyjny i krótki zapis. Jednak zalecanym zapisem jest użycie nawiasów klamrowych dla czytelności.</p><p>Możemy też zbudować taki warunek:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">===</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">||</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;It is always 1:&#39;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Ten zapis ma jednak pewien problem. W tym przypadku zawsze sprawdzimy tylko i wyłącznie porównanie do wartości <code>1</code>. Jak pamiętamy z operatorów logicznych przy warunku <code>OR</code> gdy sprawdzane są inne wartości niż <code>boolean</code>, to gdy pierwsza z nich jest prawdziwa zwracana jest jako wartość. Więc tak naprawdę to porównanie zawsze sprawdza czy <code>number === 1</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;It is 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Poprzedni kod wykonuje więc tylko i wyłącznie takie sprawdzenie, nigdy nie sprawdzi czy zmienna <code>number</code> może być równa 2.</p><p>Warto zwrócić uwagę przy zagnieżdżaniu warunków <code>if</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Print when number is two: &#39;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>W tym przypadku mamy zagnieżdżone w sobie dwie instrukcje <code>if</code>.</p><p>Zazwyczaj takie dwa <code>ify</code> możemy ze sobą połączyć:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> number <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Print when number is two: &#39;</span><span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Dwa zagnieżdżone <code>ify</code> możemy ze sobą połączyć za pomocą operatora <code>AND</code>. Mniej kodu i od razu bardziej czytelnie.</p><p>Ciekawym przykładem jest to, że w instrukcji <code>if</code> możemy stworzyć przypisanie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Assignment: &#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Nie jest to przypadek kodu, który jest czytelny. Moim zdaniem takie przypisanie lepiej wykonać przed instrukcją <code>if</code>. Głównie dlatego, że przyjęło się że w instrukcji <code>if</code> wykonujemy porównania, ten zapis może nas wprowadzić w mylne myślenie iż jest to porównanie, a nie przypisanie.</p><p>Jeśli jednak już chcemy posłużyć się takim wyrażeniem:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Assignment: &#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>lepiej będzie dodatkowo ująć je w nawiasy okrągłe. W ten sposób dokładnie wyróżnimy przypisanie i zaznaczymy, że warunek będzie sprawdzony dopiero po wykonaniu przypisania.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li><p>najprostszą instrukcją warunkową jest <code>if</code> w którym do dyspozycji mamy jeszcze <code>if else</code> oraz <code>else</code></p></li><li><p>do instrukcji <code>if</code> możemy wstawić różne wyrażenia, ostatecznie będą one wykonane i sprowadzone do wartości <code>boolean</code></p></li><li><p>przy instrukcji <code>if</code> warto dbać o czytelność</p></li></ul>',45),p={},o=(0,s(3744).Z)(p,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);