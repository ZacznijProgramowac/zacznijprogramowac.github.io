"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[6397],{2681:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-64a0cc74",path:"/petle/while-do-while/",title:"Pętle do...while oraz while",lang:"pl-PL",frontmatter:{permalink:"/petle/while-do-while"},excerpt:"",headers:[{level:2,title:"Pętla do...while",slug:"petla-do-while",children:[]},{level:2,title:"Pętla while",slug:"petla-while",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"petle/03-while-do-while.md",git:{}}},71:(a,n,s)=>{s.r(n),s.d(n,{default:()=>t});var e=s(6252);const o=(0,e.uE)('<h1 id="petle-do-while-oraz-while" tabindex="-1"><a class="header-anchor" href="#petle-do-while-oraz-while" aria-hidden="true">#</a> Pętle <code>do...while</code> oraz <code>while</code></h1><p>Pętla <code>do...while</code> oraz <code>while</code> to rodzaj pętli, który będziecie używać niezwykle rzadko. Sam nie pamiętam kiedy ostatni raz użyłem tych instrukcji. Mogą się jednak przydać w specyficznych przypadkach, dlatego szybko zerkniemy na te pętle.</p><h2 id="petla-do-while" tabindex="-1"><a class="header-anchor" href="#petla-do-while" aria-hidden="true">#</a> Pętla <code>do...while</code></h2><p>Pętla <code>do...while</code> działa dopóty, dopóki warunek w pętli nie będzie wartością <code>false</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;foo&#39;</span>\n<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Warunek pętli jest na końcu wyrażenia, dlatego też pętla <code>do...while</code> wykona się zawsze przynajmniej raz. Jeżeli do warunku wstawimy po prostu wartość <code>true</code>, pętla będzie się kręcić w nieskończoność.</p><p>Dobrym przykładem użycia pętli jest próba wylosowania 6 oczek na kostce:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> randomNumber<span class="token punctuation">;</span>\n<span class="token keyword">do</span> <span class="token punctuation">{</span>\n  randomNumber <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>randomNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>randomNumber <span class="token operator">!==</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Poza pętlą tworzymy zmienną <code>randomNumber</code>. Zmienna musi być stworzona poza pętlą, ponieważ nie będzie widoczna w instrukcji <code>while</code>. Warunek <code>while</code> mówi, losuj liczbę, dopóki jest różna od <code>6</code>. W pętli podejmujemy pierwszą próbę wylosowania liczby. Jeżeli trafia się <code>6</code> to pętla się kończy, jeżeli nie, to losuje dalej.</p><p>Na pewno, pętla ta będzie miała przynajmniej jedną iterację. I jeżeli od razu trafi się <code>6</code> to wygraliśmy, spróbujcie sami w przeglądarce. Wklejcie kod do konsoli i zobaczcie, ile iteracji potrzebowaliście, aby trafić na <code>6</code>.</p><h2 id="petla-while" tabindex="-1"><a class="header-anchor" href="#petla-while" aria-hidden="true">#</a> Pętla <code>while</code></h2><p>Pętla <code>while</code> jest trochę inna i warunek zakończenia pętli jest na początku instrukcji:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;boo&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Jeżeli warunek od razu jest fałszywy, nie zostanie wykonana żadna operacja. Oczywiście, jeżeli znowu wstawimy do instrukcji <code>while</code> stałą wartość <code>true</code> to otrzymamy nieskończoną pętlę.</p><p>Tutaj również przykładem może być losowanie liczby <code>6</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> randomNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>randomNum <span class="token operator">!==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>randomNum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  randomNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>randomNum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Ponieważ pętla <code>while</code> od razu sprawdza warunek, możemy podjąć próbę wylosowania liczby <code>6</code> przed pętlą, jeżeli to się nie uda, wtedy wpadamy do pętli i losowanie trwa tak długo, aż <code>randomNum</code> będzie liczbą <code>6</code>. W optymistycznym wariancie możemy nigdy nie wykonać iteracji pętli <code>while</code>. Czasami to się udaje.</p><p>Zarówno w pętli <code>do...while</code> jak i w pętli <code>while</code> możemy używać instrukcji <code>break</code> oraz <code>continue</code>.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li>pętla <code>do...while</code> i <code>while</code> są dzisiaj pętlami, które rzadko używa się w prawdziwym kodzie</li><li>pętla <code>do...while</code> zawsze wykona jedną iterację, zanim sprawdzi warunek. Zawsze więc wykona jakieś zadanie</li><li>pętla <code>while</code> najpierw sprawdza warunek, potem coś wykonuje</li><li>w tych pętlach też można użyć <code>break</code> oraz <code>continue</code></li></ul>',20),p={},t=(0,s(3744).Z)(p,[["render",function(a,n){const s=(0,e.up)("Comments");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e.Wm)(s)],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{for(const[s,e]of n)a[s]=e;return a}}}]);