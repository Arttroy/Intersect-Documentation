(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{789:function(e,t,a){"use strict";a.r(t);var o=a(27),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"applying-patches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applying-patches"}},[e._v("#")]),e._v(" Applying Patches")]),e._v(" "),a("p",[e._v("GitHub patches are very easy to apply, and they allow you to check compatibility before doing so.")]),e._v(" "),a("p",[e._v("Please note, applying git patches modifies your engines source code. Patches can impact performance and introduce bugs into your game. Only install patches from trusted developers!")]),e._v(" "),a("p",[e._v("Download your patch and move it to the root of your Intersect repository. Then open a command prompt window and navigate to your local Intersect repo. This can be done easily by clicking Repository -> Open In Command Prompt within GitHub Desktop.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png",alt:"commandprompt"}})]),e._v(" "),a("p",[e._v("In order to check for compatibility enter the following command replacing the patch filename with the one you downloaded. If there are compatibility issues the patch author may need to remake the patch using your version of Intersect, or you maybe applying multiple patches that conflict and are not compatible with each other.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git apply --check patchName.patch\n")])])]),a("p",[a("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/e3e6c8d588a49bd1ef2ebd69c67f115f.png",alt:"check"}})]),e._v(" "),a("p",[e._v("If no errors appear the patch is compatible, go ahead and run the following command to apply the patch. You might see some warnings, but as long as there are no errors you are good to go!")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git am --signoff < patchName.patch\n")])])]),a("p",[a("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/7fb32c944b7147a3397c8a39e634af1f.png",alt:"apply"}})]),e._v(" "),a("p",[e._v("If you need to remove a patch use the git apply -R command as shown below")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git apply -R patchName.patch\n")])])]),a("p",[a("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/cbd407c31ce1c87beaaea3277e32a788.png",alt:"reverting"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);