import{s as m,O as _,f as h,g as f,h as g,d as i,j as u,P as c,i as d,Q as M,R as p,S as v}from"./scheduler.bae0eb40.js";import{S as y,i as Y,a as b,t as F}from"./index.cce7df92.js";const x=(s,e=new Date)=>{let n=0,a=0,r=0;return e.getFullYear()!==s.getFullYear()?(r=e.getMonth(),a=(e.getFullYear()-s.getFullYear()-1)*12,n=12-s.getMonth()):n=e.getMonth()-s.getMonth(),n+a+r+1},J=s=>["January","February","March","April","May","June","July","August","September","October","November","December"][s],T=(s,e)=>`${s} | ${e}`;function N(s){let e,n,a;const r=s[2].default,l=_(r,s,s[1],null);return{c(){e=h("h1"),l&&l.c(),this.h()},l(t){e=f(t,"H1",{class:!0});var o=g(e);l&&l.l(o),o.forEach(i),this.h()},h(){u(e,"class",n=c(`text-[2.5em] sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${s[0]}`)+" svelte-ls79kc")},m(t,o){d(t,e,o),l&&l.m(e,null),a=!0},p(t,[o]){l&&l.p&&(!a||o&2)&&M(l,r,t,t[1],a?v(r,t[1],o,null):p(t[1]),null),(!a||o&1&&n!==(n=c(`text-[2.5em] sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${t[0]}`)+" svelte-ls79kc"))&&u(e,"class",n)},i(t){a||(b(l,t),a=!0)},o(t){F(l,t),a=!1},d(t){t&&i(e),l&&l.d(t)}}}function S(s,e,n){let{$$slots:a={},$$scope:r}=e,{classes:l=""}=e;return s.$$set=t=>{"classes"in t&&n(0,l=t.classes),"$$scope"in t&&n(1,r=t.$$scope)},[l,r,a]}class k extends y{constructor(e){super(),Y(this,e,S,N,m,{classes:0})}}export{k as M,x as c,J as g,T as u};
