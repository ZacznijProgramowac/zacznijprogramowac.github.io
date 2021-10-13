"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[5630],{7024:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-1100937e",path:"/tablice/podstawy/",title:"Tablica - array",lang:"pl-PL",frontmatter:{permalink:"/tablice/podstawy"},excerpt:"",headers:[{level:2,title:"Tworzenie tablic",slug:"tworzenie-tablic",children:[]},{level:2,title:"Pobieranie wartości",slug:"pobieranie-wartosci",children:[]},{level:2,title:"Przypisanie wartości",slug:"przypisanie-wartosci",children:[]},{level:2,title:"Sprawdzenie długości tablicy",slug:"sprawdzenie-długosci-tablicy",children:[]},{level:2,title:"Czyszczenie tablicy",slug:"czyszczenie-tablicy",children:[]},{level:2,title:"Usuwanie pojedynczych wartości",slug:"usuwanie-pojedynczych-wartosci",children:[{level:3,title:"Metoda splice",slug:"metoda-splice",children:[]}]},{level:2,title:"Metoda filter",slug:"metoda-filter",children:[{level:3,title:"Metoda includes",slug:"metoda-includes",children:[]}]},{level:2,title:"Co warto zapamiętać:",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"tablice/01-podstawy.md",git:{}}},8107:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="tablica-array" tabindex="-1"><a class="header-anchor" href="#tablica-array" aria-hidden="true">#</a> Tablica - array</h1><p>Tablice w JavaScript to bardzo popularne struktury, którymi będziesz się posługiwać nieustannie. Jest to struktura obiektowa, a nie typ prosty, ogólnie tablice są po prostu obiektami specjalnego typu. Mają w sobie także wiele przydatnych metod, których znajomość jest niezbędna do posługiwania się tablicami.</p><h2 id="tworzenie-tablic" tabindex="-1"><a class="header-anchor" href="#tworzenie-tablic" aria-hidden="true">#</a> Tworzenie tablic</h2><p>Tablice tworzy się bardzo prosto:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To jest przykład pustej tablicy, która nie ma żadnych elementów. Zainicjalizowana jest za pomocą dwóch kwadratowych nawiasów.</p><p>Tablice mogą przetrzymywać różne typy danych:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Ta tablica przetrzymuje elementy typu <code>number</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> strings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;boo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>W tej tablicy przetrzymujemy elementy typu <code>string</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arrays <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;boo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>To jest tablica wielowymiarowa, która przetrzymuje inne tablice. Takich wymiarów można stworzyć więcej. Nie są to jednak intuicyjne i wygodne do pracy struktury.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token string">&#39;one&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token string">&#39;two&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>W tej tablicy znajdują się obiekty. Tablice z obiektami to struktury z którymi będziecie się spotykać bardzo często.</p><p>Jak widzimy do tablic możemy włożyć wszystko, możemy nawet umieszczać dane różnego typu. Przy takich tablicach zalecam jednak ostrożność.</p><h2 id="pobieranie-wartosci" tabindex="-1"><a class="header-anchor" href="#pobieranie-wartosci" aria-hidden="true">#</a> Pobieranie wartości</h2><p>Jeżeli chcemy pobrać wartość z tablicy, odwołujemy się do tablicy przez nawiasy kwadratowe. Każda tablica jest indeksowana od 0, a każda wartość przypisana jest do indeksu:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;boo&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrays<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objects<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;one&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Z indeksem 0 odwołujemy się do pierwszego elementu tablicy. Z indeksem <code>1</code> odwołujemy się do drugiego elementu tablicy i tak dalej.</p><p>Widzimy też pobranie wartości z tablic wielowymiarowych, za pomocą dwóch nawiasów kwadratowych. Pierwszy indeks wskazuje tablicę, a drugi indeks wskazuje element w tej tablicy.</p><p>Również możemy pobrać pojedynczą wartość z obiektów. Po indeksie przez kropkę, możemy odwołać się do pola w obiekcie.</p><p>Jeżeli spróbujemy pobrać element z indeksu, który nie istnieje:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>zostanie zwrócona wartość <code>undefined</code>. JavaScript w tym przypadku nie zgłasza błędu. Dlatego trzeba być ostrożnym z pobieraniem elementów spoza zakresu. Warto sprawdzać czy konkretna wartość istnieje, ponieważ nasz program nadal będzie działał, ale będzie operował na wartości <code>undefinde</code> co może spowodować nieoczekiwane błędy.</p><h2 id="przypisanie-wartosci" tabindex="-1"><a class="header-anchor" href="#przypisanie-wartosci" aria-hidden="true">#</a> Przypisanie wartości</h2><p>Jeżeli chcemy przypisać wartość do konkretnej pozycji w tablicy lub zmienić wartość, któregoś elementu, również używamy nawiasów kwadratowych i indeksów:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>numbers<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Do indeksu <code>1</code> czyli drugiego elementu w tablicy dopisuję wartość <code>100</code>.</p><p>Możemy także przypisywać wartość do dowolnego indeksu w tablicy:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>numbers<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;[ 1, 100, 3, &lt;97 empty items&gt;, 100 ]&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>W tym przypadku dopisujemy wartość do indeksu 100. Nie jest to zbyt dobre rozwiązanie gdy użyjemy dowolnego indeksu i przypiszemy wartość, w ten sposób tworzymy także 97 pustych pozycji w tablicy, które tak naprawdę są zbędnymi elementami.</p><h2 id="sprawdzenie-długosci-tablicy" tabindex="-1"><a class="header-anchor" href="#sprawdzenie-długosci-tablicy" aria-hidden="true">#</a> Sprawdzenie długości tablicy</h2><p>Podobnie jak z wartości string, tak i z tablic możemy pobrać długość za pomocą pola <code>length</code>. Ta właściwość jest niezwykle przydatna i często będzie przez was używana:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Właściwość <code>length</code> pokazuje dokładnie ile elementów znajduje się w tablicy.</p><p>Jeżeli chcemy pobrać ostatni element z tablicy także użyjemy <code>length</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>list<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Przez nawiasy klamrowe odwołujemy się do indeksu wskazanego wskazanego przez długość tablicy ale minus 1 pozycja. To daje nam wartość ostatniego indeksu.</p><p>Długość tablicy wskazuje nam także ostatni wolny indeks:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>list<span class="token punctuation">[</span>list<span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Możemy to wykorzystać, aby wstawić na końcu tablicy wartość. Nie jest to jednak popularny sposób ponieważ do tego istnieje specjalna metoda <code>push</code>, którą potem poznamy.</p><h2 id="czyszczenie-tablicy" tabindex="-1"><a class="header-anchor" href="#czyszczenie-tablicy" aria-hidden="true">#</a> Czyszczenie tablicy</h2><p>Jeżeli chcemy wyczyścić tablicę sprawa wydaje się dość prosta:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> origin <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> copy <span class="token operator">=</span> origin<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Stworzyłem tablicę <code>origin</code>. Jak wiemy tablica jest typem obiektowym, zmienna <code>origin</code>, tak naprawdę przetrzymuje referencję do tablicy. Referencja ta kopiowana jest także do drugiej zmiennej <code>copy</code>. W ten sposób mam dwie zmienne, które odnoszą się do jednej i tej samej tablicy, przez referencję.</p><p>Chcąc wyczyścić tablicę mogę przypisać do zmiennej pustą tablicę:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>copy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> copy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3 ] []</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Po wyniku widzimy, że pierwsza tablica <code>origin</code> zachowała swoje wartości. Natomiast tablica <code>copy</code> ma teraz przypisaną pustą tablicę. Tak naprawdę to nie wyczyściłem tablicy, ale referencję w zmiennej <code>copy</code>. Teraz ta zmienna odnosi się do zupełnie innej referencji tablicy.</p><p>Oczywiście, jeżeli przetrzymujemy tablice w jednej zmiennej to takie wyczyszczenie jest skuteczne. Takie przypisanie pustej tablicy jako usunięcie starej tablicy jest spotykane bardzo często w kodzie.</p><p>Innym sposobem na wyczyszczenie tablicy jest takie podejście:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> origin2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> copy2 <span class="token operator">=</span> origin2<span class="token punctuation">;</span>\n\norigin2<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>origin2<span class="token punctuation">,</span> copy2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [] []</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>W tym przypadku mamy zmienną <code>origin2</code>, która przekazuje referencję tablicy do zmiennej <code>copy2</code>. Do właściwości <code>length</code> przypisuję wartość 0. Oznacza to, że zeruję długość tablicy, czyli tak naprawdę usuwam wszystkie jej wartości.</p><p>Widzimy, że ma to efekt na wszystkie zmienne, które przechowują referencję do tej tablicy. W tym przypadku konkretnie odniosłem się do wskazywanej tablicy przez referencję. Jest to sposób na to, aby wyzerować tablice w całej aplikacji.</p><h2 id="usuwanie-pojedynczych-wartosci" tabindex="-1"><a class="header-anchor" href="#usuwanie-pojedynczych-wartosci" aria-hidden="true">#</a> Usuwanie pojedynczych wartości</h2><h3 id="metoda-splice" tabindex="-1"><a class="header-anchor" href="#metoda-splice" aria-hidden="true">#</a> Metoda splice</h3><p>Często będziemy usuwać pojedyncze wartości z tablicy, są na to różne sposoby, pokażę Wam dwa najbardziej dominujące:</p><p>Pierwszy sposób z użyciem metody <code>splice</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> toDelete <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> index <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>toDelete<span class="token punctuation">)</span><span class="token punctuation">;</span>\nnums<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  [ 1, 3 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Mamy wartość, którą chcemy usunąć, oraz tablicę wartości. Na początku za pomocą metody <code>indexOf</code> pobieramy indeks wartości do usunięcia. Mając indeks wiemy w którym miejscu tablicy znajduje się wartość. Teraz możemy usunąć wartość za pomocą metody <code>splice</code>. Pierwszym argumentem jest indeks, drugim ile wartości należy usunąć.</p><p>Jest to popularny sposób na usuwanie wartości. Jej zaletą albo wadą ( w zależności od potrzeb) jest to, że modyfikuje oryginalną tablicę.</p><h2 id="metoda-filter" tabindex="-1"><a class="header-anchor" href="#metoda-filter" aria-hidden="true">#</a> Metoda filter</h2><p>Inny sposób to użycie higer-order function o nazwie <code>filter</code>. Jest to moja ulubiona metoda:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> toRemove <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> numss <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> removed <span class="token operator">=</span> numss<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> e <span class="token operator">!==</span> toRemove<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numss<span class="token punctuation">,</span> removed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3 ] [ 2, 3 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>W tym rozwiązaniu odwołujemy się do tablicy i wywołujemy metodę <code>filter</code>. Przekazujemy tam funkcję callback. Jej zadaniem jest zwrócenie tylko tych wartości, które różne są od wartości wskazanej do usunięcia. Tym sposobem filtrujemy tablicę i zwracamy zupełnie nową tablicę bez tej wartości.</p><p>W tym rozwiązaniu widzimy, że mamy zachowaną oryginalną tablicę, oraz dostajemy nową tablice już bez wartości usuniętej.</p><h3 id="metoda-includes" tabindex="-1"><a class="header-anchor" href="#metoda-includes" aria-hidden="true">#</a> Metoda includes</h3><p>Kolejny sposób to usuwanie większej ilości elementów. Mamy listę elementów, którą chcemy usunąć:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> numes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> notIncluded <span class="token operator">=</span> numes<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>values<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numes<span class="token punctuation">,</span> notIncluded<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3 ] [ 2 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>W tym przypadku znowu używamy metody <code>filetr</code>. Jako parametr do metody przekazujemy funkcję, która sprawdza czy elementy listy znajdują się w elementach do usunięcia. Jeżeli tak to dostaniemy wartość <code>true</code>, ale negując zwrócimy <code>false</code> co spowoduje, że metoda <code>filter</code> pominie ten element.</p><p>Użyliśmy tutaj metody <code>includes</code>, która jest stosunkowo nowa w JavaScript i jej implementacja może jeszcze nie istnieć w przeglądarkach.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać:</h2><ul><li>tablica jest typem obiektowym, odwołujemy się do niej przez referencję</li><li>tablica w JavaScript może przetrzymywać każdy typ danych</li><li>właściwość <code>length</code> zwraca długość tablicy</li><li>odwołanie się poza indeks tablicy zwraca <code>undefined</code>, a nie błąd</li><li>pamiętajmy, że pracując z tablicami pracujemy na referencjach, zmiana w jednym miejscu oznacza zmiany w innych</li><li>do usunięcia pojedynczego elementu użyjemy <code>splice</code> albo <code>filter</code></li><li>wiele elementów można usunąć za pomocą <code>includes</code></li></ul>',73),t={},p=(0,s(3744).Z)(t,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);