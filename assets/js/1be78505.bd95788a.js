(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[9514,4608],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ie}});var n=a(7294),i=a(3905),r=a(2263),o=a(6291),l=a(2135),s=a(2122),c=a(9756),u=a(6010),d=a(9732),m=a(944),b=a(1839),p=a(3783),h=a(7898),f=a(6742),v=a(3919),E=a(5537),g=function(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=a(4478),_=a(8617),C=a(4973),Z="sidebar_a3j0",N="sidebarWithHideableNavbar_VlPv",I="sidebarHidden_OqfG",S="sidebarLogo_hmkv",R="menu_cyFh",y="menuLinkText_lRH+",T="menuWithAnnouncementBar_+O1J",w="collapseSidebarButton_eoK2",A="collapseSidebarButtonIcon_e+kA",x="sidebarMenuIcon_iZzd",L="sidebarMenuCloseIcon_6kU2",M=["items"],B=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"];var D=function e(t,a){return"link"===t.type?(0,d.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},H=(0,n.memo)((function(e){var t=e.items,a=(0,c.Z)(e,M);return t.map((function(e,t){return n.createElement(O,(0,s.Z)({key:t,item:e},a))}))}));function O(e){return"category"===e.item.type?n.createElement(F,e):n.createElement(W,e)}function F(e){var t,a,i,r=e.item,o=e.onItemClick,l=e.collapsible,d=e.activePath,m=(0,c.Z)(e,B),b=r.items,p=r.label,h=D(r,d),f=(a=h,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),v=(0,n.useState)((function(){return!!l&&(!h&&r.collapsed)})),E=v[0],g=v[1],k=(0,n.useRef)(null),_=(0,n.useState)(void 0),C=_[0],Z=_[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){h&&!f&&E&&g(!1)}),[h,f,E]);var I=(0,n.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:n.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&h},t[y]=!l,t)),onClick:l?I:void 0,href:l?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){E||N(!1)}},n.createElement(H,{items:b,tabIndex:E?"-1":"0",onItemClick:o,collapsible:l,activePath:d})))}function W(e){var t=e.item,a=e.onItemClick,i=e.activePath,r=(e.collapsible,(0,c.Z)(e,P)),o=t.href,l=t.label,d=D(t,i);return n.createElement("li",{className:"menu__list-item",key:l},n.createElement(f.Z,(0,s.Z)({className:(0,u.Z)("menu__link",{"menu__link--active":d}),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:a},r),(0,v.Z)(o)?l:n.createElement("span",null,l,n.createElement(_.Z,null))))}function z(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",w),onClick:t},n.createElement(g,{className:A}))}function U(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,u.Z)(x,L)},"\xd7"):n.createElement(k.Z,{className:x,height:24,width:24}))}var q=function(e){var t,a,i=e.path,r=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,s=e.onCollapse,c=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,h.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),v=(0,d.LU)(),g=v.navbar.hideOnScroll,k=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,n.useEffect)((function(){i===p.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),w=y.showResponsiveSidebar,A=y.closeResponsiveSidebar,x=y.toggleResponsiveSidebar;return n.createElement("div",{className:(0,u.Z)(Z,(t={},t[N]=g,t[I]=c,t))},g&&n.createElement(E.Z,{tabIndex:-1,className:S}),n.createElement("nav",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",R,(a={"menu--show":w},a[T]=!_&&f,a)),"aria-label":(0,C.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(U,{responsiveSidebarOpened:w,onClick:x}),n.createElement("ul",{className:"menu__list"},n.createElement(H,{items:r,onItemClick:A,collapsible:l,activePath:i}))),k&&n.createElement(z,{onClick:s}))},J=a(7277),K=a(4608),Y=a(5977),j="docPage_lDyR",G="docMainContainer_r8cw",Q="docMainContainerEnhanced_SOUu",V="docSidebarContainer_0YBq",X="docSidebarContainerHidden_Qlt2",$="collapsedDocSidebar_zZpm",ee="expandSidebarButtonIcon_cxi8",te="docItemWrapperEnhanced_aT5H",ae="docItemWrapper_NJLN";function ne(e){var t,a,o,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,r.Z)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,k=b.version,_=function(e){var t,a=e.versionMetadata,n=e.currentDocRoute,i=a.permalinkToSidebar,r=a.docsSidebars,o=i[n.path]||i[(t=n.path,t.endsWith("/")?t:t+"/")]||i[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];return{sidebar:r[o],sidebarName:o}}({versionMetadata:b,currentDocRoute:m}),Z=_.sidebarName,N=_.sidebar,I=(0,n.useState)(!1),S=I[0],R=I[1],y=(0,n.useState)(!1),T=y[0],w=y[1],A=(0,n.useCallback)((function(){T&&w(!1),R(!S)}),[T]);return n.createElement(l.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:k,tag:(0,d.os)(E,k)}},n.createElement("div",{className:j},N&&n.createElement("aside",{className:(0,u.Z)(V,(t={},t[X]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V)&&S&&w(!0)}},n.createElement(q,{key:Z,sidebar:N,path:m.path,sidebarCollapsible:null==(a=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:A,isHidden:T}),T&&n.createElement("div",{className:$,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},n.createElement(g,{className:ee}))),n.createElement("main",{className:(0,u.Z)(G,(s={},s[Q]=S||!N,s))},n.createElement("div",{className:(0,u.Z)("container padding-top--md padding-bottom--lg",ae,(c={},c[te]=S,c))},n.createElement(i.Zo,{components:J.Z},p)))))}var ie=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,r=t.find((function(e){return(0,Y.LX)(i.pathname,e)}));return r?n.createElement(ne,{currentDocRoute:r,versionMetadata:a},(0,o.Z)(t)):n.createElement(K.default,e)}},4608:function(e,t,a){"use strict";a.r(t);var n=a(7294),i=a(2135),r=a(4973);t.default=function(){return n.createElement(i.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);