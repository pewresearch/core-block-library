(()=>{"use strict";const e=window.wp.element,i=window.wp.i18n,n=window.wp.hooks,s=window.wp.compose,l=window.wp.blockEditor,t=window.wp.components,r=window.wp.blocks,o=(0,e.createElement)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,e.createElement)(t.Path,{d:"M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7.5 11.5H6c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h5.5v10zm4 0H13v-10h2.5v10zm4-.5c0 .3-.2.5-.5.5h-2v-10h2c.3 0 .5.2.5.5v9z"}));(0,n.addFilter)("editor.BlockEdit","prc-block-library/columns",(0,s.createHigherOrderComponent)((n=>function(s){const{name:r,attributes:o,setAttributes:a}=s;if("core/columns"!==r)return(0,e.createElement)(n,s);const{useCSSGrid:c,enableDivider:d,className:m}=o;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n,s),(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:"CSS Grid"},(0,e.createElement)(t.ToggleControl,{label:(0,i.__)("Enable CSS Grid"),checked:c,onChange:e=>{const i=m?m.split(" "):[];console.log("Classes...",i),e?i.includes("is-css-grid")||i.push("is-css-grid"):i.splice(i.indexOf("is-css-grid"),1),a({className:i.join(" "),useCSSGrid:!c})},help:(0,i.__)('When this is enabled, columns will be displayed using CSS grid as a result options like "stack on mobile" will be ignored.')}),(0,e.createElement)(t.ToggleControl,{label:(0,i.__)("Enable Divider"),disabled:!c,checked:d,onChange:e=>{const i=m?m.split(" "):[];console.log("Classes...",i),e?i.includes("has-divider")||i.push("has-divider"):i.splice(i.indexOf("has-divider"),1),a({className:i.join(" "),enableDivider:!d})}}))))}),"withColumnsCSSGridControls"),100);const a={className:"is-css-grid",useCSSGrid:!0,enableDivider:!0},c=[["core/column",{className:"column1-grid__span-3 column1-tablet-grid__span-2 column1-mobile-grid__span-4",gridSpan:3,tabletGridSpan:2,mobileGridSpan:4}],["core/column",{className:"column2-grid__span-6 column2-tablet-grid__span-4 column2-mobile-grid__span-4",gridSpan:6,tabletGridSpan:4,mobileGridSpan:4}],["core/column",{className:"column3-grid__span-3 column3-tablet-grid__span-2 column3-mobile-grid__span-4",gridSpan:3,tabletGridSpan:2,mobileGridSpan:4}]],d=c.map((e=>({name:e[0],attributes:{...e[1]},innerBlocks:[{name:"core/paragraph",attributes:{
/* translators: example text. */
content:(0,i.__)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.")}}]})));(0,r.registerBlockVariation)("core/columns",{name:"css-grid",title:(0,i.__)("CSS Grid","prc-block-library"),icon:o,description:(0,i.__)("A columns block set to use CSS Grid. This block is experimental and may change in the future.","prc-block-library"),attributes:a,innerBlocks:[...c],example:{attributes:a,innerBlocks:d,viewportWidth:1200},isActive:(e,i)=>e.useCSSGrid===i.useCSSGrid})})();
//# sourceMappingURL=index.js.map