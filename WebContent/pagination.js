console.log("pagination got loaded");
var bn = '<%=((List<Book>)request.getAttribute("books")).size() %>';
console.log(bn)
var pagination = {
    currentPage: 1,
    pageLength: 8,     //no of records per page
    totalRecords: json_data.bookList.length,
  
    //this method is responsible for displaying the pagination buttons on the UI
    render: function () {
      console.log("Total records:" + this.totalRecords);
      var totalPages = Math.ceil(this.totalRecords / this.pageLength);
      this.totalPages = totalPages;//
      console.log("totalPages:" + totalPages);
  
      var btns = `<label id="msgId">Displaying ${totalPages} of ${this.totalRecords} items |</label>`;
      // <button id="previous">Previous</button>
      var previousBtn = ` <span id="previous" class="pointer"> << </span> `;
      btns = btns + previousBtn;
  
      for (var btnCout = 1; btnCout <= totalPages; btnCout++) {
        // var singleBtn = `<a id=${btnCout} style="padding-right:9px;color:blue">${btnCout}</a>`;
        var singleBtn = this.getAnchorBtn(btnCout);
        btns += singleBtn;
      }//END OF FOR LOOP
      //<button >Next</button>
      var nextBtn = `<span id="next" class="pointer"> >> </span>`;
      btns = btns + nextBtn;
      var tempbtns = pagination.createHtml(btns);
      var pageNoLinks = tempbtns.querySelectorAll('.pagination-btn');
      pageNoLinks.forEach(function (item) {
        item.addEventListener("click", function (event) {
          console.log(item.id, "clicked");
          pagination.callListener(event, this);
        })
      })
  
      var nextButn = tempbtns.querySelector('#next');
      //console.dir(this);
      var that = this;
      nextButn.addEventListener('click', function (event) {
        pagination.goToNextPage(event);
  
      });
  
      var prevButn = tempbtns.querySelector('#previous');
      prevButn.addEventListener('click', function (event) {
        pagination.goToPreviousPage(event);
      });
  
      document.getElementById("pagination").appendChild(tempbtns);
      //document.getElementById("pagination").innerHTML = btns;
  
    },
    getAnchorBtn: function (pageNo) {
      var classNames = "pagination-btn";
      if (this.currentPage == pageNo) {
        classNames = classNames + ' current-page';
      }
  
  
      var html = `
          <a id='${pageNo}' class='${classNames}'><label>${pageNo}<label></a>
      `;
      return html;
    },
  
    pagecall: function (even) {
      // debugger;
      alert(event);
    },
    goToPage: function (pageNo) {
      console.log("Go to the page no:" + pageNo);
      var fromIndex = (pageNo - 1) * this.pageLength;
      var toIndex = pageNo * (this.pageLength) - 1;
      renderPaginatedBookList(json_data, fromIndex, toIndex);
  
    },
  
    callListener: function (evente, that) {
      console.log("listener got called");
      // console.log(event);
      //console.dir(that);
  
      var currentElementId = event.currentTarget.id;
      console.log("currentElementId:" + currentElementId);
      //console.dir(this);
      //Removed the current-page class so that the red color will be removed from the previously selecte page
      document.getElementById(pagination.currentPage).classList.remove('current-page');
      pagination.currentPage = currentElementId;
      document.getElementById("" + currentElementId).classList.add("current-page");
      pagination.goToPage(currentElementId);
  
    },
    createHtml: function (htmlString) {
      const template = document.createElement('template');
      template.innerHTML = htmlString;
      return template.content;
    },
    createHtmlFirstChild: function (htmlString) {
      const template = document.createElement('template');
      template.innerHTML = htmlString;
      return template.content.firstChild;
    },
    goToNextPage: function (evnt) {
      var currentPage = +this.currentPage;
      var nextPageNumber = currentPage + 1;
  
      //If we are on the last page and still clicking on the next button,then no action should happen.
      if (nextPageNumber > this.totalPages) {
        return;
      }
      console.log("Going to the next page that is : " + nextPageNumber);
      document.getElementById(pagination.currentPage).classList.remove('current-page');
      pagination.currentPage = nextPageNumber;
      document.getElementById("" + nextPageNumber).classList.add("current-page");
  
      this.goToPage(nextPageNumber);
  
  
    },
    goToPreviousPage: function (evnt) {
      var currentPage = this.currentPage;
      var prevPageNumber = currentPage - 1;
  
      //If we are on the first page and still clicking on the previous button,then no action should happen
      if (prevPageNumber < 1) {
        return;
      }
      console.log("Going to the previous page that is : " + prevPageNumber);
      document.getElementById(pagination.currentPage).classList.remove('current-page');
      pagination.currentPage = prevPageNumber;
      document.getElementById("" + prevPageNumber).classList.add("current-page");
  
      this.goToPage(prevPageNumber);
    },
    getNoOfRecordsOfAPage: function (pageNo) {
      //var noOfPagesTobeDisplayed = totalRecords-
    }
  }
  