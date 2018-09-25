console.log("imgRepo got loaded");

const json_data = {
    "bookList": [
        {
            "bookName": " firstbook-THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/1498720692.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0805382917.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " fourthbook-THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0521876222.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/notavail.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " lastBook_THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " firstbook-THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " fourthbook-THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        },
        {
            "bookName": " lastBook_THEORETICAL MECHANICS OF PARTICLES+",
            "bookImgUrl": "https://bookinfo.mbsdirect.net/TextbookInfo/Covers/0486432610.gif",
            "bookPrice": "$7.60 - $37.95"
        }
    ]
};


$(document).ready(function () {
    pagination.render();
    // renderBookList(json_data);
    renderPaginatedBookList(json_data, 0, pagination.pageLength - 1);
});
/*
function renderBookList(list_json_data) {
    console.log("No of records:"+list_json_data.bookList.length);
    var str='';   
    for (var recordCount = 0; recordCount < list_json_data.bookList.length; recordCount++ ) {

        //var singleRecord = JSON.parse(list_json_data.bookList[recordCount]);
        var singleRecord = list_json_data.bookList[recordCount];
        //console.dir(singleRecord);
        var bookImgUrl = singleRecord.bookImgUrl;
       var bookName = singleRecord.bookName;

       
    str = str + `  <li class="quickViewButtonHolder_180816">
<a ctype="c" rank="1" class="productImage catEntry" href="/webapp/wcs/stores/servlet/BNCB_TextbookDetailView?catalogId=10001&amp;item=N&amp;langId=-1&amp;productId=600000296346&amp;storeId=10052"
    tabindex="0">
    <img src=${singleRecord.bookImgUrl} alt="THEORETICAL MECHANICS OF PARTICLES+..."
        class="tbImage" border="0">
</a>
<a href="javascript:void(0);" tabindex="0" class="element_invisible quickViewButtonInitiator">
</a>
<h3>
    <a ctype="c" rank="1" href="/webapp/wcs/stores/servlet/BNCB_TextbookDetailView?catalogId=10001&amp;item=N&amp;langId=-1&amp;productId=600000296346&amp;storeId=10052">
    ${singleRecord.bookName}
    </a>
</h3>
<label class="priceTxt">
${singleRecord.bookPrice}
    <br>
</label>
</li>`;
    };
    //append the markup to the DOM
    $("#foo").html(str);
    pagination.render();
}

*/








function renderPaginatedBookList(list_json_data, fromIndex, toIndex) {

    console.log("No of records:" + list_json_data.bookList.length);
    console.log("fromIndex[" + fromIndex + "]:toIndex[" + toIndex + "]");
    //this condition is required in case the last page contains less than pageLength(no of records per page)
    if (toIndex > list_json_data.bookList.length) {
        toIndex = list_json_data.bookList.length - 1
    }

    //This is the right place to calculate how many items we are going to display finally
    var totalNoOfRecordsToBeDisplayed = toIndex - fromIndex + 1;
    if (document.getElementById('msgId')) {
        document.getElementById("msgId").innerHTML = `Displaying ${totalNoOfRecordsToBeDisplayed} items out of ${list_json_data.bookList.length}`;
    }

    var str = '';
    for (var recordCount = fromIndex; recordCount <= toIndex; recordCount++) {

        var singleRecord = list_json_data.bookList[recordCount];
        var bookImgUrl = singleRecord.bookImgUrl;
        var bookName = singleRecord.bookName;


        str = str + `  <li class="quickViewButtonHolder_180816">
<a ctype="c" rank="1" class="productImage catEntry" href="/webapp/wcs/stores/servlet/BNCB_TextbookDetailView?catalogId=10001&amp;item=N&amp;langId=-1&amp;productId=600000296346&amp;storeId=10052"
    tabindex="0">
    <img src=${singleRecord.bookImgUrl} alt="THEORETICAL MECHANICS OF PARTICLES+..."
        class="tbImage" border="0">
</a>
<a href="javascript:void(0);" tabindex="0" class="element_invisible quickViewButtonInitiator">
</a>
<h3>
    <a ctype="c" rank="1" href="/webapp/wcs/stores/servlet/BNCB_TextbookDetailView?catalogId=10001&amp;item=N&amp;langId=-1&amp;productId=600000296346&amp;storeId=10052">
    ${singleRecord.bookName}
    </a>
</h3>
<label class="priceTxt">
${singleRecord.bookPrice}
    <br>
</label>
</li>`;
    };
    //append the markup to the DOM
    $("#foo").html(str);

}