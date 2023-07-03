"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1698],{3905:function(t,l,n){n.d(l,{Zo:function(){return d},kt:function(){return g}});var e=n(7294);function a(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function r(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){a(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function u(t,l){if(null==t)return{};var n,e,a=function(t,l){if(null==t)return{};var n,e,a={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||(a[n]=t[n]);return a}(t,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var k=e.createContext({}),m=function(t){var l=e.useContext(k),n=l;return t&&(n="function"==typeof t?t(l):i(i({},l),t)),n},d=function(t){var l=m(t.components);return e.createElement(k.Provider,{value:l},t.children)},p="mdxType",o={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},N=e.forwardRef((function(t,l){var n=t.components,a=t.mdxType,r=t.originalType,k=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),p=m(n),N=a,g=p["".concat(k,".").concat(N)]||p[N]||o[N]||r;return n?e.createElement(g,i(i({ref:l},d),{},{components:n})):e.createElement(g,i({ref:l},d))}));function g(t,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=N;var u={};for(var k in l)hasOwnProperty.call(l,k)&&(u[k]=l[k]);u.originalType=t,u[p]="string"==typeof t?t:a,i[1]=u;for(var m=2;m<r;m++)i[m]=n[m];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}N.displayName="MDXCreateElement"},7664:function(t,l,n){n.r(l),n.d(l,{assets:function(){return d},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var e=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],u={title:"Documentation for the mysql-schema Generator"},k=void 0,m={unversionedId:"generators/mysql-schema",id:"generators/mysql-schema",title:"Documentation for the mysql-schema Generator",description:"METADATA",source:"@site/../docs/generators/mysql-schema.md",sourceDirName:"generators",slug:"/generators/mysql-schema",permalink:"/docs/generators/mysql-schema",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/mysql-schema.md",tags:[],version:"current",lastUpdatedBy:"Tiffany Marrel",lastUpdatedAt:1684255738,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"Documentation for the mysql-schema Generator"}},d={},p=[{value:"METADATA",id:"metadata",level:2},{value:"CONFIG OPTIONS",id:"config-options",level:2},{value:"IMPORT MAPPING",id:"import-mapping",level:2},{value:"INSTANTIATION TYPES",id:"instantiation-types",level:2},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",level:2},{value:"RESERVED WORDS",id:"reserved-words",level:2},{value:"FEATURE SET",id:"feature-set",level:2},{value:"Client Modification Feature",id:"client-modification-feature",level:3},{value:"Data Type Feature",id:"data-type-feature",level:3},{value:"Documentation Feature",id:"documentation-feature",level:3},{value:"Global Feature",id:"global-feature",level:3},{value:"Parameter Feature",id:"parameter-feature",level:3},{value:"Schema Support Feature",id:"schema-support-feature",level:3},{value:"Security Feature",id:"security-feature",level:3},{value:"Wire Format Feature",id:"wire-format-feature",level:3}],o={toc:p};function N(t){var l=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},o,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"metadata"},"METADATA"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator name"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql-schema"),(0,r.kt)("td",{parentName:"tr",align:null},"pass this to the generate command after -g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator stability"),(0,r.kt)("td",{parentName:"tr",align:null},"STABLE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator type"),(0,r.kt)("td",{parentName:"tr",align:null},"SCHEMA"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator language"),(0,r.kt)("td",{parentName:"tr",align:null},"Mysql"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generator default templating engine"),(0,r.kt)("td",{parentName:"tr",align:null},"mustache"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"helpTxt"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates a MySQL schema based on the model or schema defined in the OpenAPI specification (v2, v3)."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"config-options"},"CONFIG OPTIONS"),(0,r.kt)("p",null,"These options may be applied as additional-properties (cli) or configOptions (plugins). Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://openapi-generator.tech/docs/configuration"},"configuration docs")," for more details."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultDatabaseName"),(0,r.kt)("td",{parentName:"tr",align:null},"Default database name for all MySQL queries"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identifierNamingConvention"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming convention of MySQL identifiers(table names and column names). This is not related to database name which is defined by defaultDatabaseName option"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"original")),(0,r.kt)("dd",null,"Do not transform original names"),(0,r.kt)("dt",null,(0,r.kt)("strong",{parentName:"td"},"snake_case")),(0,r.kt)("dd",null,"Use snake_case names"))),(0,r.kt)("td",{parentName:"tr",align:null},"original")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonDataTypeEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Use special JSON MySQL data type for complex model properties. Requires MySQL version 5.7.8. Generates TEXT data type when disabled"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namedParametersEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates model prepared SQLs with named parameters, eg. :petName. Question mark placeholder used when option disabled."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"import-mapping"},"IMPORT MAPPING"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type/Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Imports")))),(0,r.kt)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type/Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Instantiated By")))),(0,r.kt)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),(0,r.kt)("ul",{class:"column-ul"},(0,r.kt)("li",null,"BigDecimal"),(0,r.kt)("li",null,"ByteArray"),(0,r.kt)("li",null,"Date"),(0,r.kt)("li",null,"DateTime"),(0,r.kt)("li",null,"URI"),(0,r.kt)("li",null,"UUID"),(0,r.kt)("li",null,"binary"),(0,r.kt)("li",null,"bool"),(0,r.kt)("li",null,"boolean"),(0,r.kt)("li",null,"byte"),(0,r.kt)("li",null,"char"),(0,r.kt)("li",null,"date"),(0,r.kt)("li",null,"double"),(0,r.kt)("li",null,"file"),(0,r.kt)("li",null,"float"),(0,r.kt)("li",null,"int"),(0,r.kt)("li",null,"integer"),(0,r.kt)("li",null,"long"),(0,r.kt)("li",null,"mixed"),(0,r.kt)("li",null,"number"),(0,r.kt)("li",null,"short"),(0,r.kt)("li",null,"string"),(0,r.kt)("li",null,"void")),(0,r.kt)("h2",{id:"reserved-words"},"RESERVED WORDS"),(0,r.kt)("ul",{class:"column-ul"},(0,r.kt)("li",null,"accessible"),(0,r.kt)("li",null,"add"),(0,r.kt)("li",null,"all"),(0,r.kt)("li",null,"alter"),(0,r.kt)("li",null,"analyze"),(0,r.kt)("li",null,"and"),(0,r.kt)("li",null,"as"),(0,r.kt)("li",null,"asc"),(0,r.kt)("li",null,"asensitive"),(0,r.kt)("li",null,"before"),(0,r.kt)("li",null,"between"),(0,r.kt)("li",null,"bigint"),(0,r.kt)("li",null,"binary"),(0,r.kt)("li",null,"blob"),(0,r.kt)("li",null,"both"),(0,r.kt)("li",null,"by"),(0,r.kt)("li",null,"call"),(0,r.kt)("li",null,"cascade"),(0,r.kt)("li",null,"case"),(0,r.kt)("li",null,"change"),(0,r.kt)("li",null,"char"),(0,r.kt)("li",null,"character"),(0,r.kt)("li",null,"check"),(0,r.kt)("li",null,"collate"),(0,r.kt)("li",null,"column"),(0,r.kt)("li",null,"condition"),(0,r.kt)("li",null,"constraint"),(0,r.kt)("li",null,"continue"),(0,r.kt)("li",null,"convert"),(0,r.kt)("li",null,"create"),(0,r.kt)("li",null,"cross"),(0,r.kt)("li",null,"cube"),(0,r.kt)("li",null,"cume_dist"),(0,r.kt)("li",null,"current_date"),(0,r.kt)("li",null,"current_time"),(0,r.kt)("li",null,"current_timestamp"),(0,r.kt)("li",null,"current_user"),(0,r.kt)("li",null,"cursor"),(0,r.kt)("li",null,"database"),(0,r.kt)("li",null,"databases"),(0,r.kt)("li",null,"day_hour"),(0,r.kt)("li",null,"day_microsecond"),(0,r.kt)("li",null,"day_minute"),(0,r.kt)("li",null,"day_second"),(0,r.kt)("li",null,"dec"),(0,r.kt)("li",null,"decimal"),(0,r.kt)("li",null,"declare"),(0,r.kt)("li",null,"default"),(0,r.kt)("li",null,"delayed"),(0,r.kt)("li",null,"delete"),(0,r.kt)("li",null,"dense_rank"),(0,r.kt)("li",null,"desc"),(0,r.kt)("li",null,"describe"),(0,r.kt)("li",null,"deterministic"),(0,r.kt)("li",null,"distinct"),(0,r.kt)("li",null,"distinctrow"),(0,r.kt)("li",null,"div"),(0,r.kt)("li",null,"double"),(0,r.kt)("li",null,"drop"),(0,r.kt)("li",null,"dual"),(0,r.kt)("li",null,"each"),(0,r.kt)("li",null,"else"),(0,r.kt)("li",null,"elseif"),(0,r.kt)("li",null,"empty"),(0,r.kt)("li",null,"enclosed"),(0,r.kt)("li",null,"escaped"),(0,r.kt)("li",null,"except"),(0,r.kt)("li",null,"exists"),(0,r.kt)("li",null,"exit"),(0,r.kt)("li",null,"explain"),(0,r.kt)("li",null,"false"),(0,r.kt)("li",null,"fetch"),(0,r.kt)("li",null,"first_value"),(0,r.kt)("li",null,"float"),(0,r.kt)("li",null,"float4"),(0,r.kt)("li",null,"float8"),(0,r.kt)("li",null,"for"),(0,r.kt)("li",null,"force"),(0,r.kt)("li",null,"foreign"),(0,r.kt)("li",null,"from"),(0,r.kt)("li",null,"fulltext"),(0,r.kt)("li",null,"function"),(0,r.kt)("li",null,"generated"),(0,r.kt)("li",null,"get"),(0,r.kt)("li",null,"grant"),(0,r.kt)("li",null,"group"),(0,r.kt)("li",null,"grouping"),(0,r.kt)("li",null,"groups"),(0,r.kt)("li",null,"having"),(0,r.kt)("li",null,"high_priority"),(0,r.kt)("li",null,"hour_microsecond"),(0,r.kt)("li",null,"hour_minute"),(0,r.kt)("li",null,"hour_second"),(0,r.kt)("li",null,"if"),(0,r.kt)("li",null,"ignore"),(0,r.kt)("li",null,"in"),(0,r.kt)("li",null,"index"),(0,r.kt)("li",null,"infile"),(0,r.kt)("li",null,"inner"),(0,r.kt)("li",null,"inout"),(0,r.kt)("li",null,"insensitive"),(0,r.kt)("li",null,"insert"),(0,r.kt)("li",null,"int"),(0,r.kt)("li",null,"int1"),(0,r.kt)("li",null,"int2"),(0,r.kt)("li",null,"int3"),(0,r.kt)("li",null,"int4"),(0,r.kt)("li",null,"int8"),(0,r.kt)("li",null,"integer"),(0,r.kt)("li",null,"interval"),(0,r.kt)("li",null,"into"),(0,r.kt)("li",null,"io_after_gtids"),(0,r.kt)("li",null,"io_before_gtids"),(0,r.kt)("li",null,"is"),(0,r.kt)("li",null,"iterate"),(0,r.kt)("li",null,"join"),(0,r.kt)("li",null,"json_table"),(0,r.kt)("li",null,"key"),(0,r.kt)("li",null,"keys"),(0,r.kt)("li",null,"kill"),(0,r.kt)("li",null,"lag"),(0,r.kt)("li",null,"last_value"),(0,r.kt)("li",null,"lead"),(0,r.kt)("li",null,"leading"),(0,r.kt)("li",null,"leave"),(0,r.kt)("li",null,"left"),(0,r.kt)("li",null,"like"),(0,r.kt)("li",null,"limit"),(0,r.kt)("li",null,"linear"),(0,r.kt)("li",null,"lines"),(0,r.kt)("li",null,"load"),(0,r.kt)("li",null,"localtime"),(0,r.kt)("li",null,"localtimestamp"),(0,r.kt)("li",null,"lock"),(0,r.kt)("li",null,"long"),(0,r.kt)("li",null,"longblob"),(0,r.kt)("li",null,"longtext"),(0,r.kt)("li",null,"loop"),(0,r.kt)("li",null,"low_priority"),(0,r.kt)("li",null,"master_bind"),(0,r.kt)("li",null,"master_ssl_verify_server_cert"),(0,r.kt)("li",null,"match"),(0,r.kt)("li",null,"maxvalue"),(0,r.kt)("li",null,"mediumblob"),(0,r.kt)("li",null,"mediumint"),(0,r.kt)("li",null,"mediumtext"),(0,r.kt)("li",null,"middleint"),(0,r.kt)("li",null,"minute_microsecond"),(0,r.kt)("li",null,"minute_second"),(0,r.kt)("li",null,"mod"),(0,r.kt)("li",null,"modifies"),(0,r.kt)("li",null,"natural"),(0,r.kt)("li",null,"no_write_to_binlog"),(0,r.kt)("li",null,"not"),(0,r.kt)("li",null,"nth_value"),(0,r.kt)("li",null,"ntile"),(0,r.kt)("li",null,"null"),(0,r.kt)("li",null,"numeric"),(0,r.kt)("li",null,"of"),(0,r.kt)("li",null,"on"),(0,r.kt)("li",null,"optimize"),(0,r.kt)("li",null,"optimizer_costs"),(0,r.kt)("li",null,"option"),(0,r.kt)("li",null,"optionally"),(0,r.kt)("li",null,"or"),(0,r.kt)("li",null,"order"),(0,r.kt)("li",null,"out"),(0,r.kt)("li",null,"outer"),(0,r.kt)("li",null,"outfile"),(0,r.kt)("li",null,"over"),(0,r.kt)("li",null,"partition"),(0,r.kt)("li",null,"percent_rank"),(0,r.kt)("li",null,"persist"),(0,r.kt)("li",null,"persist_only"),(0,r.kt)("li",null,"precision"),(0,r.kt)("li",null,"primary"),(0,r.kt)("li",null,"procedure"),(0,r.kt)("li",null,"purge"),(0,r.kt)("li",null,"range"),(0,r.kt)("li",null,"rank"),(0,r.kt)("li",null,"read"),(0,r.kt)("li",null,"read_write"),(0,r.kt)("li",null,"reads"),(0,r.kt)("li",null,"real"),(0,r.kt)("li",null,"recursive"),(0,r.kt)("li",null,"references"),(0,r.kt)("li",null,"regexp"),(0,r.kt)("li",null,"release"),(0,r.kt)("li",null,"rename"),(0,r.kt)("li",null,"repeat"),(0,r.kt)("li",null,"replace"),(0,r.kt)("li",null,"require"),(0,r.kt)("li",null,"resignal"),(0,r.kt)("li",null,"restrict"),(0,r.kt)("li",null,"return"),(0,r.kt)("li",null,"revoke"),(0,r.kt)("li",null,"right"),(0,r.kt)("li",null,"rlike"),(0,r.kt)("li",null,"role"),(0,r.kt)("li",null,"row"),(0,r.kt)("li",null,"row_number"),(0,r.kt)("li",null,"rows"),(0,r.kt)("li",null,"schema"),(0,r.kt)("li",null,"schemas"),(0,r.kt)("li",null,"second_microsecond"),(0,r.kt)("li",null,"select"),(0,r.kt)("li",null,"sensitive"),(0,r.kt)("li",null,"separator"),(0,r.kt)("li",null,"set"),(0,r.kt)("li",null,"show"),(0,r.kt)("li",null,"signal"),(0,r.kt)("li",null,"smallint"),(0,r.kt)("li",null,"spatial"),(0,r.kt)("li",null,"specific"),(0,r.kt)("li",null,"sql"),(0,r.kt)("li",null,"sql_big_result"),(0,r.kt)("li",null,"sql_calc_found_rows"),(0,r.kt)("li",null,"sql_small_result"),(0,r.kt)("li",null,"sqlexception"),(0,r.kt)("li",null,"sqlstate"),(0,r.kt)("li",null,"sqlwarning"),(0,r.kt)("li",null,"ssl"),(0,r.kt)("li",null,"starting"),(0,r.kt)("li",null,"stored"),(0,r.kt)("li",null,"straight_join"),(0,r.kt)("li",null,"system"),(0,r.kt)("li",null,"table"),(0,r.kt)("li",null,"terminated"),(0,r.kt)("li",null,"then"),(0,r.kt)("li",null,"tinyblob"),(0,r.kt)("li",null,"tinyint"),(0,r.kt)("li",null,"tinytext"),(0,r.kt)("li",null,"to"),(0,r.kt)("li",null,"trailing"),(0,r.kt)("li",null,"trigger"),(0,r.kt)("li",null,"true"),(0,r.kt)("li",null,"undo"),(0,r.kt)("li",null,"union"),(0,r.kt)("li",null,"unique"),(0,r.kt)("li",null,"unlock"),(0,r.kt)("li",null,"unsigned"),(0,r.kt)("li",null,"update"),(0,r.kt)("li",null,"usage"),(0,r.kt)("li",null,"use"),(0,r.kt)("li",null,"using"),(0,r.kt)("li",null,"utc_date"),(0,r.kt)("li",null,"utc_time"),(0,r.kt)("li",null,"utc_timestamp"),(0,r.kt)("li",null,"values"),(0,r.kt)("li",null,"varbinary"),(0,r.kt)("li",null,"varchar"),(0,r.kt)("li",null,"varcharacter"),(0,r.kt)("li",null,"varying"),(0,r.kt)("li",null,"virtual"),(0,r.kt)("li",null,"when"),(0,r.kt)("li",null,"where"),(0,r.kt)("li",null,"while"),(0,r.kt)("li",null,"window"),(0,r.kt)("li",null,"with"),(0,r.kt)("li",null,"write"),(0,r.kt)("li",null,"xor"),(0,r.kt)("li",null,"year_month"),(0,r.kt)("li",null,"zerofill")),(0,r.kt)("h2",{id:"feature-set"},"FEATURE SET"),(0,r.kt)("h3",{id:"client-modification-feature"},"Client Modification Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorizations"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MockServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"data-type-feature"},"Data Type Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Int64"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Float"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Double"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Byte"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Binary"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AnyType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CollectionFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CollectionFormatMulti"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfPrimitives"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ArrayOfCollectionOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfPrimitives"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfModel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MapOfCollectionOfEnum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"documentation-feature"},"Documentation Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Readme"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Api"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")))),(0,r.kt)("h3",{id:"global-feature"},"Global Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasePath"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Info"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schemes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PartialSchemes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consumes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Produces"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExternalDocumentation"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Examples"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XMLStructureDefinitions"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MultiServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ParameterizedServer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ParameterStyling"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Callbacks"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LinkObjects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"parameter-feature"},"Parameter Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Header"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormUnencoded"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormMultipart"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"schema-support-feature"},"Schema Support Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Simple"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Composite"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polymorphism"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Union"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anyOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oneOf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"not"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"security-feature"},"Security Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BasicAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ApiKey"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenIDConnect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BearerToken"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_Implicit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_Password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_ClientCredentials"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OAuth2_AuthorizationCode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SignatureAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS3")))),(0,r.kt)("h3",{id:"wire-format-feature"},"Wire Format Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Defined By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XML"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PROTOBUF"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"ToolingExtension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2717"),(0,r.kt)("td",{parentName:"tr",align:null},"OAS2,OAS3")))))}N.isMDXComponent=!0}}]);