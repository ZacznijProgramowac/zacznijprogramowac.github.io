"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[5813],{1733:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-062e876c",path:"/this/co-to-jest/",title:"Co to jest this w JavaScript",lang:"pl-PL",frontmatter:{permalink:"/this/co-to-jest"},excerpt:"",headers:[{level:2,title:"Co to jest kontekst wykonania",slug:"co-to-jest-kontekst-wykonania",children:[]},{level:2,title:"Jak łatwo określić this",slug:"jak-łatwo-okreslic-this",children:[]},{level:2,title:"This a tryb ścisły",slug:"this-a-tryb-scisły",children:[]},{level:2,title:"Główna idea zmiennego this",slug:"głowna-idea-zmiennego-this",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"this/01-co-to-jest.md",git:{}}},2405:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var e=s(6252);const o=(0,e.uE)('<h1 id="co-to-jest-this-w-javascript" tabindex="-1"><a class="header-anchor" href="#co-to-jest-this-w-javascript" aria-hidden="true">#</a> Co to jest <code>this</code> w JavaScript</h1><p>Jedną z najtrudniejszych rzeczy w JavaScript jest zrozumienie jak działa <code>this</code>. Mechanizm ten sprawia wiele problemów każdemu programiście. Nawet doskonale rozumiejąc działanie <code>this</code> możemy popełnić błąd. Spróbujmy krok po kroku przeanalizować czym jest <code>this</code>.</p><p>W kontekście <code>this</code> będziemy mówić o funkcjach i metodach. Funkcje rozumiem jako samodzielne byty w kodzie. Natomiast metody są to funkcje, które zdefiniowane są w obiekcie.</p><p>Moje przykłady pokazuję w przeglądarce, pracuję bez trybu ścisłego. Moim globalnym obiektem jest obiekt <code>window</code>. Przygotowane przykłady uruchamiam także bezpośrednio w przeglądarce, nie korzystam z żadnych bundlerów jak <em>Parcel</em> czy Webpack. Po prostu <em>VanillaJs</em>.</p><p>Mówię, to, ponieważ w przypadku używania bundlerów, frameworków lub środowiska node.js przykłady te mogą działać inaczej. Dodatkowo, jeżeli będziemy omawiać moduły ES6, będziemy musieli obecną wiedzę, trochę zweryfikować.</p><h2 id="co-to-jest-kontekst-wykonania" tabindex="-1"><a class="header-anchor" href="#co-to-jest-kontekst-wykonania" aria-hidden="true">#</a> Co to jest kontekst wykonania</h2><p>Bardzo często spotkacie się z definicją, że <code>this</code> jest kontekstem wykonania, dlatego na początku wyjaśnijmy sobie, czym jest kontekst wykonania. W JavaScript, kod możemy wykonać albo w jakieś funkcji czy metodzie, czyli w kontekście tej funkcji lub metody, albo w kontekście globalnym.</p><p>Jeżeli otworzymy sobie plik JavaScript i zaczniemy pisać kod, a potem wczytamy go do przeglądarki, będziemy mieli kontekst globalny:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object Window</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Ten cały kod, który widzicie, został wykonany w kontekście globalnym. Kontekst zawsze możemy wypisać przez wskaźnik <code>this</code> i widzimy, że wypisując go otrzymuję obiekt <code>window</code>. Obiekt <code>window</code> jest globalnym kontekstem dla wykonania kodu w JavaScript i jest kontekstem domyślnym.</p><p>Stwórzmy teraz funkcję:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">printThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object Window</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Stworzyłem funkcję i wywołuję ją bezpośrednio w pliku JavaScript. Kontekstem wykonania jest obiekt globalny <code>window</code>. Widzimy to przez wypisanie <code>this</code> do konsoli w środku funkcji.</p><p>Zróbmy jednak pewien eksperyment:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token operator">:</span> <span class="token string">&#39;My object&#39;</span><span class="token punctuation">,</span>\n  print<span class="token operator">:</span> printThis<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Stworzyłem dodatkowo obiekt, z polem <code>a</code> opisującym ten obiekt, oraz stworzyłem pole <code>print</code>, do którego przypisuję wcześniej stworzoną funkcję <code>printThis</code>. Funkcję tą przypisuję przez referencję, od tego momentu, gdy odwołam się przez <code>obj.print</code> to będę wywoływał tak naprawdę funkcję <code>printThis</code>, która zdeklarowana jest poza moim obiektem.</p><p>Wywołajmy więc metodę <code>print</code> w moim obiekcie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>obj<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {a: &quot;My object&quot;, print: ƒ}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Okazuje się, że funkcja <code>printThis</code> nie wypisała do konsoli obiektu globalnego <code>window</code>, ale ten mój stworzony obiekt. Funkcja <code>printThis</code> pracuje teraz w zupełnie innym kontekście, w kontekście mojego stworzonego obiektu, a nie obiektu <code>window</code>.</p><p>To jest właśnie to, co najbardziej zaskakuje początkujących programistów JavaScript. Kontekst <code>this</code> dla funkcji czy metod może się zmieniać. To, czym jest <code>this</code> dla funkcji zależy tylko i wyłącznie od sposobu jej wykonania, nie od miejsca jej deklaracji. Mało tego, kontekst funkcji możemy zmienić kilka razy w czasie wykonywania kodu.</p><p>Dochodzimy pomału do wniosku, że kontekstem wykonania dla funkcji czy metody jest jakiś obiekt. Domyślnie jest to obiekt globalny. W przeglądarce obiektem globalnym jest <code>window</code> gdy nie ma włączonego trybu ścisłego. Może to być też obiekt, który stoi przed kropką, gdy wywołujemy metodę. Miejsce deklaracji funkcji czy metody nie ma żadnego znaczenia. Znaczenie ma tylko to, na jakim kontekście wywołana została funkcja lub metoda.</p><h2 id="jak-łatwo-okreslic-this" tabindex="-1"><a class="header-anchor" href="#jak-łatwo-okreslic-this" aria-hidden="true">#</a> Jak łatwo określić <code>this</code></h2><p>Wiemy już, że <code>this</code> zależy od tego, jak została wywołana funkcja, a ściślej mówiąc, na jakim obiekcie została wywołana funkcja. Kontekst wykonywania funkcji może się więc zmienić i w ogóle nie zależy od tego, gdzie dana funkcja została stworzona:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> objectA <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token operator">:</span> <span class="token string">&#39;objectA&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Your this is:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Zobaczmy taki przykład, stworzyłem obiekt <code>objectA</code>, z polem <code>a</code> opisującym ten obiekt, oraz z metodą <code>bar</code>. Zadaniem tej metody jest wypisanie <code>this</code> do konsoli, a także wypisanie <code>this.a</code> do konsoli.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>objectA<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>Your this is: <span class="token punctuation">{</span>a: <span class="token string">&quot;objectA&quot;</span><span class="token punctuation">,</span> bar: ƒ<span class="token punctuation">}</span>\nobjectA\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Gdy wywołam metodę <code>objectA.bar()</code> otrzymuję informację, że <code>this</code> to ten obiekt, w którym jest metoda. Jest to dla nas naturalne, że jeżeli metoda <code>bar()</code> znajduje się w obiekcie <code>objectA</code> to <code>this</code> zawsze odnosi się do tego obiektu. Jednak nie należy przyzwyczajać się do takiego myślenia w JavaScript.</p><p>Tak jak wspomniałem, <code>this</code> zależy tylko i wyłącznie od sposobu wywołania metody, nie od miejsca deklaracji, zobaczcie taki przykład:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> objectB <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token operator">:</span> <span class="token string">&#39;objectB&#39;</span><span class="token punctuation">,</span>\n  foo<span class="token operator">:</span> objectA<span class="token punctuation">.</span>bar<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nobjectB<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Deklaruję obiekt <code>objectB</code>, który ma pole <code>a</code> z opisem obiektu oraz pole <code>foo</code>. Do pola <code>foo</code> przypisuję referencję do metody <code>bar()</code> pochodzącej z <code>objectA</code>. Wywołuję teraz metodę <code>objectB.foo()</code> co tak naprawdę wywołuje metodę <code>bar()</code> w obiekcie <code>objectA</code>:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>Your this is: <span class="token punctuation">{</span>a: <span class="token string">&quot;objectB&quot;</span><span class="token punctuation">,</span> foo: ƒ<span class="token punctuation">}</span>\nobjectB\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Jednak metoda, która fizycznie znajduje się w obiekcie <code>objectA</code> wypisuje dane z <code>objectB</code>. To udowadnia, że nie ma znaczenia, gdzie istnieje metoda czy funkcja, tylko jaki jest kontekst wywołania. W tym przypadku kontekstem jest to co stoi przed kropką, gdy wywołujemy metodę, a jest to <code>objectB</code>.</p><p>Zawsze zawracajmy uwagę na obiekt, który znajduje się przed kropką wywołania metody. To ten obiekt będzie <code>this</code> w tej metodzie czy funkcji.</p><p>Stwórzmy jeszcze jeden przykład:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> baz <span class="token operator">=</span> objectA<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>\n<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Stworzyłem teraz zmienną w kontekście globalnym i przypisuję do niej referencję do metody <code>bar</code> z obiektu <code>objectA</code> oraz wywołuję zmienną <code>baz()</code>:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>Your this is: Window<span class="token punctuation">{</span>…<span class="token punctuation">}</span>\nundefined\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>W tym przypadku kontekstem wykonania jest obiekt globalny, a przeglądarce jest to <code>window</code>. Widzicie, że znowu zmieniłem kontekst wykonania metody. Co prawda nie mamy tutaj obiektu znajdującego się przed kropką wywołania funkcji <code>baz()</code>. Jeżeli taki obiekt nie istnieje, kontekstem domyślnym jest obiekt globalny, a w przeglądarce jest to <code>window</code>. Wywołanie funkcji czy metody musi odbywać się zawsze w jakimś kontekście obiektu.</p><h2 id="this-a-tryb-scisły" tabindex="-1"><a class="header-anchor" href="#this-a-tryb-scisły" aria-hidden="true">#</a> This a tryb ścisły</h2><p>Swoje przykłady pokazuję bez trybu ścisłego, który został wprowadzony w ES5 i używamy go poprzez polecenie <code>use strict</code> na początku pliku lub funkcji. Robię tak, aby wam pokazać, jak standardowo działa JavaScript. Jednak w większości przypadków będziecie pracować z JavaScript, używając frameworków i modułów ES6, gdzie tryb ścisły jest trybem domyślnym. Również klasy w JavaScript pracują w trybie ścisłym. Zobaczmy teraz jaka jest różnica w odniesieniu do wskaźnika <code>this</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">printThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">printThis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Stworzyłem funkcję w trybie ścisłym i wypisuję wewnątrz funkcji <code>this</code>. Funkcję wywołuję bez żadnego obiektu zdefiniowanego przeze mnie, więc domyślnie z obiektem globalnym. W trybie ścisłym wewnątrz funkcji nie mam dostępu do obiektu globalnego <code>window</code> i otrzymuję wartość <code>undefined</code>.</p><p>Nie oznacza to, że obiekt ten przestał istnieć, wciąż możemy się do niego odwołać przez <code>window</code> lub <code>globalThis</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// object window</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis<span class="token punctuation">)</span> <span class="token comment">// object window</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// object window</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Domyślnie w funkcji i trybie ścisłym, <code>this</code> nie wskazuje już na obiekt globalny. Jest to dobra zmiana, bo nie należy posługiwać się obiektem globalnym, pisząc kod JavaScript.</p><p>Wy zazwyczaj będziecie tworzyć aplikacje z wykorzystaniem frameworków, gdzie tryb ścisły jest zazwyczaj domyślny. Dlatego w wielu miejscach zamiast obiektu globalnego pod <code>this</code> będziecie mieli wartość <code>undefined</code>.</p><h2 id="głowna-idea-zmiennego-this" tabindex="-1"><a class="header-anchor" href="#głowna-idea-zmiennego-this" aria-hidden="true">#</a> Główna idea zmiennego this</h2><p>Wiemy już, że nie ma znaczenia deklaracja funkcji tylko to, jak została wywołana, na jakim obiekcie następuje wywołanie. Mechanizm ten jest trochę dziwny i inny niż w językach jak Java czy C#. Twórcy jednak chcieli, aby funkcje w JavaScript mogły być użyczane na potrzeby różnych obiektów, raz zdeklarowana funkcja mogła być użyta kilka razy:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Reksio&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">print</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// JOHN 31</span>\n<span class="token function">print</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// REKSIO 5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Zobaczmy taki kod, gdzie mamy zadeklarowaną funkcję globalną <code>print</code>. Naszym zamysłem jest użycie tej funkcji dla każdego obiektu, który stworzę i będzie miał pole o nazwie <code>name</code> oraz <code>age</code>.</p><p>Stworzyłem dwa takie obiekty jak <code>person</code> i <code>dog</code>. Wywołuję funkcję <code>print</code> przez <code>print.call()</code> i w nawiasach okrągłych podaję mój obiekt. O metodzie <code>call</code> będziemy jeszcze rozmawiać później, to wywołanie jednak oznacza, że funkcja <code>print</code> ma być wywołana w kontekście przekazywanego obiektu. Czyli raz wywołuję funkcję z kontekstem <code>person</code>, a raz z kontekstem <code>dog</code>.</p><p>Mógłbym także w każdym obiekcie stworzyć pole <code>print</code> i przypisać funkcję globalną <code>print</code> jako referencję. Wtedy każdy obiekt miałby tą funkcję przypisaną jako pole w obiekcie.</p><p>Jednak dzisiaj, najlepszym i najnowocześniejszym rozwiązaniem byłoby stworzenie klasy z polem <code>name</code> , <code>age</code> oraz metodą <code>print</code>. Dzięki klasie tworzylibyśmy sobie obiekty z pełną funkcjonalnością.</p><p>Taki był właśnie zamysł twórców, możliwość wykorzystania jednej funkcji w różnych kontekstach, dlatego <code>this</code> w JavaScript zależy od sposobu wywołania funkcji. Otrzymaliśmy więc niezwykle elastyczny mechanizm, który jednocześnie źle wykorzystywany sprawia wiele problemów. Język JavaScript swoją elastycznością daje ogromne możliwości. Aby dobrze je wykorzystać, musimy dobrze zrozumieć jego działanie.</p><p>To jeszcze nie koniec przygody z <code>this</code> w kolejnych odcinkach kolejne przykłady i przypadki działania.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li><p><code>this</code> jest kontekstem, na którym pracuje dana funkcja czy metoda, jest to zwykły obiekt</p></li><li><p><code>this</code> zależy od tego, na jakim kontekście wywołana jest funkcja lub metoda, nie ma znaczenia miejsce deklaracji</p></li><li><p>funkcje wywoływane samodzielnie mają kontekst domyślny, czyli obiekt globalny, ale w trybie ścisłym jest to już wartość <code>undefined</code></p></li><li><p>metoda wywołana na obiekcie będzie miała kontekst tego obiektu, więc <code>this</code> będzie tym, co jest przed kropką</p></li><li><p>zmienny kontekst <code>this</code> miał zapewnić pełną elastyczność kodu i możliwość wywoływania funkcji w różnych kontekstach</p></li></ul>',58),t={},c=(0,s(3744).Z)(t,[["render",function(n,a){const s=(0,e.up)("Comments");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e.Wm)(s)],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);