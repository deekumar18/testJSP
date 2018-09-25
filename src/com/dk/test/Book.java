package com.dk.test;

public class Book {

	private String bookId;
	private String bookName;
	private String bookImageURL;
	
	
	
	public Book(String bookId, String bookName, String bookImageURL) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.bookImageURL = bookImageURL;
	}
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookImageURL() {
		return bookImageURL;
	}
	public void setBookImageURL(String bookImageURL) {
		this.bookImageURL = bookImageURL;
	}	
}
