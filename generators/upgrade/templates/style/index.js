import '../src/<%=  ComponentName %>.less';
<% for (var i = 0; i < deps.length; i++) {%>import '<%= deps[i].name %>/style';
<% } %>