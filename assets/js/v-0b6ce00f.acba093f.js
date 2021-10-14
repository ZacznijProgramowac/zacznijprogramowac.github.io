"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[9467],{4771:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-0b6ce00f",path:"/zakresy-domkniecia-moduly/obiekt-window/",title:"Zakres globalny i obiekt globalny",lang:"pl-PL",frontmatter:{permalink:"/zakresy-domkniecia-moduly/obiekt-window"},excerpt:"",headers:[{level:2,title:"Globalne zmienne",slug:"globalne-zmienne",children:[]},{level:2,title:"Globalne funkcje",slug:"globalne-funkcje",children:[]},{level:2,title:"Niezadeklarowana zmienna",slug:"niezadeklarowana-zmienna",children:[]},{level:2,title:"Obiekt globalny i inne środowiska",slug:"obiekt-globalny-i-inne-srodowiska",children:[]},{level:2,title:"Używać czy nie",slug:"uzywac-czy-nie",children:[]},{level:2,title:"Co warto zapamiętać:",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"zakresy-domkniecia-moduly/01-obiekt-window.md",git:{}}},1005:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});var e=s(6252);const o=(0,e.uE)('<h1 id="zakres-globalny-i-obiekt-globalny" tabindex="-1"><a class="header-anchor" href="#zakres-globalny-i-obiekt-globalny" aria-hidden="true">#</a> Zakres globalny i obiekt globalny</h1><p>Gdy uruchamiamy kod JavaScript, dla takiego kodu zawsze powstaje zakres globalny, a także obiekt globalny. Obiekt ten w przypadku przeglądarki nazywa się <code>window</code>. Zarówno w zakresie globalnym, jak i w obiekcie globalnym mogą powstawać zmienne, które mają zasięg globalny. Zasięg globalny oznacza, że zmienne dostępne są w całym kodzie.</p><h1 id="zakres-globalny" tabindex="-1"><a class="header-anchor" href="#zakres-globalny" aria-hidden="true">#</a> Zakres globalny</h1><p>Czym jest w ogóle zakres globalny? Jeżeli zadeklarujemy zmienną albo klasę tak po prostu w pliku JavaScript to tworzymy ten kod w zakresie globalnym. Czyli kod umieszczony poza wszelkimi klamrami i innymi blokami kodu to zakres globalny.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> globalLet <span class="token operator">=</span> <span class="token string">&#39;My global let&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> globalConst <span class="token operator">=</span> <span class="token string">&#39;My global const&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyGlobalClass</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Do zakresu globalnego wpadają deklaracja z <code>let</code> oraz <code>const</code>, a także wszystkie klasy. Zakres globalny jest najwyższym zakresem w JavaScript i wszystkie inne zakresy dziedziczą z tego zakresu. Tak więc inne zakresy mają dostęp do wszystkiego, co jest w zakresie globalnym. Również do tych zmiennych mamy dostęp w innych plikach JavaScript.</p><p>To działanie opisuję przy zwykłym użyciu pliku JavaScript i wczytaniu go przez index.html. Działanie to jest inne, gdy zmienne te znajdą się w module. Również działanie to może być inne, gdy użyjemy narzędzia do budowania kodu jak webpack czy parcel.</p><h1 id="globalny-obiekt-window" tabindex="-1"><a class="header-anchor" href="#globalny-obiekt-window" aria-hidden="true">#</a> Globalny obiekt window</h1><p>Czym jest zatem obiekt globalny? Gdy uruchamiamy kolejne zakładki w przeglądarce, zawsze dla każdej zakładki powstaje oddzielny globalny obiekt <code>window</code>. Wystarczy uruchomić pustą zakładkę, otworzyć konsolę wpisać <code>window</code>, aby się przekonać, że taki obiekt już istnieje dla tej zakładki. Nawet jeżeli nie załadujemy do niej żadnego skryptu JavaScript.</p><p>Sam obiekt <code>window</code> zawiera w sobie mnóstwo właściwości, metod, które na co dzień używamy w naszym kodzie JavaScript:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document\nlocation\nhistory\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Te właściwości i metody pochodzą z obiektu <code>window</code>. Tych właściwości, metod, handlerów i eventów jest bardzo wiele. Zachęcam do przejrzenia dokumentacji na stronie MDN.</p><p>Do tych właściwości możemy odwoływać się zarówno przez <code>window</code> jak i bezpośrednio.:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>document<span class="token punctuation">;</span>\ndocument<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Używanie <code>window</code> jest opcjonalne i jest to tylko prefiks. Jeżeli nie używamy prefiksu <code>window</code> JavaScript i tak zaczyna poszukiwania w tym globalnym obiekcie.</p><p>Obiekt globalny jest dostępny z kontekstu globalnego. Jest więc dostępny z każdej części kodu. W przeglądarce obiekt ten nazywa się <code>window</code>, ale na innych środowiskach JavaScript może mieć inną nazwę, ale o tym za chwilę.</p><h2 id="globalne-zmienne" tabindex="-1"><a class="header-anchor" href="#globalne-zmienne" aria-hidden="true">#</a> Globalne zmienne</h2><p>Już wiemy, że tworząc zmienne za pomocą <code>let</code> i <code>const</code> umieszczamy je w kontekście globalnym:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> constVariable <span class="token operator">=</span> <span class="token string">&#39;My const&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> letVariable <span class="token operator">=</span> <span class="token string">&#39;My let&#39;</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>constVariable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;My const&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>letVariable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;My let&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Są więc one dostępne w całym kodzie.</p><p>Inaczej trochę się dzieje gdy tworzymy zmienną za pomocą <code>var</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> varVariable <span class="token operator">=</span> <span class="token string">&#39;My var&#39;</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>varVariable<span class="token punctuation">)</span> <span class="token comment">// &#39;My var&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>varVariable<span class="token punctuation">)</span> <span class="token comment">// &#39;My var&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Zmienna <code>var</code> staje się zmienną obiektu globalnego, czyli w naszym przypadku <code>window</code>. Możemy się do niej odwołać przez <code>window</code> jak i bezpośrednio nie używając tego prefiksu.</p><p>Używając zmiennych <code>var</code> w naszym kodzie, modyfikujemy więc globalny obiekt. Dopisujemy do niego zmienne, a nawet możemy nadpisać zmienne, które w nim istnieją:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> alert <span class="token operator">=</span> <span class="token string">&#39;Achtung!&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Stworzyłem zmienna <code>alert</code> . Pole <code>alert</code> natywnie istnieje w obiekcie <code>window</code>, więc tak naprawdę nadpisałem funkcjonalność <code>window.alert</code> i od tej pory nie mogę w oknie przeglądarki wywołać okna dialogowego.</p><p>Jest to kolejny problem deklaracji zmiennych za pomocą <code>var</code>. Możemy przez przypadek nadpisać właściwość obiektu <code>window</code>. Jest to szczególnie niebezpieczne, gdy korzystamy z frameworków czy innych bibliotek, które czasami korzystają z globalnego obiektu. W ten sposób możemy wejść w łatwy konflikt nazw. Dlatego też należy unikać deklaracji zmiennych globalnych za pomocą <code>var</code>.</p><h2 id="globalne-funkcje" tabindex="-1"><a class="header-anchor" href="#globalne-funkcje" aria-hidden="true">#</a> Globalne funkcje</h2><p>Zobaczmy, jak zachowują się funkcje, które definiowane bezpośrednio w pliku stają się globalne:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&#39;Hello&#39;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Hello&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Jeżeli zadeklarujemy funkcję po prostu w pliku również mamy dostęp do niej z obiektu <code>window</code>. Działa to podobnie jak przy deklaracji <code>var</code>. Możemy funkcję taką wywołać zarówno z prefiksem <code>window</code> jak i bez.</p><p>Możemy jednak prostym sposobem uniknąć przypisania funkcji do obiektu <code>window</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fun1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&#39;fun1&#39;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> <span class="token function-variable function">fun2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&#39;fun2&#39;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">fun3</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">&#39;fun3&#39;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;fun1&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Gdy przypiszemy funkcję do zmiennej zadeklarowanej za pomocą <code>let</code> lub <code>const</code> to tak samo jak przy zwykłych deklaracjach zmiennych, funkcje te nie staną się częścią obiektu <code>window</code>, ale dalej będą w zakresie globalnym. Oczywiście, jeśli to będzie zmienna <code>var</code> to działanie jest takie samo jak przy zmiennych, zmienna <code>var</code> staje się częścią obiektu <code>window</code>.</p><p>Jeżeli nie korzystamy z modułów ES6 lub na przykład ze wzorca modułu to jest to dobry sposób na to, aby uniknąć dopisywania funkcji do obiektu globalnego <code>window</code>.</p><h2 id="niezadeklarowana-zmienna" tabindex="-1"><a class="header-anchor" href="#niezadeklarowana-zmienna" aria-hidden="true">#</a> Niezadeklarowana zmienna</h2><p>Trudno sobie wyobrazić, ale w języku JavaScript, może powstać zmienna, która nie jest zadeklarowana.</p><p>Zobaczmy taki kod:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  foo <span class="token operator">=</span> <span class="token string">&#39;boo&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;boo&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;boo&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Tworzę zmienną <code>foo</code> w funkcji. Nie używam ani <code>var</code>, ani <code>let</code>, ani <code>const</code> do jej deklaracji. Wywołuję funkcję aby mogła się wykonać i okazuje się, że mogę dostać się do tej zmiennej przez obiekt <code>window</code>. Zmienna ta zachowuje się podobnie jak zmienna <code>var</code> powstaje w globalnym obiekcie i jest dostępna globalnie.</p><p>Gdy kompilator trafi na taką niezadeklarowaną zmienną i nie może odnaleźć deklaracji w żadnym zakresie, to sam deklaruje taką zmienną. Mogłoby się wydawać, że jeżeli używamy niezadeklarowanej zmiennej w funkcji, to jest ona dostępna tylko w funkcji, ale tak nie jest. Stanie się ona częścią globalnego obiektu.</p><p>Na szczęście dzisiaj w swoim kodzie nie powinniście spotkać takich niezadeklarowanych zmiennych. Głównie dlatego, że wprowadzony w ES5 tryb ścisły dla JavaScript wyklucza taką możliwość. O trybie ścisłym będziemy jednak rozmawiać później w tym dziale.</p><h2 id="obiekt-globalny-i-inne-srodowiska" tabindex="-1"><a class="header-anchor" href="#obiekt-globalny-i-inne-srodowiska" aria-hidden="true">#</a> Obiekt globalny i inne środowiska</h2><p>Globalny obiekt <code>window</code> jest dostępny tylko w środowisku przeglądarki. Na przykład środowisko <code>Node.js</code> ma już inny globalny obiekt o nazwie <code>global</code>. Do obiektów globalnych w Web Workerach odwołujemy się przez <code>self</code>.</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>window\nglobal\nself\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Gdybyśmy chcieli pisać uniwersalne skrypty, które działają i w <code>Node.js</code> i w przeglądarce, a także mogą być uruchamiane przez Web Workery, możemy mieć problem z dostępem do globalnego obiektu, bo w zależności od środowiska, obiekt ten nazywa się inaczej.</p><p>Dawniej powstawały skrypty, które pozwalały na dostęp do globalnego obiektu w zależności od środowiska:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getGlobalObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> self <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> self<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> window<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> global <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> global<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;cannot find the global object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> globalObj <span class="token operator">=</span> <span class="token function">getGlobalObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalObj<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Tutaj mamy funkcję, która sprawdza jaki globalny obiekt jest dostępy i w zależności od tego, zwraca ten obiekt. Wtedy dopiero możemy się tym obiektem posługiwać. Od razu powiem, że ta funkcja nie jest doskonała i w wielu przypadkach może nie zadziałać. Jest to tylko obraz tego, jak próbowano sobie radzić, gdy skrypty korzystały z globalnego obiektu i były uruchamiane na różnych środowiskach.</p><p>Dzisiaj dzięki ECMAScript 2020 do globalnego obiektu możemy dostać się jeszcze prościej:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Mamy przygotowaną specjalną właściwość o nazwie <code>gloablThis</code>, która zwraca globalny obiekt z danego środowiska uruchomieniowego. Tym prostym sposobem dostajemy globalny obiekt bez względu na środowisko.</p><h2 id="uzywac-czy-nie" tabindex="-1"><a class="header-anchor" href="#uzywac-czy-nie" aria-hidden="true">#</a> Używać czy nie</h2><p>Dowiedzieliśmy się sporo o zakresie globalnym i obiekcie globalnym <code>window</code>. Prawda jest taka, że w nowoczesnych aplikacjach, które przede wszystkim używają trybu ścisłego, czyli <code>stric mode</code> oraz używają modułów ES6, nie będziecie musieli przejmować problemami globalnego obiektu i globalnego zakresu.</p><p>Również każdy nowoczesny framework działa na podstawie modułu i uruchamia kod w trybie ścisłym. Jeżeli będziecie pisać kod w czystym JavaScript, należy unikać globalnego obiektu i nie przetrzymywać tam swoich zmiennych. Po prostu nie używamy deklaracji <code>var</code>.</p><p>Globalny obiekt może być używany przez inne biblioteki lub do pisania wyrafinowanego kodu. Przede wszystkim często jest używany przez skrypty <code>polyfills</code>. Używając obiektu <code>window</code> możemy nadpisać zmienne nie tylko obiektu <code>window</code>, ale innych bibliotek czy skryptów <code>polyfills</code>, które z tego obiektu korzystają bądź muszą skorzystać.</p><p>Pomimo tego, że problem zakresu globalnego i obiektu globalnego może Was nie dotknąć w nowoczesnych aplikacjach JavaScript, jest to fundament wiedzy o tym jak działa ten język i warto to wszystko wiedzieć.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać:</h2><ul><li>JavaScript uruchamia swój kod w zakresie globalnym</li><li>w zakresie globalnym istnieje także obiekt globalny w przeglądarce jest to <code>window</code></li><li>w zakresie globalnym powstają zmienne zadeklarowane za pomocą <code>let</code> i <code>const</code>, a także klasy</li><li>w obiekcie globalnym <code>window</code> powstają zmienne zadeklarowane za pomocą <code>var</code> oraz funkcje</li><li>najlepiej nie używać <code>var</code> i nie deklarować zmiennych w obiekcie <code>window</code></li><li>dzisiaj nowoczesne aplikacje korzystają z modułów ES6, znika więc problem trudno kontrolowanych zmiennych globalnych</li></ul>',59),i={},p=(0,s(3744).Z)(i,[["render",function(n,a){const s=(0,e.up)("Comments");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e.Wm)(s)],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);