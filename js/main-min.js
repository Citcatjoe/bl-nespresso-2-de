!function($){window.scrollTo(0,0),setTimeout((function(){$("body").addClass("is-visible"),i.play()}),1e3),new jBox("Tooltip",{attach:".tooltip",trigger:"click",closeOnMouseleave:!1,closeButton:!0,maxWidth:350,position:{x:"center",y:"bottom"},offset:{x:0,y:10},animation:"move"});var e=new ScrollMagic.Controller,t=$(".img-hero"),a=t.find(".hero-shape"),o=t.find(".hero-caps1"),n=t.find(".hero-caps2"),s=t.find(".hero-bean1"),r=t.find(".hero-bean2"),i=new TimelineMax({paused:!0}).to(a,1,{autoAlpha:1,rotate:"-=25deg",ease:Power4.easeInOut}).to(o,.5,{autoAlpha:1,x:"-=10px",ease:Power4.easeInOut},"-=0.5s").to(n,.5,{autoAlpha:1,x:"-=10px",ease:Power4.easeInOut},"-=0.250s").to(s,.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.750s").to(r,.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.5s");(new TimelineMax).set(a,{autoAlpha:0,rotate:"+=25deg",transformOrigin:"center center"}).set(o,{autoAlpha:0,x:"+=10px",transformOrigin:"center center"}).set(n,{autoAlpha:0,x:"+=10px",transformOrigin:"center center"}).set(s,{autoAlpha:0,transformOrigin:"center center"}).set(r,{autoAlpha:0,transformOrigin:"center center"});var u=$("#title1"),l=u.find(".title-1-img-1"),p=u.find(".title-1-img-2"),w=u.find(".title-1-img-3"),d=u.find(".title-1-img-4"),h=u.find(".title-1-img-5"),g=new TimelineMax({paused:!0}).to(h,1,{autoAlpha:1,x:"-=15px",ease:Power4.easeInOut}).to(d,1,{autoAlpha:1,x:"-=15px",ease:Power4.easeInOut},"-=0.6s").to(w,1,{autoAlpha:1,x:"-=15px",ease:Power4.easeInOut},"-=0.6s").to(p,1,{autoAlpha:1,x:"-=15px",ease:Power4.easeInOut},"-=0.6s").to(l,1,{autoAlpha:1,x:"-=15px",ease:Power4.easeInOut},"-=0.6s");(new TimelineMax).set(l,{autoAlpha:0,x:"+=15px"}).set(p,{autoAlpha:0,x:"+=15px"}).set(w,{autoAlpha:0,x:"+=15px"}).set(d,{autoAlpha:0,x:"+=15px"}).set(h,{autoAlpha:0,x:"+=15px"}),new ScrollMagic.Scene({triggerElement:"#title1"}).on("enter",(function(e){g.play()})).triggerHook(.6).addTo(e);var x=$(".quote1"),c=x.find(".linetop"),O=x.find(".linebottom"),A=x.find(".quote-txt"),I=x.find(".auth"),P=new TimelineMax({paused:!0}).to(c,.5,{width:"100%",ease:Power4.easeInOut}).to(O,.5,{width:"100%",ease:Power4.easeInOut},"-=0.5s").to(A,.5,{autoAlpha:1,x:"+=20px",ease:Power4.easeInOut},"-=0.350s").to(I,.5,{autoAlpha:1,x:"+=20px",ease:Power4.easeInOut},"-=0.350s");(new TimelineMax).set(c,{width:"0%"}).set(O,{width:"0%"}).set(A,{autoAlpha:0,x:"-=20px"}).set(I,{autoAlpha:0,x:"-=20px"}),new ScrollMagic.Scene({triggerElement:".quote1"}).on("enter",(function(e){P.play()})).triggerHook(.6).addTo(e);var f=$("#title2").find(".title-2-img-1"),m=new TimelineMax({paused:!0}).to(f,1,{autoAlpha:1,x:"-=15px",ease:Power4.easeInOut});(new TimelineMax).set(f,{autoAlpha:0,x:"+=15px"}),new ScrollMagic.Scene({triggerElement:"#title2"}).on("enter",(function(e){m.play()})).triggerHook(.6).addTo(e);var y=$(".best-coffee").find("img"),T=new TimelineMax({paused:!0}).staggerTo(y,2,{autoAlpha:1,ease:Power4.easeInOut},.2,"-=1");(new TimelineMax).set(y,{autoAlpha:0}),new ScrollMagic.Scene({triggerElement:".best-coffee"}).on("enter",(function(e){T.play()})).triggerHook(.6).addTo(e);var M=$("#title3").find(".title-3-img-1"),S=new TimelineMax({paused:!0}).to(M,1,{autoAlpha:1,x:"-=15px",ease:Power4.easeInOut});(new TimelineMax).set(M,{autoAlpha:0,x:"+=15px"}),new ScrollMagic.Scene({triggerElement:"#title3"}).on("enter",(function(e){S.play()})).triggerHook(.6).addTo(e);var k=$(".composting"),v=k.find(".step-1"),b=k.find(".step-1-svg"),E=b.find("#dot"),H=v.find(".step-1-txt"),q=v.find("#banana1"),j=v.find("#orange1"),B=v.find("#orange2"),C=(o=v.find("#caps1"),n=v.find("#caps2"),v.find("#caps3"),v.find("#mud")),Q=k.find(".step-2"),W=k.find(".step-2-svg"),z=W.find("#dot"),D=Q.find(".step-2-txt"),F=Q.find("#water"),G=Q.find("#stick"),J=k.find(".step-3"),K=k.find(".step-3-svg"),L=K.find("#dot"),N=J.find(".step-3-txt"),R=J.find("#shine"),U=J.find("#mud"),V=new TimelineMax({paused:!0}).to([E,b,H],.5,{autoAlpha:1,ease:Power4.easeInOut}).to(j,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(j,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(C,.5,{y:"-=33.33%",ease:Power4.easeInOut},"-=0.5s").to(B,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(B,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(C,.5,{y:"-=33.33%",ease:Power4.easeInOut},"-=0.5s").to(q,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(q,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(C,.5,{y:"-=33.33%",ease:Power4.easeInOut},"-=0.5s"),X=new TimelineMax({paused:!0}).to([E,b,H],.5,{autoAlpha:.3,ease:Power4.easeInOut}).to([z,W,D],.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.5s").to(F,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(F,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(G,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(G,.5,{y:"+=70%",ease:Power4.easeInOut}).to(G,.5,{x:"-=500%",rotate:"-20%",ease:Power4.easeInOut}).to(G,.5,{x:"+=500%",rotate:"+20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"-=500%",rotate:"-20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"+=500%",rotate:"+20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"-=500%",rotate:"-20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"+=500%",rotate:"+20%",ease:Power4.easeInOut},"-=0.2s"),Y=new TimelineMax({paused:!0}).to([z,W,D],.5,{autoAlpha:.3,ease:Power4.easeInOut}).to([L,K,N],.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.5s").to(U,2,{y:"+=100%",ease:Power4.easeInOut}).to(R,.1,{autoAlpha:1,ease:Power4.easeInOut}).to(R,.1,{autoAlpha:0,ease:Power4.easeInOut}).to(R,.1,{autoAlpha:1,ease:Power4.easeInOut}).to([E,b,H],.5,{autoAlpha:1,ease:Power4.easeInOut},"+=0.5s").to([z,W,D],.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.5s"),Z=new TimelineMax({paused:!0}).to([E,b,H],.5,{autoAlpha:1,ease:Power4.easeInOut}).to(j,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(j,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(C,.5,{y:"-=33.33%",ease:Power4.easeInOut},"-=0.5s").to(B,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(B,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(C,.5,{y:"-=33.33%",ease:Power4.easeInOut},"-=0.5s").to(q,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(q,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(C,.5,{y:"-=33.33%",ease:Power4.easeInOut},"-=0.5s").to([E,b,H],.5,{autoAlpha:.3,ease:Power4.easeInOut},"+=0.5s").to([z,W,D],.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.5s").to(F,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(F,.5,{autoAlpha:0,y:"+=40px",ease:Power4.easeInOut}).to(G,.5,{autoAlpha:1,ease:Power4.easeInOut}).to(G,.5,{y:"+=70%",ease:Power4.easeInOut}).to(G,.5,{x:"-=500%",rotate:"-20%",ease:Power4.easeInOut}).to(G,.5,{x:"+=500%",rotate:"+20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"-=500%",rotate:"-20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"+=500%",rotate:"+20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"-=500%",rotate:"-20%",ease:Power4.easeInOut},"-=0.2s").to(G,.5,{x:"+=500%",rotate:"+20%",ease:Power4.easeInOut},"-=0.2s").to([z,W,D],.5,{autoAlpha:.3,ease:Power4.easeInOut},"+=0.5s").to([L,K,N],.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.5s").to(U,2,{y:"+=100%",ease:Power4.easeInOut}).to(R,.1,{autoAlpha:1,ease:Power4.easeInOut}).to(R,.1,{autoAlpha:0,ease:Power4.easeInOut}).to(R,.1,{autoAlpha:1,ease:Power4.easeInOut}).to([E,b,H],.5,{autoAlpha:1,ease:Power4.easeInOut},"+=0.5s").to([z,W,D],.5,{autoAlpha:1,ease:Power4.easeInOut},"-=0.5s");(new TimelineMax).set([E,b,H],{autoAlpha:.3}).set([z,W,D],{autoAlpha:.3}).set([L,K,N],{autoAlpha:.3}).set([q,j,B,caps1,caps2,caps3],{autoAlpha:0}).set(C,{y:"+=100%"}).set(F,{autoAlpha:0}).set(G,{autoAlpha:0,y:"-=70%",transformOrigin:"center bottom"}).set(R,{autoAlpha:0}),$(window).width()<768?(new ScrollMagic.Scene({triggerElement:".step-1"}).on("enter",(function(e){V.play()})).triggerHook(.6).addTo(e),new ScrollMagic.Scene({triggerElement:".step-2"}).on("enter",(function(e){X.play()})).triggerHook(.6).addTo(e),new ScrollMagic.Scene({triggerElement:".step-3"}).on("enter",(function(e){Y.play()})).triggerHook(.6).addTo(e)):new ScrollMagic.Scene({triggerElement:".composting"}).on("enter",(function(e){Z.play()})).triggerHook(.6).addTo(e);var _=$(".quote2"),ee=_.find(".linetop"),te=_.find(".linebottom"),ae=_.find(".quote-txt"),oe=_.find(".auth"),ne=new TimelineMax({paused:!0}).to(ee,.5,{width:"100%",ease:Power4.easeInOut}).to(te,.5,{width:"100%",ease:Power4.easeInOut},"-=0.5s").to(ae,.5,{autoAlpha:1,x:"+=20px",ease:Power4.easeInOut},"-=0.350s").to(oe,.5,{autoAlpha:1,x:"+=20px",ease:Power4.easeInOut},"-=0.350s");(new TimelineMax).set(ee,{width:"0%"}).set(te,{width:"0%"}).set(ae,{autoAlpha:0,x:"-=20px"}).set(oe,{autoAlpha:0,x:"-=20px"}),new ScrollMagic.Scene({triggerElement:".quote2"}).on("enter",(function(e){ne.play()})).triggerHook(.6).addTo(e);var se=$(".ok-compost").find("img"),re=new TimelineMax({paused:!0}).staggerTo(se,2,{autoAlpha:1,scale:1,ease:Power4.easeInOut},.2,"-=1");(new TimelineMax).set(se,{autoAlpha:0,scale:2,transformOrigin:"center center"}),new ScrollMagic.Scene({triggerElement:".ok-compost"}).on("enter",(function(e){re.play()})).triggerHook(.6).addTo(e);var ie=$(".good-compost"),ue=ie.find(".good-compost-air"),le=ie.find(".good-compost-recyclable"),pe=ie.find(".good-compost-grind"),we=ie.find(".good-compost-scale"),de=ie.find(".good-compost-www"),he=new TimelineMax({paused:!0}).to(ue,1.5,{autoAlpha:1,x:"+=15px",ease:Power4.easeInOut}).to(le,1.5,{autoAlpha:1,rotate:"-=90deg",ease:Power4.easeInOut},"-=1.5s").to(pe,1.5,{autoAlpha:1,rotate:"-=90deg",ease:Power4.easeInOut},"-=1.5s").to(we,1.5,{autoAlpha:1,y:"+=10px",ease:Power4.easeInOut},"-=1.5s").to(de,1.5,{autoAlpha:1,ease:Power4.easeInOut},"-=1.5s");(new TimelineMax).set(ue,{autoAlpha:0,x:"-=10px",transformOrigin:"center center"}).set(le,{autoAlpha:0,rotate:"+=90deg",transformOrigin:"center center"}).set(pe,{autoAlpha:0,rotate:"+=90deg",transformOrigin:"center center"}).set(we,{autoAlpha:0,y:"-=10px",transformOrigin:"center center"}).set(de,{autoAlpha:0,transformOrigin:"center center"}),new ScrollMagic.Scene({triggerElement:".good-compost"}).on("enter",(function(e){he.play()})).triggerHook(.6).addTo(e)}(jQuery);