# CSS as MOUSE
 _A Pen created at CodePen.io. Original URL: [https://codepen.io/sbuellet/pen/ZZrNxZ](https://codepen.io/sbuellet/pen/ZZrNxZ).

 This pen demos functionality that was previously (practically) impossible: the transition of a background gradient (because background gradients are technically instances of `background-image`, so prior implementations were obliged to manipulate the opacity of dummy elements)

Here, the ability to change CSS Custom Properties (CSS variables) via JS means that we can simply, and dynamically, update the start and end values for a gradient without the restrictions of yore.

Inspired by the amazing @davidkpiano and his talk at CSSDevConf
http://slides.com/davidkhourshid/reactanim#/
(Seriously: go and look at the slides)