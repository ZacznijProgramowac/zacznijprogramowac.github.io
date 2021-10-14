"use strict";(self.webpackChunkkurs_javascript=self.webpackChunkkurs_javascript||[]).push([[4560],{1805:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-db541c46",path:"/tablice/sort/",title:"Sortowanie w JavaScript",lang:"pl-PL",frontmatter:{permalink:"/tablice/sort"},excerpt:"",headers:[{level:2,title:"Metoda sort",slug:"metoda-sort",children:[]},{level:2,title:"Komparator dla metody sort",slug:"komparator-dla-metody-sort",children:[]},{level:2,title:"Krótszy zapis komparatorów",slug:"krotszy-zapis-komparatorow",children:[]},{level:2,title:"Sortowanie wartości string",slug:"sortowanie-wartosci-string",children:[]},{level:2,title:"Co warto zapamiętać",slug:"co-warto-zapamietac",children:[]}],filePathRelative:"tablice/08-sort.md",git:{}}},3367:(a,n,s)=>{s.r(n),s.d(n,{default:()=>p});var e=s(6252);const o=(0,e.uE)('<h1 id="sortowanie-w-javascript" tabindex="-1"><a class="header-anchor" href="#sortowanie-w-javascript" aria-hidden="true">#</a> Sortowanie w JavaScript</h1><p>W obiekcie <code>Array</code> mamy do dyspozycji metodę <code>sort</code>. Ma ona kilka zasad działania i aby sprawnie się nią posługiwać, warto zaznajomić się dokładnie z jej działaniem.</p><h2 id="metoda-sort" tabindex="-1"><a class="header-anchor" href="#metoda-sort" aria-hidden="true">#</a> Metoda sort</h2><p>Na początek po prostu wywołajmy metodę sort:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr1<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, 5 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Metoda sort wywołana na tablicy bez przekazanej funkcji <code>callback</code> sortuje elementy od najmniejszego do największego. Widzimy też, że metoda <code>sort</code> zmienia nam oryginalną tablicę. Dlatego, jeżeli nie chcemy modyfikować oryginalnej tablicy, przed sortowaniem należy wykonać kopię na przykład z operatorem <code>spread</code> albo z metodą <code>slice</code>.</p><p>Jak wspomniałem wcześniej metoda <code>sort</code> bez dodatkowej funkcji <code>callback</code> sortuje rosnąco:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//   [ 100, 2, 30 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Ten przykład pokazuje jednak coś zupełnie innego i wydaje się, że tym razem tablica została źle posortowana. Wszystko jest jednak w porządku, jeśli chodzi o standardowe działanie metody <code>sort</code>. Bez funkcji <code>callback</code>, która najczęściej nazywana jest <code>comparatorem</code> metoda sort sortuje w sposób leksykograficzny.</p><p>Wszystkie wartości zmieniane są do wartości <code>string</code> i porównywane są przez znaki kodowe w standardzie UTF-16. Oznacza to, że liczba <code>100</code> zamieniona na stringa, ma mniejszy znak kodowy niż liczba 2 reprezentowana jako string. W naszym odbiorze sortowane wydaje się nieprawidłowe, jednak dla komputera wykonane jest prawidłowo.</p><p>Dlatego, jeżeli chcemy sortować tablice, warto zadbać o zaimplementowanie prawidłowego <code>comparatora</code>, którego przekażemy jako funkcję.</p><h2 id="komparator-dla-metody-sort" tabindex="-1"><a class="header-anchor" href="#komparator-dla-metody-sort" aria-hidden="true">#</a> Komparator dla metody sort</h2><p>Aby uniknąć standardowego sortowania przez porównanie kodów Unicode w systemie UTF-16, możemy stworzyć i przekazać do metody <code>sort</code> funkcję <code>callback</code>, funkcja ta często jest nazywana <code>comparator</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">comparatorASC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\narr3<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>comparatorASC<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 2, 30, 100 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Stworzyłem funkcję <code>comparator</code> z rozbudowaną instrukcją <code>if</code>, ale można to wszystko zapisać krócej, co zobaczymy później. Zrobiłem to jednak specjalnie, aby Wam pokazać jakie wartości i kiedy należy zwracać przy porównaniu.</p><p>Jest to <code>comparator</code> do sortowania rosnącego. Funkcja <code>comparator</code> przy każdej iteracji, przyjmuje dwa elementy. Jeżeli element <code>a</code> jest mniejszy niż <code>b</code> zwracamy wartość mniejszą niż zero, nie musi być to <code>-1</code> ale dowolna ujemna wartość. Jeżeli więc z komparatora, zwracamy wartość ujemną przy porównaniu dwóch elementów, oznacza to, że pierwszy element w sortowaniu powinien być przed elementem drugim. Czyli w tym przypadku <code>a</code> powinno być w tablicy zawsze przed <code>b</code>. Nie ma żadnych zmian.</p><p>Jeżeli zwrócimy wartość większą niż <code>0</code> oznacza to, że drugi element, czyli <code>b</code> powinien być przed elementem <code>a</code>. Elementy zamieniane są miejscami.</p><p>Jeżeli zwracamy wartość <code>0</code> oznacza to, że oba elementy są równe sobie i nie musi następować zmiana ich pozycji w tablicy.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">comparatorDESC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\narr3<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>comparatorDESC<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 100, 30, 2 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Jeżeli natomiast chcemy sortować malejąco, przy odpowiednich porównaniach musimy zwrócić odwrotne wartości. W tym przypadku sortowania, jeżeli <code>a</code> będzie mniejsze od <code>b</code> zwracamy <code>1</code> . Oznacza to, że wartość <code>b</code> jako większa będzie stałą teraz przed wartością <code>a</code>.</p><p>Jeżeli <code>a</code> jest większe od <code>b</code> zwracamy <code>-1</code>, oznacza to, że w tablicy <code>a</code> jest większe, więc powinno być przed wartością <code>b</code> w sortowanej tablicy. Elementy pozostają bez zmian. Podobnie jest, gdy zwracamy wartość 0. Elementy również nie zmieniają miejsc.</p><p>Możemy to wytłumaczyć jeszcze krócej. Jeżeli zwrócimy z <code>comparatora</code> wartość powyżej zera, elementy <code>a</code> i <code>b</code> są zamieniane w tablicy. Jeżeli zwrócimy wartość zero lub mniejszą niż zerwo, elementy pozostają bez zmian.</p><h2 id="krotszy-zapis-komparatorow" tabindex="-1"><a class="header-anchor" href="#krotszy-zapis-komparatorow" aria-hidden="true">#</a> Krótszy zapis komparatorów</h2><p>Komparatory, które Wam pokazałem, można zapisać o wiele krócej:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr4<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, 5 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Do metody sort przekazałem <code>compoarator</code> sortujący rosnąco. W tym przypadku zwracamy po prostu wynik różnicy. Będzie to zawsze jakaś wartość mniejsza niż 0, większa niż 0 lub po prostu 0. Metoda sort podejmuje odpowiednie działania, albo zamienia elementy, albo pozostawia na miejscu.</p><p>Jeżeli natomiast chcemy sortować malejąco, użyjemy takiego zapisu:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr4<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 5, 4, 3, 2, 1 ]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Tym razem od wartości <code>b</code> odejmujemy wartość <code>a</code>. W ten sposób odwracamy sortowanie i sortujemy malejąco.</p><p>Ten zapis jest na pewno krótki i zwięzły, ale może być trudniejszy w zrozumieniu, szczególnie dla osób, które dopiero stykają się z metodą <code>sort</code>.</p><h2 id="sortowanie-wartosci-string" tabindex="-1"><a class="header-anchor" href="#sortowanie-wartosci-string" aria-hidden="true">#</a> Sortowanie wartości string</h2><p>Czasami będziemy też musieli posortować wartości string. Musimy pamiętać, że porównywane są znaki według tabeli Unicode, co nie zawsze daje oczekiwane rezultaty. Jest jednak na to sposób:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> persons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;ZoE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;AnDy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Marie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\npersons<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Jeżeli będziemy chcieli stworzyć <code>comparator</code> dla wartości string najlepszą opcją może być użycie metody <code>localeCompare</code> . Metodę wywołujemy na wartości string i przekazujemy jako parametr drugi string do porównania. Metoda ta po porównaniu wróci nam odpowiednią wartość <code>number</code> dla metody <code>sort</code>.</p><p>Użycie <code>localCompare</code> załatwia nam dużo problemów, gdy wartości string mają różne wielkości liter i znaki spoza tablic ASCII. Wydaje się, że dla elementów string jest to najlepsze rozwiązanie.</p><h2 id="co-warto-zapamietac" tabindex="-1"><a class="header-anchor" href="#co-warto-zapamietac" aria-hidden="true">#</a> Co warto zapamiętać</h2><ul><li><p>standardowo metoda <code>sort</code> sortuje rosnąco</p></li><li><p>standardowo metoda <code>sort</code> konwertuje wszystko do <code>string</code> i potem porównuje znaki według kodów Unicode.</p></li><li><p>jeżeli chcemy sortować według własnej metody, musimy stworzyć i przekazać funkcję <code>comparator</code> czyli zwykłą funkcję <code>callback</code></p></li><li><p>gdy <code>comparator</code> zwraca wartość powyżej 0, elementy w tablicy są zamieniane</p></li><li><p>gdy <code>comparator</code> zwraca wartość równą 0, elementy w tablicy pozostają bez zmian</p></li><li><p>gdy <code>comparator</code> zwraca wartość poniżej 0, elementy w tablicy pozostają bez zmian</p></li><li><p>gdy sortujemy wartości <code>string</code> porównajmy je za pomocą metody <code>localeCompare</code></p></li></ul>',37),t={},p=(0,s(3744).Z)(t,[["render",function(a,n){const s=(0,e.up)("Comments");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e.Wm)(s)],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{for(const[s,e]of n)a[s]=e;return a}}}]);