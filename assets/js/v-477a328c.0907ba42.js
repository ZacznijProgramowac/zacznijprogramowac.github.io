"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[1624],{1987:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-477a328c",path:"/this/metod-apply-i-call/",title:"Metoda call i apply",lang:"pl-PL",frontmatter:{permalink:"/this/metod-apply-i-call"},excerpt:"",headers:[{level:2,title:"Użycie call i apply",slug:"uzycie-call-i-apply",children:[]},{level:2,title:"Pożyczanie metod",slug:"pozyczanie-metod",children:[]},{level:2,title:"Wywoływanie metod z call i apply",slug:"wywoływanie-metod-z-call-i-apply",children:[]},{level:2,title:"Call, apply czy bind",slug:"call-apply-czy-bind",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"this/06-metod-apply-i-call.md",git:{}}},7918:(n,a,s)=>{s.r(a),s.d(a,{default:()=>o});const p=(0,s(6252).uE)('<h1 id="metoda-call-i-apply" tabindex="-1"><a class="header-anchor" href="#metoda-call-i-apply" aria-hidden="true">#</a> Metoda call i apply</h1><p>Kolejne metody, które mogą nam posłużyć do operowania kontekstem wywoływanej funkcji to <code>apply</code> oraz <code>call</code>. Ich działanie jest identyczne, różnią się jedynie sposobem przekazywania parametrów, które można podać przy wywołaniu funkcji.</p><p>Metody te działają podobnie do metody <code>bind</code>. Główną różnicą jest to, że metoda <code>bind</code> zwraca nową funkcję, którą trzeba jeszcze wywołać. Natomiast metody <code>apply</code> oraz <code>call</code> od razu wykonują funkcję na której są wywołane.</p><p>Niezbyt często będziecie używać tych metod, ale od czasu do czasu mogą pojawić się w kodzie, warto więc wiedzieć jak działają. Warto też przed tym odcinkiem zapoznać się z metodą <code>bind</code>, którą omawiałem odcinek wcześniej.</p><h2 id="uzycie-call-i-apply" tabindex="-1"><a class="header-anchor" href="#uzycie-call-i-apply" aria-hidden="true">#</a> Użycie call i apply</h2><p>Podobnie jak przy metodzie <code>bind</code> możemy przez <code>call</code> i <code>apply</code> wskazać kontekst dla funkcji:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Rambo&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Mamy samodzielną funkcję <code>printName</code> oraz obiekt <code>person</code>. Wykorzystując <code>call</code> albo <code>apply</code> możemy wywołać metodę z przekazanym kontekstem <code>this</code>. W odróżnieniu do <code>bind</code> funkcja wywołana za pomocą <code>call</code> albo <code>apply</code> od razu się wykonuje. Natomiast <code>bind</code> zawsze zwraca nową funkcję, którą trzeba dopiero wykonać.</p><p>W tym przypadku funkcja <code>printName</code> wykonała się z kontekstem obiektu <code>person</code>. Bez użycia <code>call</code> albo <code>apply</code>, funkcja ta przez <code>this</code> odwołałaby się do obiektu globalnego, w tym wypadku <code>window</code>, a w trybie ścisłym była by to wartość <code>undefined</code>. Z pomocą tych dwóch metod ustawiliśmy funkcji <code>printName</code> odpowiedni kontekst <code>this</code>.</p><h2 id="pozyczanie-metod" tabindex="-1"><a class="header-anchor" href="#pozyczanie-metod" aria-hidden="true">#</a> Pożyczanie metod</h2><p>Podobnie jak <code>bind</code> metodę <code>call</code> oraz <code>apply</code> możemy użyć do pożyczenia metod z innych obiektów:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Reksio&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">speed</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39; run &#39;</span> <span class="token operator">+</span> speed <span class="token operator">+</span> <span class="token string">&#39; km&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ncat<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>dog<span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Reksio run 34 km</span>\ncat<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>dog<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">34</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Reksio run 34 km</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Mamy obiekt <code>dog</code>, który nie ma metody <code>run</code> tak jak obiekt <code>cat</code>. Z pomocą metod <code>call</code> oraz <code>apply</code> możemy wywołać metodę <code>run</code> pochodzącą z obiektu <code>cat</code>, ale z kontekstem obiektu <code>dog</code>.</p><p>Do metod przekazujemy jak pierwszy parametr kontekst, z którym ma być wywołana metoda <code>run</code>. Drugim parametrem jest parametr dla metody <code>run</code>. Przy metodzie <code>call</code> podajemy go normalnie, natomiast metoda <code>apply</code> przejmuje parametry w formie tablicy. To jest właśnie główna różnica między tymi metodami, forma przyjmowania parametrów.</p><p>Udało nam się pożyczyć metodę z innego obiektu poprzez zastosowanie <code>call</code> i <code>apply</code> co zmieniło kontekst wykonania metody <code>run</code>. Pomimo tego, że początkowo wykonujemy ją na obiekcie <code>cat</code>, to <code>call</code> oraz <code>apply</code> wymuszają zmianę kontekstu dla tej metody,.</p><h2 id="wywoływanie-metod-z-call-i-apply" tabindex="-1"><a class="header-anchor" href="#wywoływanie-metod-z-call-i-apply" aria-hidden="true">#</a> Wywoływanie metod z call i apply</h2><p>Podobnie jak przy metodzie <code>bind</code> możemy użyć metody <code>call</code> i <code>apply</code> do wywołania funkcji i przekazania parametrów:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Przy użyciu <code>call</code> albo <code>apply</code>, funkcja od razu jest wywołana z przekazanymi parametrami. Gdy używamy <code>call</code> parametry przekazujemy pojedynczo. Gdy używamy metody <code>apply</code> parametry przekazywane są w postaci tablicy. To jest cała różnica w działaniu tych metod.</p><p>Natomiast jako pierwszy parametr przekazaliśmy <code>null</code>, oznacza to, że nie chcemy przekazywać żadnego kontekstu dla tej funkcji, ponieważ i tak nie korzysta ona ze wskaźnika <code>this</code>.</p><p>Pomimo tego, że wywołanie funkcji z metodą <code>apply</code>, gdzie możemy przekazać tablicę parametrów wydaje się ciekawe to obecnie w JavaScript mamy lepsze rozwiązanie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Możemy użyć spread operatora i rozbić tablicę na pojedyncze wartości.</p><p>W nowoczesnym kodzie JavaScript raczej rzadko spotkacie <code>call</code> czy <code>apply</code>. Być może dowiązanie <code>this</code> za pomocą metody <code>bind</code> będzie znacznie częściej spotykane. Są to jednak metody, które często spotyka się w tutorialach czy dokumentacji, dlatego w kontekście <code>this</code> poznanie ich jest wręcz obowiązkowe.</p><h2 id="call-apply-czy-bind" tabindex="-1"><a class="header-anchor" href="#call-apply-czy-bind" aria-hidden="true">#</a> Call, apply czy bind</h2><p>Na koniec pozostaje pytanie której metody kiedy użyć:</p><ul><li>jeżeli potrzebujecie stworzyć funkcję z innym kontekstem <code>this </code> i wywołać ją później to używamy <code>bind</code>, taki zabieg przydaje się przy przekazywaniu funkcji jako <code>callback</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  surname<span class="token operator">:</span> <span class="token string">&#39;Rambo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>surname<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Rambo</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>jeżeli potrzebujecie stworzyć funkcję, która jest częściowo wywołana, również używamy <code>bind</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> sum2 <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">sum2</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 17</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>jeżeli chcecie od razu wywołać funkcję z innym kontekstem <code>this</code> to używamy <code>call</code> albo <code>apply</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Rambo&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">printName</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>jeżeli chcecie od razu wywołać funkcję z innym kontekstem <code>this</code> i przekazać pojedynczo parametry, używamy <code>call</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>jeżeli chcecie od razu wywołać funkcję z innym kontekstem <code>this</code> i przekazać listę parametrów, używamy <code>apply</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li>metoda <code>call</code> oraz <code>apply</code> pozwalają zmieniać kontekstu <code>this</code> dla wywołanej funkcji</li><li>metoda <code>bind</code> tworzy nową funkcję, którą potem trzeba wywołać, natomiast metoda <code>call</code> oraz <code>apply</code> od razu wykonują funkcje</li><li>drugim parametrem dla metody <code>call</code> są pojedynczo przekazywane parametry dla wywoływanej funkcji</li><li>drugim parametrem dla metody <code>apply</code> są parametry przekazywane jako tablica, które są potem użyte do wywołania funkcji</li></ul>',38),e={},o=(0,s(3744).Z)(e,[["render",function(n,a){return p}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,p]of a)n[s]=p;return n}}}]);