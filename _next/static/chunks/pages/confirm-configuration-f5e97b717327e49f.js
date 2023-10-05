(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{84679:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirm-configuration",function(){return t(19742)}])},98064:function(e,s,t){"use strict";t.d(s,{I:function(){return c}});var a=t(85893),r=t(39618),i=t(63029),n=t(62971);let l=[{accessorKey:"operator",header:"Address"},{accessorKey:"split",header:"Split",css:{width:"70px"}}],c=e=>{let{recipients:s,type:t}=e,c=(0,i.Z)(s.map(e=>e.address));return"Principal & Rewards"===t?(0,a.jsx)(r.iA,{columns:[...l,{accessorKey:"principal",header:"Principal",css:{width:"70px"}}],rows:s.map((e,s)=>({operator:(0,a.jsx)(n.M,{ensName:c[s],address:e.address}),split:"".concat(e.split||e.percentAllocation," %"),principal:"".concat(Number(e.split||e.percentAllocation)/100*32)}))}):(0,a.jsx)(r.iA,{columns:l,rows:s.map((e,s)=>({operator:(0,a.jsx)(n.M,{ensName:c[s],address:e.address}),split:"".concat(e.split||e.percentAllocation," %")}))})}},19742:function(e,s,t){"use strict";t.r(s);var a=t(85893),r=t(71866),i=t(64146),n=t(39618),l=t(9324),c=t(41518),o=t(87536),d=t(2504),h=t(21237),p=t(80050),u=t(11163),x=t(67294),g=t(98064),m=t(37005),v=t(4010),f=t(23500),j=t(28106);let w=()=>{let{account:e,provider:s,chainId:t}=(0,d.kR)(),{handleSubmit:w}=(0,o.cI)({mode:"onChange"}),y=(0,u.useRouter)(),[C,A]=(0,x.useState)(),[S,_]=(0,x.useState)(),[b,k]=(0,x.useState)(!1),[N,$]=(0,x.useState)(""),[R,E]=(0,x.useState)(),[I,O]=(0,x.useState)(),[T,W]=(0,x.useState)(!1),[D,H]=(0,x.useState)(""),K="v1.7.0",[P,F]=(0,x.useState)(!1),[M,Z]=(0,x.useState)(""),[z,B]=(0,x.useState)(""),L=(0,c.o)(e=>e.clusterDefinition),X=(null==L?void 0:L.principal)&&!(null==L?void 0:L.singleAddress)&&(null==L?void 0:L.recipients.every(e=>(0,h.H6)(e))),Y=!(null==L?void 0:L.principal)&&!(null==L?void 0:L.singleAddress)&&(null==L?void 0:L.recipients.every(e=>(0,h.H6)(e))),J=!(null==L?void 0:L.principal)&&(null==L?void 0:L.singleAddress)&&!(null==L?void 0:L.recipients.every(e=>(0,h.H6)(e))),{splitHeader:Q,deployContractButtonText:U}=(X?{splitHeader:"Rewards",deployContractButtonText:"Deploy Optimistic Withdrawal Recipient Contract"}:Y?{splitHeader:"Principal & Rewards",deployContractButtonText:"Deploy Splitter Contract"}:void 0)||{},q=null==L?void 0:L.operators.some(s=>s.address===e),V=(0,c.o)(e=>e.updateClusterDefinition),G=(0,c.o)(e=>e.completeLeaderStep),ee=(0,c.o)(e=>e.enableLeaderStep),es=()=>{A(null),_(null),$(""),E(""),O(""),k(!1)},et=e=>{console.log(e),es()},ea=async e=>{let s=await (0,p.c0)({token:e,data:C});if(!s.data.config_hash)throw"no config hash returned";$(s.data.config_hash)};(0,x.useEffect)(()=>{if(C){let a=async()=>{try{let a={creator_config_hash:C.config_hash},r=await (0,h.L6)(s,t,e,a);if(await ea(r),q){let a={operator_config_hash:C.config_hash},r=await (0,h.AM)(s,t,e,a);O(r);let i={enr:null==L?void 0:L.enr},n=await (0,h.Ol)(s,t,e,i);E(n)}}catch(e){et(e)}};a()}},[C]),(0,x.useEffect)(()=>{if(q&&S&&N||!q&&N){G("confirm-configuration");let e=ee("invite-group");k(!1),y.push({pathname:e.href,query:{configHash:N}})}},[S,N]),(0,x.useEffect)(()=>{if(q&&R&&I&&N){let s=async()=>{let s={address:e,enr:null==L?void 0:L.enr,enr_signature:R,fork_version:l.se,version:K},{data:t}=await (0,p.R)({token:I,data:s,configHash:N});_(t)};s().catch(et)}},[R,N]);let er=()=>(0,a.jsx)(n.W2,{className:"cluster-details",alignItems:"start",children:(0,a.jsxs)(n.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(j.uo,{}),(0,a.jsx)(r.VL,{operators:[...null==L?void 0:L.operators],currentAccount:e})]})}),ei=()=>(0,a.jsxs)(n.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,a.jsxs)(n.kC,{direction:"column",css:{gap:"$sm"},children:[(0,a.jsxs)(n.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,a.jsx)(n.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Your Charon client ENR"}),(0,a.jsx)(n.KZ,{content:'An ENR is an "Ethereum Node Record" used to identify your client to the other clients in the cluster"',children:(0,a.jsx)(n.xu,{css:{display:"flex"},children:(0,a.jsx)(n.by,{})})})]}),(0,a.jsx)(r.Kx,{css:{minHeight:"115px"},placeholder:"Your enr",value:null==L?void 0:L.enr,readOnly:!0})]}),(0,a.jsxs)(n.rU,{href:"https://docs.obol.tech/docs/next/int/faq/errors#enrs-keys",target:"_blank",children:["More on Ethereum Node Records ",(0,a.jsx)(n.ZJ,{})]})]}),en=async e=>{let{recipientsAddresses:s,splitPercentages:t,splitMainContract:a}=e;try{let e=await (0,f.s8)(s,t,a);console.log("realSplitAddress",e),V({...L,validators:Array(L.validatorsSize).fill({feeRecipientAddress:e,withdrawalAddress:e})}),H(e);return}catch(s){let e=(null==s?void 0:s.message).match(/^(.*?)(?=\s*\()/)?(null==s?void 0:s.message).match(/^(.*?)(?=\s*\()/)[0]:null==s?void 0:s.message;throw console.log(e,"errorMessage"),Z(e),s}},el=async e=>{let{recipientsAddresses:t,splitPercentages:a,predictedSplitAddress:r}=e;try{let{owrAddress:e,splitAddress:i}=await (0,f.KZ)({principalRecipient:L.principal,amountOfPrincipalStake:32*L.validatorsSize},{accounts:t,percentAllocations:a},r,s.getSigner(0));V({...L,validators:Array(L.validatorsSize).fill({feeRecipientAddress:i,withdrawalAddress:e})}),H(i);return}catch(s){let e=(null==s?void 0:s.message).match(/^(.*?)(?=\s*\()/)?(null==s?void 0:s.message).match(/^(.*?)(?=\s*\()/)[0]:null==s?void 0:s.message;throw Z(e),s}},ec=async e=>{try{let t=await (0,f.Sf)(L.principal,e,32*L.validatorsSize,s.getSigner(0));console.log(t,"OWRecipientContractAddresses"),V({...L,validators:Array(L.validatorsSize).fill({feeRecipientAddress:e,withdrawalAddress:t})}),H(e);return}catch(s){let e=(null==s?void 0:s.message).match(/^(.*?)(?=\s*\()/)?(null==s?void 0:s.message).match(/^(.*?)(?=\s*\()/)[0]:null==s?void 0:s.message;throw Z(e),s}};async function eo(e){try{let t=await (null==s?void 0:s.getCode(e));if("0x"===t||"0x0"===t)return!1;return!0}catch(e){throw e}}let ed=async e=>{if(e.preventDefault(),!T){W(!0);try{if(!(await eo(l.eq)&&await eo(l.tm)&&await eo(l.WF))){Z(l.sD),W(!1);return}let e=[...L.recipients];e.sort((e,s)=>e.address.localeCompare(s.address));let a=e.map(e=>e.address),r=e.map(e=>{let s=(1e4*parseFloat(e.split)).toFixed(0);return parseInt(s)}),n=new i.Contract(l.tm,v.Mt,null==s?void 0:s.getSigner(0)),c=await n.predictImmutableSplitAddress(a,r,l.Uu);console.log("predictedSplitAddress",c);let o=await (0,f.Kv)(c,t);console.log(o,"isSplitterDeployed"),X?o?(await ec(c),B(l.Oy)):await el({recipientsAddresses:a,splitPercentages:r,predictedSplitAddress:c}):Y&&(o?(V({...L,validators:Array(L.validatorsSize).fill({feeRecipientAddress:c,withdrawalAddress:c})}),H(c),B(l.Oy)):await en({recipientsAddresses:a,splitPercentages:r,splitMainContract:n})),W(!1)}catch(e){console.log(e,"errr"),W(!1)}}},eh=(0,x.useMemo)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(er,{}),(0,a.jsx)(j.XD,{}),q&&(0,a.jsx)(ei,{}),(0,a.jsxs)(n.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,a.jsx)(n.xv,{variant:"h4",children:"Withdrawal Configuration"}),"Rewards"===Q&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.nB,{heading:"Principal Address",description:"Address to receive validator principal and rewards at exit..",value:null==L?void 0:L.principal,className:"principal-address-section"}),(0,a.jsxs)(n.kC,{direction:"column",css:{gap:"$xs"},children:[(0,a.jsxs)(n.xv,{variant:"h5",children:[Q," Split"]}),(0,a.jsx)(n.xv,{color:"body",variant:"body",children:"Explainer of what these are"}),(0,a.jsx)(g.I,{recipients:L.recipients,type:Q})]}),D&&(0,a.jsxs)(n.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,a.jsxs)(n.kC,{css:{gap:"$sm"},children:[(0,a.jsx)(n.xu,{children:(0,a.jsx)(n.nQ,{})}),(0,a.jsx)(n.xu,{css:{display:"flex",fd:"column",gap:"$xs"},children:(0,a.jsx)(n.xv,{variant:"body",css:{color:"white"},children:"Optimistic Withdrawal Recipient Contract Successfully Deployed"})})]}),(0,a.jsx)(n.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Optimistic Withdrawal Recipient Contract Address"}),(0,a.jsx)(n.IK,{readOnly:!0,value:L.validators[0].withdrawalAddress}),(0,a.jsxs)(n.rU,{href:"https://".concat(l.pn,".etherscan.io/address/").concat(L.validators[0].withdrawalAddress,"#code"),target:"_blank",children:["View on Etherscan ",(0,a.jsx)(n.ZJ,{})]})]})]}),"Principal & Rewards"===Q&&(0,a.jsxs)(n.kC,{direction:"column",css:{gap:"$xs"},children:[(0,a.jsxs)(n.xv,{variant:"h5",children:[Q," Split"]}),(0,a.jsx)(n.xv,{color:"body",variant:"body",children:"Explainer of what these are"}),(0,a.jsx)(g.I,{recipients:L.recipients,type:Q})]}),D&&(0,a.jsxs)(n.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,a.jsxs)(n.kC,{css:{gap:"$sm"},children:[(0,a.jsx)(n.xu,{children:(0,a.jsx)(n.nQ,{})}),(0,a.jsx)(n.xu,{css:{display:"flex",fd:"column",gap:"$xs"},children:(0,a.jsx)(n.xv,{variant:"body",css:{color:"white"},children:"Splitter Contract Successfully Deployed"})})]}),(0,a.jsx)(n.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Splitter Contract Address"}),(0,a.jsx)(n.IK,{readOnly:!0,value:D}),(0,a.jsxs)(n.rU,{href:"https://".concat(l.pn,".etherscan.io/address/").concat(D,"#code"),target:"_blank",children:["View on Etherscan ",(0,a.jsx)(n.ZJ,{})]})]}),!D&&(0,a.jsx)(r.fl,{color:"primary",type:"button",onClick:ed,disabled:!!M,children:(0,a.jsxs)(a.Fragment,{children:[T&&(0,a.jsx)(n.yC,{}),U]})}),z&&(0,a.jsx)(n.xv,{variant:"metadata",color:"testHover",children:z}),M&&(0,a.jsx)(n.xv,{variant:"metadata",color:"test",children:M})]})]}),[D,T,M,L]),ep=(0,x.useMemo)(()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(er,{}),(0,a.jsx)(j.XD,{}),q&&(0,a.jsx)(ei,{}),(0,a.jsxs)(n.W2,{className:"withdrawal-section",css:{gap:"$lg"},alignItems:"start",children:[(0,a.jsx)(n.xv,{variant:"h4",children:"Withdrawal Configuration"}),(0,a.jsx)(j.nB,{heading:"Principal Address",description:"The withdrawal address or contract will receive 100%.",value:null==L?void 0:L.singleAddress,className:"single-address-section"}),(0,a.jsx)(j.nB,{heading:"Fee Recipient Address",description:"Address to receive transaction fees from block proposals.",value:null==L?void 0:L.feeRecipientAddress,className:"fee-recipient-address-section"})]})]}),[L]);if(!L)return(0,a.jsx)(n.xv,{children:"No cluster data ..."});let eu=async()=>{if(b)return;console.log(JSON.stringify(L),"currentClusterData");let e=(0,h.KH)(L,K);console.log(e.config_hash,"config_hashconfig_hash"),A(e),k(!0)};return(0,a.jsxs)(n.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(n.xv,{variant:"h3",children:"Confirm Configuration"}),(0,a.jsx)(r.l0,{onSubmit:w(eu),children:(0,a.jsxs)(n.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,a.jsx)(m.T,{name:"reward_split_withdrawal_flow",children:X&&eh}),(0,a.jsx)(m.T,{name:"split_withdrawal_flow",children:Y&&eh}),(0,a.jsx)(m.T,{name:"single_withdrawal_address_flow",children:J&&ep}),(0,a.jsx)(n.kC,{direction:"column",css:{gap:"$lg"},children:(0,a.jsxs)(n.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,a.jsx)(n.kC,{direction:"column",css:{gap:"$xs"},children:(0,a.jsx)(n.xv,{variant:"h4",children:"Confirm Details "})}),(0,a.jsxs)(n.kC,{direction:"column",css:{gap:"$xl"},children:[(0,a.jsxs)(n.kC,{css:{gap:"$xs",width:"$full"},children:[(0,a.jsx)(n.xu,{children:(0,a.jsx)(n.XZ,{checked:P,onCheckedChange:()=>F(!P)})}),(0,a.jsx)(n.xv,{variant:"body",children:"You will be prompted to sign a message with your wallet. This signature is attesting to the fact that:"})]}),(0,a.jsx)(n.sQ,{heading:"You have confirmed the withdrawal address for the validators to be created is correct. If this address is a contract, you have confirmed the contract implementation is correct. If this address is an externally-owned account, you have confirmed that the EOA custody is secure."}),(0,a.jsx)(n.sQ,{heading:"You have submitted your charon node's Ethereum Node Record (ENR) correctly. This signature is the authorisation of this charon client to act on your behalf."})]}),(0,a.jsx)(r.fl,{color:"primary",type:"submit",disabled:!J&&!D||!P,children:(0,a.jsxs)(a.Fragment,{children:[b&&(0,a.jsx)(n.yC,{}),"Confirm and Sign"]})})]})})]})})]})};s.default=w,w.layout="ProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=84679)}),_N_E=e.O()}]);