"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[2410],{7185:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-63249e6a",path:"/zmienne-i-typy/02-typy-danych.html",title:"Typy w JavaScript",lang:"pl-PL",frontmatter:{},excerpt:"",headers:[{level:2,title:"Zmienna nie ma typu, tylko jej wartość",slug:"zmienna-nie-ma-typu-tylko-jej-wartosc",children:[]},{level:2,title:"Wypisywanie typu",slug:"wypisywanie-typu",children:[]},{level:2,title:"Typ dla funkcji",slug:"typ-dla-funkcji",children:[]},{level:2,title:"Typ dla tablicy",slug:"typ-dla-tablicy",children:[]},{level:2,title:"Typ bigint",slug:"typ-bigint",children:[]},{level:2,title:"Podsumowanie",slug:"podsumowanie",children:[]},{level:2,title:"Co warto zapamiętać:",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"zmienne-i-typy/02-typy-danych.md",git:{}}},7543:(n,a,e)=>{e.r(a),e.d(a,{default:()=>t});var s=e(6252);const o=(0,s.uE)('<h1 id="typy-w-javascript" tabindex="-1"><a class="header-anchor" href="#typy-w-javascript" aria-hidden="true">#</a> Typy w JavaScript</h1><p>W tym dziale porozmawiamy o typach. Dowiemy się jakie podstawowe typy istnieją w JavaScript, a także o tym dlaczego wartość <code>null</code> to typ <code>obcject.</code></p><h2 id="zmienna-nie-ma-typu-tylko-jej-wartosc" tabindex="-1"><a class="header-anchor" href="#zmienna-nie-ma-typu-tylko-jej-wartosc" aria-hidden="true">#</a> Zmienna nie ma typu, tylko jej wartość</h2><p>Można powiedzieć, że w języku JavaScript zadeklarowane zmienne nie mają typów. Dopiero wartości przypisane do tej zmiennej mają typ.</p><p>Mało tego JavaScript nie pilnuje w żaden sposób typu przypisanego do zmiennej, w jednej chwili może być to <code>number</code> a w drugiej <code>string</code> czy <code>boolean</code>. Z jednej strony jest to fajne, bo język jest bardzo elastyczny. Z drugiej strony nigdy nie wiadomo, jaki typ kryje się pod zmienną i może to doprowadzić do wielu pomyłek i błędów.</p><p>W poniższym przykładzie mamy zmienną <code>value</code>, która na początku zainicjalizowana jest typem <code>string</code>, potem przypisana jest liczba, czyli typ <code>number</code> i na końcu wartość <code>true</code> czyli typ <code>boolean</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">&#39;some value&#39;</span><span class="token punctuation">;</span>\nvalue <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\nvalue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Warto jednak pilnować się z taką zmianą wartości dla pojedynczej zmiennej. Może to powodować nieoczekiwane i trudne do znalezienia błędy. Dobrze jest, jeśli stworzona zmienna ma wartość o jednym typie przez cały czas działania programu. Warto przestrzegać tej zasady.</p><p>Przyjrzyjmy się teraz dostępnym typom. W języku JavaScript mamy typy proste nazywane też prymitywne jak:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>Primitives types:\nnull\nundefined\nboolean\nnumber\nstring\nsymbol\nbigint\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>oraz typ złożony (możemy nazwać typ obiektowy czy referencyjny) Object:</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>Object <span class="token function">type</span>:\nobject\nsubtypes <span class="token keyword">from</span> object:\n<span class="token keyword">function</span>\narray\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Typ Object ma jeszcze podtypy, a najważniejsze z nich to <code>Function</code> i <code>Array</code>, które omówimy szczegółowo w oddzielnych działach.</p><p>Typ <code>symbol</code> sobie odpuścimy i nie będziemy się teraz nim zajmować ani przejmować. Typ <code>bigint</code> jest stosunkowo nowym typem, omówimy go na końcu.</p><h2 id="wypisywanie-typu" tabindex="-1"><a class="header-anchor" href="#wypisywanie-typu" aria-hidden="true">#</a> Wypisywanie typu</h2><p>Stworzymy teraz zmienne dla poszczególnych typów oraz użyjemy operatora <code>typeof</code>. Za pomocą tego operatora, możemy wypisać typy wartości do konsoli:</p><p>Na początek zdefiniuję zmienne dla każdego z podstawowych typów:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> nullValue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> undefinedValue <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> booleanValue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> numberValue <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> stringValue <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> objectValue <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> bigIntValue <span class="token operator">=</span> <span class="token number">1234567890123456789012345678901234567890n</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>teraz za pomocą <code>cosnole.log</code> i <code>typeof</code> możemy wypisać typy wartości, które przypisane są do zmiennych:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> nullValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> undefinedValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> booleanValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//boolean</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> numberValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> stringValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> objectValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> bigIntValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//bigint</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Widzimy typy dla każdej wartości. Widzimy, że wartość <em>undefined, true, liczba 42, tekst hello, stworzony obiekt i liczba bigint</em>, mają prawidłowo wypisane typy za pomocą operatora <code>typeof</code>.</p><p>Natomiast wartość <em>null</em> nie ma swojego typu <code>null</code>, ale jest typu <code>object</code>. Jest to niestety błąd i problem od początku istnienia JavaScript i dzisiaj błąd ten jest już nienaprawialny. To, że jest to typ <code>object</code> nie oznacza, że <code>null</code> jest referencją do czegoś, <code>null</code> niczego nie reprezentuje i nie odnosi się do żadnej referencji. Reprezentuje brak wartości.</p><h2 id="typ-dla-funkcji" tabindex="-1"><a class="header-anchor" href="#typ-dla-funkcji" aria-hidden="true">#</a> Typ dla funkcji</h2><p>Będąc przy określaniu typów, warto wspomnieć jeszcze o typach dwóch ważnych elementów języka JavaScript, są to funkcje i tablice.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> test<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//function</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Stworzyłem funkcję test i wypisałem jej typ do konsoli. Widzimy typ <code>function</code>. Tak naprawdę typ <code>function</code> jest podtypem <code>object</code>. Dlatego nie rozpatrujemy go jako oddzielnego typu najwyższego rzędu i o funkcjach nie wspomina się jako o oddzielnych typach.</p><h2 id="typ-dla-tablicy" tabindex="-1"><a class="header-anchor" href="#typ-dla-tablicy" aria-hidden="true">#</a> Typ dla tablicy</h2><p>Kolejnym elementem jest tablica, która wyświetla typ <code>object</code>. Również możemy powiedzieć, że jest to podtyp typu <code>object</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Do tablic wrócimy jeszcze w oddzielnym dziale i będziemy je szczegółowo omawiać.</p><h2 id="typ-bigint" tabindex="-1"><a class="header-anchor" href="#typ-bigint" aria-hidden="true">#</a> Typ bigint</h2><p>Ostatnim typem, na który zwrócę uwagę jest <code>bigint</code>. Typ ten powstał po to aby operować na bardzo dużych liczbach, z którymi nie radzi sobie typ <code>number</code>. Mowa tu o liczbach większych niż <code>2^53</code>. Wtedy typ <code>number</code> traci swoją precyzję i dlatego powstał typ <code>bigint</code>.</p><p>Sam nie miałem jeszcze okazji używać takich wartości. Jeżeli jednak będziemy pracować na takich liczbach, konieczne jest użycie <code>bigint</code>, a deklaruje się go używając litery <code>n</code> na końcu liczby:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> big <span class="token operator">=</span> <span class="token number">1234567890123456789012345678901234567890n</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> big<span class="token punctuation">)</span> <span class="token comment">// bigint</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Gdy sprawdzimy typ wartości w zmiennej o nazwie <code>big</code>, operator <code>typeof</code> zwróci nam typ <code>bigint</code>.</p><h2 id="podsumowanie" tabindex="-1"><a class="header-anchor" href="#podsumowanie" aria-hidden="true">#</a> Podsumowanie</h2><p>Tak wyglądają typy w języku JavaScript, o którym się mówi, że nie ma typów. O ile sama zadeklarowana zmienna nie ma typu, to wartość przypisana do zmiennej jest określona przez konkretny typ.</p><p>W następnych częściach przejdziemy przez poszczególne typy i zapoznamy się z nimi dokładniej. Dowiemy się jak z nimi pracować, jakie powodują problemy i pułapki. Choć mówi się, że JavaScript jest prostym językiem, to niestety posiada wiele niuansów, które warto zrozumieć.</p><p>Również dla funkcji, tablic i obiektów poświęcimy zupełnie oddzielne działy.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać:</h2><ul><li>mamy 8 dostępnych typów jak: <code>null, undefined, boolean, number, string, symbol, bigint, object</code> oraz <code>function</code> i <code>array</code> jako podtyp.</li><li>zmienne nie posiadają typów, to wartości posiadają typ</li><li>operator <code>typeof</code> służy do sprawdzania typu wartości przypisanej do zmiennej</li><li>warto przestrzegać zasady i pilnować, aby przez cały program do zmiennej była przypisana wartość jednego typu, wyjątkiem może być wartość <code>null</code>, którą czasami specjalnie musimy przypisać.</li></ul>',41),p={},t=(0,e(3744).Z)(p,[["render",function(n,a){const e=(0,s.up)("Comments");return(0,s.wg)(),(0,s.iD)(s.HY,null,[o,(0,s.Wm)(e)],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[e,s]of a)n[e]=s;return n}}}]);