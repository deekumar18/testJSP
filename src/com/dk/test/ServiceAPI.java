package com.dk.test;

import java.util.ArrayList;
import java.util.List;

public class ServiceAPI {
public static List<Book> getAllBooks(){
	List<Book> list = new ArrayList();

	list.add(new Book("id1","Bname","url1"));
	list.add(new Book("id2","Bname","url1"));
	list.add(new Book("id3","Bname","url1"));
	list.add(new Book("id4","Bname","url1"));
	list.add(new Book("id5","Bname","url1"));
return list;	
}
}
