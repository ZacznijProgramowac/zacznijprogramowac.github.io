"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[8500],{8058:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-0e3c3338",path:"/zmienne-i-typy/null-undefined/",title:"Null i Undefined",lang:"pl-PL",frontmatter:{permalink:"/zmienne-i-typy/null-undefined"},excerpt:"",headers:[{level:2,title:"Wartość null",slug:"wartosc-null",children:[]},{level:2,title:"Wartość undefined",slug:"wartosc-undefined",children:[]},{level:2,title:"Undefined czy null",slug:"undefined-czy-null",children:[]},{level:2,title:"Porównanie null i undefined",slug:"porownanie-null-i-undefined",children:[]},{level:2,title:"Sprawdzanie, czy wartość nie jest null lub undefined",slug:"sprawdzanie-czy-wartosc-nie-jest-null-lub-undefined",children:[{level:3,title:"Dokładna metoda",slug:"dokładna-metoda",children:[]},{level:3,title:"Z konwersją na typ false",slug:"z-konwersja-na-typ-false",children:[]},{level:3,title:"Metoda dwóch znaków równości",slug:"metoda-dwoch-znakow-rownosci",children:[]}]},{level:2,title:"Co warto zapamiętać:",slug:"co-warto-zapamietac",children:[]},{level:2,title:"Odnośniki:",slug:"odnosniki",children:[]}],filePathRelative:"zmienne-i-typy/03-null-undefined.md",git:{}}},2324:(n,a,e)=>{e.r(a),e.d(a,{default:()=>t});var s=e(6252);const o=(0,s.uE)('<h1 id="null-i-undefined" tabindex="-1"><a class="header-anchor" href="#null-i-undefined" aria-hidden="true">#</a> Null i Undefined</h1><p>W tym dziale omówimy działanie typów <code>null</code> oraz <code>undefined</code>. Kiedy co używać i jaka jest między nimi różnica.</p><h2 id="wartosc-null" tabindex="-1"><a class="header-anchor" href="#wartosc-null" aria-hidden="true">#</a> Wartość null</h2><p>W JavaScript w odróżnieniu od innych języków mamy dwa typy, które mogą oznaczać brak wartości lub jej nieprzypisanie. W wielu językach zazwyczaj spotykamy się z jednym typem określającym brak wartości.</p><p>Typ <code>null</code> i <code>undefined</code> nie są typami reprezentującymi to samo i teraz to omówmy.</p><p>Weźmy taki przykład:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> empty <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> empty<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Gdy przypiszemy wartość <code>null</code> do zmiennej oznacza to, że zerujemy tą zmienną. Nie chcemy, aby posiadała ona jakąkolwiek wartość lub referencję do czegokolwiek. Zmienna <code>empty</code> reprezentuje zamierzony brak wartości.</p><p>Pomimo tego, że operator <code>typeof</code> zwraca nam typ <code>object</code>, zmienna z wartością <code>null</code> nic nie reprezentuje. Jak już wspominałem wcześniej, to, że <code>null</code> zwraca typ <code>object</code> jest błędem z czasów powstawania języka JavaScript.</p><p>Używamy wartości <code>null</code> do tego, aby jawnie wyzerować zmienną. Możemy także zwracać <code>null</code> bezpośrednio z funkcji jako pusta wartość.</p><p>Jeżeli chcemy sprawdzić, czy wartość ma dokładnie typ <code>null</code> możemy posłużyć się zapisem</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>empty <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this variable is null&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Co prawda nie omawialiśmy jeszcze konstrukcji warunkowych, ale ten prosty <code>if</code> nie powinien nikogo dziwić, bo instrukcja <code>if</code> występuje w prawie każdym języku świata.</p><p>W nawiasach okrągłych wstawiamy warunek, trzy znaki równości sprawdzają, czy <code>empty</code> jest równe <code>null</code>. O porównywaniu wartości, także będziemy jeszcze mówić, ale ogólna zasada mówi, że wartości w JavaScript porównujemy za pomocą trzech znaków równości.</p><p>W tym wypadku warunek jest <code>true</code> i zobaczymy napis w przeglądarce:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>this variable is null\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="wartosc-undefined" tabindex="-1"><a class="header-anchor" href="#wartosc-undefined" aria-hidden="true">#</a> Wartość undefined</h2><p>Gdy <code>null</code> pojawia się tylko wtedy, gdy programista przypisze taką wartość do zmiennej, <code>undefined</code> może pojawić się, gdy nie inicjalizujemy zmiennej, spróbujemy odczytać wartość z funkcji, która nic nie zwraca, odwołamy się do właściwości obiektu, który nie istnieje.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> nothing<span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nothing<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Te trzy przypadki pokazują, kiedy otrzymamy wartość <code>undefined</code>. Typ <code>undefined</code> jest wartością niezdefiniowaną, standardowo zwracaną w powyższych przypadkach przez JavaScript. Widzimy, że wartość <code>undefined</code> nie została przez nas przypisana. Jest to najczęściej wartość przypisana przez JavaScript.</p><p>Jeżeli chcemy sprawdzić, czy wartość ma typ <code>undefined</code> możemy posłużyć się podobnym zapisem jak w przypadku sprawdzania wartość <code>null</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>nothing <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this variable is undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Wtedy jesteśmy pewni, że zmienna ma wartość <code>undefined</code>.</p><h2 id="undefined-czy-null" tabindex="-1"><a class="header-anchor" href="#undefined-czy-null" aria-hidden="true">#</a> Undefined czy null</h2><p>Pracując z JavaScript warto wprowadzić sobie zasadę nieprzypisywania jawnie wartości <code>undefined</code> do zmiennej. Jeżeli chcemy wyzerować zmienną lub też zwracać pustą wartość z funkcji, zwracajmy <code>null</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> surname <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// better option</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Łatwiej będzie nam pracować z kodem i znaleźć problem, gdy nie będziemy posługiwać się wartością <code>undefined</code>. Gdy trafimy na błąd związany z <code>undefined</code> w konsoli przeglądarki będziemy wiedzieć, że o czymś zapomnieliśmy, odwołujemy się do czegoś, co nie istnieje. Zawęzimy opcję szukania problemu, gdy nie będziemy się dodatkowo posługiwać <code>undefined</code>, a zostawimy go dla JavaScript.</p><p>Moja zasad jest taka, że nie używam <code>undefined</code>, a zamiast tego posługuję się <code>null</code>.</p><h2 id="porownanie-null-i-undefined" tabindex="-1"><a class="header-anchor" href="#porownanie-null-i-undefined" aria-hidden="true">#</a> Porównanie <code>null</code> i <code>undefined</code></h2><p>Wartość <code>null</code> i <code>undefined</code> reprezentują puste, nieokreślone wartości. Jeżeli porównamy oba typy przez potrójny znak równości i wypiszemy do konsoli, zobaczymy wartość <code>false</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>W tym przypadku JavaScript porównuje nie tylko wartości, ale także typy. Przez to te wartości nie są sobie równe.</p><p>Natomiast jeśli porównamy przez dwa znaki równości:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>otrzymamy wartość <code>true</code>. Jest to określone w specyfikacji ECMAScript 5 przez ten zapis:</p><blockquote><p>Jeżeli x jest null i y jest undefined, return true</p><p>Jeżeli x jest undefined i y jest null, return true</p></blockquote><p>Nie oznacza to jednak, że to porównanie pokazuje, że wartość <code>null</code> i <code>undefined</code> są sobie równe. Przy operatorze <code>==</code> podwójnego porównania zachodzi niejawna konwersja typów jednego do drugiego. Dlatego ostatecznie otrzymujemy wartość <code>true</code> po niejawnej konwersji. Teraz może wydawać się to zawiłe, ale operatory porównania szczegółowo zostaną omówione w osobnym dziale i wszystko okaże się jasne.</p><h2 id="sprawdzanie-czy-wartosc-nie-jest-null-lub-undefined" tabindex="-1"><a class="header-anchor" href="#sprawdzanie-czy-wartosc-nie-jest-null-lub-undefined" aria-hidden="true">#</a> Sprawdzanie, czy wartość nie jest null lub undefined</h2><p>Na koniec jedna z ważniejszych rzeczy. Jak sobie poradzić z prostym i szybkim sprawdzaniem, czy wartość nie jest <code>null</code> i nie jest <code>undefined</code>. Będziemy to w JavaScript robić bardzo często.</p><p>Przychodzące do nas wartości z HTTP, wartości wpisywane przez użytkownika, otrzymane wartości z innych funkcji. Często w tych przypadkach możemy trafić na <code>null</code> lub <code>undefined</code>. Przed dalszą pracą z danymi, często będziemy musieli sprawdzić, czy nie otrzymaliśmy właśnie wartości <code>null</code> lub <code>undefined</code>. Są na to różne metody.</p><h3 id="dokładna-metoda" tabindex="-1"><a class="header-anchor" href="#dokładna-metoda" aria-hidden="true">#</a> Dokładna metoda</h3><p>Jednym ze sposobów na sprawdzenie jest taki zapis:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> resposne <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// or undefinded</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>resposne <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> resposne <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Value is not null/undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Mamy tutaj zmienną <code>response</code> ma przypisaną wartość <code>null</code>. Możesz dla eksperymentów także zmienić jej wartość na <code>undefined</code> aby sprawdzić poprawność kodu.</p><p>Kod w bloku <code>if</code> wykona się tylko wtedy gdy wartość będzie różna od <code>null</code> i różna od <code>undefined</code>. Ważne jest to, aby użyć potrójnego operatora <code>!==</code>.</p><h3 id="z-konwersja-na-typ-false" tabindex="-1"><a class="header-anchor" href="#z-konwersja-na-typ-false" aria-hidden="true">#</a> Z konwersją na typ <code>false</code></h3><p>Można to zrobić jeszcze w bardzo krótkiej formie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>resposne<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Value &#39;resposne&#39; is not falsy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Jednak ten zapis nie sprawdza, czy wartość jest <code>null</code> lub <code>undefined</code>, zapis ten sprawdza, czy wartość jest <code>false</code> lub <code>true</code>. Wartość <code>null</code> i <code>undefined</code> jest wartością fałszywą, zachodzi tutaj niejawna konwersja do typu <code>boolean</code>, ponieważ próbujemy sprawdzić wartość za pomocą instrukcji <code>if</code>, a ona pracuje tylko na wartościach z typem <code>boolean</code>.</p><p>Dlatego zmienna <code>response</code> zostanie niejawnie przekonwertowana na typ <code>boolean</code>. A ponieważ jest to wartość <code>null</code> lub <code>undefined</code> to stanie się wartością <code>false</code>.</p><p>To jakie wartości stają się fałszywe, gdy są konwertowane na typ <code>boolean</code> zawarte jest w specyfikacji ECMAScript:</p><p>https://developer.mozilla.org/en-US/docs/Glossary/Falsy</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Those values converted to boolean are false</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0n</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Wszystkie te wartości, konwertowane do typu <code>boolean</code> dają wartość <code>false</code>, jest tutaj też wartość <code>null</code> i <code>undefined</code>. Do tej rozpiski o wartościach fałszywych jeszcze powrócimy wielokrotnie w kolejnych rozdziałach i omówimy ją dokładniej. Warto jednak już teraz starać się zapamiętać, co jest konwertowane do wartości fałszywych w JavaScript.</p><p>W wielu przypadkach ten zapis, który stworzyliśmy, sprawdzi się, fałszywa wartość nie wykona tego w bloku <code>if</code>. Jednak musimy pamiętać, że sprawdzając tym sposobem, sprawdzamy także inne wartości, które konwertowane są na wartość <code>false</code>.</p><p>Jeżeli więc oczekujemy pustego stringa lub wartość zero, to musimy pamiętać, że także zablokujemy taką wartość w tej konstrukcji <code>if</code> i kod się nie wykona. Jednak bardzo często też, nie chcemy pracować na takich wartościach jak pusty string czy zero.</p><p>Dodatkowo też, robiąc takie sprawdzanie, zazwyczaj oczekujemy konkretnego typu jak tablica, obiekt czy funkcja. Jeżeli nie wiemy, jaki przyjdzie typ, instrukcja ta wymaga dodatkowo sprawdzenie konkretnego typu, jaki oczekujemy.</p><h3 id="metoda-dwoch-znakow-rownosci" tabindex="-1"><a class="header-anchor" href="#metoda-dwoch-znakow-rownosci" aria-hidden="true">#</a> Metoda dwóch znaków równości</h3><p>Ostatnią metodą jest sprawdzenie przez użycie dwóch znaków równości. Tym razem z zapisem <code>if</code> będziemy się upewniać czy zmienna na pewno jest <code>null</code> lub <code>undefined</code> i wtedy chcemy wyświetlić napis.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>resposne <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Value is null or undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Jest to bardzo krótki i zwięzły zapis, który już znamy. Sprawdzający dokładnie, czy mamy do czynienia z <code>null</code> lub <code>undefined</code> pod zmienną <code>response</code>. Jego problemem jest użycie tylko podwójnych znaków równości, a dzisiaj dobre zasady i lintery forsują używanie potrójnych znaków równości do porównania dwóch wartości i ich typów, i mają oczywiście rację. Obecnie w JavaScript używamy potrójnych znaków porównania.</p><p>Ogólnie należy unikać porównania za pomocą podwójnych znaków, ale o tym będziemy jeszcze rozmawiać. Jednak w przypadku <code>null</code> i <code>undefinde</code> warto wiedzieć o tym zapisie, bo pomimo dobrej praktyki z potrójnymi znakami równości, możecie ten zapis znaleźć w nowym kodzie.</p><p>Jeżeli koniecznie chcecie używać takiego porównania, można wprowadzić do lintera tę pojedynczą regułę i namówić team do stosowania tego zapisu.</p><p>Sam od zawsze używam, krótkiego sprawdzania, czy wartość jest fałszywa, czy nie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>resposne<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;It works!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>i ten zapis w większości przypadków Wam wystarczy.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać:</h2><ul><li><p>wartość <code>null</code> używamy, gdy chcemy sami przypisać pustą wartość</p></li><li><p>wartość <code>undefined</code> jest używana dla niezainicjalizowanych, niezdefiniowanych i nieistniejących wartości przez JavaScript</p></li><li><p>staramy się nie używać <code>undefined</code> w kodzie</p></li><li><p>sprawdzenie, czy coś nie jest <code>null</code> lub <code>undefined</code> może być <em>tricky</em></p></li><li><p>sprawdzenie <code>null==undefined</code> jest przestarzałe, ale wciąż używane przez wielu developerów, bo jest bardzo bezpiecznym i krótkim zapisem.</p></li><li><p><code>null</code> i <code>undefined</code> to wartości fałszywe przy konwersji do <code>boolean</code> zwracają <code>false</code></p></li><li><p>wartość <code>null</code> i <code>undefined</code> nie oznaczają tego samego</p></li></ul><h2 id="odnosniki" tabindex="-1"><a class="header-anchor" href="#odnosniki" aria-hidden="true">#</a> Odnośniki:</h2><p>https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.1</p><p>https://developer.mozilla.org/en-US/docs/Glossary/Falsy</p>',71),p={},t=(0,e(3744).Z)(p,[["render",function(n,a){const e=(0,s.up)("Comments");return(0,s.wg)(),(0,s.iD)(s.HY,null,[o,(0,s.Wm)(e)],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[e,s]of a)n[e]=s;return n}}}]);