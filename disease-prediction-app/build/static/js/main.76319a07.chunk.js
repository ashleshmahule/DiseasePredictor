(this["webpackJsonpdisease-prediction-app"]=this["webpackJsonpdisease-prediction-app"]||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(28),i=a.n(o),l=(a(77),a(78),a(38)),r=a(35),c=a(14);a(79);var m=function(){return s.a.createElement(l.a,{className:"navClass",sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark"},s.a.createElement(c.b,{to:"/"},s.a.createElement(l.a.Brand,{className:"brand"},"Disease Predictor")),s.a.createElement(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),s.a.createElement(l.a.Collapse,{id:"responsive-navbar-nav"},s.a.createElement(r.a,{className:"mr-auto"},s.a.createElement(r.a.Link,{as:c.b,className:"lnk",to:"/DiseasePrediction"},"Predict Disease"),s.a.createElement(r.a.Link,{as:c.b,className:"lnk",to:"/Statistics"},"View Statistics")),s.a.createElement(r.a,null,s.a.createElement(r.a.Link,{eventKey:2,href:"https://ashleshmahule.me/",className:"lnk"},"Developer"))))},u=a(10),d=a(16),_=a(17),p=a(19),h=a(18),g=(a(85),a(54),a(33)),f=a(21),y=a(13),b=a(34),E=a(27),v=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({username:e.target.value})},n.state={username:null},n}return Object(_.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,null),s.a.createElement(E.a,null,s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"Welcome ",this.state.username)),s.a.createElement(g.a,{id:"form"},s.a.createElement(f.a,{className:"justify-content-md-center"},s.a.createElement(y.a,{sm:"3",md:"3",lg:"3"},s.a.createElement(g.a.Group,{as:g.a.Row,controlId:"name"},s.a.createElement(g.a.Control,{onChange:this.handleChange,type:"text",placeholder:"Enter Your Name"})))))),s.a.createElement(c.b,{to:"/DiseasePrediction"},s.a.createElement(b.a,{className:"gs",variant:"light"},"Get Started")))}}]),a}(s.a.Component),k=a(22),j=a(70),w=(a(101),a(51)),O=a.n(w),C=a(69),F=(a(103),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).symptoms=e.symp,n.data={},n.state={disease:null},n.GetFromFlask=n.GetFromFlask.bind(Object(k.a)(n)),n}return Object(_.a)(a,[{key:"GetFromFlask",value:function(){var e=Object(C.a)(O.a.mark((function e(){var t=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.symptoms),fetch("https://diseasepredtictor.herokuapp.com/getDisease?query="+this.symptoms).then((function(e){return e.json()})).then((function(e){t.setState({disease:e.disease}),localStorage.setItem("diseaseName",e.disease),localStorage.setItem("drug",e.drug),console.log("set")}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){this.GetFromFlask();var e=this.state.disease;return console.log({disease:e}),s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,null,s.a.createElement(f.a,{className:"justify-content-md-center predicted"},s.a.createElement(y.a,{sm:"6",md:"6",lg:"6"},"Predicted Disease: ",this.state.disease))))}}]),a}(n.Component)),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).symptoms=["abdominal_pain","abnormal_menstruation","acidity","acute_liver_failure","altered_sensorium","anxiety","back_pain","belly_pain","blackheads","bladder_discomfort","blister","blood_in_sputum","bloody_stool","blurred_and_distorted_vision","breathlessness","brittle_nails","bruising","burning_micturition","chest_pain","chills","cold_hands_and_feets","coma","congestion","constipation","continuous_feel_of_urine","continuous_sneezing","cough","cramps","dark_urine","dehydration","depression","diarrhoea","dischromic _patches","distention_of_abdomen","dizziness","drying_and_tingling_lips","enlarged_thyroid","excessive_hunger","extra_marital_contacts","family_history","fast_heart_rate","fatigue","fluid_overload","fluid_overload.1","foul_smell_of urine","headache","high_fever","hip_joint_pain","history_of_alcohol_consumption","increased_appetite","indigestion","inflammatory_nails","internal_itching","irregular_sugar_level","irritability","irritation_in_anus","itching","joint_pain","knee_pain","lack_of_concentration","lethargy","loss_of_appetite","loss_of_balance","loss_of_smell","malaise","mild_fever","mood_swings","movement_stiffness","mucoid_sputum","muscle_pain","muscle_wasting","muscle_weakness","nausea","neck_pain","nodal_skin_eruptions","obesity","pain_behind_the_eyes","pain_during_bowel_movements","pain_in_anal_region","painful_walking","palpitations","passage_of_gases","patches_in_throat","phlegm","polyuria","prominent_veins_on_calf","puffy_face_and_eyes","pus_filled_pimples","receiving_blood_transfusion","receiving_unsterile_injections","red_sore_around_nose","red_spots_over_body","redness_of_eyes","restlessness","runny_nose","rusty_sputum","scurring","shivering","silver_like_dusting","sinus_pressure","skin_peeling","skin_rash","slurred_speech","small_dents_in_nails","spinning_movements","spotting_ urination","stiff_neck","stomach_bleeding","stomach_pain","sunken_eyes","sweating","swelled_lymph_nodes","swelling_joints","swelling_of_stomach","swollen_blood_vessels","swollen_extremeties","swollen_legs","throat_irritation","toxic_look_(typhos)","ulcers_on_tongue","unsteadiness","visual_disturbances","vomiting","watering_from_eyes","weakness_in_limbs","weakness_of_one_body_side","weight_gain","weight_loss","yellow_crust_ooze","yellow_urine","yellowing_of_eyes","yellowish_skin"],n.handleChange=function(e){console.log(e),n.syms=e,console.log(n.syms)},n.state={showComponent:!1},n.syms=[],n.GetDiseaseDisp=null,n.handleChange=n.handleChange.bind(Object(k.a)(n)),n.Predict=n.Predict.bind(Object(k.a)(n)),n.toSend="",n._onButtonClick=n._onButtonClick.bind(Object(k.a)(n)),n.disease="",n._isMounted=!1,n}return Object(_.a)(a,[{key:"_onButtonClick",value:function(){this.setState({showComponent:!0})}},{key:"Predict",value:function(){return this._isMounted=!0,this._isMounted&&(this.toSend=this.syms.map((function(e){return"".concat(e)})).join(","),console.log(this.toSend)),s.a.createElement(s.a.Fragment,null,this._isMounted?s.a.createElement(F,{symp:this.toSend}):null)}},{key:"render",value:function(){var e=this,t=function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{id:"cont"},s.a.createElement(f.a,{noGutters:!0,id:"symp-1",className:"justify-content-md-center"},s.a.createElement(y.a,{sm:"9",md:"9",lg:"9"},s.a.createElement(g.a.Label,null,"Choose The Symptoms You Have Been Experiencing Lately"))),s.a.createElement(f.a,{id:"symp-2",className:"justify-content-md-center"},s.a.createElement(y.a,{className:"justify-content-md-center inputSym",sm:"6",md:"6",lg:"6"},s.a.createElement(j.a,{size:"lg",clearButton:!0,id:"SymptomsInput",labelKey:"name",multiple:!0,options:e.symptoms,placeholder:"Start Typing",onChange:e.handleChange}))),s.a.createElement(f.a,{id:"warn"},s.a.createElement(y.a,null,"Try to choose as much symptoms as possible.")),s.a.createElement(b.a,{onClick:e._onButtonClick,variant:"success",id:"check"},"Check!"),e.state.showComponent?s.a.createElement(s.a.Fragment,null,s.a.createElement(e.Predict,null),s.a.createElement(f.a,null,s.a.createElement(y.a,null,s.a.createElement(b.a,{as:c.b,to:"/ShowMore",variant:"dark"},"Know More!")))):null))};return s.a.createElement(t,null)}}]),a}(s.a.Component);var N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,null),s.a.createElement(S,null))},D=(a(104),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Yet to be updated. Be patient"))}}]),a}(s.a.Component)),x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,null),s.a.createElement(D,null))}}]),a}(s.a.Component),G=(a(105),a(71));a(106);var B=function(e){var t,a=Object(n.useState)(""),o=Object(G.a)(a,2),i=o[0],l=o[1];return t=e.diseaseName,console.log(e.diseaseName),console.log(t),fetch("https://diseasepredictorapp.herokuapp.com/getDiseaseInfo?query="+t).then((function(e){return e.json})).then((function(e){l(e.description),console.log(e.description)})),s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,t),s.a.createElement("p",null,i))},M=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).disease="",n.GetDataFromForm=n.GetDataFromForm.bind(Object(k.a)(n)),n}return Object(_.a)(a,[{key:"GetDataFromForm",value:function(){this.disease=localStorage.getItem("diseaseName"),console.log(this.disease)}},{key:"componentDidMount",value:function(){this.GetDataFromForm()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,null),s.a.createElement(E.a,null,s.a.createElement(f.a,{className:"justify-content-md-center"},s.a.createElement(y.a,{md:"5",sm:"5",lg:"5"},s.a.createElement(B,{diseaseName:localStorage.getItem("diseaseName")})),s.a.createElement(y.a,{md:"7",sm:"7",lg:"7"}))))}}]),a}(s.a.Component),P=function(){return s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/",component:v}),s.a.createElement(u.a,{exact:!0,path:"/DiseasePrediction",component:N}),s.a.createElement(u.a,{exact:!0,path:"/Statistics",component:x}),s.a.createElement(u.a,{exact:!0,path:"/ShowMore",component:M}))};var I=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(c.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(107)},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.76319a07.chunk.js.map