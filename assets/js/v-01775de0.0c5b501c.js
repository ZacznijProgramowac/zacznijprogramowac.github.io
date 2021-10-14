"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[5851],{7055:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-01775de0",path:"/funkcje/function-return/",title:"Higher order function",lang:"pl-PL",frontmatter:{permalink:"/funkcje/function-return/"},excerpt:"",headers:[{level:2,title:"Przykład higher-order function",slug:"przykład-higher-order-function",children:[]},{level:2,title:"Kompozycja funkcji",slug:"kompozycja-funkcji",children:[]},{level:2,title:"Programowanie funkcyjne",slug:"programowanie-funkcyjne",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"funkcje/06-funkcje-wyzszego-rzedu.md",git:{}}},3831:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});var e=s(6252);const o=(0,e.uE)('<h1 id="higher-order-function" tabindex="-1"><a class="header-anchor" href="#higher-order-function" aria-hidden="true">#</a> Higher order function</h1><p>Kolejnym zagadnieniem związanym z funkcjami w JavaScript jest higher-order function. Z tym zagadnieniem spotkacie się najczęściej przy programowaniu funkcyjnym albo też na rozmowie o pracę. Tak naprawdę higher-order function dotyczą codziennego programowania i jeżeli programujesz już w JavaScript na pewno używasz funkcji wyższego rzędu.</p><h2 id="przykład-higher-order-function" tabindex="-1"><a class="header-anchor" href="#przykład-higher-order-function" aria-hidden="true">#</a> Przykład higher-order function</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>double<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 2, 4, 6 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Higher-order function to funkcja, która przyjmuje jakąś funkcję lub ją zwraca. W przykładzie widzimy funkcję <code>map</code>, która przyjmuje inną funkcję jako parametr, czyli funkcję callback. W tym przypadku <code>map</code> jest funkcją wyższego rzędu, ponieważ przyjmuje inną funkcję.</p><p>Gotowych funkcji wyższego rzędu znajdziemy w JavaScript całą masę. Są one ważne, ponieważ pozwalają na pisanie prostszego i czytelniejszego kodu. Wykorzystanie higher-order function to także mniej bugów i łatwiejsze testowanie.</p><p>Zobaczmy teraz przykład, gdybym nie wykorzystał funkcji <code>map</code>, a chciał wszystko zaimplementować ręcznie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> element <span class="token operator">=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  result2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Ten kod robi dokładnie to samo co funkcja <code>map</code> i stworzony do niej callback. Tutaj jednak musieliśmy stworzyć o wiele więcej kodu, który jest mniej czytelny, podatny na błędy i mało re-używalny. Dlatego, jeżeli tylko jest możliwość, używajcie gotowych rozwiązań.</p><h2 id="kompozycja-funkcji" tabindex="-1"><a class="header-anchor" href="#kompozycja-funkcji" aria-hidden="true">#</a> Kompozycja funkcji</h2><p>Samo pojęcie programowania funkcyjnego i kompozycji funkcji to temat na zupełnie inny kurs. Pokażę Wam jednak przykłady jak można użyć funkcji callback i higher-order function to stworzenia czytelnego i re-używalnego kodu.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">even</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> accumulator <span class="token operator">+</span> currentValue<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> result3 <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>even<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>multiply<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 40</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Mamy zdefiniowane funkcje callback, które robią konkretne rzeczy. Pierwsza funkcja mnoży wszystkie wartości przez 2. Funkcja <code>even</code> zwraca tylko liczby parzyste, a funkcja <code>sum</code> dodaje do siebie kolejne wartości. Te funkcje <code>callback</code> będziemy mogli używać w aplikacji wielokrotnie przesyłając je do funkcji wyższego rzędu jak w tym przypadku.</p><p>Wywołuję funkcje <code>filter</code>, <code>map</code> oraz <code>reduce</code> jako idealny przykład higher-order functions. Przekazuję tam poszczególne funkcje do wykonania zadania. W ten sposób zrobiłem prostą kompozycję funkcji, która mi pozwoliła uzyskać konkretny wynik.</p><p>Widzimy, że taki kod jest bardziej czytelny, bardzo prosty w testowaniu i możemy go użyć wiele razy w różnych częściach aplikacji. Jeżeli nie wiecie jak dokładnie działają funkcje <code>filter</code>, <code>map</code> i <code>reduce</code>, wrócimy do nich przy omawianiu tablic.</p><p>Tak wygląda koncepcja higher-order function. Są to funkcje, do których możemy przekazać funkcje lub funkcje, które zwracają inne funkcje.</p><h2 id="programowanie-funkcyjne" tabindex="-1"><a class="header-anchor" href="#programowanie-funkcyjne" aria-hidden="true">#</a> Programowanie funkcyjne</h2><p>Programowanie funkcyjne w JavaScript jest bardzo popularne, nie jest to jednak temat na ten kurs. Jeżeli jednak chcecie zgłębić temat kompozycji funkcji, a także dodatkowych funkcji wyższego rzędu, warto sprawdzić dwie dodatkowe biblioteki.</p><p>Pierwsza z nich to Underscore.js:</p><p>https://underscorejs.org/</p><p>Ta biblioteka świetnie uzupełnia JavaScript o niezbędne dodatkowe funkcje przydatne przy programowaniu funkcyjnym</p><p>Kolejna biblioteka to Lodash:</p><p>https://lodash.com/</p><p>W tej bibliotece znajdziemy mnóstwo pomocnych funkcji wyższego rzędu, które często piszemy w JavaScript, a są one po prostu dostępne w tej bibliotece. Jeżeli brakuje Wam funkcji do operowania na listach, strukturach danych, typach prostych to w tej bibliotece znajdziecie wszystkie narzędzia.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li>higher-order function to funkcja, która przyjmuje funkcje lub zwraca funkcje</li><li>w JavaScript mamy kilka gotowych funkcji wyższego rzędu, są to głównie funkcje dotyczące manipulacji na tablicach i podobnych strukturach</li><li>higher-order function ściśle związane jest z programowaniem funkcyjnym</li><li>programowanie funkcyjne to zupełnie oddzielny koncept języka JavaScript, któremu trzeba poświęcić dodatkowy czas</li></ul>',26),p={},t=(0,s(3744).Z)(p,[["render",function(n,a){const s=(0,e.up)("Comments");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e.Wm)(s)],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);