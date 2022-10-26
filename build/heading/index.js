(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,r=window.wp.compose,o=window.wp.blocks,n=window.wp.blockEditor,l=window.wp.components,a=window.wp.hooks,i="core/heading",c="prc-core-block-library/heading",p=(0,r.createHigherOrderComponent)((r=>function(o){const{name:a,attributes:c,setAttributes:p}=o;if(i!==a)return(0,e.createElement)(r,o);const{isChapter:s,altTocText:d,content:w}=c;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.BlockControls,null,(0,e.createElement)(l.ToolbarGroup,null,(0,e.createElement)(l.ToolbarButton,{icon:"book-alt",label:s?"Remove Chapter":"Make Chapter",isActive:s,onClick:()=>{p({isChapter:!s})}}))),(0,e.createElement)(n.InspectorAdvancedControls,null,s&&(0,e.createElement)(l.TextControl,{label:(0,t.__)("Alternate TOC Text","prc-block-library"),value:d,placeholder:w,onChange:e=>p({altTocText:e})})),(0,e.createElement)(r,o))}),"withChapterControls");(0,a.addFilter)("editor.BlockEdit",c,p,21),(0,a.addFilter)("blocks.registerBlockType",c,(function(e,t){return i!==t||(e.attributes.isChapter={type:"boolean",default:!1}),e})),(0,o.registerBlockVariation)(i,{name:"chapter",title:(0,t.__)("Chapter"),description:(0,t.__)("A chapter heading."),icon:"editor-ol",attributes:{isChapter:!0,level:3},isActive:e=>{let{isChapter:t}=e;return t}})})();
//# sourceMappingURL=index.js.map