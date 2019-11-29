(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{87:function(n,a,e){"use strict";e.r(a),e.d(a,"readingTime",function(){return i}),e.d(a,"default",function(){return k}),e.d(a,"tableOfContents",function(){return d}),e.d(a,"frontMatter",function(){return g});var t=e(13),s=e(18),o=e(19),p=e(21),c=e(20),l=e(22),r=e(0),m=e.n(r),u=e(17),i={text:"4 min read",minutes:3.585,time:215100,words:717},k=function(n){function a(n){var e;return Object(s.a)(this,a),(e=Object(p.a)(this,Object(c.a)(a).call(this,n))).layout=null,e}return Object(l.a)(a,n),Object(o.a)(a,[{key:"render",value:function(){var n=this.props,a=n.components;Object(t.a)(n,["components"]);return m.a.createElement(u.MDXTag,{name:"wrapper",components:a},m.a.createElement(u.MDXTag,{name:"p",components:a},"\u672c\u6765\u662f\u4e0d\u6253\u7b97\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\uff0c\u4f46\u662f\u6700\u8fd1\u6b63\u597d\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u6216\u8005\u8bf4\u662f\u7ec4\u5185\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u5c31\u987a\u4fbf\u5199\u8fd9\u7bc7\u6587\u7ae0"),m.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"\u76ee\u5f55"}},"\u76ee\u5f55"),m.a.createElement(u.MDXTag,{name:"ul",components:a},m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"React Virtual Dom Terminology"),m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"useLayoutEffect and useEffect")),m.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"react-virtual-dom-terminology"}},"React Virtual Dom Terminology"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5728 React \u4e2d\u6709\u51e0\u4e2a\u7c7b\u578b\u9700\u8981\u533a\u5206\u6e05\u695a\uff0c\u5728\u540c ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"TS")," \u5199\u7684\u65f6\u5019\u4e5f\u4f1a\u7ecf\u5e38\u9047\u5230\u8fd9\u51e0\u79cd\u7c7b\u578b"),m.a.createElement(u.MDXTag,{name:"ul",components:a},m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"ReactElement / ReactElement Factory"),m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"ReactNode"),m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"ReactComponent / ReactComponent Class")),m.a.createElement(u.MDXTag,{name:"h3",components:a,props:{id:"react-elements"}},"React Elements"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5728 React \u4e2d\u539f\u59cb\u7c7b\u578b\u5c31\u662f ReactElement\uff0cReactElement \u6709\u56db\u4e2a\u5c5e\u6027\u5206\u522b\u4e3a ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type"),", ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"props"),", ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"key"),", ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ref"),". \u540e\u7eed key \u6709\u53ef\u80fd\u4f1a\u4ece props \u4e2d\n\u8fdb\u884c\u5265\u79bb. \u5e76\u4e14\u4e5f\u4e0d\u5b58\u5728\u65b9\u6cd5\u548c\u5176\u4ed6\u7684\u4efb\u4f55\u4e1c\u897f\u5728 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"prototype")," \u4e0a."),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5728 React \u4e2d\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 React.createElement \u6765\u521b\u5efa"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> root <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u4e3a\u4e86\u6e32\u67d3\u5230 DOM \u4e2d\uff0c\u9700\u8981\u628a\u521b\u5efa\u7684 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactElement")," \u4f20\u9012\u7ed9 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React.render")," \u5e76\u4e14\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6b63\u5e38\u7684 DOM \u5143\u7d20\u6bd4\u5982 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"HTMLElement"),", ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactElement")," \u662f\u4e00\u4e2a\n\u65e0\u72b6\u6001\u7684\uff0c\u4e0d\u53ef\u7a81\u53d8\u7684\uff0c\u865a\u62df\u7684 dom element\u3002"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5982\u679c\u9700\u8981\u4f20\u9012\u989d\u5916\u7684\u5c5e\u6027\uff0c\u5728 React.createElement \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u63d0\u4e2a\u5bf9\u8c61\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a child"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> child <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'text\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> root <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> className<span class="token punctuation">:</span> <span class="token string">\'my-root\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReact<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5982\u679c\u4f7f\u7528 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"JSX"),", \u90a3\u4e48\u8fd9\u6837\u5199\u4e5f\u662f\u4e00\u6837\u7684"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">\'my-root\'</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div<span class="token operator">></span>text<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReact<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"h4",components:a,props:{id:"factory"}},"Factory"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u4e00\u4e2a ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactElement")," \u7684\u5de5\u5382\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7528\u6765\u521b\u5efa ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactElement")," \u5e26\u7740\u7279\u5b9a\u7684 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type"),"\u3002React \u672c\u8eab\u5185\u90e8\u662f\u6709\u8fd9\u6837\u7684\u4e00\u4e2a\u51fd\u6570\u7684\u3002"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">createFactory</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u8fd9\u6837\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u7c7b\u578b\u7684\u51fd\u6570\uff0c\u7136\u540e\u5728\u6b64\u8c03\u7528\u51fd\u6570\uff0c\u4e0d\u9700\u8981\u5728\u4f20\u9012\u989d\u5916\u7684\u7c7b\u578b\u3002\u6bd4\u5982\u4e0d\u5728\u9700\u8981\u6bcf\u6b21\u90fd\u4f20\u5165\u7c7b\u578b ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React.createElement('type')")),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">createFactory</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span> className<span class="token punctuation">:</span> <span class="token string">\'my-root\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nReact<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5982\u679c\u4f7f\u7528\u7684\u662f ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"JSX")," \u7684\u8bdd\uff0c\u90a3\u4e48\u6839\u672c\u4e0d\u9700\u8981\u8fd9\u4e48\u505a\uff0c React \u5185\u90e8\u5df2\u7ecf\u5904\u7406\u597d\u4e86\u3002"),m.a.createElement(u.MDXTag,{name:"h3",components:a,props:{id:"react-nodes"}},"React Nodes"),m.a.createElement(u.MDXTag,{name:"p",components:a},m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React Node")," \u53ef\u80fd\u662f\u5176\u4e2d\u7684\u4e00\u79cd\uff1a"),m.a.createElement(u.MDXTag,{name:"ul",components:a},m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"React Element"),m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"string"),m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"number"),m.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},"ReactFrament")),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u53ef\u4ee5\u76f4\u63a5\u770b ReactNode \u7684\u5b9a\u4e49"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'type ReactNode <span class="token operator">=</span>\n  <span class="token operator">|</span> ReactChild\n  <span class="token operator">|</span> ReactFragment\n  <span class="token operator">|</span> ReactPortal\n  <span class="token operator">|</span> boolean\n  <span class="token operator">|</span> <span class="token keyword">null</span>\n  <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u76f8\u5173\u7c7b\u578b\u7684\u5b9a\u4e49"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'type ReactText <span class="token operator">=</span> string <span class="token operator">|</span> number<span class="token punctuation">;</span>\ntype ReactChild <span class="token operator">=</span> ReactElement <span class="token operator">|</span> ReactText<span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">ReactNodeArray</span> <span class="token keyword">extends</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span>ReactNode<span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\ntype ReactFragment <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">|</span> ReactNodeArray<span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React Element")),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">interface</span> <span class="token class-name">ReactElement</span><span class="token operator">&lt;</span><span class="token constant">P</span> <span class="token operator">=</span> any<span class="token punctuation">,</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">string</span> <span class="token operator">|</span> JSXElementConstructor<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token operator">=</span> string <span class="token operator">|</span> JSXElementConstructor<span class="token operator">&lt;</span>any<span class="token operator">>></span> <span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>\n      props<span class="token punctuation">:</span> <span class="token constant">P</span><span class="token punctuation">;</span>\n      key<span class="token punctuation">:</span> Key <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"h3",components:a,props:{id:"react-components"}},"React Components"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u4e00\u4e2a ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React Components")," Class \u5c31\u662f\u4e00\u4e2a\u7b80\u5355\u7684 js class"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">render</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5f53\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5c06\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u4e14\u4e00\u5b9a\u8981\u6709\u4e00\u4e2a ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"render")," \u51fd\u6570\u5728\u5185\u90e8\u3002\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u662f ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactComponent")),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyComponent</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// never do this</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u9664\u975e\u662f\u4e3a\u4e86\u6d4b\u8bd5\uff0c\u5426\u5219\u5343\u4e07\u4e0d\u8981\u8fd9\u4e48\u5199\u3002React \u4f1a\u5728\u5185\u90e8\u8c03\u7528\u7684\u3002Dan \u4e5f\u5728",m.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://overreacted.io/how-does-react-tell-a-class-from-a-function/"}},"\u4e4b\u524d\u7684\u6587\u7ae0"),"\u4e2d\u8bf4\u8fc7\u539f\u56e0"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u4e5f\u53ef\u4ee5\u628a ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactComponent")," class \u4f20\u9012\u7ed9 React.createElement \u5f97\u5230\u4e00\u4e2a ReactElement"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"JSX")," \u7684\u65b9\u5f0f"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5f53\u8fd9\u4e2a\u88ab\u4f20\u9012\u7ed9 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React.render")," \u65f6\uff0cReact \u5c06\u8c03\u7528\u6784\u9020\u51fd\u6570\u5e76\u4e14\u8fd4\u56de\u4e00\u4e2a ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactComponent")),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> component <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5982\u679c\u7ee7\u7eed\u8c03\u7528 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React.render")," \u5e26\u7740\u76f8\u540c\u7684 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ReactElement")," \u548c\u76f8\u540c\u7684 dom, \u90a3\u4e48\u603b\u662f\u8fd4\u56de\u76f8\u540c\u7684\u5b9e\u4f8b"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> componentA <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> componentB <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\ncomponentA <span class="token operator">===</span> componentB<span class="token punctuation">;</span> <span class="token comment">// true</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"uselayouteffect--useeffect"}},"useLayoutEffect & useEffect"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5728",m.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://reactjs.org/docs/hooks-intro.html"}},"\u5b98\u65b9\u6587\u6863")," \u4e2d\u5df2\u7ecf\u8be6\u7ec6\u7684\u4ecb\u7ecd\u4e86\u5404\u4e2a hook \u7684\u533a\u522b\u3002"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5b98\u65b9\u4ecb\u7ecd\u662f\u8fd9\u6837\u8bf4\u7684\uff1a"),m.a.createElement(u.MDXTag,{name:"p",components:a},"The signature is identical to useEffect, but it fires synchronously after all DOM mutations.\nUse this to read layout from the DOM and synchronously re-render.\nUpdates scheduled inside useLayoutEffect will be flushed synchronously, ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"before the browser has a chance to paint"),"."),m.a.createElement(u.MDXTag,{name:"p",components:a},"Tip"),m.a.createElement(u.MDXTag,{name:"p",components:a},"If you\u2019re migrating code from a class component, note useLayoutEffect fires in the same phase as componentDidMount and componentDidUpdate.\nHowever, we recommend starting with useEffect first and only trying useLayoutEffect if that causes a problem."),m.a.createElement(u.MDXTag,{name:"p",components:a},"If you use server rendering, keep in mind that neither useLayoutEffect nor useEffect can run until the JavaScript is downloaded.\nThis is why React warns when a server-rendered component contains useLayoutEffect.\nTo fix this, either move that logic to useEffect (if it isn\u2019t necessary for the first render),\nor delay showing that component until after the client renders (if the HTML looks broken until useLayoutEffect runs)."),m.a.createElement(u.MDXTag,{name:"p",components:a},"To exclude a component that needs layout effects from the server-rendered HTML,\nrender it conditionally with ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"showChild && <Child />")," and defer showing it with useEffect(() => { setShowChild(true); }, []).\nThis way, the UI doesn\u2019t appear broken before hydration."),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u8fd9\u662f\u5728 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"useLayoutEffect")," \u4e2d\u4ecb\u7ecd\u7684\u3002"),m.a.createElement(u.MDXTag,{name:"p",components:a},m.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://reactjs.org/docs/hooks-reference.html#useeffect"}},"useEffect")," \u7684\u4ecb\u7ecd\u53c2\u8003\u5b98\u7f51\u3002"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u5176\u4e2d\u5728 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"useLayoutEffect")," \u4e2d\u7684\u4ecb\u7ecd\u6709\u51e0\u70b9\u9700\u8981\u5173\u6ce8\u7684\u3002\u9996\u5148 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"it fires synchronously after all DOM mutations"),", \u540c\u6b65\u89e6\u53d1\u3002\n\u7b2c\u4e8c ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint"),"\n\u5728\u6d4f\u89c8\u5668\u6709\u673a\u4f1a\u7ed8\u753b\u4e4b\u524d\u3002"),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u90a3\u8fd9\u4e2a\u5230\u5e95\u9002\u5408\u4e8e\u4ec0\u4e48\u6837\u7684\u573a\u666f\u5462\uff1f\u4e0d\u5982\u5148\u4ece\u4e00\u4e2a\u4f8b\u5b50\u6765\u5206\u6790, \u5047\u8bbe\u6b64\u65f6\u6709\u4e00\u4e2a\u641c\u7d22\u5386\u53f2\u7684\u7684\u9700\u6c42\uff0c\u641c\u7d22\u8fc7\u7684\u5185\u5bb9\u9700\u8981\u589e\u52a0\u5230\u641c\u7d22\u5386\u53f2\u4e2d\u3002\u5e76\u4e14\u641c\u7d22\u5386\u53f2\u4e0d\u80fd\u8d85\u8fc7\n\u4e00\u884c\uff0c\u8d85\u8fc7\u4e86\u4e00\u884c\u5219\u8fdb\u884c\u622a\u53d6\uff0c\u628a\u8d85\u8fc7\u7684\u90a3\u90e8\u5206\u53bb\u6389\u3002"),m.a.createElement("div",null,m.a.createElement("img",{src:e(88)})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u6b64\u65f6\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u53bb\u505a\u3002\u57fa\u672c\u505a\u6cd5\u5e94\u8be5\u662f\u70b9\u51fb\u641c\u7d22\uff0c\u5728 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"useEffect")," \u91cc\u8fdb\u884c\u8ba1\u7b97\u5df2\u6e32\u67d3\u7684\u5386\u53f2\u7684\u8282\u70b9\u7684\u5bbd\u5ea6\uff0c\u7136\u540e\u904d\u5386\u5386\u53f2\u7684 dom \u8282\u70b9\u8fdb\u884c\u5bbd\u5ea6\u76f8\u52a0\uff0c\u6700\u540e\u6765\u5224\u65ad\n\u662f\u5426\u8d85\u8fc7\u4e86\u6700\u5927\u5bbd\u5ea6\uff0c\u5982\u679c\u8d85\u8fc7\u4e86\u6700\u5927\u5bbd\u5ea6\uff0c\u90a3\u4e48\u8fdb\u884c\u622a\u53d6\uff0c\u5426\u5219\u4e0d\u8fdb\u884c\u622a\u53d6\u3002\uff08\u5f53\u7136\u5982\u679c\u8981\u662f\u80fd\u63d0\u524d\u77e5\u9053 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"input")," \u8f93\u5165\u7684\u5185\u5bb9\u533a\u7684\u5bbd\u5ea6\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u5728\u4e8b\u4ef6\u51fd\u6570\u4e2d\u8fdb\u884c\u63d0\u524d\u5224\u65ad\u5904\u7406)\u3002\n\u76ee\u524d\u5904\u7406\u662f\u5728 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"useEffect")," \u4e2d\u8fdb\u884c\u904d\u5386\u6765\u8ba1\u7b97\u5bbd\u5ea6\u7684\u3002\u8fd9\u4e2a\u770b\u8d77\u6765\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u5bf9\u5427\u3002\u4e0d\u59a8\u770b\u4e00\u4e0b\u6548\u679c"),m.a.createElement("div",null,m.a.createElement("img",{src:e(89)})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u770b\u5230\uff0c\u6709\u4e00\u4e2a\u95ea\u52a8\u7684\u8fc7\u7a0b\uff0c\u56e0\u4e3a\u5728 useEffect \u4e2d\u8fdb\u884c\u4e86\u622a\u53d6\uff0c\u6b64\u65f6\u8fd9\u4e2a dom \u5df2\u7ecf\u88ab\u6e32\u67d3\u5230\u9875\u9762\u4e0a\u4e86\u3002\u5728\u8fdb\u884c\u622a\u53d6\uff0c\u5c31\u4f1a\u770b\u5230",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"\u95ea\u52a8"),"\u7684\u73b0\u8c61\u3002"),m.a.createElement(u.MDXTag,{name:"pre",components:a},m.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> nextHistory <span class="token operator">=</span> <span class="token function">getNextHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">saveHistory</span><span class="token punctuation">(</span>nextHistory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>history<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> getNextHistory <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> cloneHistory <span class="token operator">=</span> history<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> totalWidth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> historyRefs<span class="token punctuation">.</span>current<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> node <span class="token operator">=</span> historyRefs<span class="token punctuation">.</span>current<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">{</span> width <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      totalWidth <span class="token operator">+=</span> width <span class="token operator">+</span> offset<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>totalWidth <span class="token operator">></span> <span class="token constant">MAX_HISTORY_LENGTH</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        cloneHistory <span class="token operator">=</span> cloneHistory<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> cloneHistory<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u90a3\u5982\u679c\u6362\u6210 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"useLayoutEffect")," \u5462\uff1f"),m.a.createElement("div",null,m.a.createElement("img",{src:e(90)})),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u53ef\u4ee5\u770b\u51fa\u5728\u4f7f\u7528 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"useLayoutEffect")," \u7684\u65f6\u5019\u4e4b\u524d\u7684\u95ea\u52a8\u4e0d\u5b58\u5728\u4e86\u3002\u56de\u5934\u770b\u4e00\u4e0b\u4e4b\u524d\u6807\u8bb0\u7684\u5730\u65b9\u3002\u5176\u4e2d\u6709\u4e00\u5904\u5403\u8fd9\u6837\u7684"),m.a.createElement(u.MDXTag,{name:"p",components:a},m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint")),m.a.createElement(u.MDXTag,{name:"p",components:a},"\u6240\u4ee5\u9488\u5bf9\u51fa\u73b0\u9700\u8981\u9891\u7e41\u4fee\u6539 dom \u6216\u8005\u9700\u8981\u5728 dom \u6e32\u67d3\u540e\u53c8\u8981\u7acb\u9a6c\u64cd\u4f5c dom \u7684\u4ee5\u53ca\u8fdb\u884c\u4e00\u4e9b\u5e03\u5c40\u64cd\u4f5c\u7684\u90fd\u53ef\u4ee5\u4f7f\u7528 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"useLayoutEffect"),"\u3002\u6bd4\u5982 ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Popover"),",\n",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ToolTip"),", ",m.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DronDown")," \u7b49\u76f8\u5173\u7ec4\u4ef6\u3002"))}}]),a}(m.a.Component),d=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"\u76ee\u5f55",level:2,title:"\u76ee\u5f55",children:[]},{id:"react-virtual-dom-terminology",level:2,title:"React Virtual Dom Terminology",children:[{id:"react-elements",level:3,title:"React Elements",children:[]},{id:"react-nodes",level:3,title:"React Nodes",children:[]},{id:"react-components",level:3,title:"React Components",children:[]}]},{id:"uselayouteffect--useeffect",level:2,title:"useLayoutEffect & useEffect",children:[]}]},g={}},88:function(n,a,e){n.exports=e.p+"static/media/his.a2578714.jpg"},89:function(n,a,e){n.exports=e.p+"static/media/useEffect.578d1fbd.gif"},90:function(n,a,e){n.exports=e.p+"static/media/useLayoutEffect.3545cf97.gif"}}]);
//# sourceMappingURL=34.8fa7acd9.chunk.js.map