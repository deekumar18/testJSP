<%@page import="java.util.stream.IntStream"%>
<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/style.css"/>
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
<title>First JSP</title>
</head>
<%@ page 
import="java.util.*"
import="com.dk.test.*"  
%>
<body>
<h3>Hello world12</h3><br>
<strong>Current Time is</strong>: <%=new Date() %>

<% 

List<Book> listOfBooks = ServiceAPI.getAllBooks();
request.setAttribute("books", listOfBooks); 

%>
    
     <ul class="pagiNation clearFix">
        <li id="dyn_nav" class="textLeft">
            <span id="dyn_nav_col">
                <dl id="attr_1" class="dn-attr searchFilterSection">
                    <dt class="dn-attr-hdr">
                        <div class="left lblAlign">Include:</div>
                    </dt>
                    <dt class="searchFilterComponent">
                        <input type="checkbox" value="action" checked="" id="Books" name="genre" onclick="filterSearchResult(this)">
                        <label for="Books" class="right lblAlign">Books</label>
                        <a class="dn-attr-v" href="/webapp/wcs/stores/servlet/ProductSearchCommand?storeId=10052&amp;langId=-1&amp;displayImage=N&amp;catalogId=10002&amp;extSearchEnabled=G&amp;search=Mechanics+inmeta:PRODUCTTYPE%3DTB&amp;dnavs=inmeta:PRODUCTTYPE%3DTB"
                            id="linkForBooks" style="display:none" ctype="dynnav.Filter.TB" title="TB"></a>
                    </dt>
                    <dt class="searchFilterComponent">
                        <input type="checkbox" value="action" id="Merchandise" name="genre" onclick="filterSearchResult(this)">
                        <label for="Merchandise" class="right lblAlign">Merchandise</label>
                        <a class="dn-attr-v" href="/webapp/wcs/stores/servlet/ProductSearchCommand?storeId=10052&amp;langId=-1&amp;displayImage=N&amp;catalogId=10002&amp;extSearchEnabled=G&amp;search=Mechanics+inmeta:PRODUCTTYPE%3DGM&amp;dnavs=inmeta:PRODUCTTYPE%3DGM"
                            id="linkForMerchandise" style="display:none" ctype="dynnav.Dept.GM" title="GM"></a>
                    </dt>
                </dl>
            </span>
        </li>
        <a href="/webapp/wcs/stores/servlet/ProductSearchCommand?storeId=10052&amp;langId=-1&amp;displayImage=N&amp;catalogId=10002&amp;extSearchEnabled=G&amp;search=Mechanics&amp;start=0"
            style="display:none" id="filterAnchor"></a>

        <!-- <li class="textRight ">
                      <label>DISPLAYING 8 of 11 ITEMS  | </label>
                      <span class="i">1</span>
                      <a href="/webapp/wcs/stores/servlet/ProductSearchCommand?storeId=10052&amp;langId=-1&amp;displayImage=N&amp;catalogId=10002&amp;extSearchEnabled=G&amp;search=Mechanics&amp;start=8">2</a>
                      <a href="/webapp/wcs/stores/servlet/ProductSearchCommand?storeId=10052&amp;langId=-1&amp;displayImage=N&amp;catalogId=10002&amp;extSearchEnabled=G&amp;search=Mechanics&amp;start=8" alt="Next">&gt;&gt;</a>
                </li>   -->
        <li id="pagination" class="textRight "></li>

    </ul>
    <div class="main-content">
        <ul id="foo" class="searchResultList clearfix"></ul>
        </ul>
    </div>
    
    <h3>There are :<%=listOfBooks.size() %> no of books</h3>
    <h3>There are :<%=((List<Book>)request.getAttribute("books")).size() %> no of books</h3>
    
     <script language="javascript" src="http://code.jquery.com/jquery-1.4.2.min.js"></script>
    <script src="imgRepo.js"></script>
    <script src="pagination.js"></script>
    <script type="text/javascript">
    console.log("insid eit");
    var bn1 = '<%=((List<Book>)request.getAttribute("books")).size() %>';
    console.log(bn1)
    </script>
</body>
</html>

