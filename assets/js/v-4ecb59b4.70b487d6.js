"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[4026],{9314:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-4ecb59b4",path:"/klasy/statyczne-pola-i-metody/",title:"Statyczne pola i metody",lang:"pl-PL",frontmatter:{permalink:"/klasy/statyczne-pola-i-metody"},excerpt:"",headers:[{level:2,title:"Metody statyczne w JavaScript",slug:"metody-statyczne-w-javascript",children:[]},{level:2,title:"This w metodzie statycznej",slug:"this-w-metodzie-statycznej",children:[]},{level:2,title:"Pola statyczne",slug:"pola-statyczne",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"klasy/02-statyczne-pola-i-metody.md",git:{}}},1296:(n,a,s)=>{s.r(a),s.d(a,{default:()=>o});const e=(0,s(6252).uE)('<h1 id="statyczne-pola-i-metody" tabindex="-1"><a class="header-anchor" href="#statyczne-pola-i-metody" aria-hidden="true">#</a> Statyczne pola i metody</h1><p>Zauważyliście, że możemy wywoływać niektóre metody czy też pola z obiektów bez tworzenia ich instancji. Na przykład mamy dostęp do metody <code>Object.is()</code> albo <code>Array.from()</code>. Są to metody statyczne, które możemy wywołać od razu przez nazwę klasy, nie potrzebujemy do tego tworzyć instancji klasy.</p><h2 id="metody-statyczne-w-javascript" tabindex="-1"><a class="header-anchor" href="#metody-statyczne-w-javascript" aria-hidden="true">#</a> Metody statyczne w JavaScript</h2><p>Stworzymy sobie klasę <code>Utils</code>, która posłuży nam do tworzenia metod statycznych:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Utils</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> <span class="token function">magicNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">42</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Utils<span class="token punctuation">.</span><span class="token function">magicNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>W tym przykładzie mamy klasę <code>Utils</code>, która ma zdefiniowaną metodę <code>magicNumber</code>. Metoda ta poprzedzona jest słowem kluczowym <code>static</code>. Dzięki temu, możemy wywołać metodę używając tylko nazwy klasy. Zauważcie, że nie musieliśmy tutaj tworzyć instancji klasy <code>Utils</code> przez <code>new Utils()</code> tylko od razu przez nazwę klasy możemy wywołać metodę.</p><p>Oznacza to, że metody statyczne tworzone są w klasie, nie w prototypie tej klasy, który potem służy do tworzenia kolejnych obiektów:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>Utils<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code> Utils<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\targuments: null\n\tcaller: null\n\tlength: 0\n\tmagicNumber: ƒ magicNumber<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\tname: <span class="token string">&quot;Utils&quot;</span>\n\tprototype:\n\t\tconstructor: ƒ Utils<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\tfoo: ƒ foo<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Gdy wypiszemy nazwę klasy przez <code>console.dir</code> zobaczymy, że bezpośrednio w klasie znajduje się metoda <code>magicNumber</code>. Natomiast zwykła metoda <code>foo</code>, która istnieje w tej klasie jest dopiero we właściwości <code>prototype</code>. Oznacza to, że do metody <code>foo</code> możemy odwołać się dopiero przez stworzenie obiektu tej klasy czyli wywołania jej z konstruktorem za pomocą słówka <code>new</code>.</p><h2 id="this-w-metodzie-statycznej" tabindex="-1"><a class="header-anchor" href="#this-w-metodzie-statycznej" aria-hidden="true">#</a> This w metodzie statycznej</h2><p>Nic nie stoi na przeszkodzie, aby tworzyć metody statyczne także w klasach z których tworzymy instancje obiektów:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Class to create cars&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n    console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Carr class</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> carObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&#39;Opel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nCar<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// carObject.info() // error</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Stworzyłem klasę, która ma jedno pole o nazwie <code>model</code>. Klasa ta dodatkowo ma metodę statyczną o nazwie <code>info</code>, która wypisuje jakiś tam komunikat do konsoli.</p><p>Chciałbym jednak zwrócić uwagę na <code>this</code> w metodach statycznych, w których<code>this</code> nie odnosi się do instancji obiektu, dlatego po odwołaniu do pola <code>model</code>, otrzymujemy wartość <code>undefined</code>. W metodach statycznych <code>this</code> odnosi się do klasy <code>Car</code>. Metoda statyczna przez <code>this</code> zwraca klasę w której została utworzona, nie zwraca instancji tego obiektu. Jest to bardzo ważne, aby rozróżniać, że mamy klasę i mamy obiekty tworzone z tej klasy.</p><p>Pokazuje to także próba wywołania metody statycznej przez stworzony obiekt <code>carObject</code>. Przez instancję obiektu nie możemy odwołać się do metody statycznej, otrzymujemy błąd. Metoda statyczna istnieje tylko na poziomie klasy, nie istnieje w prototypie tej klasy jak jej normalne metody. Nie ma jej w <code>Car.prototype</code> tylko jest w klasie <code>Car</code>.</p><p>Żeby pokazać dokładnie jak działa <code>this</code> w metodzie statycznej, stwórzmy jeszcze jeden przykład:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Message</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> date</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">static</span> <span class="token function">createWithYear</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token function">createWithDay</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> message <span class="token operator">=</span> Message<span class="token punctuation">.</span><span class="token function">createWithYear</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2020</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Stworzyłem klasę <code>Message</code>, która ma zdefiniowane dwie metody statyczne. W tych metodach odwołuję się przez <code>this</code> właśnie do klasy <code>Message</code>. Mając dostęp do klasy mogę wywołać ją ze słówkiem <code>new</code> i tworzyć kolejne instancje obiektów.</p><p>Pomimo tego, że ta klasa ma konstruktor i moglibyśmy normalnie stworzyć instancję obiektu tej klasy, to mamy dodatkowe metody statyczne, które tworzą instancje ale na przykład z innym formatem daty.</p><p>Metody statyczne powinny być niezależna, zazwyczaj tworzymy je do zwracania pewnych stałych wartości, konfiguracji, mogą wykonywać funkcjonalności, które powtarzamy wiele razy w różnych częściach aplikacji. Zazwyczaj metody statyczne reprezentują jakieś narzędzia jak parsery, formatery i tym podobne.</p><p>W JavaScript często spotkacie się z metodami statycznymi. Istnieją one w każdej klasie jak <code>Number</code>, <code>Object</code>, <code>Array</code>. Cała klasa <code>Math</code> do operacji matematycznych jest zbudowana z metod i pól statycznych. Również w klasie <code>Date</code> znajdziemy wiele statycznych metod.</p><h2 id="pola-statyczne" tabindex="-1"><a class="header-anchor" href="#pola-statyczne" aria-hidden="true">#</a> Pola statyczne</h2><p>Oprócz tego, że możemy tworzyć metody statyczne, możemy także tworzyć pola statyczne:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Config</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> url <span class="token operator">=</span> <span class="token string">&#39;http://www.example.com&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> version <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Config<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;http://www.example.com&#39;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Config<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Zdefiniowana klasa <code>Config</code>, posiada dwa pola statyczne, do których odwołujemy się bezpośrednio przez nazwę klasy. Takie pola świetnie nadają się do przetrzymywania pewnych stałych wartości, tworzenia klas z konfiguracjami i tym podobnych narzędzi.</p><p>Tak jak wspomniałem, elementy te istnieją w samej klasie nie w jej prototypie, jeżeli więc chcemy dodać jakieś pole w czasie wykonywania programu, możemy to zrobić tak:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Config<span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token string">&#39;my app&#39;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Config<span class="token punctuation">.</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;my app&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Odwołujemy się do nazwy i po kropce dodajemy nowe pole statyczne. Nie robimy tego przez <code>Config.prototype</code>, a przez samą nazwę klasy. Tak samo postępujemy w przypadku metod:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Config<span class="token punctuation">.</span><span class="token function-variable function">getDate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Tworzymy nową metodę w klasie <code>Config</code>, przez stworzenie nowej nazwy i przypisanie jej funkcji.</p><p>I tak wyglądają statyczne właściwości klas. Metody statyczne, pola statyczne, zwykłe metody i pola klasy, wszystkie te konstrukcje mogą istnieć w jednej klasie. Nie ma żadnych przeciwskazań do tworzenia klas o tak urozmaiconych właściwościach.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li>metody i pola statyczne istnieją w klasie, a nie w jej prototypie</li><li>właściwości statyczne wywołujemy przez odwołanie się do nazwy klasy</li><li>nie możemy odwołać się do właściwości statycznych przez instancję obiektu</li><li>metody i pola statyczne nie mają dostępu do instancji obiektu w środku klasy, <code>this</code> wskazuje na klasę nie na instancję obiektu</li><li>właściwości statyczne są dobre do tworzenia stałych wartości, klas narzędziowych, parserów, formaterów, kawałków kodów, które regularnie używamy w różnych częściach aplikacji</li></ul>',34),t={},o=(0,s(3744).Z)(t,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);